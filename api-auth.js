const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  // Connection pooling settings
  log: ['warn', 'error'],
});

// Handle graceful shutdown
process.on('beforeExit', async () => {
  console.log('Disconnecting from database...');
  await prisma.$disconnect();
});

// Fleet code to aircraft mapping for pay calculations
const FLEET_CODE_MAPPING = {
  '7ER': 'B-777',           // Boeing 777-200ER
  '765': 'B-767-300ER',     // Boeing 767-300ER
  '350': 'A-350',           // Airbus A350
  '330': 'A-330-900/300/200',           // Airbus A330
  '73N': 'B-737-800/700',   // Boeing 737-800/700
  '320': 'A-320-319',       // Airbus A320-319
  '717': 'B-717',           // Boeing 717
  '220': 'A-220-300'        // Airbus A220-300
};

// Get pay rate for specific aircraft and position
const getPayRate = (fleetCode, position, yearsOfService) => {
  try {
    const payScaleData = require('./extractPayData.js');
    const aircraftCode = FLEET_CODE_MAPPING[fleetCode];
    
    if (!aircraftCode) {
      console.warn(`No aircraft mapping found for fleet code: ${fleetCode}`);
      return null;
    }

    // Check if the aircraft exists in our pay scale data
    if (!payScaleData.payRates[position] || !payScaleData.payRates[position][aircraftCode]) {
      console.warn(`No pay rates found for ${position} on ${aircraftCode}`);
      return null;
    }

    // Get the pay rates array for this aircraft and position
    const payRatesArray = payScaleData.payRates[position][aircraftCode];
    
    // Ensure years of service is within bounds (1-12 years typically)
    const yearIndex = Math.max(0, Math.min(yearsOfService - 1, payRatesArray.length - 1));
    const hourlyRate = payRatesArray[yearIndex];
    
    return hourlyRate;
    
  } catch (error) {
    console.error('Error getting pay rate:', error);
    return null;
  }
};

// Calculate years of service from hire date
const calculateYearsOfService = (hireDate) => {
  if (!hireDate) return 1; // Default to year 1 if no hire date
  
  const hire = new Date(hireDate);
  const now = new Date();
  const years = now.getFullYear() - hire.getFullYear();
  const monthDiff = now.getMonth() - hire.getMonth();
  
  // Adjust if anniversary hasn't passed this year
  const adjustedYears = monthDiff < 0 || (monthDiff === 0 && now.getDate() < hire.getDate()) ? years - 1 : years;
  
  // Clamp to pay scale range (1-12 years, with 12+ being the top rate)
  return Math.min(Math.max(adjustedYears, 1), 12);
};

// Get pilot by employee ID
const getPilotByEmployeeId = async (employeeId) => {
  try {
    const pilot = await prisma.pilot.findUnique({
      where: { empNumber: employeeId },
      include: {
        senioritySnapshots: {
          orderBy: { reportDate: 'desc' },
          take: 1
        }
      }
    });
    
    if (!pilot) {
      return null;
    }
    
    // Add current seniority information if available
    const currentSeniority = pilot.senioritySnapshots[0] || null;
    
    return {
      ...pilot,
      currentSeniority
    };
  } catch (error) {
    console.error('Error fetching pilot by employee ID:', error);
    throw error;
  }
};

// Create user account
const createUserAccount = async (firebaseUid, email, employeeId, firstName, lastName) => {
  try {
    // Check if pilot exists
    const pilot = await prisma.pilot.findUnique({
      where: { empNumber: employeeId }
    });
    
    if (!pilot) {
      throw new Error('Employee ID not found in pilot database');
    }
    
    // Create user account
    const user = await prisma.user.create({
      data: {
        firebaseUid,
        email,
        employeeId,
        firstName,
        lastName,
        displayName: `${firstName} ${lastName}`,
        emailVerified: false
      }
    });
    
    return user;
  } catch (error) {
    console.error('Error creating user account:', error);
    throw error;
  }
};

// Get user by Firebase UID
const getUserByFirebaseUid = async (firebaseUid) => {
  try {
    const user = await prisma.user.findUnique({
      where: { firebaseUid },
      include: {
        pilot: {
          include: {
            senioritySnapshots: {
              orderBy: { reportDate: 'desc' },
              take: 1
            }
          }
        }
      }
    });
    
    return user;
  } catch (error) {
    console.error('Error fetching user by Firebase UID:', error);
    throw error;
  }
};

// Update user last login
const updateUserLastLogin = async (firebaseUid) => {
  try {
    const user = await prisma.user.update({
      where: { firebaseUid },
      data: { lastLoginDate: new Date() }
    });
    
    return user;
  } catch (error) {
    console.error('Error updating user last login:', error);
    throw error;
  }
};

// Verify user email
const verifyUserEmail = async (firebaseUid) => {
  try {
    const user = await prisma.user.update({
      where: { firebaseUid },
      data: { emailVerified: true }
    });
    
    return user;
  } catch (error) {
    console.error('Error verifying user email:', error);
    throw error;
  }
};

// Get pilot seniority data for authenticated user
const getPilotSeniorityAuth = async (employeeId) => {
  try {
    const pilot = await prisma.pilot.findUnique({
      where: { empNumber: employeeId },
      include: {
        senioritySnapshots: {
          orderBy: { reportDate: 'desc' },
          take: 10 // Get recent history
        }
      }
    });
    
    if (!pilot) {
      throw new Error('Pilot not found');
    }
    
    // Get the most recent seniority snapshot
    const currentSnapshot = pilot.senioritySnapshots[0];
    
    if (!currentSnapshot) {
      return {
        pilot,
        currentSeniority: null,
        history: []
      };
    }
    
    // Calculate years of service
    const yearsOfService = calculateYearsOfService(pilot.pilotHireDate);
    
    return {
      pilot: {
        ...pilot,
        yearsOfService
      },
      currentSeniority: currentSnapshot,
      history: pilot.senioritySnapshots
    };
  } catch (error) {
    console.error('Error fetching authenticated pilot seniority:', error);
    throw error;
  }
};

// Get full seniority data by pilot ID (PostgreSQL version)
const getPilotSeniorityById = async (pilotId) => {
  try {
    // Get pilot info
    const pilot = await prisma.pilot.findUnique({
      where: { id: parseInt(pilotId) }
    });
    
    if (!pilot) {
      throw new Error('Pilot not found');
    }
    
    // Get system seniority (best seniority number across all snapshots)
    const systemSeniorityResult = await prisma.senioritySnapshot.aggregate({
      where: { pilotId: parseInt(pilotId) },
      _min: { seniorityNumber: true }
    });
    
    const systemSeniority = systemSeniorityResult._min.seniorityNumber;
    
    // Get bases for seniority analysis
    const bases = await prisma.$queryRaw`
      SELECT DISTINCT "baseCity", COUNT(*) as "totalPilots"
      FROM "SenioritySnapshot" 
      WHERE "baseCity" IS NOT NULL 
        AND "baseCity" != ''
        AND "baseCity" NOT IN ('NBC (Special)', 'Instructor', 'Supervisor', 'Unassigned')
        AND "fleetCode" NOT IN ('FML', 'MIL', 'NEW', 'PLA', 'SIC', 'UNASSIGNED')
        AND "isPlaceholder" = false
        AND "reportDate" = (SELECT MAX("reportDate") FROM "SenioritySnapshot")
      GROUP BY "baseCity"
      ORDER BY "baseCity"
    `;
    
    const result = {
      pilot,
      systemSeniority,
      bases: []
    };
    
    // Process each base
    for (const base of bases) {
      // Get aircraft for this base
      const aircraft = await prisma.$queryRaw`
        SELECT DISTINCT "fleetCode", "fleetName",
          CASE 
            WHEN "fleetCode" IN ('220', '320', '717', '73N') THEN 1
            WHEN "fleetCode" IN ('330', '350', '765', '7ER') THEN 2
            ELSE 3
          END as sort_order
        FROM "SenioritySnapshot" 
        WHERE "baseCity" = ${base.baseCity}
          AND "fleetCode" IS NOT NULL
          AND "fleetCode" NOT IN ('FML', 'MIL', 'NEW', 'PLA', 'SIC', 'UNASSIGNED')
          AND "isPlaceholder" = false
          AND "reportDate" = (SELECT MAX("reportDate") FROM "SenioritySnapshot")
        ORDER BY sort_order, "fleetCode"
      `;
      
      const baseData = {
        baseCity: base.baseCity,
        totalPilots: parseInt(base.totalPilots),
        aircraft: []
      };
      
      // Process each aircraft
      for (const plane of aircraft) {
        // Get captain data
        const captainData = await prisma.$queryRaw`
          SELECT 
            COUNT(*) as total,
            SUM(CASE WHEN "seniorityNumber" < ${systemSeniority || 99999} THEN 1 ELSE 0 END) as senior
          FROM "SenioritySnapshot" 
          WHERE "baseCity" = ${base.baseCity}
            AND "fleetCode" = ${plane.fleetCode}
            AND "positionName" = 'Captain' 
            AND "fleetCode" NOT IN ('FML', 'MIL', 'NEW', 'PLA', 'SIC', 'UNASSIGNED')
            AND "isPlaceholder" = false
            AND "reportDate" = (SELECT MAX("reportDate") FROM "SenioritySnapshot")
        `;
        
        // Get first officer data
        const foData = await prisma.$queryRaw`
          SELECT 
            COUNT(*) as total,
            SUM(CASE WHEN "seniorityNumber" < ${systemSeniority || 99999} THEN 1 ELSE 0 END) as senior
          FROM "SenioritySnapshot" 
          WHERE "baseCity" = ${base.baseCity}
            AND "fleetCode" = ${plane.fleetCode}
            AND "positionName" = 'First Officer' 
            AND "fleetCode" NOT IN ('FML', 'MIL', 'NEW', 'PLA', 'SIC', 'UNASSIGNED')
            AND "isPlaceholder" = false
            AND "reportDate" = (SELECT MAX("reportDate") FROM "SenioritySnapshot")
        `;
        
        const captain = captainData[0];
        const fo = foData[0];
        
        // Calculate years of service for pay rates
        const yearsOfService = calculateYearsOfService(pilot.pilotHireDate);
        
        // Get pay rates for this aircraft
        const captainPayRate = getPayRate(plane.fleetCode, 'Captain', yearsOfService);
        const foPayRate = getPayRate(plane.fleetCode, 'First Officer', yearsOfService);
        
        const aircraftData = {
          fleetCode: plane.fleetCode,
          fleetName: plane.fleetName,
          captainTotal: parseInt(captain.total),
          captainRank: parseInt(captain.senior) + 1,
          captainAvailable: (parseInt(captain.senior) + 1) <= parseInt(captain.total),
          captainPay: captainPayRate,
          foTotal: parseInt(fo.total),
          foRank: parseInt(fo.senior) + 1,
          foAvailable: (parseInt(fo.senior) + 1) <= parseInt(fo.total),
          foPay: foPayRate
        };
        
        baseData.aircraft.push(aircraftData);
      }
      
      result.bases.push(baseData);
    }
    
    return result;
  } catch (error) {
    console.error('Error fetching pilot seniority by ID:', error);
    throw error;
  }
};

// Simple in-memory cache for seniority ranges (5 minute TTL)
const seniorityCache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Get seniority ranges (Sr, Mid, Jr numbers) for pilots currently assigned to specific aircraft/position (PostgreSQL version)
const getSeniorityRangesPostgreSQL = async (baseCity, fleetCode, position) => {
  const cacheKey = `${baseCity}-${fleetCode}-${position}`;
  
  // Check cache first
  if (seniorityCache.has(cacheKey)) {
    const cached = seniorityCache.get(cacheKey);
    if (Date.now() - cached.timestamp < CACHE_TTL) {
      console.log(`Cache hit for ${cacheKey}`);
      return cached.data;
    } else {
      seniorityCache.delete(cacheKey);
    }
  }

  try {
    // Get all pilots currently assigned to this specific base/fleet/position combination
    const results = await prisma.$queryRaw`
      SELECT s."seniorityNumber"
      FROM "SenioritySnapshot" s
      JOIN "Pilot" p ON s."pilotId" = p.id
      WHERE s."baseCity" = ${baseCity}
        AND s."fleetCode" = ${fleetCode}
        AND s."positionName" = ${position}
        AND s."fleetCode" NOT IN ('FML', 'MIL', 'NEW', 'PLA', 'SIC', 'UNASSIGNED')
        AND s."isPlaceholder" = false
        AND p."isRetired" = false
        AND s."reportDate" = (
          SELECT MAX("reportDate") 
          FROM "SenioritySnapshot" 
          WHERE "baseCity" = s."baseCity" AND "fleetCode" = s."fleetCode" AND "positionName" = s."positionName"
        )
      ORDER BY s."seniorityNumber" ASC
    `;
    
    if (!results || results.length === 0) {
      return { sr: null, mid: null, jr: null };
    }
    
    const seniorityNumbers = results.map(r => parseInt(r.seniorityNumber));
    const totalPilots = seniorityNumbers.length;
    
    const result = {
      sr: seniorityNumbers[0], // Most senior (lowest number)
      mid: seniorityNumbers[Math.floor(totalPilots / 2)], // Middle pilot
      jr: seniorityNumbers[totalPilots - 1] // Most junior (highest number)
    };
    
    // Cache the result
    seniorityCache.set(cacheKey, {
      data: result,
      timestamp: Date.now()
    });
    
    return result;
  } catch (error) {
    console.error('Error fetching seniority ranges:', error);
    throw error;
  }
};

module.exports = {
  getPilotByEmployeeId,
  createUserAccount,
  getUserByFirebaseUid,
  updateUserLastLogin,
  verifyUserEmail,
  getPilotSeniorityAuth,
  getPilotSeniorityById,
  getSeniorityRangesPostgreSQL
};