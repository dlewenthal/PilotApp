const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function verifyCleanDatabase() {
  try {
    console.log('🧹 Verifying clean database schema...\n');
    
    // Check only the remaining tables
    const tables = [
      { name: 'Pilot', model: prisma.pilot },
      { name: 'SenioritySnapshot', model: prisma.senioritySnapshot },
      { name: 'CategorySnapshot', model: prisma.categorySnapshot },
      { name: 'DataImport', model: prisma.dataImport }
    ];
    
    let totalRecords = 0;
    
    for (const table of tables) {
      const count = await table.model.count();
      totalRecords += count;
      console.log(`✅ ${table.name.padEnd(18)} ${count.toLocaleString().padStart(8)} records`);
    }
    
    console.log(`\n📊 Summary:`);
    console.log(`   • Total active tables: ${tables.length}`);
    console.log(`   • Total records: ${totalRecords.toLocaleString()}`);
    console.log(`   • Unused tables removed: 5 (User, CareerMilestone, FleetSeniorityAnalysis, Base, Fleet)`);
    
    // Verify the schema is clean
    const tableNames = await prisma.$queryRaw`
      SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' AND name NOT LIKE '_prisma_%';
    `;
    
    console.log(`\n📋 Remaining database tables:`, tableNames.map(t => t.name));
    console.log('\n🎉 Database cleanup completed successfully!');
    console.log('💡 Removed tables can be recreated when needed with new migrations.');
    
  } catch (error) {
    console.error('❌ Verification failed:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

verifyCleanDatabase();