const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const { parseCategoryCode } = require('./src/categoryParser');

const prisma = new PrismaClient();

function parseDate(dateString) {
  if (!dateString || dateString.trim() === '') return null;
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
}

async function importAugust2025Fixed() {
  const filePath = '/home/david/my-react-app/temp-import/August 2025 Seniority List(Sheet1).csv';
  const reportDate = new Date('2025-08-01');
  
  console.log('🔄 Importing August 2025 using fixed robust importer...');
  
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
    
    console.log(`   📋 Header found at line ${headerRowIndex + 1}`);
    
    let imported = 0;
    let skipped = 0;
    const errors = [];
    const duplicateTracking = new Map();
    
    // Process data rows
    for (let i = headerRowIndex + 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      let values = [];
      
      try {
        // Parse CSV line
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
        const category = values[3] || '';
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
        
        // Handle duplicates
        if (duplicateTracking.has(empNumber)) {
          const existing = duplicateTracking.get(empNumber);
          console.log(`   ⚠️  Duplicate employee ${empNumber} - keeping first occurrence (line ${existing.line}), skipping line ${i + 1}`);
          skipped++;
          continue;
        }
        
        let isPlaceholder = rawSeniorityNumber > 90000;
        duplicateTracking.set(empNumber, { line: i + 1, seniorityNumber: rawSeniorityNumber });
        
        const parsed = parseCategoryCode(category);
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
          await prisma.pilot.update({
            where: { id: pilot.id },
            data: {
              scheduledRetireDate,
              isRetired
            }
          });
        }
        
        // Create seniority snapshot
        try {
          await prisma.senioritySnapshot.create({
            data: {
              seniorityNumber: rawSeniorityNumber,
              category,
              reportDate,
              baseCode: parsed.base,
              fleetCode: parsed.fleet,
              positionCode: parsed.position,
              baseCity: parsed.baseCity,
              fleetName: parsed.fleetName,
              positionName: parsed.positionName,
              pilotId: pilot.id,
              isPlaceholder
            }
          });
          imported++;
          
          // Progress indicator every 1000 records
          if (imported % 1000 === 0) {
            console.log(`   📊 Progress: ${imported.toLocaleString()} imported...`);
          }
          
        } catch (dbError) {
          if (dbError.code === 'P2002') {
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
          empNumber: values.length > 1 ? values[1] : 'unknown'
        });
        skipped++;
      }
    }
    
    console.log(`   ✅ Imported: ${imported.toLocaleString()}, Skipped: ${skipped}, Errors: ${errors.length}`);
    
    if (errors.length > 0 && errors.length <= 10) {
      console.log('   📝 Error details:');
      errors.forEach(error => {
        console.log(`     Line ${error.line} (Emp ${error.empNumber}): ${error.issue}`);
      });
    }
    
    // Record import
    if (imported > 0) {
      await prisma.dataImport.create({
        data: {
          filename: 'August 2025 Seniority List(Sheet1).csv',
          fileType: 'seniority_snapshot',
          reportDate,
          recordCount: imported
        }
      });
      console.log('✅ Import recorded in DataImport table');
    }
    
    const successRate = imported > 0 ? ((imported / (imported + skipped + errors.length)) * 100).toFixed(2) : 0;
    console.log(`📊 Success rate: ${successRate}%`);
    
    return { imported, skipped, errors };
    
  } catch (error) {
    console.error(`❌ Failed to import: ${error.message}`);
    return { imported: 0, skipped: 0, errors: [{ issue: error.message }] };
  } finally {
    await prisma.$disconnect();
  }
}

importAugust2025Fixed().then(result => {
  console.log('\n🎉 August 2025 import completed!');
}).catch(error => {
  console.error('❌ Import failed:', error);
});