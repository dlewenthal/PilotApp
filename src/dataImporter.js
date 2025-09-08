const fs = require('fs');
const csv = require('csv-parser');
const { PrismaClient } = require('@prisma/client');

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

// Import seniority list data
async function importSeniorityList(filePath) {
  const filename = filePath.split('/').pop();
  const reportDate = extractReportDate(filename);
  const results = [];

  console.log(`Importing seniority list: ${filename}`);
  console.log(`Report date: ${reportDate.toISOString()}`);

  return new Promise((resolve, reject) => {
    let recordCount = 0;
    
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        // Skip header rows and empty rows
        if (!row.SENIORITY_NBR && !row['Sen\nNbr']) return;
        
        const seniorityNumber = parseInt(row.SENIORITY_NBR || row['Sen\nNbr']);
        const empNumber = row.Emp_Nbr || row['Emp\nNbr'];
        const name = row.Name;
        const category = row.Category;
        const pilotHireDate = parseDate(row.Pilot_Hire_Date || row['Pilot\nEmp Date']);
        const scheduledRetireDate = parseDate(row.Scheduled_Retire_Date || row['Scheduled\nRet Date']);

        if (seniorityNumber && empNumber && name) {
          results.push({
            seniorityNumber,
            empNumber: empNumber.toString(),
            name,
            category,
            pilotHireDate,
            scheduledRetireDate,
            reportDate
          });
          recordCount++;
        }
      })
      .on('end', async () => {
        try {
          console.log(`Processing ${recordCount} records...`);
          
          // Process in batches to handle large datasets
          const batchSize = 1000;
          for (let i = 0; i < results.length; i += batchSize) {
            const batch = results.slice(i, i + batchSize);
            
            for (const record of batch) {
              // Create or update pilot
              await prisma.pilot.upsert({
                where: { empNumber: record.empNumber },
                update: {
                  name: record.name,
                  pilotHireDate: record.pilotHireDate,
                  scheduledRetireDate: record.scheduledRetireDate,
                },
                create: {
                  empNumber: record.empNumber,
                  name: record.name,
                  pilotHireDate: record.pilotHireDate,
                  scheduledRetireDate: record.scheduledRetireDate,
                }
              });

              // Create seniority record
              const pilot = await prisma.pilot.findUnique({
                where: { empNumber: record.empNumber }
              });

              if (pilot) {
                await prisma.seniorityRecord.upsert({
                  where: {
                    pilotId_reportDate: {
                      pilotId: pilot.id,
                      reportDate: record.reportDate
                    }
                  },
                  update: {
                    seniorityNumber: record.seniorityNumber,
                    category: record.category || '',
                  },
                  create: {
                    pilotId: pilot.id,
                    seniorityNumber: record.seniorityNumber,
                    category: record.category || '',
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
              fileType: 'seniority_list',
              reportDate,
              recordCount
            }
          });

          console.log(`Successfully imported ${recordCount} seniority records`);
          resolve({ recordCount, reportDate });
        } catch (error) {
          console.error('Import error:', error);
          reject(error);
        }
      })
      .on('error', reject);
  });
}

// Import category assignment data
async function importCategoryList(filePath) {
  const filename = filePath.split('/').pop();
  const reportDate = extractReportDate(filename);
  const results = [];

  console.log(`Importing category list: ${filename}`);

  return new Promise((resolve, reject) => {
    let recordCount = 0;
    
    fs.createReadStream(filePath)
      .pipe(csv())
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
          results.push({
            sequenceNumber,
            seniorityNumber,
            empNumber: empNumber.toString(),
            name,
            base,
            fleet,
            position,
            instructor,
            reportDate
          });
          recordCount++;
        }
      })
      .on('end', async () => {
        try {
          console.log(`Processing ${recordCount} category records...`);
          
          const batchSize = 1000;
          for (let i = 0; i < results.length; i += batchSize) {
            const batch = results.slice(i, i + batchSize);
            
            for (const record of batch) {
              // Find pilot
              const pilot = await prisma.pilot.findUnique({
                where: { empNumber: record.empNumber }
              });

              if (pilot) {
                await prisma.categoryAssignment.upsert({
                  where: {
                    pilotId_reportDate: {
                      pilotId: pilot.id,
                      reportDate: record.reportDate
                    }
                  },
                  update: {
                    sequenceNumber: record.sequenceNumber,
                    seniorityNumber: record.seniorityNumber,
                    base: record.base || '',
                    fleet: record.fleet || '',
                    position: record.position || '',
                    instructor: record.instructor || '',
                  },
                  create: {
                    pilotId: pilot.id,
                    sequenceNumber: record.sequenceNumber,
                    seniorityNumber: record.seniorityNumber,
                    base: record.base || '',
                    fleet: record.fleet || '',
                    position: record.position || '',
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
              fileType: 'category_list',
              reportDate,
              recordCount
            }
          });

          console.log(`Successfully imported ${recordCount} category records`);
          resolve({ recordCount, reportDate });
        } catch (error) {
          console.error('Import error:', error);
          reject(error);
        }
      })
      .on('error', reject);
  });
}

// Import all data files
async function importAllData() {
  try {
    const seniorityFiles = [
      '/home/david/GoogleDrive/D_Data/sen_lists/February 2025 Seniority List(Sheet1).csv',
      '/home/david/GoogleDrive/D_Data/sen_lists/January 2022 Seniority List(Sheet1).csv',
    ];

    const categoryFiles = [
      '/home/david/GoogleDrive/D_Data/cat_lists/02Mar2025Category_List_A(Sheet1).csv',
      '/home/david/GoogleDrive/D_Data/cat_lists/31Jan2025Category_List_B(Sheet1).csv',
    ];

    console.log('Starting data import...');

    // Import seniority lists
    for (const file of seniorityFiles) {
      if (fs.existsSync(file)) {
        await importSeniorityList(file);
      }
    }

    // Import category lists  
    for (const file of categoryFiles) {
      if (fs.existsSync(file)) {
        await importCategoryList(file);
      }
    }

    console.log('Data import completed!');
  } catch (error) {
    console.error('Import failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  importSeniorityList,
  importCategoryList,
  importAllData
};

// Run if called directly
if (require.main === module) {
  importAllData();
}