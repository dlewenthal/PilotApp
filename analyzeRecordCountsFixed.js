const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function analyzeRecordCounts() {
  try {
    console.log('🔍 Analyzing record count patterns...\n');
    
    // Get detailed breakdown by date
    const dateStats = await prisma.senioritySnapshot.groupBy({
      by: ['reportDate'],
      _count: { reportDate: true },
      orderBy: { reportDate: 'asc' }
    });
    
    console.log('📊 SenioritySnapshot records by date:');
    dateStats.forEach(stat => {
      const date = stat.reportDate.toISOString().slice(0, 10);
      console.log(`   ${date}: ${stat._count.reportDate.toLocaleString()} records`);
    });
    
    // Total unique pilots in database
    const totalPilots = await prisma.pilot.count();
    console.log(`\n👥 Total pilots in database: ${totalPilots.toLocaleString()}`);
    
    // Manually check the two main snapshot dates
    const feb2025Records = await prisma.senioritySnapshot.findMany({
      where: { reportDate: new Date('2025-02-01') },
      select: { pilotId: true }
    });
    
    const jan2022Records = await prisma.senioritySnapshot.findMany({
      where: { reportDate: new Date('2022-01-01') },
      select: { pilotId: true }
    });
    
    const feb2025PilotIds = new Set(feb2025Records.map(r => r.pilotId));
    const jan2022PilotIds = new Set(jan2022Records.map(r => r.pilotId));
    
    console.log(`\n📊 Snapshot coverage:`);
    console.log(`   Jan 2022: ${jan2022Records.length.toLocaleString()} records covering ${jan2022PilotIds.size.toLocaleString()} unique pilots`);
    console.log(`   Feb 2025: ${feb2025Records.length.toLocaleString()} records covering ${feb2025PilotIds.size.toLocaleString()} unique pilots`);
    
    // Find pilots who appear in one but not the other
    const onlyIn2025 = [...feb2025PilotIds].filter(id => !jan2022PilotIds.has(id));
    const onlyIn2022 = [...jan2022PilotIds].filter(id => !feb2025PilotIds.has(id));
    const inBoth = [...feb2025PilotIds].filter(id => jan2022PilotIds.has(id));
    
    console.log(`\n🔄 Pilot movement between snapshots:`);
    console.log(`   In both 2022 & 2025: ${inBoth.length.toLocaleString()}`);
    console.log(`   Only in 2025 (new hires): ${onlyIn2025.length.toLocaleString()}`);
    console.log(`   Only in 2022 (retired/left): ${onlyIn2022.length.toLocaleString()}`);
    
    // Sample some new hires
    if (onlyIn2025.length > 0) {
      const sampleNewHires = await prisma.pilot.findMany({
        where: { id: { in: onlyIn2025.slice(0, 5) } },
        include: {
          senioritySnapshots: {
            where: { reportDate: new Date('2025-02-01') }
          }
        }
      });
      
      console.log(`\n👶 Sample new hires (in 2025 but not 2022):`);
      sampleNewHires.forEach(pilot => {
        const snapshot = pilot.senioritySnapshots[0];
        console.log(`   ${pilot.name} (#${pilot.empNumber}) - Seniority #${snapshot?.seniorityNumber}`);
      });
    }
    
    // Sample some retirees
    if (onlyIn2022.length > 0) {
      const sampleRetirees = await prisma.pilot.findMany({
        where: { id: { in: onlyIn2022.slice(0, 5) } },
        include: {
          senioritySnapshots: {
            where: { reportDate: new Date('2022-01-01') }
          }
        }
      });
      
      console.log(`\n👴 Sample retirees/departures (in 2022 but not 2025):`);
      sampleRetirees.forEach(pilot => {
        const snapshot = pilot.senioritySnapshots[0];
        console.log(`   ${pilot.name} (#${pilot.empNumber}) - Was seniority #${snapshot?.seniorityNumber} in 2022`);
      });
    }
    
    // Check what total pilots in database represents
    const pilotsWithAnySnapshot = await prisma.pilot.count({
      where: {
        senioritySnapshots: { some: {} }
      }
    });
    
    const pilotsWithoutSnapshots = totalPilots - pilotsWithAnySnapshot;
    
    console.log(`\n🧮 Database totals:`);
    console.log(`   Total pilots: ${totalPilots.toLocaleString()}`);
    console.log(`   Pilots with snapshots: ${pilotsWithAnySnapshot.toLocaleString()}`);
    console.log(`   Pilots without snapshots: ${pilotsWithoutSnapshots.toLocaleString()}`);
    
  } catch (error) {
    console.error('❌ Analysis failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

analyzeRecordCounts();