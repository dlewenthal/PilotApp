const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const { parseCategoryCode } = require('./src/categoryParser');

const prisma = new PrismaClient();

function parseDate(dateString) {
  if (!dateString || dateString.trim() === '') return null;
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
}

async function testEnhancedImport() {
  try {
    console.log('🧪 Testing enhanced import with problematic records from February 2025...\n');
    
    const content = fs.readFileSync('/home/david/GoogleDrive/D_Data/sen_lists/February 2025 Seniority List(Sheet1).csv', 'utf8');
    const lines = content.split(/\r?\n/);
    
    // Find header row
    let headerRowIndex = -1;
    for (let i = 0; i < Math.min(5, lines.length); i++) {
      if (lines[i].includes('SENIORITY_NBR')) {
        headerRowIndex = i;
        break;
      }
    }
    
    console.log(`Header found at line ${headerRowIndex + 1}`);
    
    // Test specific problematic areas:
    // 1. Lines with empty categories (around line 17377-17426)
    // 2. Duplicate employee number (line 13607 and 17427)
    // 3. Placeholder seniority #99999 (line 17427)
    
    const testRanges = [
      { name: "Normal records (first 5)", start: headerRowIndex + 1, end: headerRowIndex + 6 },
      { name: "Records with empty categories", start: 17376, end: 17386 },
      { name: "Duplicate employee record", start: 13606, end: 13608 },
      { name: "Placeholder seniority record", start: 17426, end: 17428 }
    ];
    
    let totalImported = 0;
    let totalSkipped = 0;
    let totalErrors = 0;
    
    for (const range of testRanges) {
      console.log(`\n📋 Testing ${range.name}...`);
      
      for (let i = range.start; i < Math.min(range.end, lines.length); i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        try {
          // Parse CSV line
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
            console.log(`   ⚠️  Line ${i + 1}: Insufficient columns`);
            totalErrors++;
            continue;
          }
          
          const rawSeniorityNumber = parseInt(values[0]);
          const empNumber = values[1];
          const name = values[2];
          const category = values[3] || ''; // Handle empty category
          const pilotHireDate = parseDate(values[4]);
          const scheduledRetireDate = parseDate(values[5]);
          
          // Log what we're processing
          console.log(`   Line ${i + 1}: #${rawSeniorityNumber}, Emp ${empNumber}, Category: "${category}"`);
          
          // Test our enhanced parsing
          const parsed = parseCategoryCode(category);
          console.log(`     Parsed: ${parsed.baseCity} ${parsed.fleetName} ${parsed.positionName}`);
          
          // Handle placeholder seniority
          let isPlaceholder = false;
          if (rawSeniorityNumber > 90000) {
            isPlaceholder = true;
            console.log(`     🏷️  Placeholder seniority detected`);
          }
          
          // Check for duplicate employee (if we've seen this emp number before)
          const existingSnapshot = await prisma.senioritySnapshot.findFirst({
            where: { 
              pilot: { empNumber: empNumber.toString() },
              reportDate: new Date('2025-02-01')
            }
          });
          
          if (existingSnapshot) {
            console.log(`     🔄 Duplicate employee ${empNumber} - skipping`);
            totalSkipped++;
            continue;
          }
          
          // Find or create pilot
          let pilot = await prisma.pilot.findUnique({
            where: { empNumber: empNumber.toString() }
          });
          
          if (!pilot) {
            const isRetired = scheduledRetireDate ? scheduledRetireDate < new Date() : false;
            pilot = await prisma.pilot.create({
              data: {
                empNumber: empNumber.toString(),
                name,
                pilotHireDate,
                scheduledRetireDate,
                isRetired
              }
            });
            console.log(`     ➕ Created new pilot ${empNumber}`);
          }
          
          // Create seniority snapshot
          await prisma.senioritySnapshot.create({
            data: {
              seniorityNumber: rawSeniorityNumber,
              category,
              reportDate: new Date('2025-02-01'),
              baseCode: parsed.base,
              fleetCode: parsed.fleet,
              positionCode: parsed.position,
              baseCity: parsed.baseCity,
              fleetName: parsed.fleetName,
              positionName: parsed.positionName,
              isPlaceholder,
              pilotId: pilot.id
            }
          });
          
          console.log(`     ✅ Successfully imported`);
          totalImported++;
          
        } catch (error) {
          console.log(`   ❌ Line ${i + 1}: Error - ${error.message}`);
          totalErrors++;
        }
      }
    }
    
    // Check results
    const finalCount = await prisma.senioritySnapshot.count({
      where: { reportDate: new Date('2025-02-01') }
    });
    
    const unassignedCount = await prisma.senioritySnapshot.count({
      where: { 
        reportDate: new Date('2025-02-01'),
        baseCode: 'UNASSIGNED'
      }
    });
    
    const placeholderCount = await prisma.senioritySnapshot.count({
      where: { 
        reportDate: new Date('2025-02-01'),
        isPlaceholder: true
      }
    });
    
    console.log('\n📊 Test Results:');
    console.log(`Successfully imported: ${totalImported}`);
    console.log(`Skipped (duplicates): ${totalSkipped}`);
    console.log(`Errors: ${totalErrors}`);
    console.log(`Total in database: ${finalCount}`);
    console.log(`Records with UNASSIGNED categories: ${unassignedCount}`);
    console.log(`Records with placeholder seniority: ${placeholderCount}`);
    
    if (unassignedCount > 0) {
      console.log('\n✅ Empty categories successfully handled as UNASSIGNED!');
    }
    
    if (placeholderCount > 0) {
      console.log('✅ Placeholder seniority numbers properly flagged!');
    }
    
    if (totalSkipped > 0) {
      console.log('✅ Duplicate employee numbers properly handled!');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testEnhancedImport();