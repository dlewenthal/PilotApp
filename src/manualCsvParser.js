const fs = require('fs');
const { parseCategoryCode } = require('./categoryParser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Parse date strings to Date objects
function parseDate(dateString) {
  if (!dateString || dateString.trim() === '') return null;
  
  // Handle different date formats
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
}

// Extract report date from filename
function extractReportDate(filename) {
  const match = filename.match(/(\w+)\s+(\d{4})/);
  if (match) {
    const [, month, year] = match;
    const monthMap = {
      'January': '01', 'February': '02', 'March': '03', 'April': '04',
      'May': '05', 'June': '06', 'July': '07', 'August': '08',
      'September': '09', 'October': '10', 'November': '11', 'December': '12'
    };
    const monthNum = monthMap[month] || '01';
    return new Date(`${year}-${monthNum}-01`);
  }
  return new Date();
}

// Manually parse CSV with malformed headers
async function manualImportSeniorityData(filePath) {
  const filename = filePath.split('/').pop();
  const reportDate = extractReportDate(filename);
  
  console.log(`📊 Manually parsing: ${filename}`);
  console.log(`📅 Report date: ${reportDate.toISOString()}`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  
  console.log(`📄 File has ${lines.length} lines`);
  console.log(`🔍 First few lines:`);
  lines.slice(0, 5).forEach((line, i) => {
    console.log(`   ${i + 1}: ${line.slice(0, 80)}`);
  });
  
  // Find the header row (should contain SENIORITY_NBR)
  let headerRowIndex = -1;
  for (let i = 0; i < Math.min(5, lines.length); i++) {
    if (lines[i].includes('SENIORITY_NBR')) {
      headerRowIndex = i;
      break;
    }
  }
  
  if (headerRowIndex === -1) {
    console.error('❌ Could not find header row with SENIORITY_NBR');
    return { recordCount: 0, reportDate };
  }
  
  console.log(`✅ Found header at line ${headerRowIndex + 1}`);
  
  // Parse header to get column positions
  const headerLine = lines[headerRowIndex];
  const headers = headerLine.split(',').map(h => h.trim().replace(/"/g, ''));
  
  console.log('🏷️ Headers:', headers);
  
  const results = [];
  let recordCount = 0;
  
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
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(currentValue.trim().replace(/"/g, ''));
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.trim().replace(/"/g, '')); // Add last value
    
    if (values.length < 4) continue; // Skip incomplete rows
    
    // Map values to expected columns
    const seniorityNumber = parseInt(values[0]);
    const empNumber = values[1];
    const name = values[2];
    const category = values[3];
    const pilotHireDate = parseDate(values[4]);
    const scheduledRetireDate = parseDate(values[5]);
    
    if (seniorityNumber && empNumber && name) {
      const parsed = parseCategoryCode(category);
      results.push({
        seniorityNumber,
        empNumber: empNumber.toString(),
        name,
        category: category || '',
        pilotHireDate,
        scheduledRetireDate,
        reportDate,
        parsed
      });
      recordCount++;
    }
    
    // Debug first few records
    if (recordCount <= 3) {
      console.log(`🧪 Record ${recordCount}:`, {
        seniority: seniorityNumber,
        emp: empNumber,
        name: name?.slice(0, 20),
        category,
        hire: pilotHireDate?.toISOString()?.slice(0, 10),
        retire: scheduledRetireDate?.toISOString()?.slice(0, 10)
      });
    }
  }
  
  console.log(`✅ Parsed ${recordCount} records successfully`);
  
  // Save to database
  console.log(`💾 Saving to database...`);
  const batchSize = 500;
  
  for (let i = 0; i < results.length; i += batchSize) {
    const batch = results.slice(i, i + batchSize);
    
    for (const record of batch) {
      try {
        // Create or update pilot
        const pilot = await prisma.pilot.upsert({
          where: { empNumber: record.empNumber },
          update: {
            name: record.name,
            pilotHireDate: record.pilotHireDate,
            scheduledRetireDate: record.scheduledRetireDate,
            lastSeenDate: record.reportDate,
            isRetired: record.scheduledRetireDate && record.scheduledRetireDate < new Date(),
          },
          create: {
            empNumber: record.empNumber,
            name: record.name,
            pilotHireDate: record.pilotHireDate,
            scheduledRetireDate: record.scheduledRetireDate,
            lastSeenDate: record.reportDate,
            isRetired: record.scheduledRetireDate && record.scheduledRetireDate < new Date(),
          }
        });

        // Create seniority snapshot
        await prisma.senioritySnapshot.upsert({
          where: {
            pilotId_reportDate: {
              pilotId: pilot.id,
              reportDate: record.reportDate
            }
          },
          update: {
            seniorityNumber: record.seniorityNumber,
            category: record.category,
            baseCode: record.parsed.base || '',
            fleetCode: record.parsed.fleet || '',
            positionCode: record.parsed.position || '',
            baseCity: record.parsed.baseCity || '',
            fleetName: record.parsed.fleetName || '',
            positionName: record.parsed.positionName || '',
          },
          create: {
            pilotId: pilot.id,
            seniorityNumber: record.seniorityNumber,
            category: record.category,
            reportDate: record.reportDate,
            baseCode: record.parsed.base || '',
            fleetCode: record.parsed.fleet || '',
            positionCode: record.parsed.position || '',
            baseCity: record.parsed.baseCity || '',
            fleetName: record.parsed.fleetName || '',
            positionName: record.parsed.positionName || '',
          }
        });
      } catch (error) {
        console.error(`❌ Error processing record ${record.empNumber}:`, error.message);
      }
    }
    
    console.log(`📦 Processed batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(results.length/batchSize)}`);
  }
  
  // Record import
  await prisma.dataImport.create({
    data: {
      filename,
      fileType: 'manual_seniority_snapshot',
      reportDate,
      recordCount
    }
  });
  
  console.log(`🎉 Successfully imported ${recordCount} records from ${filename}`);
  return { recordCount, reportDate };
}

// Test with February 2025 data
if (require.main === module) {
  manualImportSeniorityData('/home/david/GoogleDrive/D_Data/sen_lists/February 2025 Seniority List(Sheet1).csv')
    .then(() => {
      console.log('✅ Manual import completed');
      prisma.$disconnect();
    })
    .catch(error => {
      console.error('❌ Manual import failed:', error);
      prisma.$disconnect();
    });
}

module.exports = { manualImportSeniorityData };