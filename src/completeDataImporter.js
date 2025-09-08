const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const { parseCategoryCode } = require('./categoryParser');

const prisma = new PrismaClient();

// Parse date strings to Date objects
function parseDate(dateString) {
  if (!dateString || dateString.trim() === '') return null;
  
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

// Robust CSV parser for seniority files
async function importSeniorityFile(filePath) {
  const filename = filePath.split('/').pop();
  const reportDate = extractReportDate(filename);
  
  console.log(`📊 Importing: ${filename}`);
  console.log(`📅 Report date: ${reportDate.toISOString().slice(0, 10)}`);
  
  // Check if already imported
  const existingCount = await prisma.senioritySnapshot.count({
    where: { reportDate }
  });
  
  if (existingCount > 0) {
    console.log(`⏭️  Skipping - ${existingCount.toLocaleString()} records already exist for this date`);
    return { recordCount: existingCount, skipped: true };
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  
  console.log(`📄 File has ${lines.length.toLocaleString()} lines`);
  
  // Find the header row
  let headerRowIndex = -1;
  for (let i = 0; i < Math.min(5, lines.length); i++) {
    if (lines[i].includes('SENIORITY_NBR') || lines[i].includes('Sen')) {
      headerRowIndex = i;
      break;
    }
  }
  
  if (headerRowIndex === -1) {
    console.error('❌ Could not find header row');
    return { recordCount: 0, error: 'No header found' };
  }
  
  console.log(`✅ Found header at line ${headerRowIndex + 1}`);
  
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
    values.push(currentValue.trim().replace(/"/g, ''));
    
    if (values.length < 4) continue;
    
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
  }
  
  console.log(`✅ Parsed ${recordCount.toLocaleString()} records`);
  
  if (recordCount === 0) {
    return { recordCount: 0, error: 'No valid records found' };
  }
  
  // Save to database in batches
  console.log(`💾 Saving to database...`);
  const batchSize = 1000;
  let savedCount = 0;
  
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
        
        savedCount++;
      } catch (error) {
        console.error(`❌ Error processing record ${record.empNumber}:`, error.message);
      }
    }
    
    const batchNum = Math.floor(i/batchSize) + 1;
    const totalBatches = Math.ceil(results.length/batchSize);
    console.log(`📦 Processed batch ${batchNum}/${totalBatches} (${((savedCount/recordCount)*100).toFixed(1)}% complete)`);
  }
  
  // Record import
  await prisma.dataImport.create({
    data: {
      filename,
      fileType: 'seniority_snapshot',
      reportDate,
      recordCount: savedCount
    }
  });
  
  console.log(`🎉 Successfully imported ${savedCount.toLocaleString()} records from ${filename}\\n`);
  return { recordCount: savedCount };
}

// Import all missing seniority files
async function importAllMissingSeniorityData() {
  try {
    console.log('🚀 Starting complete seniority data import...\\n');
    
    const seniorityFiles = [
      'June 2024 Seniority List(Sheet1).csv',
      'July 2024 Seniority List(Sheet1).csv',
      'August 2024 Seniority List(Sheet1).csv',
      'September 2024 Seniority List(Sheet1) (1).csv',
      'October 2024 Seniority List(Sheet1).csv',
      'November 2024 Seniority List(Sheet1).csv',
      'December 2024 Seniority List(Sheet1).csv',
      'July 2025 Seniority List(Sheet1).csv'
      // Note: January 2022 and February 2025 already imported
    ];
    
    let totalImported = 0;
    let filesProcessed = 0;
    let filesSkipped = 0;
    
    console.log(`📋 Processing ${seniorityFiles.length} seniority files...\\n`);
    
    for (const filename of seniorityFiles) {
      const filePath = `/home/david/GoogleDrive/D_Data/sen_lists/${filename}`;
      
      if (fs.existsSync(filePath)) {
        const result = await importSeniorityFile(filePath);
        
        if (result.skipped) {
          filesSkipped++;
        } else if (result.error) {
          console.log(`⚠️  Error with ${filename}: ${result.error}\\n`);
        } else {
          totalImported += result.recordCount;
          filesProcessed++;
        }
      } else {
        console.log(`⚠️  File not found: ${filename}\\n`);
      }
    }
    
    // Get final statistics
    const [totalPilots, totalSnapshots] = await Promise.all([
      prisma.pilot.count(),
      prisma.senioritySnapshot.count()
    ]);
    
    const dateStats = await prisma.senioritySnapshot.groupBy({
      by: ['reportDate'],
      _count: { reportDate: true },
      orderBy: { reportDate: 'asc' }
    });
    
    console.log('🎉 Complete import finished!');
    console.log(`📈 Final Results:`);
    console.log(`   • Files processed: ${filesProcessed}`);
    console.log(`   • Files skipped: ${filesSkipped}`);
    console.log(`   • Records imported: ${totalImported.toLocaleString()}`);
    console.log(`   • Total pilots: ${totalPilots.toLocaleString()}`);
    console.log(`   • Total snapshots: ${totalSnapshots.toLocaleString()}`);
    console.log(`   • Reporting periods: ${dateStats.length}`);
    
    console.log(`\\n📅 Data coverage by date:`);
    dateStats.forEach(stat => {
      const date = stat.reportDate.toISOString().slice(0, 10);
      console.log(`   ${date}: ${stat._count.reportDate.toLocaleString()} pilots`);
    });
    
  } catch (error) {
    console.error('❌ Complete import failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  importSeniorityFile,
  importAllMissingSeniorityData
};

// Run if called directly
if (require.main === module) {
  importAllMissingSeniorityData();
}