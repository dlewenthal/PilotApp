const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function analyzeCategorySnapshots() {
  try {
    console.log('🔍 Analyzing CategorySnapshot table purpose...\n');
    
    // Get basic stats
    const totalCategoryRecords = await prisma.categorySnapshot.count();
    console.log(`📊 Total CategorySnapshot records: ${totalCategoryRecords.toLocaleString()}`);
    
    // Check dates and types
    const categoryStats = await prisma.categorySnapshot.groupBy({
      by: ['reportDate', 'categoryType'],
      _count: { categoryType: true },
      orderBy: [{ reportDate: 'asc' }, { categoryType: 'asc' }]
    });
    
    console.log('\n📅 CategorySnapshot data by date and type:');
    categoryStats.forEach(stat => {
      const date = stat.reportDate.toISOString().slice(0, 10);
      const type = stat.categoryType === 'A' ? 'Captain' : 'First Officer';
      console.log(`   ${date} ${type}: ${stat._count.categoryType.toLocaleString()} records`);
    });
    
    // Sample records to understand the structure
    const samples = await prisma.categorySnapshot.findMany({
      include: { pilot: { select: { name: true, empNumber: true } } },
      orderBy: [{ reportDate: 'desc' }, { sequenceNumber: 'asc' }],
      take: 10
    });
    
    console.log('\n📋 Sample CategorySnapshot records:');
    console.log('Date       | Type | Seq# | Sen# | EmpNum  | Name           | Category | Position');
    console.log('-----------|------|------|------|---------|----------------|----------|----------');
    
    samples.forEach(record => {
      const date = record.reportDate.toISOString().slice(0, 10);
      const type = record.categoryType;
      const category = `${record.baseCode}${record.fleetCode}${record.positionCode}`;
      console.log(
        `${date} | ${type}    | ${record.sequenceNumber.toString().padStart(4)} | ${record.seniorityNumber.toString().padStart(4)} | ${record.pilot.empNumber} | ${record.pilot.name.slice(0, 14).padEnd(14)} | ${category.padEnd(8)} | ${record.positionName}`
      );
    });
    
    // Compare with SenioritySnapshot to understand the difference
    console.log('\n🔄 Comparing with SenioritySnapshot data...');
    
    // Find a pilot who appears in both tables
    const testPilot = await prisma.pilot.findFirst({
      where: {
        AND: [
          { senioritySnapshots: { some: {} } },
          { categorySnapshots: { some: {} } }
        ]
      },
      include: {
        senioritySnapshots: {
          orderBy: { reportDate: 'desc' },
          take: 1
        },
        categorySnapshots: {
          orderBy: { reportDate: 'desc' },
          take: 2
        }
      }
    });
    
    if (testPilot) {
      console.log(`\n👤 Example pilot: ${testPilot.name} (${testPilot.empNumber})`);
      
      if (testPilot.senioritySnapshots.length > 0) {
        const senSnapshot = testPilot.senioritySnapshots[0];
        console.log(`   SenioritySnapshot: Overall seniority #${senSnapshot.seniorityNumber} - ${senSnapshot.baseCity} ${senSnapshot.fleetName} ${senSnapshot.positionName}`);
      }
      
      if (testPilot.categorySnapshots.length > 0) {
        testPilot.categorySnapshots.forEach((catSnapshot, i) => {
          const type = catSnapshot.categoryType === 'A' ? 'Captain' : 'First Officer';
          console.log(`   CategorySnapshot ${i+1}: Sequence #${catSnapshot.sequenceNumber} among ${type}s in ${catSnapshot.baseCity} ${catSnapshot.fleetName} (overall seniority #${catSnapshot.seniorityNumber})`);
        });
      }
    }
    
    // Analyze what categories exist
    const categoryBreakdown = await prisma.categorySnapshot.groupBy({
      by: ['baseCity', 'fleetName', 'categoryType'],
      _count: { categoryType: true },
      orderBy: [{ baseCity: 'asc' }, { fleetName: 'asc' }, { categoryType: 'asc' }],
      take: 10
    });
    
    console.log('\n🏢 Sample category breakdowns:');
    categoryBreakdown.forEach(cat => {
      const type = cat.categoryType === 'A' ? 'Captains' : 'First Officers';
      console.log(`   ${cat.baseCity} ${cat.fleetName} ${type}: ${cat._count.categoryType} pilots`);
    });
    
    // Check the source files this came from
    console.log('\n📁 Source file analysis:');
    const dataImports = await prisma.dataImport.findMany({
      where: { 
        OR: [
          { fileType: { contains: 'category' } },
          { filename: { contains: 'Category' } }
        ]
      },
      orderBy: { importedAt: 'desc' }
    });
    
    if (dataImports.length > 0) {
      console.log('   CategorySnapshot data imported from:');
      dataImports.forEach(imp => {
        console.log(`   - ${imp.filename} (${imp.recordCount} records, ${imp.reportDate.toISOString().slice(0, 10)})`);
      });
    } else {
      console.log('   No category-specific import records found.');
    }
    
  } catch (error) {
    console.error('❌ Analysis failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

analyzeCategorySnapshots();