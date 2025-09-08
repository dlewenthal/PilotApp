const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testCategoryCalculation() {
  try {
    console.log('🧮 Testing if CategorySnapshot can be calculated from SenioritySnapshot...\n');
    
    // Pick a specific category to test: Atlanta A350 Captains on 2025-02-01
    const testCategory = {
      reportDate: new Date('2025-02-01'),
      baseCode: 'ATL',
      fleetCode: '350', 
      positionCode: 'A'
    };
    
    console.log(`🎯 Test Category: ${testCategory.baseCode}${testCategory.fleetCode}${testCategory.positionCode} on ${testCategory.reportDate.toISOString().slice(0, 10)}`);
    
    // Method 1: Calculate from SenioritySnapshot
    const calculatedRanking = await prisma.senioritySnapshot.findMany({
      where: {
        reportDate: testCategory.reportDate,
        baseCode: testCategory.baseCode,
        fleetCode: testCategory.fleetCode,
        positionCode: testCategory.positionCode
      },
      include: { pilot: { select: { name: true, empNumber: true } } },
      orderBy: { seniorityNumber: 'asc' }, // Order by overall seniority
      take: 10
    });
    
    console.log('\n📊 Calculated ranking from SenioritySnapshot (by overall seniority):');
    console.log('Calc Rank | Overall Sen# | EmpNum  | Name');
    console.log('----------|--------------|---------|------------------');
    
    calculatedRanking.forEach((pilot, index) => {
      const calcRank = index + 1;
      console.log(`${calcRank.toString().padStart(9)} | ${pilot.seniorityNumber.toString().padStart(12)} | ${pilot.pilot.empNumber} | ${pilot.pilot.name}`);
    });
    
    // Method 2: Get actual CategorySnapshot data for comparison
    const actualCategoryData = await prisma.categorySnapshot.findMany({
      where: {
        reportDate: new Date('2025-03-02'), // This is the date we have category data for
        baseCode: testCategory.baseCode,
        fleetCode: testCategory.fleetCode,
        positionCode: testCategory.positionCode
      },
      include: { pilot: { select: { name: true, empNumber: true } } },
      orderBy: { sequenceNumber: 'asc' },
      take: 10
    });
    
    console.log('\n📋 Actual CategorySnapshot data (March 2025):');
    console.log('Cat Seq# | Overall Sen# | EmpNum  | Name');
    console.log('---------|--------------|---------|------------------');
    
    actualCategoryData.forEach(pilot => {
      console.log(`${pilot.sequenceNumber.toString().padStart(8)} | ${pilot.seniorityNumber.toString().padStart(12)} | ${pilot.pilot.empNumber} | ${pilot.pilot.name}`);
    });
    
    // Check if the rankings match by comparing a specific pilot
    const testPilotEmp = '0819310'; // HUPPERICH P K - should be #1 in both
    
    const seniorityRank = calculatedRanking.findIndex(p => p.pilot.empNumber === testPilotEmp) + 1;
    const categoryRank = actualCategoryData.find(p => p.pilot.empNumber === testPilotEmp)?.sequenceNumber || 'Not found';
    
    console.log(`\n🔍 Test pilot ${testPilotEmp} rankings:`);
    console.log(`   Calculated from SenioritySnapshot: #${seniorityRank === 0 ? 'Not found' : seniorityRank}`);
    console.log(`   Actual CategorySnapshot: #${categoryRank}`);
    console.log(`   Match: ${seniorityRank === categoryRank ? '✅ YES' : '❌ NO'}`);
    
    // Test a broader question: Can we calculate ALL category positions?
    console.log(`\n🧮 Broader test: Calculate category positions for multiple categories...`);
    
    const sampleCategories = [
      { base: 'ATL', fleet: '350', pos: 'A', name: 'Atlanta A350 Captain' },
      { base: 'ATL', fleet: '320', pos: 'A', name: 'Atlanta A320 Captain' },
      { base: 'DTW', fleet: '320', pos: 'A', name: 'Detroit A320 Captain' }
    ];
    
    for (const cat of sampleCategories) {
      const pilots = await prisma.senioritySnapshot.findMany({
        where: {
          reportDate: testCategory.reportDate,
          baseCode: cat.base,
          fleetCode: cat.fleet,
          positionCode: cat.pos
        },
        orderBy: { seniorityNumber: 'asc' }
      });
      
      console.log(`   ${cat.name}: ${pilots.length} pilots (rank 1 = seniority #${pilots[0]?.seniorityNumber || 'N/A'})`);
    }
    
    console.log(`\n💡 Conclusion:`);
    console.log(`   Can calculate category rankings: ${calculatedRanking.length > 0 ? '✅ YES' : '❌ NO'}`);
    console.log(`   Method: ORDER BY seniorityNumber within category filter`);
    console.log(`   CategorySnapshot table redundancy: ${seniorityRank === categoryRank ? 'LIKELY REDUNDANT' : 'SERVES DIFFERENT PURPOSE'}`);
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testCategoryCalculation();