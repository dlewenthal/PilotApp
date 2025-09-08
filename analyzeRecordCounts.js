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
    
    // Check how many pilots appear in each snapshot date
    for (const dateStat of dateStats) {
      const pilotsInSnapshot = await prisma.senioritySnapshot.count({
        where: { reportDate: dateStat.reportDate },
        distinct: ['pilotId']
      });
      
      const date = dateStat.reportDate.toISOString().slice(0, 10);
      const coverage = ((pilotsInSnapshot / totalPilots) * 100).toFixed(1);
      console.log(`   ${date}: ${pilotsInSnapshot.toLocaleString()} unique pilots (${coverage}% of total)`);
    }
    
    // Check if some pilots appear in one snapshot but not another
    const feb2025Count = await prisma.senioritySnapshot.count({
      where: { reportDate: new Date('2025-02-01') }
    });
    
    const jan2022Count = await prisma.senioritySnapshot.count({
      where: { reportDate: new Date('2022-01-01') }
    });
    
    console.log(`\n🔍 Analysis:`);
    console.log(`   Feb 2025: ${feb2025Count.toLocaleString()} records`);
    console.log(`   Jan 2022: ${jan2022Count.toLocaleString()} records`);
    console.log(`   Difference: ${(feb2025Count - jan2022Count).toLocaleString()} records`);
    
    // Check pilots who appear in Feb 2025 but not Jan 2022 (new hires)
    const newHires = await prisma.pilot.count({
      where: {
        senioritySnapshots: {
          some: { reportDate: new Date('2025-02-01') }
        },
        NOT: {
          senioritySnapshots: {
            some: { reportDate: new Date('2022-01-01') }
          }
        }
      }
    });
    
    // Check pilots who appear in Jan 2022 but not Feb 2025 (retired/left)
    const retired = await prisma.pilot.count({
      where: {
        senioritySnapshots: {
          some: { reportDate: new Date('2022-01-01') }
        },
        NOT: {
          senioritySnapshots: {
            some: { reportDate: new Date('2025-02-01') }
          }
        }
      }
    });
    
    console.log(`\n📈 Workforce changes 2022 → 2025:`);
    console.log(`   New pilots (in 2025, not in 2022): ${newHires.toLocaleString()}`);
    console.log(`   Retired/left (in 2022, not in 2025): ${retired.toLocaleString()}`);
    console.log(`   Net change: +${(newHires - retired).toLocaleString()}`);
    
    // Sample some new hires
    const sampleNewHires = await prisma.pilot.findMany({
      where: {
        senioritySnapshots: {
          some: { reportDate: new Date('2025-02-01') }
        },
        NOT: {
          senioritySnapshots: {
            some: { reportDate: new Date('2022-01-01') }
          }
        }
      },
      include: {
        senioritySnapshots: {
          where: { reportDate: new Date('2025-02-01') }
        }
      },
      take: 5
    });
    
    console.log(`\n👶 Sample new hires (in 2025 but not 2022):`);
    sampleNewHires.forEach(pilot => {
      const snapshot = pilot.senioritySnapshots[0];
      console.log(`   ${pilot.name} (#${pilot.empNumber}) - Seniority #${snapshot?.seniorityNumber}`);
    });
    
  } catch (error) {
    console.error('❌ Analysis failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

analyzeRecordCounts();