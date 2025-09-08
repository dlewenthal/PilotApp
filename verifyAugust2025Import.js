const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function verifyAugust2025Import() {
  try {
    console.log('🔍 Verifying August 2025 import...');
    
    // Check if August 2025 data exists
    const august2025Count = await prisma.senioritySnapshot.count({
      where: { reportDate: new Date('2025-08-01') }
    });
    
    console.log(`📊 August 2025 records: ${august2025Count.toLocaleString()}`);
    
    if (august2025Count === 0) {
      console.log('❌ No August 2025 data found - import may still be running');
      return false;
    }
    
    // Get sample records
    const sampleRecords = await prisma.senioritySnapshot.findMany({
      where: { reportDate: new Date('2025-08-01') },
      take: 5,
      orderBy: { seniorityNumber: 'asc' },
      include: { pilot: { select: { name: true, empNumber: true } } }
    });
    
    console.log('\n📝 Sample August 2025 records:');
    sampleRecords.forEach(record => {
      console.log(`  #${record.seniorityNumber}: ${record.pilot.name} (${record.pilot.empNumber}) - ${record.baseCity} ${record.fleetName} ${record.positionName}`);
    });
    
    // Check for data import record
    const dataImport = await prisma.dataImport.findFirst({
      where: { 
        filename: 'August 2025 Seniority List(Sheet1).csv',
        fileType: 'seniority_snapshot'
      }
    });
    
    if (dataImport) {
      console.log(`✅ Import recorded: ${dataImport.recordCount.toLocaleString()} records imported on ${dataImport.importedAt.toLocaleString()}`);
    } else {
      console.log('⚠️  Import record not found in DataImport table');
    }
    
    // Get updated database statistics
    console.log('\n📈 Updated Database Statistics:');
    const dateStats = await prisma.senioritySnapshot.groupBy({
      by: ['reportDate'],
      _count: { reportDate: true },
      orderBy: { reportDate: 'desc' },
      take: 5
    });
    
    dateStats.forEach(stat => {
      const date = new Date(stat.reportDate).toISOString().slice(0, 10);
      console.log(`  ${date}: ${stat._count.reportDate.toLocaleString()} records`);
    });
    
    const totalRecords = await prisma.senioritySnapshot.count();
    const totalPilots = await prisma.pilot.count();
    
    console.log(`\n🎯 Final Totals:`);
    console.log(`  Total seniority records: ${totalRecords.toLocaleString()}`);
    console.log(`  Total pilots: ${totalPilots.toLocaleString()}`);
    console.log(`  Distinct reporting periods: ${dateStats.length} (showing recent 5)`);
    
    return august2025Count > 0;
    
  } catch (error) {
    console.error('❌ Verification error:', error.message);
    return false;
  } finally {
    await prisma.$disconnect();
  }
}

verifyAugust2025Import().then(success => {
  if (success) {
    console.log('\n🎉 August 2025 import verification completed successfully!');
    console.log('   The React app should now show August 2025 as the latest seniority data.');
  } else {
    console.log('\n⏳ August 2025 import may still be in progress or failed.');
    console.log('   Check the import process status.');
  }
}).catch(error => {
  console.error('❌ Verification failed:', error);
});