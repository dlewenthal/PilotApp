const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const { parseCategoryCode } = require('./src/categoryParser');

const prisma = new PrismaClient();

function parseDate(dateString) {
  if (!dateString || dateString.trim() === '') return null;
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
}

async function testImportAugust2025() {
  const filePath = '/home/david/my-react-app/temp-import/august_test_10.csv';
  const reportDate = new Date('2025-08-01');
  
  console.log('🧪 Testing August 2025 import with first 10 records...');
  console.log(`📁 File: ${filePath.split('/').pop()}`);
  console.log(`📅 Report Date: ${reportDate.toISOString().slice(0, 10)}`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    
    // Find header row  
    let headerRowIndex = -1;
    for (let i = 0; i < Math.min(5, lines.length); i++) {
      if (lines[i].includes('SENIORITY_NBR')) {
        headerRowIndex = i;
        break;
      }
    }
    
    console.log(`📋 Header found at line ${headerRowIndex + 1}`);
    console.log(`📊 Total lines in test file: ${lines.length}`);
    console.log(`📝 Expected data rows: ${lines.length - headerRowIndex - 1}`);
    
    let imported = 0;
    let skipped = 0;
    let errors = [];
    
    // Process data rows
    for (let i = headerRowIndex + 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      console.log(`\n🔄 Processing line ${i + 1}: ${line.substring(0, 50)}...`);
      
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
        
        const rawSeniorityNumber = parseInt(values[0]);
        const empNumber = values[1];
        const name = values[2];
        const category = values[3] || '';
        const pilotHireDate = parseDate(values[4]);
        const scheduledRetireDate = parseDate(values[5]);
        
        console.log(`   👤 Pilot: ${name} (Emp: ${empNumber}, Seniority: #${rawSeniorityNumber})`);
        console.log(`   🏷️ Category: ${category}`);
        
        if (!rawSeniorityNumber || !empNumber || !name) {
          console.log(`   ❌ Missing required fields - skipping`);
          errors.push({ line: i + 1, issue: 'Missing required fields', empNumber });
          skipped++;
          continue;
        }
        
        const parsed = parseCategoryCode(category);
        console.log(`   📍 Parsed: ${parsed.baseCity} ${parsed.fleetName} ${parsed.positionName}`);
        
        const isRetired = scheduledRetireDate ? scheduledRetireDate < new Date() : false;
        
        // Find or create pilot
        let pilot = await prisma.pilot.findUnique({
          where: { empNumber: empNumber.toString() }
        });
        
        if (!pilot) {
          console.log(`   ➕ Creating new pilot record`);
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
          console.log(`   🔄 Updating existing pilot record`);
          await prisma.pilot.update({
            where: { id: pilot.id },
            data: {
              scheduledRetireDate,
              isRetired
            }
          });
        }
        
        // Create seniority snapshot
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
            isPlaceholder: rawSeniorityNumber > 90000
          }
        });
        
        console.log(`   ✅ Successfully imported seniority snapshot`);
        imported++;
        
      } catch (rowError) {
        console.log(`   ❌ Error: ${rowError.message}`);
        errors.push({ 
          line: i + 1, 
          issue: rowError.message, 
          empNumber: values && values[1] ? values[1] : 'unknown'
        });
        skipped++;
      }
    }
    
    console.log(`\n📊 Test Import Results:`);
    console.log(`   ✅ Imported: ${imported}`);
    console.log(`   ⏭️ Skipped: ${skipped}`);
    console.log(`   ❌ Errors: ${errors.length}`);
    
    if (imported > 0) {
      const successRate = ((imported / (imported + skipped + errors.length)) * 100).toFixed(2);
      console.log(`   📈 Success rate: ${successRate}%`);
      
      // Verify the imported data
      console.log(`\n🔍 Verifying imported test data...`);
      const testRecords = await prisma.senioritySnapshot.findMany({
        where: { reportDate },
        include: { pilot: { select: { name: true, empNumber: true } } },
        orderBy: { seniorityNumber: 'asc' }
      });
      
      console.log(`✅ Found ${testRecords.length} records in database:`);
      testRecords.forEach(record => {
        console.log(`   #${record.seniorityNumber}: ${record.pilot.name} - ${record.baseCity} ${record.fleetName} ${record.positionName}`);
      });
    }
    
    return { imported, skipped, errors, success: imported > 0 };
    
  } catch (error) {
    console.error(`❌ Test import failed: ${error.message}`);
    return { imported: 0, skipped: 0, errors: [{ issue: error.message }], success: false };
  } finally {
    await prisma.$disconnect();
  }
}

testImportAugust2025().then(result => {
  if (result.success) {
    console.log('\n🎉 Test import completed successfully! Ready for full import.');
  } else {
    console.log('\n⚠️ Test import failed - need to investigate issues before full import.');
  }
}).catch(error => {
  console.error('❌ Test import error:', error);
});