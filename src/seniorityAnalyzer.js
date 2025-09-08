const { PrismaClient } = require('@prisma/client');
const { parseCategoryCode } = require('./categoryParser');

const prisma = new PrismaClient();

// Calculate a pilot's seniority position within different aircraft/positions
async function analyzePilotSeniorityOptions(empNumber, analysisDate = new Date()) {
  console.log(`🔍 Analyzing seniority options for pilot ${empNumber}`);
  
  // Find the pilot
  const pilot = await prisma.pilot.findUnique({
    where: { empNumber: empNumber.toString() },
    include: {
      senioritySnapshots: {
        where: { reportDate: { lte: analysisDate } },
        orderBy: { reportDate: 'desc' },
        take: 1
      }
    }
  });

  if (!pilot || pilot.senioritySnapshots.length === 0) {
    throw new Error(`Pilot ${empNumber} not found or no seniority data available`);
  }

  const latestSnapshot = pilot.senioritySnapshots[0];
  console.log(`✅ Found pilot: ${pilot.name} (Seniority #${latestSnapshot.seniorityNumber})`);
  console.log(`📅 Latest data from: ${latestSnapshot.reportDate.toISOString().slice(0, 10)}`);
  console.log(`🛩️ Current assignment: ${latestSnapshot.baseCity} ${latestSnapshot.fleetName} ${latestSnapshot.positionName}`);

  // Get all possible aircraft/position combinations from the same report date
  const availableOptions = await prisma.senioritySnapshot.groupBy({
    by: ['baseCode', 'fleetCode', 'positionCode', 'baseCity', 'fleetName', 'positionName'],
    where: { reportDate: latestSnapshot.reportDate },
    having: { pilotId: { _count: { gt: 10 } } }, // Only include categories with reasonable pilot counts
    orderBy: [
      { baseCity: 'asc' },
      { fleetName: 'asc' },
      { positionName: 'desc' } // Captains first
    ]
  });

  console.log(`🎯 Analyzing ${availableOptions.length} possible assignments...`);

  // For each option, calculate where this pilot would rank
  const seniorityAnalysis = [];
  
  for (const option of availableOptions) {
    // Get all pilots in this specific category, ordered by seniority
    const pilotsInCategory = await prisma.senioritySnapshot.findMany({
      where: {
        reportDate: latestSnapshot.reportDate,
        baseCode: option.baseCode,
        fleetCode: option.fleetCode,
        positionCode: option.positionCode
      },
      include: {
        pilot: { select: { name: true, empNumber: true } }
      },
      orderBy: { seniorityNumber: 'asc' }
    });

    // Find this pilot's position in this category
    const pilotPosition = pilotsInCategory.findIndex(p => p.pilot.empNumber === empNumber.toString());
    const totalPilots = pilotsInCategory.length;
    const percentile = pilotPosition >= 0 ? Math.round((pilotPosition / totalPilots) * 100) : null;
    
    // Calculate pilots senior/junior to this pilot
    const pilotsSenior = pilotPosition;
    const pilotsJunior = totalPilots - pilotPosition - 1;

    seniorityAnalysis.push({
      baseCode: option.baseCode,
      fleetCode: option.fleetCode,
      positionCode: option.positionCode,
      baseCity: option.baseCity,
      fleetName: option.fleetName,
      positionName: option.positionName,
      category: `${option.baseCode}${option.fleetCode}${option.positionCode}`,
      totalPilots,
      pilotPosition: pilotPosition + 1, // 1-based position
      percentile,
      pilotsSenior,
      pilotsJunior,
      isCurrentAssignment: (
        option.baseCode === latestSnapshot.baseCode &&
        option.fleetCode === latestSnapshot.fleetCode &&
        option.positionCode === latestSnapshot.positionCode
      )
    });
  }

  // Sort by percentile (best positions first)
  seniorityAnalysis.sort((a, b) => (a.percentile || 100) - (b.percentile || 100));

  return {
    pilot: {
      empNumber: pilot.empNumber,
      name: pilot.name,
      overallSeniority: latestSnapshot.seniorityNumber,
      currentAssignment: {
        baseCity: latestSnapshot.baseCity,
        fleetName: latestSnapshot.fleetName,
        positionName: latestSnapshot.positionName,
        category: latestSnapshot.category
      }
    },
    analysisDate: latestSnapshot.reportDate,
    seniorityOptions: seniorityAnalysis
  };
}

// Analyze career progression over time
async function analyzePilotCareerProgression(empNumber) {
  console.log(`📈 Analyzing career progression for pilot ${empNumber}`);
  
  const pilot = await prisma.pilot.findUnique({
    where: { empNumber: empNumber.toString() },
    include: {
      senioritySnapshots: {
        orderBy: { reportDate: 'asc' }
      }
    }
  });

  if (!pilot || pilot.senioritySnapshots.length === 0) {
    throw new Error(`Pilot ${empNumber} not found or no seniority data available`);
  }

  console.log(`✅ Found ${pilot.senioritySnapshots.length} career snapshots for ${pilot.name}`);

  const progression = pilot.senioritySnapshots.map(snapshot => ({
    date: snapshot.reportDate,
    seniorityNumber: snapshot.seniorityNumber,
    baseCity: snapshot.baseCity,
    fleetName: snapshot.fleetName,
    positionName: snapshot.positionName,
    category: snapshot.category
  }));

  // Identify major career changes
  const milestones = [];
  for (let i = 1; i < progression.length; i++) {
    const prev = progression[i - 1];
    const curr = progression[i];
    
    if (prev.baseCity !== curr.baseCity) {
      milestones.push({
        date: curr.date,
        type: 'BASE_CHANGE',
        from: prev.baseCity,
        to: curr.baseCity
      });
    }
    
    if (prev.fleetName !== curr.fleetName) {
      milestones.push({
        date: curr.date,
        type: 'FLEET_CHANGE',
        from: prev.fleetName,
        to: curr.fleetName
      });
    }
    
    if (prev.positionName !== curr.positionName) {
      milestones.push({
        date: curr.date,
        type: 'POSITION_CHANGE',
        from: prev.positionName,
        to: curr.positionName
      });
    }
  }

  return {
    pilot: {
      empNumber: pilot.empNumber,
      name: pilot.name,
      hireDate: pilot.pilotHireDate,
      retireDate: pilot.scheduledRetireDate
    },
    progression,
    milestones,
    summary: {
      totalSnapshots: progression.length,
      firstSnapshot: progression[0],
      latestSnapshot: progression[progression.length - 1],
      majorChanges: milestones.length
    }
  };
}

// Compare seniority across all fleets for a specific position (Captain/FO)
async function compareFleetSeniority(empNumber, position = 'A', baseCode = null) {
  console.log(`🛩️ Comparing ${position === 'A' ? 'Captain' : 'First Officer'} seniority across fleets for pilot ${empNumber}`);
  
  const pilot = await prisma.pilot.findUnique({
    where: { empNumber: empNumber.toString() }
  });

  if (!pilot) {
    throw new Error(`Pilot ${empNumber} not found`);
  }

  // Get latest seniority data
  const latestSnapshot = await prisma.senioritySnapshot.findFirst({
    where: { pilotId: pilot.id },
    orderBy: { reportDate: 'desc' }
  });

  if (!latestSnapshot) {
    throw new Error(`No seniority data found for pilot ${empNumber}`);
  }

  // Get all fleets for the specified position and base
  const whereClause = {
    reportDate: latestSnapshot.reportDate,
    positionCode: position
  };
  
  if (baseCode) {
    whereClause.baseCode = baseCode;
  }

  const fleetOptions = await prisma.senioritySnapshot.groupBy({
    by: ['baseCode', 'fleetCode', 'baseCity', 'fleetName'],
    where: whereClause,
    having: { pilotId: { _count: { gt: 5 } } },
    orderBy: [{ baseCity: 'asc' }, { fleetName: 'asc' }]
  });

  const fleetComparison = [];

  for (const fleet of fleetOptions) {
    // Get all pilots in this fleet/position combination
    const pilotsInFleet = await prisma.senioritySnapshot.findMany({
      where: {
        reportDate: latestSnapshot.reportDate,
        baseCode: fleet.baseCode,
        fleetCode: fleet.fleetCode,
        positionCode: position
      },
      orderBy: { seniorityNumber: 'asc' },
      include: {
        pilot: { select: { empNumber: true } }
      }
    });

    // Find this pilot's position
    const pilotPosition = pilotsInFleet.findIndex(p => p.pilot.empNumber === empNumber.toString());
    
    fleetComparison.push({
      baseCity: fleet.baseCity,
      fleetName: fleet.fleetName,
      category: `${fleet.baseCode}${fleet.fleetCode}${position}`,
      totalPilots: pilotsInFleet.length,
      pilotPosition: pilotPosition >= 0 ? pilotPosition + 1 : null,
      percentile: pilotPosition >= 0 ? Math.round((pilotPosition / pilotsInFleet.length) * 100) : null,
      wouldBeEligible: pilotPosition >= 0
    });
  }

  // Sort by best seniority position
  fleetComparison.sort((a, b) => (a.percentile || 100) - (b.percentile || 100));

  return {
    pilot: { empNumber: pilot.empNumber, name: pilot.name },
    position: position === 'A' ? 'Captain' : 'First Officer',
    baseFilter: baseCode || 'All Bases',
    analysisDate: latestSnapshot.reportDate,
    fleetOptions: fleetComparison
  };
}

module.exports = {
  analyzePilotSeniorityOptions,
  analyzePilotCareerProgression,
  compareFleetSeniority
};

// Test if run directly
if (require.main === module) {
  // Test with a pilot from the data
  analyzePilotSeniorityOptions('0819310')
    .then(analysis => {
      console.log('\n🎯 SENIORITY ANALYSIS RESULTS:');
      console.log(`Pilot: ${analysis.pilot.name} (#${analysis.pilot.empNumber})`);
      console.log(`Overall Seniority: #${analysis.pilot.overallSeniority}`);
      console.log(`Current: ${analysis.pilot.currentAssignment.baseCity} ${analysis.pilot.currentAssignment.fleetName} ${analysis.pilot.currentAssignment.positionName}`);
      console.log('\n🛩️ SENIORITY ON OTHER AIRCRAFT:');
      
      analysis.seniorityOptions.slice(0, 10).forEach(option => {
        const marker = option.isCurrentAssignment ? '👉 ' : '   ';
        console.log(`${marker}${option.baseCity} ${option.fleetName} ${option.positionName}: #${option.pilotPosition}/${option.totalPilots} (${option.percentile}%)`);
      });
    })
    .then(() => prisma.$disconnect())
    .catch(error => {
      console.error('❌ Analysis failed:', error);
      prisma.$disconnect();
    });
}