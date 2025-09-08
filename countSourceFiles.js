const fs = require('fs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

function countLinesInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    
    // Find header row and count data rows
    let headerFound = false;
    let dataRows = 0;
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      
      if (trimmed.includes('SENIORITY_NBR') || trimmed.includes('Sen')) {
        headerFound = true;
        continue;
      }
      
      if (headerFound && trimmed) {
        // Basic validation - should have commas indicating CSV structure
        if (trimmed.includes(',')) {
          dataRows++;
        }
      }
    }
    
    return dataRows;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return 0;
  }
}

async function compareFileCountsToDatabase() {
  try {
    console.log('📊 Comparing source files to database records...\n');
    
    const seniorityFiles = [
      'January 2022 Seniority List(Sheet1).csv',
      'June 2024 Seniority List(Sheet1).csv',
      'July 2024 Seniority List(Sheet1).csv', 
      'August 2024 Seniority List(Sheet1).csv',
      'September 2024 Seniority List(Sheet1) (1).csv',
      'October 2024 Seniority List(Sheet1).csv',
      'November 2024 Seniority List(Sheet1).csv',
      'December 2024 Seniority List(Sheet1).csv',
      'February 2025 Seniority List(Sheet1).csv',
      'July 2025 Seniority List(Sheet1).csv'
    ];
    
    let totalFileRecords = 0;
    
    console.log('📁 File-by-file analysis:');
    console.log('Filename                                    | File Records | DB Records | Match?');
    console.log('-------------------------------------------|-------------|-----------|-------');
    
    for (const filename of seniorityFiles) {
      const filePath = `/home/david/GoogleDrive/D_Data/sen_lists/${filename}`;
      
      if (fs.existsSync(filePath)) {
        const fileRecords = countLinesInFile(filePath);
        totalFileRecords += fileRecords;
        
        // Extract date for database lookup
        const match = filename.match(/(\\w+)\\s+(\\d{4})/);
        let dbRecords = 0;
        let reportDate = null;
        
        if (match) {
          const [, month, year] = match;
          const monthMap = {
            'January': '01', 'February': '02', 'March': '03', 'April': '04',
            'May': '05', 'June': '06', 'July': '07', 'August': '08',
            'September': '09', 'October': '10', 'November': '11', 'December': '12'
          };
          const monthNum = monthMap[month] || '01';
          reportDate = new Date(`${year}-${monthNum}-01`);
          
          dbRecords = await prisma.senioritySnapshot.count({
            where: { reportDate: reportDate }
          });
        }
        
        const matchStatus = fileRecords === dbRecords ? '✅ YES' : '❌ NO';
        const shortFilename = filename.replace(' Seniority List(Sheet1).csv', '').replace(' (1)', '');
        
        console.log(`${shortFilename.padEnd(42)} | ${fileRecords.toString().padStart(11)} | ${dbRecords.toString().padStart(9)} | ${matchStatus}`);
      } else {
        console.log(`${filename.padEnd(42)} | FILE NOT FOUND`);
      }
    }
    
    // Get total database records
    const totalDbRecords = await prisma.senioritySnapshot.count();
    
    console.log('-------------------------------------------|-------------|-----------|-------');
    console.log(`${'TOTALS'.padEnd(42)} | ${totalFileRecords.toString().padStart(11)} | ${totalDbRecords.toString().padStart(9)} | ${totalFileRecords === totalDbRecords ? '✅ YES' : '❌ NO'}`);
    
    if (totalFileRecords !== totalDbRecords) {
      console.log(`\\n⚠️  MISMATCH DETECTED:`);
      console.log(`   Source files contain: ${totalFileRecords.toLocaleString()} total records`);
      console.log(`   Database contains: ${totalDbRecords.toLocaleString()} total records`);
      console.log(`   Difference: ${(totalDbRecords - totalFileRecords).toLocaleString()} records`);
      
      // Check what dates we have in database
      const dbDates = await prisma.senioritySnapshot.groupBy({
        by: ['reportDate'],
        _count: { reportDate: true },
        orderBy: { reportDate: 'asc' }
      });
      
      console.log(`\\n📅 Database contains data for these dates:`);
      dbDates.forEach(stat => {
        const date = stat.reportDate.toISOString().slice(0, 10);
        console.log(`   ${date}: ${stat._count.reportDate.toLocaleString()} records`);
      });
    }
    
  } catch (error) {
    console.error('❌ Analysis failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

compareFileCountsToDatabase();