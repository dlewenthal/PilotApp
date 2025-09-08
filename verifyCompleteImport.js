const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const prisma = new PrismaClient();

function countLinesInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    
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
    return 0;
  }
}

async function verifyCompleteImport() {
  try {
    console.log('✅ Verifying complete seniority data import...\n');
    
    // Expected files and their record counts
    const expectedFiles = [
      { name: 'January 2022 Seniority List(Sheet1).csv', expected: 13038 },
      { name: 'June 2024 Seniority List(Sheet1).csv', expected: 17328 },
      { name: 'July 2024 Seniority List(Sheet1).csv', expected: 17327 },
      { name: 'August 2024 Seniority List(Sheet1).csv', expected: 17326 },
      { name: 'September 2024 Seniority List(Sheet1) (1).csv', expected: 17327 },
      { name: 'October 2024 Seniority List(Sheet1).csv', expected: 17344 },
      { name: 'November 2024 Seniority List(Sheet1).csv', expected: 17360 },
      { name: 'December 2024 Seniority List(Sheet1).csv', expected: 17311 },
      { name: 'February 2025 Seniority List(Sheet1).csv', expected: 17425 },
      { name: 'July 2025 Seniority List(Sheet1).csv', expected: 17450 }
    ];
    
    const expectedTotal = expectedFiles.reduce((sum, file) => sum + file.expected, 0);
    
    // Get current database state
    const [actualTotal, dateStats] = await Promise.all([
      prisma.senioritySnapshot.count(),
      prisma.senioritySnapshot.groupBy({
        by: ['reportDate'],
        _count: { reportDate: true },
        orderBy: { reportDate: 'asc' }
      })
    ]);
    
    console.log('📊 Import verification results:');
    console.log(`   Expected total records: ${expectedTotal.toLocaleString()}`);
    console.log(`   Actual total records: ${actualTotal.toLocaleString()}`);
    console.log(`   Match: ${actualTotal === expectedTotal ? '✅ PERFECT' : '❌ MISMATCH'}\n`);
    
    console.log('📅 Data by reporting date:');
    const dateMap = new Map(dateStats.map(s => [s.reportDate.toISOString().slice(0, 10), s._count.reportDate]));
    
    const expectedDates = [
      { date: '2022-01-01', expected: 13038 },
      { date: '2024-06-01', expected: 17328 },
      { date: '2024-07-01', expected: 17327 },
      { date: '2024-08-01', expected: 17326 },
      { date: '2024-09-01', expected: 17327 },
      { date: '2024-10-01', expected: 17344 },
      { date: '2024-11-01', expected: 17360 },
      { date: '2024-12-01', expected: 17311 },
      { date: '2025-02-01', expected: 17425 },
      { date: '2025-07-01', expected: 17450 }
    ];
    
    expectedDates.forEach(exp => {
      const actual = dateMap.get(exp.date) || 0;
      const status = actual === exp.expected ? '✅' : '❌';
      console.log(`   ${exp.date}: ${actual.toLocaleString().padStart(6)} / ${exp.expected.toLocaleString()} ${status}`);
    });
    
    // Check for any unexpected dates
    const unexpectedDates = dateStats.filter(s => 
      !expectedDates.some(exp => exp.date === s.reportDate.toISOString().slice(0, 10))
    );
    
    if (unexpectedDates.length > 0) {
      console.log('\n⚠️  Unexpected dates found:');
      unexpectedDates.forEach(date => {
        console.log(`   ${date.reportDate.toISOString().slice(0, 10)}: ${date._count.reportDate.toLocaleString()}`);
      });
    }
    
    // Test query performance with new composite index
    console.log('\n⚡ Performance test with composite index:');
    const start = Date.now();
    const testQuery = await prisma.senioritySnapshot.findMany({
      where: {
        reportDate: new Date('2025-02-01'),
        baseCode: 'ATL',
        fleetCode: '350',
        positionCode: 'A'
      },
      orderBy: { seniorityNumber: 'asc' },
      take: 100
    });
    const queryTime = Date.now() - start;
    
    console.log(`   Category query (ATL A350 Captains): ${testQuery.length} results in ${queryTime}ms`);
    console.log(`   Performance: ${queryTime < 20 ? '⚡ EXCELLENT' : queryTime < 50 ? '✅ GOOD' : '⚠️  NEEDS OPTIMIZATION'}`);
    
    // Summary
    const importSuccess = actualTotal === expectedTotal && dateStats.length === expectedDates.length;
    console.log(`\n🎯 Overall import status: ${importSuccess ? '✅ SUCCESS' : '❌ INCOMPLETE'}`);
    
    if (importSuccess) {
      console.log('🎉 All seniority data successfully imported!');
      console.log(`📈 Database now contains complete historical data spanning ${dateStats.length} reporting periods.`);
    }
    
  } catch (error) {
    console.error('❌ Verification failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

verifyCompleteImport();