const fs = require('fs');
const csv = require('csv-parser');
const { PrismaClient } = require('@prisma/client');
const { parseCategoryCode } = require('./categoryParser');

const prisma = new PrismaClient();

// Parse date strings to Date objects
function parseDate(dateString) {
  if (!dateString || dateString.trim() === '') return null;
  
  // Handle different date formats
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
}

// Extract report date from filename
function extractReportDate(filename) {
  const match = filename.match(/(\w+)\s+(\d{4})/);
  if (match) {
    const [, month, year] = match;
    const monthMap = {
      'January': '01', 'February': '02', 'March': '03', 'April': '04',
      'May': '05', 'June': '06', 'July': '07', 'August': '08',
      'September': '09', 'October': '10', 'November': '11', 'December': '12'
    };
    const monthNum = monthMap[month] || '01';
    return new Date(`${year}-${monthNum}-01`);
  }
  return new Date();
}

// Import comprehensive seniority data with full career tracking
async function importSenioritySnapshot(filePath) {
  const filename = filePath.split('/').pop();
  const reportDate = extractReportDate(filename);
  const results = [];

  console.log(`Importing comprehensive seniority data: ${filename}`);
  console.log(`Report date: ${reportDate.toISOString()}`);

  return new Promise((resolve, reject) => {
    let recordCount = 0;
    
    let rowCount = 0;
    fs.createReadStream(filePath)
      .pipe(csv({
        skipLinesWithError: true,
        skipEmptyLines: true
      }))
      .on('data', (row) => {
        rowCount++;
        
        // Skip the first few rows which might be headers/titles
        if (rowCount <= 2) return;
        
        // Debug: print the row keys to understand the structure
        if (rowCount === 3) {
          console.log('Sample row keys:', Object.keys(row));
          console.log('Sample row values:', Object.values(row));
        }
        
        // Try to extract data from the confused CSV structure
        const keys = Object.keys(row);
        const values = Object.values(row);
        
        // Look for seniority number in the first column or as a key
        let seniorityNumber, empNumber, name, category, pilotHireDate, scheduledRetireDate;
        
        if (row.SENIORITY_NBR) {
          // Standard format
          seniorityNumber = parseInt(row.SENIORITY_NBR);
          empNumber = row.Emp_Nbr;
          name = row.Name;
          category = row.Category;
          pilotHireDate = parseDate(row.Pilot_Hire_Date);
          scheduledRetireDate = parseDate(row.Scheduled_Retire_Date);
        } else {
          // Malformed CSV - try to parse from the structure we saw
          const firstKey = keys[0]; // This might be the title row being used as key
          const secondKey = keys[1]; 
          
          // Try to find seniority number
          seniorityNumber = parseInt(values[0]) || parseInt(firstKey);
          empNumber = values[1] || values[0];
          name = values[2] || values[1];
          category = values[3] || values[2];
          pilotHireDate = parseDate(values[4] || values[3]);
          scheduledRetireDate = parseDate(values[5] || values[4] || secondKey);
        }

        if (seniorityNumber && empNumber && name) {
          const parsed = parseCategoryCode(category);
          results.push({
            seniorityNumber,
            empNumber: empNumber.toString(),
            name,
            category,
            pilotHireDate,
            scheduledRetireDate,
            reportDate,
            parsed
          });
          recordCount++;
        }
      })
      .on('end', async () => {
        try {
          console.log(`Processing ${recordCount} records...`);
          
          // Process in batches
          const batchSize = 500;
          for (let i = 0; i < results.length; i += batchSize) {
            const batch = results.slice(i, i + batchSize);
            
            for (const record of batch) {
              // Create or update pilot with comprehensive tracking
              const pilot = await prisma.pilot.upsert({
                where: { empNumber: record.empNumber },
                update: {
                  name: record.name,
                  pilotHireDate: record.pilotHireDate,
                  scheduledRetireDate: record.scheduledRetireDate,
                  lastSeenDate: record.reportDate,
                  isRetired: record.scheduledRetireDate && record.scheduledRetireDate < new Date(),
                },
                create: {
                  empNumber: record.empNumber,
                  name: record.name,
                  pilotHireDate: record.pilotHireDate,
                  scheduledRetireDate: record.scheduledRetireDate,
                  lastSeenDate: record.reportDate,
                  isRetired: record.scheduledRetireDate && record.scheduledRetireDate < new Date(),
                }
              });

              // Create seniority snapshot with full category parsing
              await prisma.senioritySnapshot.upsert({
                where: {
                  pilotId_reportDate: {
                    pilotId: pilot.id,
                    reportDate: record.reportDate
                  }
                },
                update: {
                  seniorityNumber: record.seniorityNumber,
                  category: record.category || '',
                  baseCode: record.parsed.base || '',
                  fleetCode: record.parsed.fleet || '',
                  positionCode: record.parsed.position || '',
                  baseCity: record.parsed.baseCity || '',
                  fleetName: record.parsed.fleetName || '',
                  positionName: record.parsed.positionName || '',
                },
                create: {
                  pilotId: pilot.id,
                  seniorityNumber: record.seniorityNumber,
                  category: record.category || '',
                  reportDate: record.reportDate,
                  baseCode: record.parsed.base || '',
                  fleetCode: record.parsed.fleet || '',
                  positionCode: record.parsed.position || '',
                  baseCity: record.parsed.baseCity || '',
                  fleetName: record.parsed.fleetName || '',
                  positionName: record.parsed.positionName || '',
                }
              });
            }
            
            console.log(`Processed batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(results.length/batchSize)}`);
          }

          // Record import
          await prisma.dataImport.create({
            data: {
              filename,
              fileType: 'seniority_snapshot',
              reportDate,
              recordCount
            }
          });

          console.log(`Successfully imported ${recordCount} seniority snapshots`);
          resolve({ recordCount, reportDate });
        } catch (error) {
          console.error('Import error:', error);
          reject(error);
        }
      })
      .on('error', reject);
  });
}

// Import category snapshot data (Captain/First Officer lists)
async function importCategorySnapshot(filePath) {
  const filename = filePath.split('/').pop();
  const reportDate = extractReportDate(filename);
  const categoryType = filename.includes('List_A') ? 'A' : 'B'; // A = Captain, B = First Officer
  const results = [];

  console.log(`Importing category snapshot: ${filename} (Type: ${categoryType})`);

  return new Promise((resolve, reject) => {
    let recordCount = 0;
    
    fs.createReadStream(filePath)
      .pipe(csv({
        skipLinesWithError: true,
        skipEmptyLines: true
      }))
      .on('data', (row) => {
        // Skip header rows
        if (!row.SNRTY_NBR && !row.seq) return;
        
        const sequenceNumber = parseInt(row.seq);
        const seniorityNumber = parseInt(row.SNRTY_NBR);
        const empNumber = row.Emp_Nbr;
        const name = row.Name;
        const base = row.Base;
        const fleet = row.Fleet;
        const position = row.Pos;
        const instructor = row.Instructor;

        if (sequenceNumber && seniorityNumber && empNumber) {
          const categoryCode = `${base}${fleet}${position}`;
          const parsed = parseCategoryCode(categoryCode);
          
          results.push({
            sequenceNumber,
            seniorityNumber,
            empNumber: empNumber.toString(),
            name,
            base,
            fleet,
            position,
            instructor,
            reportDate,
            categoryType,
            parsed
          });
          recordCount++;
        }
      })
      .on('end', async () => {
        try {
          console.log(`Processing ${recordCount} category records...`);
          
          const batchSize = 500;
          for (let i = 0; i < results.length; i += batchSize) {
            const batch = results.slice(i, i + batchSize);
            
            for (const record of batch) {
              // Find pilot
              const pilot = await prisma.pilot.findUnique({
                where: { empNumber: record.empNumber }
              });

              if (pilot) {
                await prisma.categorySnapshot.upsert({
                  where: {
                    pilotId_reportDate_categoryType: {
                      pilotId: pilot.id,
                      reportDate: record.reportDate,
                      categoryType: record.categoryType
                    }
                  },
                  update: {
                    sequenceNumber: record.sequenceNumber,
                    seniorityNumber: record.seniorityNumber,
                    baseCode: record.base || '',
                    fleetCode: record.fleet || '',
                    positionCode: record.position || '',
                    baseCity: record.parsed.baseCity || '',
                    fleetName: record.parsed.fleetName || '',
                    positionName: record.parsed.positionName || '',
                    instructor: record.instructor || '',
                  },
                  create: {
                    pilotId: pilot.id,
                    sequenceNumber: record.sequenceNumber,
                    seniorityNumber: record.seniorityNumber,
                    categoryType: record.categoryType,
                    baseCode: record.base || '',
                    fleetCode: record.fleet || '',
                    positionCode: record.position || '',
                    baseCity: record.parsed.baseCity || '',
                    fleetName: record.parsed.fleetName || '',
                    positionName: record.parsed.positionName || '',
                    instructor: record.instructor || '',
                    reportDate: record.reportDate
                  }
                });
              }
            }
            
            console.log(`Processed batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(results.length/batchSize)}`);
          }

          // Record import
          await prisma.dataImport.create({
            data: {
              filename,
              fileType: `category_snapshot_${categoryType}`,
              reportDate,
              recordCount
            }
          });

          console.log(`Successfully imported ${recordCount} category ${categoryType} records`);
          resolve({ recordCount, reportDate });
        } catch (error) {
          console.error('Import error:', error);
          reject(error);
        }
      })
      .on('error', reject);
  });
}

// Import ALL historical data
async function importAllHistoricalData() {
  try {
    console.log('🛩️ Starting comprehensive historical data import...');
    
    // Get all seniority files
    const seniorityFiles = [
      '/home/david/GoogleDrive/D_Data/sen_lists/January 2022 Seniority List(Sheet1).csv',
      '/home/david/GoogleDrive/D_Data/sen_lists/June 2024 Seniority List(Sheet1).csv',
      '/home/david/GoogleDrive/D_Data/sen_lists/July 2024 Seniority List(Sheet1).csv',
      '/home/david/GoogleDrive/D_Data/sen_lists/August 2024 Seniority List(Sheet1).csv',
      '/home/david/GoogleDrive/D_Data/sen_lists/September 2024 Seniority List(Sheet1) (1).csv',
      '/home/david/GoogleDrive/D_Data/sen_lists/October 2024 Seniority List(Sheet1).csv',
      '/home/david/GoogleDrive/D_Data/sen_lists/November 2024 Seniority List(Sheet1).csv',
      '/home/david/GoogleDrive/D_Data/sen_lists/December 2024 Seniority List(Sheet1).csv',
      '/home/david/GoogleDrive/D_Data/sen_lists/February 2025 Seniority List(Sheet1).csv',
      '/home/david/GoogleDrive/D_Data/sen_lists/July 2025 Seniority List(Sheet1).csv'
    ];

    // Get all category files
    const categoryFiles = [
      '/home/david/GoogleDrive/D_Data/cat_lists/01Jan2025Category_List_B(Sheet1).csv',
      '/home/david/GoogleDrive/D_Data/cat_lists/02Mar2025Category_List_A(Sheet1).csv',
      '/home/david/GoogleDrive/D_Data/cat_lists/31Jan2025Category_List_B(Sheet1).csv'
    ];

    console.log(`📊 Importing ${seniorityFiles.length} seniority lists...`);
    
    // Import all seniority lists (this builds the comprehensive pilot database)
    for (const file of seniorityFiles) {
      if (fs.existsSync(file)) {
        console.log(`\n⏳ Processing ${file.split('/').pop()}...`);
        await importSenioritySnapshot(file);
      } else {
        console.log(`⚠️ File not found: ${file}`);
      }
    }

    console.log(`\n📋 Importing ${categoryFiles.length} category lists...`);
    
    // Import all category lists (this adds detailed category seniority)
    for (const file of categoryFiles) {
      if (fs.existsSync(file)) {
        console.log(`\n⏳ Processing ${file.split('/').pop()}...`);
        await importCategorySnapshot(file);
      } else {
        console.log(`⚠️ File not found: ${file}`);
      }
    }

    // Get final statistics
    const [totalPilots, totalSnapshots, totalCategories] = await Promise.all([
      prisma.pilot.count(),
      prisma.senioritySnapshot.count(),
      prisma.categorySnapshot.count()
    ]);

    console.log('\n🎉 Comprehensive import completed!');
    console.log(`📈 Results:`);
    console.log(`   • Total pilots: ${totalPilots.toLocaleString()}`);
    console.log(`   • Seniority snapshots: ${totalSnapshots.toLocaleString()}`);
    console.log(`   • Category snapshots: ${totalCategories.toLocaleString()}`);
    
  } catch (error) {
    console.error('❌ Comprehensive import failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  importSenioritySnapshot,
  importCategorySnapshot,
  importAllHistoricalData
};

// Run if called directly
if (require.main === module) {
  importAllHistoricalData();
}