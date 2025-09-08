const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkAllTables() {
  try {
    console.log('📊 Checking all table usage...\n');
    
    // Check each table
    const tables = [
      { name: 'User', model: prisma.user },
      { name: 'Pilot', model: prisma.pilot },
      { name: 'SenioritySnapshot', model: prisma.senioritySnapshot },
      { name: 'CategorySnapshot', model: prisma.categorySnapshot },
      { name: 'CareerMilestone', model: prisma.careerMilestone },
      { name: 'FleetSeniorityAnalysis', model: prisma.fleetSeniorityAnalysis },
      { name: 'Base', model: prisma.base },
      { name: 'Fleet', model: prisma.fleet },
      { name: 'DataImport', model: prisma.dataImport }
    ];
    
    for (const table of tables) {
      try {
        const count = await table.model.count();
        const status = count > 0 ? '✅ USED' : '❌ EMPTY';
        console.log(`${status.padEnd(10)} ${table.name.padEnd(20)} ${count.toLocaleString().padStart(8)} records`);
      } catch (error) {
        console.log(`⚠️ ERROR    ${table.name.padEnd(20)} ${error.message}`);
      }
    }
    
    console.log('\n🔍 Table Purpose Analysis:');
    console.log('✅ CORE TABLES (actively used):');
    console.log('   • Pilot - Main pilot records');
    console.log('   • SenioritySnapshot - Historical seniority data');  
    console.log('   • CategorySnapshot - Category-specific seniority');
    console.log('   • DataImport - Import tracking');
    
    console.log('\n❌ UNUSED TABLES (designed but not populated):');
    console.log('   • User - Original demo table (not used in pilot system)');
    console.log('   • CareerMilestone - Designed for tracking career changes');
    console.log('   • FleetSeniorityAnalysis - Designed for pre-computed analysis');
    console.log('   • Base - Designed for base/airport reference data');
    console.log('   • Fleet - Designed for aircraft fleet reference data');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkAllTables();