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
      
      if (headerFound && trimmed && trimmed.includes(',')) {
        dataRows++;
      }
    }
    
    return dataRows;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return 0;
  }
}

async function countAllSourceRecords() {
  try {
    console.log('📊 Exact count of all source file records vs database...\n');
    
    // All seniority files that should be imported
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
    
    let totalSourceRecords = 0;
    const fileDetails = [];
    
    console.log('📁 File-by-file record count:\n');
    console.log('Filename                                    | Records | Status');
    console.log('-------------------------------------------|---------|--------');
    
    for (const filename of seniorityFiles) {
      const filePath = `/home/david/GoogleDrive/D_Data/sen_lists/${filename}`;
      
      if (fs.existsSync(filePath)) {
        const fileRecords = countLinesInFile(filePath);
        totalSourceRecords += fileRecords;
        
        fileDetails.push({
          filename,
          records: fileRecords,
          exists: true
        });
        
        const shortFilename = filename.replace(' Seniority List(Sheet1).csv', '').replace(' (1)', '');
        console.log(`${shortFilename.padEnd(42)} | ${fileRecords.toString().padStart(7)} | EXISTS`);
      } else {
        console.log(`${filename.padEnd(42)} | ${0} | MISSING`);
        fileDetails.push({
          filename,
          records: 0,
          exists: false
        });
      }
    }
    
    console.log('-------------------------------------------|---------|--------');
    console.log(`${'TOTAL SOURCE FILES'.padEnd(42)} | ${totalSourceRecords.toString().padStart(7)} | `);
    
    // Get database counts
    const dbTotal = await prisma.senioritySnapshot.count();
    const dbDates = await prisma.senioritySnapshot.groupBy({
      by: ['reportDate'],
      _count: { reportDate: true },
      orderBy: { reportDate: 'asc' }
    });
    
    console.log(`\n📊 Database vs Source Comparison:`);
    console.log(`   Total source file records: ${totalSourceRecords.toLocaleString()}`);
    console.log(`   Total database records: ${dbTotal.toLocaleString()}`);
    console.log(`   Difference: ${(totalSourceRecords - dbTotal).toLocaleString()} records`);
    console.log(`   Success rate: ${((dbTotal / totalSourceRecords) * 100).toFixed(2)}%`);
    
    console.log(`\n📅 Database snapshots by date:`);
    dbDates.forEach(stat => {
      const date = stat.reportDate.toISOString().slice(0, 10);
      console.log(`   ${date}: ${stat._count.reportDate.toLocaleString()} records`);
    });
    
    // Calculate the exact difference for each file
    console.log(`\n🔍 File-by-file comparison:`);
    console.log('Date       | Source | Database | Difference | Match?');
    console.log('-----------|--------|----------|------------|-------');
    
    const expectedMappings = [
      { file: 'January 2022', date: '2022-01-01' },
      { file: 'June 2024', date: '2024-06-01' },
      { file: 'July 2024', date: '2024-07-01' },
      { file: 'August 2024', date: '2024-08-01' },
      { file: 'September 2024', date: '2024-09-01' },
      { file: 'October 2024', date: '2024-10-01' },
      { file: 'November 2024', date: '2024-11-01' },
      { file: 'December 2024', date: '2024-12-01' },
      { file: 'February 2025', date: '2025-02-01' },
      { file: 'July 2025', date: '2025-07-01' }
    ];
    
    let totalDiscrepancy = 0;
    
    expectedMappings.forEach((mapping, index) => {
      const fileDetail = fileDetails[index];
      const dbStat = dbDates.find(stat => stat.reportDate.toISOString().slice(0, 10) === mapping.date);
      
      const sourceCount = fileDetail ? fileDetail.records : 0;
      const dbCount = dbStat ? dbStat._count.reportDate : 0;
      const difference = sourceCount - dbCount;
      totalDiscrepancy += difference;
      
      const match = difference === 0 ? '✅ YES' : '❌ NO';
      
      console.log(`${mapping.date} | ${sourceCount.toString().padStart(6)} | ${dbCount.toString().padStart(8)} | ${difference.toString().padStart(10)} | ${match}`);
    });
    
    console.log('-----------|--------|----------|------------|-------');
    console.log(`${'TOTALS'.padEnd(10)} | ${totalSourceRecords.toString().padStart(6)} | ${dbTotal.toString().padStart(8)} | ${totalDiscrepancy.toString().padStart(10)} | ${totalDiscrepancy === 0 ? '✅ YES' : '❌ NO'}`);
    
    // Summary of what's missing
    if (totalDiscrepancy > 0) {
      console.log(`\n⚠️  Summary of missing records:`);
      console.log(`   Expected: ${totalSourceRecords.toLocaleString()}`);
      console.log(`   Imported: ${dbTotal.toLocaleString()}`);
      console.log(`   Missing: ${totalDiscrepancy.toLocaleString()}`);
      console.log(`   This represents ${((totalDiscrepancy / totalSourceRecords) * 100).toFixed(2)}% of total records`);
      
      console.log(`\n💡 Likely causes of missing records:`);
      console.log(`   • Null value issues (isRetired field)`);
      console.log(`   • Malformed CSV rows`);
      console.log(`   • Duplicate pilot entries within same date`);
      console.log(`   • Import validation failures`);
    }
    
  } catch (error) {
    console.error('❌ Analysis failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

countAllSourceRecords();