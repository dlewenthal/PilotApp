const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkImportProgress() {
  try {
    console.log('📊 Checking import progress...\n');
    
    const [totalSnapshots, totalPilots, dateStats] = await Promise.all([
      prisma.senioritySnapshot.count(),
      prisma.pilot.count(),
      prisma.senioritySnapshot.groupBy({
        by: ['reportDate'],
        _count: { reportDate: true },
        orderBy: { reportDate: 'asc' }
      })
    ]);
    
    console.log(`Current database state:`);
    console.log(`   Total snapshots: ${totalSnapshots.toLocaleString()}`);
    console.log(`   Total pilots: ${totalPilots.toLocaleString()}`);
    console.log(`   Reporting periods: ${dateStats.length}\n`);
    
    console.log(`Data by reporting date:`);
    dateStats.forEach(stat => {
      const date = stat.reportDate.toISOString().slice(0, 10);
      console.log(`   ${date}: ${stat._count.reportDate.toLocaleString()} records`);
    });
    
    // Check recent imports
    const recentImports = await prisma.dataImport.findMany({
      orderBy: { importedAt: 'desc' },
      take: 10
    });
    
    if (recentImports.length > 0) {
      console.log(`\nRecent imports:`);
      recentImports.forEach(imp => {
        const date = imp.importedAt.toISOString().slice(5, 16).replace('T', ' ');
        console.log(`   ${date}: ${imp.filename} (${imp.recordCount.toLocaleString()} records)`);
      });
    }
    
  } catch (error) {
    console.error('❌ Progress check failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkImportProgress();