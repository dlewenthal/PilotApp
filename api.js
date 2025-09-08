const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Database connection
const dbPath = path.join(__dirname, 'prisma', 'dev.db');
const db = new sqlite3.Database(dbPath);

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
    
    console.log(`Pay rate for ${fleetCode} (${aircraftCode}) ${position} year ${yearsOfService}: $${hourlyRate}`);
    return hourlyRate;
    
  } catch (error) {
    console.error('Error getting pay rate:', error);
    return null;
  }
};

// API endpoints for pilot seniority lookup

// Search pilots by name
const searchPilots = (name, callback) => {
  const searchTerm = `%${name.toUpperCase()}%`;
  
  const query = `
    SELECT id, empNumber, name, pilotHireDate, scheduledRetireDate
    FROM Pilot 
    WHERE name LIKE ? AND isRetired = 0
    ORDER BY name
    LIMIT 20
  `;
  
  db.all(query, [searchTerm], (err, rows) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
};

// Get pilot seniority data
const getPilotSeniority = (pilotId, callback) => {
  // First get pilot info
  const pilotQuery = `
    SELECT id, empNumber, name, pilotHireDate, scheduledRetireDate
    FROM Pilot 
    WHERE id = ?
  `;
  
  db.get(pilotQuery, [pilotId], (err, pilot) => {
    if (err) {
      callback(err, null);
      return;
    }
    
    if (!pilot) {
      callback(new Error('Pilot not found'), null);
      return;
    }
    
    // Calculate pilot's years of service for pay calculations
    const yearsOfService = calculateYearsOfService(pilot.pilotHireDate);
    
    // Get system seniority (best seniority number across all snapshots)
    const seniorityQuery = `
      SELECT MIN(seniorityNumber) as systemSeniority
      FROM SenioritySnapshot
      WHERE pilotId = ?
    `;
    
    db.get(seniorityQuery, [pilotId], (err, seniorityResult) => {
      if (err) {
        callback(err, null);
        return;
      }
      
      // Get seniority data by base - only real airports
      const basesQuery = `
        SELECT DISTINCT baseCity, COUNT(*) as totalPilots
        FROM SenioritySnapshot 
        WHERE baseCity IS NOT NULL 
          AND baseCity != ''
          AND baseCity NOT IN ('NBC (Special)', 'Instructor', 'Supervisor', 'Unassigned')
          AND fleetCode NOT IN ('FML', 'MIL', 'NEW', 'PLA', 'SIC', 'UNASSIGNED')
          AND isPlaceholder = 0
          AND reportDate = (SELECT MAX(reportDate) FROM SenioritySnapshot)
        GROUP BY baseCity
        ORDER BY baseCity
      `;
      
      db.all(basesQuery, [], (err, bases) => {
        if (err) {
          callback(err, null);
          return;
        }
        
        const result = {
          pilot: pilot,
          systemSeniority: seniorityResult?.systemSeniority || null,
          bases: []
        };
        
        let basesProcessed = 0;
        
        bases.forEach((base) => {
          // Get aircraft for this base - only operational aircraft
          const aircraftQuery = `
            SELECT DISTINCT fleetCode, fleetName
            FROM SenioritySnapshot 
            WHERE baseCity = ?
              AND fleetCode IS NOT NULL
              AND fleetCode NOT IN ('FML', 'MIL', 'NEW', 'PLA', 'SIC', 'UNASSIGNED')
              AND isPlaceholder = 0
              AND reportDate = (SELECT MAX(reportDate) FROM SenioritySnapshot)
            ORDER BY 
              CASE 
                WHEN fleetCode IN ('220', '320', '717', '73N') THEN 1
                WHEN fleetCode IN ('330', '350', '765', '7ER') THEN 2
                ELSE 3
              END,
              fleetCode
          `;
          
          db.all(aircraftQuery, [base.baseCity], (err, aircraft) => {
            if (err) {
              callback(err, null);
              return;
            }
            
            const baseData = {
              baseCity: base.baseCity,
              totalPilots: base.totalPilots,
              aircraft: []
            };
            
            let aircraftProcessed = 0;
            
            aircraft.forEach((plane) => {
              // Get captain data
              const captainQuery = `
                SELECT 
                  COUNT(*) as total,
                  SUM(CASE WHEN seniorityNumber < ? THEN 1 ELSE 0 END) as senior
                FROM SenioritySnapshot 
                WHERE baseCity = ? 
                  AND fleetCode = ? 
                  AND positionName = 'Captain' 
                  AND fleetCode NOT IN ('FML', 'MIL', 'NEW', 'PLA', 'SIC', 'UNASSIGNED')
                  AND isPlaceholder = 0
                  AND reportDate = (SELECT MAX(reportDate) FROM SenioritySnapshot)
              `;
              
              db.get(captainQuery, [result.systemSeniority || 99999, base.baseCity, plane.fleetCode], (err, captainData) => {
                if (err) {
                  callback(err, null);
                  return;
                }
                
                // Get first officer data
                const foQuery = `
                  SELECT 
                    COUNT(*) as total,
                    SUM(CASE WHEN seniorityNumber < ? THEN 1 ELSE 0 END) as senior
                  FROM SenioritySnapshot 
                  WHERE baseCity = ? 
                    AND fleetCode = ? 
                    AND positionName = 'First Officer' 
                    AND fleetCode NOT IN ('FML', 'MIL', 'NEW', 'PLA', 'SIC', 'UNASSIGNED')
                    AND isPlaceholder = 0
                    AND reportDate = (SELECT MAX(reportDate) FROM SenioritySnapshot)
                `;
                
                db.get(foQuery, [result.systemSeniority || 99999, base.baseCity, plane.fleetCode], (err, foData) => {
                  if (err) {
                    callback(err, null);
                    return;
                  }
                  
                  // Get pay rates for this aircraft
                  const captainPayRate = getPayRate(plane.fleetCode, 'Captain', yearsOfService);
                  const foPayRate = getPayRate(plane.fleetCode, 'First Officer', yearsOfService);
                  
                  const aircraftData = {
                    fleetCode: plane.fleetCode,
                    fleetName: plane.fleetName,
                    captainTotal: captainData.total,
                    captainRank: captainData.senior + 1,
                    captainAvailable: (captainData.senior + 1) <= captainData.total,
                    captainPay: captainPayRate,
                    foTotal: foData.total,
                    foRank: foData.senior + 1,
                    foAvailable: (foData.senior + 1) <= foData.total,
                    foPay: foPayRate
                  };
                  
                  baseData.aircraft.push(aircraftData);
                  aircraftProcessed++;
                  
                  if (aircraftProcessed === aircraft.length) {
                    result.bases.push(baseData);
                    basesProcessed++;
                    
                    if (basesProcessed === bases.length) {
                      callback(null, result);
                    }
                  }
                });
              });
            });
            
            if (aircraft.length === 0) {
              result.bases.push(baseData);
              basesProcessed++;
              
              if (basesProcessed === bases.length) {
                callback(null, result);
              }
            }
          });
        });
        
        if (bases.length === 0) {
          callback(null, result);
        }
      });
    });
  });
};

// Get pilot snapshot data (System Snapshot format)
const getPilotSnapshot = (pilotId, callback) => {
  // First get pilot info
  const pilotQuery = `
    SELECT id, empNumber, name, pilotHireDate, scheduledRetireDate
    FROM Pilot 
    WHERE id = ?
  `;
  
  db.get(pilotQuery, [pilotId], (err, pilot) => {
    if (err) {
      callback(err, null);
      return;
    }
    
    if (!pilot) {
      callback(new Error('Pilot not found'), null);
      return;
    }
    
    // Calculate pilot's years of service for pay calculations
    const yearsOfService = calculateYearsOfService(pilot.pilotHireDate);
    
    // Get system seniority
    const seniorityQuery = `
      SELECT MIN(seniorityNumber) as systemSeniority
      FROM SenioritySnapshot
      WHERE pilotId = ?
    `;
    
    db.get(seniorityQuery, [pilotId], (err, seniorityResult) => {
      if (err) {
        callback(err, null);
        return;
      }
      
      // Get bases for snapshot format
      const basesQuery = `
        SELECT DISTINCT baseCity
        FROM SenioritySnapshot 
        WHERE baseCity IS NOT NULL 
          AND baseCity != ''
          AND baseCity NOT IN ('NBC (Special)', 'Instructor', 'Supervisor', 'Unassigned')
          AND fleetCode NOT IN ('FML', 'MIL', 'NEW', 'PLA', 'SIC', 'UNASSIGNED')
          AND isPlaceholder = 0
          AND reportDate = (SELECT MAX(reportDate) FROM SenioritySnapshot)
        ORDER BY baseCity
      `;
      
      db.all(basesQuery, [], (err, bases) => {
        if (err) {
          callback(err, null);
          return;
        }
        
        const result = {
          pilot: pilot,
          systemSeniority: seniorityResult?.systemSeniority || null,
          bases: []
        };
        
        let basesProcessed = 0;
        
        bases.forEach((base) => {
          // Get aircraft for this base
          const aircraftQuery = `
            SELECT DISTINCT fleetCode, fleetName
            FROM SenioritySnapshot 
            WHERE baseCity = ?
              AND fleetCode IS NOT NULL
              AND fleetCode NOT IN ('FML', 'MIL', 'NEW', 'PLA', 'SIC', 'UNASSIGNED')
              AND isPlaceholder = 0
              AND reportDate = (SELECT MAX(reportDate) FROM SenioritySnapshot)
            ORDER BY 
              CASE 
                WHEN fleetCode IN ('220', '320', '717', '73N') THEN 1
                WHEN fleetCode IN ('330', '350', '765', '7ER') THEN 2
                ELSE 3
              END,
              fleetCode
          `;
          
          db.all(aircraftQuery, [base.baseCity], (err, aircraft) => {
            if (err) {
              callback(err, null);
              return;
            }
            
            const baseData = {
              baseCity: base.baseCity,
              aircraft: []
            };
            
            let aircraftProcessed = 0;
            
            aircraft.forEach((plane) => {
              // Get captain data for snapshot format
              const captainQuery = `
                SELECT 
                  COUNT(*) as total,
                  SUM(CASE WHEN seniorityNumber < ? THEN 1 ELSE 0 END) as senior
                FROM SenioritySnapshot 
                WHERE baseCity = ? 
                  AND fleetCode = ? 
                  AND positionName = 'Captain' 
                  AND fleetCode NOT IN ('FML', 'MIL', 'NEW', 'PLA', 'SIC', 'UNASSIGNED')
                  AND isPlaceholder = 0
                  AND reportDate = (SELECT MAX(reportDate) FROM SenioritySnapshot)
              `;
              
              db.get(captainQuery, [result.systemSeniority || 99999, base.baseCity, plane.fleetCode], (err, captainData) => {
                if (err) {
                  callback(err, null);
                  return;
                }
                
                // Get first officer data for snapshot format
                const foQuery = `
                  SELECT 
                    COUNT(*) as total,
                    SUM(CASE WHEN seniorityNumber < ? THEN 1 ELSE 0 END) as senior
                  FROM SenioritySnapshot 
                  WHERE baseCity = ? 
                    AND fleetCode = ? 
                    AND positionName = 'First Officer' 
                    AND fleetCode NOT IN ('FML', 'MIL', 'NEW', 'PLA', 'SIC', 'UNASSIGNED')
                    AND isPlaceholder = 0
                    AND reportDate = (SELECT MAX(reportDate) FROM SenioritySnapshot)
                `;
                
                db.get(foQuery, [result.systemSeniority || 99999, base.baseCity, plane.fleetCode], (err, foData) => {
                  if (err) {
                    callback(err, null);
                    return;
                  }
                  
                  const captainRank = captainData.senior + 1;
                  const foRank = foData.senior + 1;
                  
                  // Get pay rates for this aircraft
                  const captainPayRate = getPayRate(plane.fleetCode, 'Captain', yearsOfService);
                  const foPayRate = getPayRate(plane.fleetCode, 'First Officer', yearsOfService);
                  
                  const aircraftData = {
                    fleetCode: plane.fleetCode,
                    fleetName: plane.fleetName,
                    captain: {
                      total: captainData.total,
                      senior: captainData.senior,
                      junior: captainData.total - captainData.senior,
                      rank: captainRank,
                      available: captainRank <= captainData.total,
                      pay: captainPayRate
                    },
                    firstOfficer: {
                      total: foData.total,
                      senior: foData.senior,
                      junior: foData.total - foData.senior,
                      rank: foRank,
                      available: foRank <= foData.total,
                      pay: foPayRate
                    }
                  };
                  
                  baseData.aircraft.push(aircraftData);
                  aircraftProcessed++;
                  
                  if (aircraftProcessed === aircraft.length) {
                    result.bases.push(baseData);
                    basesProcessed++;
                    
                    if (basesProcessed === bases.length) {
                      callback(null, result);
                    }
                  }
                });
              });
            });
            
            if (aircraft.length === 0) {
              result.bases.push(baseData);
              basesProcessed++;
              
              if (basesProcessed === bases.length) {
                callback(null, result);
              }
            }
          });
        });
        
        if (bases.length === 0) {
          callback(null, result);
        }
      });
    });
  });
};

// Get database tables
const getDatabaseTables = (callback) => {
  const query = `
    SELECT name, type 
    FROM sqlite_master 
    WHERE type='table' 
    ORDER BY name
  `;
  
  db.all(query, [], (err, tables) => {
    if (err) {
      callback(err, null);
      return;
    }
    
    // Get row counts for each table
    let processed = 0;
    const tablesWithCounts = [];
    
    if (tables.length === 0) {
      callback(null, []);
      return;
    }
    
    tables.forEach((table) => {
      const countQuery = `SELECT COUNT(*) as count FROM ${table.name}`;
      db.get(countQuery, [], (err, result) => {
        tablesWithCounts.push({
          name: table.name,
          type: table.type,
          count: err ? 0 : result.count
        });
        
        processed++;
        if (processed === tables.length) {
          callback(null, tablesWithCounts.sort((a, b) => a.name.localeCompare(b.name)));
        }
      });
    });
  });
};

// Get table data
const getTableData = (tableName, callback) => {
  // Sanitize table name (basic protection)
  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(tableName)) {
    callback(new Error('Invalid table name'), null);
    return;
  }
  
  // Get table schema
  const schemaQuery = `PRAGMA table_info(${tableName})`;
  db.all(schemaQuery, [], (err, schema) => {
    if (err) {
      callback(err, null);
      return;
    }
    
    const columns = schema.map(col => col.name);
    
    // Get table data (limited to first 1000 rows for performance)
    const dataQuery = `SELECT * FROM ${tableName} LIMIT 1000`;
    db.all(dataQuery, [], (err, rows) => {
      if (err) {
        callback(err, null);
        return;
      }
      
      callback(null, {
        columns: columns,
        rows: rows
      });
    });
  });
};

// Get seniority ranges (Sr, Mid, Jr numbers) for pilots currently assigned to specific aircraft/position
const getSeniorityRanges = (baseCity, fleetCode, position, callback) => {
  // Get all pilots currently assigned to this specific base/fleet/position combination
  const query = `
    SELECT s.seniorityNumber
    FROM SenioritySnapshot s
    JOIN Pilot p ON s.pilotId = p.id
    WHERE s.baseCity = ? 
      AND s.fleetCode = ? 
      AND s.positionName = ?
      AND s.fleetCode NOT IN ('FML', 'MIL', 'NEW', 'PLA', 'SIC', 'UNASSIGNED')
      AND s.isPlaceholder = 0
      AND p.isRetired = 0
      AND s.reportDate = (
        SELECT MAX(reportDate) 
        FROM SenioritySnapshot 
        WHERE baseCity = s.baseCity AND fleetCode = s.fleetCode AND positionName = s.positionName
      )
    ORDER BY s.seniorityNumber ASC
  `;
  
  db.all(query, [baseCity, fleetCode, position], (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    
    if (!results || results.length === 0) {
      callback(null, { sr: null, mid: null, jr: null });
      return;
    }
    
    const seniorityNumbers = results.map(r => r.seniorityNumber);
    const totalPilots = seniorityNumbers.length;
    
    callback(null, {
      sr: seniorityNumbers[0], // Most senior (lowest number)
      mid: seniorityNumbers[Math.floor(totalPilots / 2)], // Middle pilot
      jr: seniorityNumbers[totalPilots - 1] // Most junior (highest number)
    });
  });
};

module.exports = {
  searchPilots,
  getPilotSeniority,
  getPilotSnapshot,
  getDatabaseTables,
  getTableData,
  getSeniorityRanges
};