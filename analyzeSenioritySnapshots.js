const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function analyzeSenioritySnapshots() {
  try {
    console.log('📊 Analyzing SenioritySnapshot table structure...\n');
    
    // Get sample records to understand the data
    const samples = await prisma.senioritySnapshot.findMany({
      include: { pilot: { select: { name: true, empNumber: true } } },
      orderBy: [{ reportDate: 'desc' }, { seniorityNumber: 'asc' }],
      take: 10
    });
    
    console.log('📋 Sample SenioritySnapshot records:');
    console.log('Date       | Sen# | EmpNum  | Name           | Category | Base | Fleet      | Position');
    console.log('-----------|------|---------|----------------|----------|------|------------|----------');
    
    samples.forEach(record => {
      const date = record.reportDate.toISOString().slice(0, 10);
      console.log(
        `${date} | ${record.seniorityNumber.toString().padStart(4)} | ${record.pilot.empNumber} | ${record.pilot.name.slice(0, 14).padEnd(14)} | ${record.category.padEnd(8)} | ${record.baseCity.padEnd(4)} | ${record.fleetName.slice(0, 10).padEnd(10)} | ${record.positionName}`
      );
    });
    
    // Analyze date distribution
    const dateStats = await prisma.senioritySnapshot.groupBy({
      by: ['reportDate'],
      _count: { reportDate: true },
      orderBy: { reportDate: 'desc' }
    });
    
    console.log('\n📅 Data by report date:');
    dateStats.forEach(stat => {
      const date = stat.reportDate.toISOString().slice(0, 10);
      console.log(`   ${date}: ${stat._count.reportDate.toLocaleString()} records`);
    });
    
    // Check for one pilot's progression over time
    const pilotProgression = await prisma.senioritySnapshot.findMany({
      where: { pilot: { empNumber: '0819310' } },
      include: { pilot: { select: { name: true } } },
      orderBy: { reportDate: 'asc' }
    });
    
    console.log(`\n🎯 Career progression for pilot 0819310 (${pilotProgression[0]?.pilot.name}):`);
    pilotProgression.forEach(record => {
      const date = record.reportDate.toISOString().slice(0, 10);
      console.log(`   ${date}: Seniority #${record.seniorityNumber} - ${record.baseCity} ${record.fleetName} ${record.positionName}`);
    });
    
    // Analyze category parsing
    console.log('\n🔍 Category parsing examples:');
    const categoryExamples = await prisma.senioritySnapshot.findMany({
      select: { category: true, baseCode: true, fleetCode: true, positionCode: true, baseCity: true, fleetName: true, positionName: true },
      take: 5
    });
    
    console.log('Raw Category → Parsed Components');
    categoryExamples.forEach(record => {
      console.log(`${record.category.padEnd(10)} → Base: ${record.baseCode}(${record.baseCity}) Fleet: ${record.fleetCode}(${record.fleetName}) Pos: ${record.positionCode}(${record.positionName})`);
    });
    
  } catch (error) {
    console.error('❌ Analysis failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

analyzeSenioritySnapshots();