const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const { parseCategoryCode } = require('./categoryParser');

const prisma = new PrismaClient();

function parseDate(dateString) {
  if (!dateString || dateString.trim() === '') return null;
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
}

async function robustImportSeniorityFile(filePath, reportDate) {
  console.log(`🔄 Importing ${filePath.split('/').pop()} for ${reportDate}...`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    
    // Find header row
    let headerRowIndex = -1;
    for (let i = 0; i < Math.min(5, lines.length); i++) {
      if (lines[i].includes('SENIORITY_NBR') || lines[i].includes('Sen')) {
        headerRowIndex = i;
        break;
      }
    }
    
    if (headerRowIndex === -1) {
      console.log('❌ No header row found');
      return { imported: 0, skipped: 0, errors: [] };
    }
    
    console.log(`   📋 Header found at line ${headerRowIndex + 1}`);
    
    let imported = 0;
    let skipped = 0;
    const errors = [];
    const duplicateTracking = new Map(); // Track duplicates within this file
    
    // Process data rows
    for (let i = headerRowIndex + 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      try {
        // Parse CSV line with quoted value support
        const values = [];
        let currentValue = '';
        let inQuotes = false;
        
        for (let j = 0; j < line.length; j++) {
          const char = line[j];
          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            values.push(currentValue.trim().replace(/"/g, ''));
            currentValue = '';
          } else {
            currentValue += char;
          }
        }
        values.push(currentValue.trim().replace(/"/g, ''));
        
        if (values.length < 4) {
          errors.push({ line: i + 1, issue: 'Insufficient columns', empNumber: 'unknown' });
          skipped++;
          continue;
        }
        
        const rawSeniorityNumber = parseInt(values[0]);
        const empNumber = values[1];
        const name = values[2];
        const category = values[3] || ''; // Handle empty category
        const pilotHireDate = parseDate(values[4]);
        const scheduledRetireDate = parseDate(values[5]);
        
        if (!rawSeniorityNumber || !empNumber || !name) {
          errors.push({ 
            line: i + 1, 
            issue: 'Missing required fields', 
            empNumber: empNumber || 'unknown' 
          });
          skipped++;
          continue;
        }
        
        // Handle duplicate employee numbers within same file
        if (duplicateTracking.has(empNumber)) {
          const existing = duplicateTracking.get(empNumber);
          console.log(`   ⚠️  Duplicate employee ${empNumber} - keeping first occurrence (line ${existing.line}), skipping line ${i + 1}`);
          skipped++;
          continue;
        }
        
        // Handle placeholder seniority numbers (like 99999)
        let seniorityNumber = rawSeniorityNumber;
        let isPlaceholder = false;
        if (rawSeniorityNumber > 90000) {
          isPlaceholder = true;
          console.log(`   📝 Placeholder seniority #${rawSeniorityNumber} for employee ${empNumber} - importing as special case`);
        }
        
        duplicateTracking.set(empNumber, { line: i + 1, seniorityNumber });
        
        // Parse category (now handles empty categories)
        const parsed = parseCategoryCode(category);
        
        // Calculate retirement status safely
        const isRetired = scheduledRetireDate ? scheduledRetireDate < new Date() : false;
        
        // Find or create pilot
        let pilot = await prisma.pilot.findUnique({
          where: { empNumber: empNumber.toString() }
        });
        
        if (!pilot) {
          pilot = await prisma.pilot.create({
            data: {
              empNumber: empNumber.toString(),
              name,
              pilotHireDate,
              scheduledRetireDate,
              isRetired
            }
          });
        } else {
          // Update pilot info if needed (retirement dates might change)
          await prisma.pilot.update({
            where: { id: pilot.id },
            data: {
              scheduledRetireDate,
              isRetired
            }
          });
        }
        
        // Create seniority snapshot (handle duplicates gracefully)
        try {
          await prisma.senioritySnapshot.create({
            data: {
              seniorityNumber,
              category,
              reportDate,
              baseCode: parsed.base,
              fleetCode: parsed.fleet,
              positionCode: parsed.position,
              baseCity: parsed.baseCity,
              fleetName: parsed.fleetName,
              positionName: parsed.positionName,
              pilotId: pilot.id,
              isPlaceholder // Add flag for special seniority numbers
            }
          });
          imported++;
        } catch (dbError) {
          if (dbError.code === 'P2002') {
            // Unique constraint violation - pilot already has snapshot for this date
            console.log(`   ⚠️  Pilot ${empNumber} already has snapshot for ${reportDate} - skipping`);
            skipped++;
          } else {
            throw dbError;
          }
        }
        
      } catch (rowError) {
        errors.push({ 
          line: i + 1, 
          issue: `Processing error: ${rowError.message}`, 
          empNumber: values && values[1] ? values[1] : 'unknown' 
        });
        skipped++;
      }
    }
    
    console.log(`   ✅ Imported: ${imported}, Skipped: ${skipped}, Errors: ${errors.length}`);
    
    if (errors.length > 0 && errors.length <= 10) {
      console.log('   📝 Error details:');
      errors.forEach(error => {
        console.log(`     Line ${error.line} (Emp ${error.empNumber}): ${error.issue}`);
      });
    }
    
    return { imported, skipped, errors };
    
  } catch (error) {
    console.error(`❌ Failed to import ${filePath}: ${error.message}`);
    return { imported: 0, skipped: 0, errors: [{ issue: error.message }] };
  }
}

async function importAllSeniorityFiles() {
  const files = [
    { path: 'January 2022 Seniority List(Sheet1).csv', date: new Date('2022-01-01') },
    { path: 'June 2024 Seniority List(Sheet1).csv', date: new Date('2024-06-01') },
    { path: 'July 2024 Seniority List(Sheet1).csv', date: new Date('2024-07-01') },
    { path: 'August 2024 Seniority List(Sheet1).csv', date: new Date('2024-08-01') },
    { path: 'September 2024 Seniority List(Sheet1) (1).csv', date: new Date('2024-09-01') },
    { path: 'October 2024 Seniority List(Sheet1).csv', date: new Date('2024-10-01') },
    { path: 'November 2024 Seniority List(Sheet1).csv', date: new Date('2024-11-01') },
    { path: 'December 2024 Seniority List(Sheet1).csv', date: new Date('2024-12-01') },
    { path: 'February 2025 Seniority List(Sheet1).csv', date: new Date('2025-02-01') },
    { path: 'July 2025 Seniority List(Sheet1).csv', date: new Date('2025-07-01') }
  ];
  
  console.log('🚀 Starting robust data import with enhanced error handling...\n');
  
  let totalImported = 0;
  let totalSkipped = 0;
  let totalErrors = 0;
  
  for (const file of files) {
    const fullPath = `/home/david/GoogleDrive/D_Data/sen_lists/${file.path}`;
    
    if (fs.existsSync(fullPath)) {
      const result = await robustImportSeniorityFile(fullPath, file.date);
      totalImported += result.imported;
      totalSkipped += result.skipped;
      totalErrors += result.errors.length;
    } else {
      console.log(`⚠️  File not found: ${file.path}`);
    }
  }
  
  console.log('\n📊 Import Summary:');
  console.log(`   Total imported: ${totalImported.toLocaleString()}`);
  console.log(`   Total skipped: ${totalSkipped.toLocaleString()}`);
  console.log(`   Total errors: ${totalErrors.toLocaleString()}`);
  console.log(`   Success rate: ${((totalImported / (totalImported + totalSkipped + totalErrors)) * 100).toFixed(2)}%`);
}

// Add schema update to handle placeholder flag
async function updateSchemaForPlaceholders() {
  console.log('🔄 Adding placeholder flag to schema...');
  try {
    // This would normally require a migration, but we can add it via raw SQL for now
    await prisma.$executeRaw`ALTER TABLE SenioritySnapshot ADD COLUMN isPlaceholder BOOLEAN DEFAULT FALSE`;
    console.log('✅ Schema updated');
  } catch (error) {
    if (error.message.includes('duplicate column name')) {
      console.log('✅ Schema already updated');
    } else {
      console.log('ℹ️  Schema update may be needed - continuing with import');
    }
  }
}

module.exports = { robustImportSeniorityFile, importAllSeniorityFiles };

// Run if called directly
if (require.main === module) {
  updateSchemaForPlaceholders()
    .then(() => importAllSeniorityFiles())
    .finally(() => prisma.$disconnect());
}