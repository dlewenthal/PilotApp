const fs = require('fs');
const csv = require('csv-parser');
const { PrismaClient } = require('@prisma/client');
const { parseCategoryCode } = require('./categoryParser');

const prisma = new PrismaClient();

// Quick import for category data
async function importCategoryData() {
  console.log('🚀 Quick category data import...');
  
  const filePath = '/home/david/GoogleDrive/D_Data/cat_lists/02Mar2025Category_List_A(Sheet1).csv';
  const reportDate = new Date('2025-03-02');
  let recordCount = 0;
  
  return new Promise((resolve, reject) => {
    const results = [];
    let rowCount = 0;
    
    fs.createReadStream(filePath)
      .pipe(csv({
        skipLinesWithError: true,
        skipEmptyLines: true
      }))
      .on('data', (row) => {
        rowCount++;
        
        // Skip the first row (title) and invalid rows
        if (rowCount <= 1 || !row.seq || !row.SNRTY_NBR) return;
        
        console.log(`Processing row ${rowCount}: ${row.seq}, ${row.SNRTY_NBR}, ${row.Emp_Nbr}`);
        
        const sequenceNumber = parseInt(row.seq);
        const seniorityNumber = parseInt(row.SNRTY_NBR);
        const empNumber = row.Emp_Nbr;
        const name = row.Name;
        const base = row.Base;
        const fleet = row.Fleet;
        const position = row.Pos;
        
        if (sequenceNumber && seniorityNumber && empNumber) {
          results.push({
            sequenceNumber,
            seniorityNumber,
            empNumber: empNumber.toString(),
            name,
            base,
            fleet,
            position,
            reportDate,
            categoryType: 'A'
          });
          recordCount++;
        }
      })
      .on('end', async () => {
        try {
          console.log(`💾 Saving ${recordCount} category A records...`);
          
          for (const record of results) {
            // Find pilot
            const pilot = await prisma.pilot.findUnique({
              where: { empNumber: record.empNumber }
            });

            if (pilot) {
              const parsed = parseCategoryCode(`${record.base}${record.fleet}${record.position}`);
              
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
                  baseCity: parsed.baseCity || '',
                  fleetName: parsed.fleetName || '',
                  positionName: parsed.positionName || '',
                  instructor: '',
                },
                create: {
                  pilotId: pilot.id,
                  sequenceNumber: record.sequenceNumber,
                  seniorityNumber: record.seniorityNumber,
                  categoryType: record.categoryType,
                  baseCode: record.base || '',
                  fleetCode: record.fleet || '',
                  positionCode: record.position || '',
                  baseCity: parsed.baseCity || '',
                  fleetName: parsed.fleetName || '',
                  positionName: parsed.positionName || '',
                  instructor: '',
                  reportDate: record.reportDate
                }
              });
            }
          }
          
          console.log(`✅ Successfully imported ${recordCount} category records`);
          resolve({ recordCount });
        } catch (error) {
          console.error('Import error:', error);
          reject(error);
        }
      })
      .on('error', reject);
  });
}

// Run import
if (require.main === module) {
  importCategoryData()
    .then(() => {
      console.log('🎉 Category import completed');
      prisma.$disconnect();
    })
    .catch(error => {
      console.error('❌ Category import failed:', error);
      prisma.$disconnect();
    });
}

module.exports = { importCategoryData };