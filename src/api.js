const { PrismaClient } = require('@prisma/client');
const express = require('express');
const cors = require('cors');
const { parseCategoryCode } = require('./categoryParser');
const { analyzePilotSeniorityOptions, analyzePilotCareerProgression, compareFleetSeniority } = require('./seniorityAnalyzer');

const app = express();
const prisma = new PrismaClient();
const port = 3001;

app.use(cors());
app.use(express.json());

// Get dashboard statistics
app.get('/api/stats', async (req, res) => {
  try {
    const [totalPilots, totalSeniorityRecords, recentImports] = await Promise.all([
      prisma.pilot.count(),
      prisma.senioritySnapshot.count(),
      prisma.dataImport.findMany({
        orderBy: { importedAt: 'desc' },
        take: 5
      })
    ]);

    // Get category breakdown with parsing
    const rawCategoryStats = await prisma.senioritySnapshot.groupBy({
      by: ['category'],
      _count: { category: true },
      orderBy: { _count: { category: 'desc' } }
    });

    // Parse categories and group by base/fleet
    const baseStats = {};
    const fleetStats = {};
    const positionStats = {};

    rawCategoryStats.forEach(stat => {
      const parsed = parseCategoryCode(stat.category);
      
      // Group by base city
      if (parsed.baseCity) {
        baseStats[parsed.baseCity] = (baseStats[parsed.baseCity] || 0) + stat._count.category;
      }
      
      // Group by fleet
      if (parsed.fleetName) {
        fleetStats[parsed.fleetName] = (fleetStats[parsed.fleetName] || 0) + stat._count.category;
      }
      
      // Group by position
      if (parsed.positionName) {
        positionStats[parsed.positionName] = (positionStats[parsed.positionName] || 0) + stat._count.category;
      }
    });

    const categoryStats = {
      raw: rawCategoryStats.slice(0, 10),
      byBase: Object.entries(baseStats).sort((a, b) => b[1] - a[1]).slice(0, 10),
      byFleet: Object.entries(fleetStats).sort((a, b) => b[1] - a[1]).slice(0, 10),
      byPosition: Object.entries(positionStats).sort((a, b) => b[1] - a[1])
    };

    // Get retirement projections (next 12 months)
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1);
    
    const upcomingRetirements = await prisma.pilot.count({
      where: {
        scheduledRetireDate: {
          gte: new Date(),
          lte: nextYear
        }
      }
    });

    res.json({
      totalPilots,
      totalSeniorityRecords,
      upcomingRetirements,
      categoryStats,
      recentImports
    });
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Failed to load statistics' });
  }
});

// Get pilots with pagination and search
app.get('/api/pilots', async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 50, 
      search = '', 
      category = '' 
    } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    let whereClause = {};
    
    if (search) {
      whereClause.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { empNumber: { contains: search } }
      ];
    }

    let pilots = await prisma.pilot.findMany({
      where: whereClause,
      include: {
        senioritySnapshots: {
          orderBy: { reportDate: 'desc' },
          take: 1
        }
      },
      orderBy: { empNumber: 'asc' },
      skip,
      take: parseInt(limit)
    });

    // Enhance pilots with parsed category information
    pilots = pilots.map(pilot => {
      if (pilot.senioritySnapshots.length > 0) {
        const latestSnapshot = pilot.senioritySnapshots[0];
        const parsedCategory = parseCategoryCode(latestSnapshot.category);
        
        return {
          ...pilot,
          parsedCategory,
          senioritySnapshots: pilot.senioritySnapshots.map(snapshot => ({
            ...snapshot,
            parsedCategory: parseCategoryCode(snapshot.category)
          }))
        };
      }
      return pilot;
    });

    // Filter by category if selected
    if (category) {
      pilots = pilots.filter(pilot => {
        if (pilot.senioritySnapshots.length === 0) return false;
        const parsed = pilot.parsedCategory;
        return parsed.base.includes(category) || 
               parsed.baseCity.toLowerCase().includes(category.toLowerCase()) ||
               parsed.fleet.includes(category) ||
               parsed.fleetName.toLowerCase().includes(category.toLowerCase());
      });
    }

    // Get total count for pagination
    const totalCount = await prisma.pilot.count({ where: whereClause });

    res.json({
      pilots,
      totalCount,
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalCount / parseInt(limit))
    });
  } catch (error) {
    console.error('Pilots error:', error);
    res.status(500).json({ error: 'Failed to load pilots' });
  }
});

// Get individual pilot details
app.get('/api/pilots/:empNumber', async (req, res) => {
  try {
    const pilot = await prisma.pilot.findUnique({
      where: { empNumber: req.params.empNumber },
      include: {
        senioritySnapshots: {
          orderBy: { reportDate: 'desc' }
        },
        categorySnapshots: {
          orderBy: { reportDate: 'desc' }
        }
      }
    });

    if (!pilot) {
      return res.status(404).json({ error: 'Pilot not found' });
    }

    res.json(pilot);
  } catch (error) {
    console.error('Pilot detail error:', error);
    res.status(500).json({ error: 'Failed to load pilot details' });
  }
});

// Seniority analysis endpoints
app.get('/api/analyze/seniority/:empNumber', async (req, res) => {
  try {
    const analysis = await analyzePilotSeniorityOptions(req.params.empNumber);
    res.json(analysis);
  } catch (error) {
    console.error('Seniority analysis error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/analyze/progression/:empNumber', async (req, res) => {
  try {
    const progression = await analyzePilotCareerProgression(req.params.empNumber);
    res.json(progression);
  } catch (error) {
    console.error('Career progression error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/analyze/fleet-comparison/:empNumber/:position', async (req, res) => {
  try {
    const { empNumber, position } = req.params;
    const { baseCode } = req.query;
    const comparison = await compareFleetSeniority(empNumber, position, baseCode);
    res.json(comparison);
  } catch (error) {
    console.error('Fleet comparison error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Pay Scale API Endpoints

// Get current/active pay scale
app.get('/api/pay-scale/current', async (req, res) => {
  try {
    const payScale = await prisma.payScale.findFirst({
      where: { isActive: true },
      orderBy: { effectiveDate: 'desc' },
      include: {
        payRates: {
          include: {
            aircraft: true
          },
          orderBy: [
            { aircraft: { payCategory: 'desc' } },
            { position: 'desc' },
            { yearOfService: 'asc' }
          ]
        }
      }
    });

    if (!payScale) {
      return res.status(404).json({ error: 'No active pay scale found' });
    }

    res.json(payScale);
  } catch (error) {
    console.error('Pay scale error:', error);
    res.status(500).json({ error: 'Failed to load pay scale' });
  }
});

// Get all aircraft with pay categories
app.get('/api/pay-scale/aircraft', async (req, res) => {
  try {
    const aircraft = await prisma.aircraft.findMany({
      where: { isActive: true },
      orderBy: [
        { payCategory: 'desc' },
        { aircraftCode: 'asc' }
      ]
    });

    res.json(aircraft);
  } catch (error) {
    console.error('Aircraft error:', error);
    res.status(500).json({ error: 'Failed to load aircraft' });
  }
});

// Get pay rates for specific aircraft and position
app.get('/api/pay-scale/rates/:aircraftCode/:position', async (req, res) => {
  try {
    const { aircraftCode, position } = req.params;
    
    const rates = await prisma.payRate.findMany({
      where: {
        aircraft: { aircraftCode: aircraftCode },
        position: position,
        payScale: { isActive: true }
      },
      include: {
        aircraft: true,
        payScale: true
      },
      orderBy: { yearOfService: 'asc' }
    });

    if (rates.length === 0) {
      return res.status(404).json({ error: 'Pay rates not found for this aircraft/position' });
    }

    res.json(rates);
  } catch (error) {
    console.error('Pay rates error:', error);
    res.status(500).json({ error: 'Failed to load pay rates' });
  }
});

// Calculate pilot pay based on current assignment and years of service
app.get('/api/pilot-pay/:empNumber', async (req, res) => {
  try {
    const { empNumber } = req.params;
    
    // Get pilot with latest seniority snapshot
    const pilot = await prisma.pilot.findUnique({
      where: { empNumber },
      include: {
        senioritySnapshots: {
          orderBy: { reportDate: 'desc' },
          take: 1
        }
      }
    });

    if (!pilot) {
      return res.status(404).json({ error: 'Pilot not found' });
    }

    if (pilot.senioritySnapshots.length === 0) {
      return res.status(404).json({ error: 'No seniority data found for pilot' });
    }

    const latestSnapshot = pilot.senioritySnapshots[0];
    
    // Calculate years of service
    let yearsOfService = 1;
    if (pilot.pilotHireDate) {
      const hireDate = new Date(pilot.pilotHireDate);
      const today = new Date();
      yearsOfService = Math.min(12, Math.max(1, Math.floor((today - hireDate) / (365.25 * 24 * 60 * 60 * 1000)) + 1));
    }

    // Map fleet name to aircraft code (you may need to enhance this mapping)
    const fleetToAircraftMap = {
      '777': 'B-777',
      '350': 'A-350',
      '757': 'B-757',
      '767': 'B-767-300ER',
      '321': 'A-321',
      '320': 'A-320-319',
      '737': 'B-737-800/700',
      '220': 'A-220-300',
      '717': 'B-717',
      '195': 'EMB-195',
      '190': 'EMB-190/CRJ-900',
      'Military': 'B-777' // Default for military assignments
    };

    let aircraftCode = 'B-777'; // Default
    for (const [key, code] of Object.entries(fleetToAircraftMap)) {
      if (latestSnapshot.fleetName.includes(key)) {
        aircraftCode = code;
        break;
      }
    }

    // Get pay rate
    const payRate = await prisma.payRate.findFirst({
      where: {
        aircraft: { aircraftCode },
        position: latestSnapshot.positionName,
        yearOfService: yearsOfService,
        payScale: { isActive: true }
      },
      include: {
        aircraft: true,
        payScale: true
      }
    });

    const result = {
      pilot: {
        empNumber: pilot.empNumber,
        name: pilot.name,
        hireDate: pilot.pilotHireDate
      },
      currentAssignment: {
        base: latestSnapshot.baseCity,
        fleet: latestSnapshot.fleetName,
        position: latestSnapshot.positionName,
        seniorityNumber: latestSnapshot.seniorityNumber
      },
      payCalculation: {
        yearsOfService,
        mappedAircraft: aircraftCode,
        hourlyRate: payRate?.hourlyRate || null,
        estimatedAnnualPay: payRate ? Math.round(payRate.hourlyRate * 80 * 12) : null, // Assuming 80 hours/month
        payScale: payRate?.payScale.contractVersion || null
      }
    };

    if (!payRate) {
      result.payCalculation.note = 'Pay rate not found for this aircraft/position combination';
    }

    res.json(result);
  } catch (error) {
    console.error('Pilot pay calculation error:', error);
    res.status(500).json({ error: 'Failed to calculate pilot pay' });
  }
});

// Get pay comparison across all aircraft for a specific position and years of service
app.get('/api/pay-scale/comparison/:position/:yearsOfService', async (req, res) => {
  try {
    const { position, yearsOfService } = req.params;
    
    const rates = await prisma.payRate.findMany({
      where: {
        position,
        yearOfService: parseInt(yearsOfService),
        payScale: { isActive: true }
      },
      include: {
        aircraft: true,
        payScale: true
      },
      orderBy: { hourlyRate: 'desc' }
    });

    res.json(rates);
  } catch (error) {
    console.error('Pay comparison error:', error);
    res.status(500).json({ error: 'Failed to load pay comparison' });
  }
});

app.listen(port, () => {
  console.log(`Pilot API server running at http://localhost:${port}`);
});

module.exports = app;