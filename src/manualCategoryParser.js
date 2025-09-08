const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const { parseCategoryCode } = require('./categoryParser');

const prisma = new PrismaClient();

async function manualImportCategoryData(filePath) {
  const filename = filePath.split('/').pop();
  console.log(`📊 Manually parsing category file: ${filename}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  
  console.log(`📄 File has ${lines.length} lines`);
  console.log(`🔍 First few lines:`);
  lines.slice(0, 5).forEach((line, i) => {
    console.log(`   ${i + 1}: ${line}`);
  });
  
  // Find the header row (should contain seq,SNRTY_NBR)
  let headerRowIndex = -1;
  for (let i = 0; i < Math.min(5, lines.length); i++) {
    if (lines[i].includes('seq') && lines[i].includes('SNRTY_NBR')) {
      headerRowIndex = i;
      break;
    }
  }
  
  if (headerRowIndex === -1) {
    console.error('❌ Could not find header row with seq,SNRTY_NBR');
    return { recordCount: 0 };
  }
  
  console.log(`✅ Found header at line ${headerRowIndex + 1}`);
  
  const results = [];
  let recordCount = 0;
  const reportDate = new Date('2025-03-02');
  const categoryType = filename.includes('List_A') ? 'A' : 'B';
  
  // Process data rows
  for (let i = headerRowIndex + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Split CSV line (handle quoted values)
    const values = [];
    let currentValue = '';
    let inQuotes = false;
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '\"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(currentValue.trim().replace(/"/g, ''));
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.trim().replace(/"/g, '')); // Add last value
    
    if (values.length < 5) continue; // Skip incomplete rows
    
    const sequenceNumber = parseInt(values[0]);
    const seniorityNumber = parseInt(values[1]);
    const empNumber = values[2];
    const name = values[3];
    const base = values[4];
    const fleet = values[5];
    const position = values[6];
    const instructor = values[7] || '';
    
    if (sequenceNumber && seniorityNumber && empNumber) {
      results.push({
        sequenceNumber,
        seniorityNumber,
        empNumber: empNumber.toString(),
        name,
        base,
        fleet,
        position,
        instructor,
        reportDate,
        categoryType
      });
      recordCount++;
      
      // Debug first few records
      if (recordCount <= 3) {
        console.log(`🧪 Record ${recordCount}:`, {
          seq: sequenceNumber,
          seniority: seniorityNumber,
          emp: empNumber,
          name: name?.slice(0, 20),
          category: `${base}${fleet}${position}`
        });
      }
    }
  }
  
  console.log(`✅ Parsed ${recordCount} category records`);
  
  // Save to database
  console.log(`💾 Saving to database...`);
  let savedCount = 0;
  
  for (const record of results) {
    try {
      // Find pilot
      const pilot = await prisma.pilot.findUnique({
        where: { empNumber: record.empNumber }
      });

      if (pilot) {
        const categoryCode = `${record.base}${record.fleet}${record.position}`;
        const parsed = parseCategoryCode(categoryCode);
        
        await prisma.categorySnapshot.upsert({
          where: {
            pilotId_reportDate_categoryType: {
              pilotId: pilot.id,
              reportDate: record.reportDate,
              categoryType: record.categoryType
            }
          },
          update: {
            sequenceNumber: record.sequenceNumber,
            seniorityNumber: record.seniorityNumber,
            baseCode: record.base || '',
            fleetCode: record.fleet || '',
            positionCode: record.position || '',
            baseCity: parsed.baseCity || '',
            fleetName: parsed.fleetName || '',
            positionName: parsed.positionName || '',
            instructor: record.instructor || '',
          },
          create: {
            pilotId: pilot.id,
            sequenceNumber: record.sequenceNumber,
            seniorityNumber: record.seniorityNumber,
            categoryType: record.categoryType,
            baseCode: record.base || '',
            fleetCode: record.fleet || '',
            positionCode: record.position || '',
            baseCity: parsed.baseCity || '',
            fleetName: parsed.fleetName || '',
            positionName: parsed.positionName || '',
            instructor: record.instructor || '',
            reportDate: record.reportDate
          }
        });
        savedCount++;
      }
    } catch (error) {
      console.error(`❌ Error processing record ${record.empNumber}:`, error.message);
    }
  }
  
  console.log(`🎉 Successfully imported ${savedCount} category records`);
  return { recordCount: savedCount };
}

// Test with category A data
if (require.main === module) {
  manualImportCategoryData('/home/david/GoogleDrive/D_Data/cat_lists/02Mar2025Category_List_A(Sheet1).csv')
    .then(() => {
      console.log('✅ Category import completed');
      prisma.$disconnect();
    })
    .catch(error => {
      console.error('❌ Category import failed:', error);
      prisma.$disconnect();
    });
}

module.exports = { manualImportCategoryData };