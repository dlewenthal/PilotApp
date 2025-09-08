const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkDatabase() {
  try {
    console.log('🔍 Checking database contents...');
    
    const [pilotCount, snapshotCount, categoryCount] = await Promise.all([
      prisma.pilot.count(),
      prisma.senioritySnapshot.count(),  
      prisma.categorySnapshot.count()
    ]);
    
    console.log(`📊 Database Statistics:`);
    console.log(`   • Pilots: ${pilotCount.toLocaleString()}`);
    console.log(`   • Seniority Snapshots: ${snapshotCount.toLocaleString()}`);
    console.log(`   • Category Snapshots: ${categoryCount.toLocaleString()}`);
    
    // Get a sample pilot
    const samplePilot = await prisma.pilot.findFirst({
      include: {
        senioritySnapshots: {
          orderBy: { reportDate: 'desc' },
          take: 1
        }
      }
    });
    
    if (samplePilot) {
      console.log(`\n🧪 Sample Pilot:`);
      console.log(`   • Name: ${samplePilot.name}`);
      console.log(`   • Employee #: ${samplePilot.empNumber}`);
      console.log(`   • Latest Seniority: #${samplePilot.senioritySnapshots[0]?.seniorityNumber || 'N/A'}`);
    }
    
    // Check tables exist
    const tableNames = await prisma.$queryRaw`
      SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' AND name NOT LIKE '_prisma_%';
    `;
    
    console.log(`\n📋 Tables in database:`, tableNames.map(t => t.name));
    
  } catch (error) {
    console.error('❌ Database check failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();