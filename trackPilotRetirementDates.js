const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function trackPilotRetirementDates() {
  try {
    console.log('🔍 Tracking retirement date progression for problematic pilots...\n');
    
    // The pilots that had null value issues
    const problematicPilots = [
      '0574703', // PETTIBONE, TONYA
      '0321574', // HASTINGS, JOHN  
      '0386130', // THORP, SARAH
      '0687201'  // JONES, CHRISTINE
    ];
    
    for (const empNumber of problematicPilots) {
      console.log(`👤 Pilot ${empNumber}:`);
      
      // Get pilot info
      const pilot = await prisma.pilot.findUnique({
        where: { empNumber },
        select: { 
          name: true, 
          pilotHireDate: true, 
          scheduledRetireDate: true,
          isRetired: true 
        }
      });
      
      if (pilot) {
        console.log(`   Name: ${pilot.name}`);
        console.log(`   Hire Date: ${pilot.pilotHireDate ? pilot.pilotHireDate.toISOString().slice(0, 10) : 'NULL'}`);
        console.log(`   Scheduled Retirement: ${pilot.scheduledRetireDate ? pilot.scheduledRetireDate.toISOString().slice(0, 10) : 'NULL'}`);
        console.log(`   Current Status: ${pilot.isRetired === null ? 'NULL' : pilot.isRetired ? 'RETIRED' : 'ACTIVE'}`);
        
        // Get all their seniority snapshots to see if they appear in all files
        const snapshots = await prisma.senioritySnapshot.findMany({
          where: { pilot: { empNumber } },
          orderBy: { reportDate: 'asc' },
          select: { 
            reportDate: true, 
            seniorityNumber: true,
            baseCity: true,
            fleetName: true,
            positionName: true
          }
        });
        
        console.log(`   Seniority History (${snapshots.length} snapshots):`);
        snapshots.forEach(snapshot => {
          const date = snapshot.reportDate.toISOString().slice(0, 10);
          console.log(`     ${date}: #${snapshot.seniorityNumber} - ${snapshot.baseCity} ${snapshot.fleetName} ${snapshot.positionName}`);
        });
        
        // Check if they appear in the latest snapshots (2025-07-01)
        const latestSnapshot = snapshots.find(s => s.reportDate.toISOString().slice(0, 10) === '2025-07-01');
        const feb2025Snapshot = snapshots.find(s => s.reportDate.toISOString().slice(0, 10) === '2025-02-01');
        
        console.log(`   In Feb 2025 list: ${feb2025Snapshot ? 'YES' : 'NO'}`);
        console.log(`   In July 2025 list: ${latestSnapshot ? 'YES' : 'NO'}`);
        
        // Analyze career pattern
        if (snapshots.length > 0) {
          const firstSnapshot = snapshots[0];
          const lastSnapshot = snapshots[snapshots.length - 1];
          
          const firstDate = firstSnapshot.reportDate.toISOString().slice(0, 10);
          const lastDate = lastSnapshot.reportDate.toISOString().slice(0, 10);
          
          console.log(`   Career span: ${firstDate} → ${lastDate}`);
          
          if (snapshots.length < 8) {
            console.log(`   ⚠️  Missing from ${10 - snapshots.length} reporting periods`);
          }
        }
      } else {
        console.log(`   ❌ Pilot not found in database`);
      }
      
      console.log('');
    }
    
    // Additional analysis: Check if these pilots retired between files
    console.log('🔍 Retirement Status Analysis:\n');
    
    // Get all pilots who have retirement dates
    const pilotsWithRetirement = await prisma.pilot.count({
      where: { scheduledRetireDate: { not: null } }
    });
    
    const pilotsWithNullRetirement = await prisma.pilot.count({
      where: { scheduledRetireDate: null }
    });
    
    console.log(`📊 Overall retirement date statistics:`);
    console.log(`   Pilots with retirement dates: ${pilotsWithRetirement.toLocaleString()}`);
    console.log(`   Pilots with null retirement dates: ${pilotsWithNullRetirement.toLocaleString()}`);
    
    // Check if any of the problematic pilots appear in later files but not earlier ones
    console.log(`\n📅 File appearance analysis:`);
    
    const allDates = [
      '2022-01-01', '2024-06-01', '2024-07-01', '2024-08-01', '2024-09-01',
      '2024-10-01', '2024-11-01', '2024-12-01', '2025-02-01', '2025-07-01'
    ];
    
    for (const empNumber of problematicPilots) {
      console.log(`   ${empNumber}:`);
      for (const dateStr of allDates) {
        const snapshot = await prisma.senioritySnapshot.findFirst({
          where: { 
            pilot: { empNumber },
            reportDate: new Date(dateStr)
          },
          select: { seniorityNumber: true }
        });
        
        const status = snapshot ? `#${snapshot.seniorityNumber}` : 'MISSING';
        console.log(`     ${dateStr}: ${status}`);
      }
    }
    
  } catch (error) {
    console.error('❌ Analysis failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

trackPilotRetirementDates();