const { PrismaClient } = require('@prisma/client');
const payScaleData = require('./extractPayData');

const prisma = new PrismaClient();

async function importPayScale() {
  try {
    console.log('Starting pay scale import...');
    
    // Create the pay scale record
    const payScale = await prisma.payScale.create({
      data: {
        effectiveDate: new Date(payScaleData.effectiveDate),
        expirationDate: null, // Current active pay scale
        contractVersion: payScaleData.contractVersion,
        isActive: true
      }
    });
    
    console.log(`Created pay scale: ${payScale.contractVersion} (ID: ${payScale.id})`);
    
    // Import aircraft data
    const aircraftRecords = [];
    for (const aircraft of payScaleData.aircraft) {
      const aircraftRecord = await prisma.aircraft.create({
        data: {
          aircraftCode: aircraft.code,
          aircraftName: aircraft.name,
          aircraftType: aircraft.type,
          payCategory: aircraft.payCategory,
          isActive: true
        }
      });
      aircraftRecords.push(aircraftRecord);
      console.log(`Imported aircraft: ${aircraft.code}`);
    }
    
    console.log(`Imported ${aircraftRecords.length} aircraft`);
    
    // Import pay rates
    let totalRatesImported = 0;
    
    for (const position of ['Captain', 'First Officer']) {
      for (const aircraftCode in payScaleData.payRates[position]) {
        // Find the aircraft record
        const aircraft = aircraftRecords.find(a => a.aircraftCode === aircraftCode);
        if (!aircraft) {
          console.warn(`Aircraft not found: ${aircraftCode}`);
          continue;
        }
        
        const rates = payScaleData.payRates[position][aircraftCode];
        
        // Import rates for each year of service (1-12)
        for (let yearOfService = 1; yearOfService <= rates.length; yearOfService++) {
          const hourlyRate = rates[yearOfService - 1]; // Array is 0-indexed
          
          if (hourlyRate && hourlyRate > 0) {
            await prisma.payRate.create({
              data: {
                aircraftId: aircraft.id,
                payScaleId: payScale.id,
                position: position,
                yearOfService: yearOfService,
                hourlyRate: hourlyRate
              }
            });
            totalRatesImported++;
          }
        }
        
        console.log(`Imported ${rates.length} rates for ${position} ${aircraftCode}`);
      }
    }
    
    console.log(`\\nImport completed successfully!`);
    console.log(`- Pay Scale: ${payScale.contractVersion}`);
    console.log(`- Aircraft: ${aircraftRecords.length}`);
    console.log(`- Pay Rates: ${totalRatesImported}`);
    
    // Verify the import with some sample queries
    console.log('\\n--- Sample Queries ---');
    
    // Get B-777 Captain Year 12 rate
    const b777CaptainRate = await prisma.payRate.findFirst({
      where: {
        payScale: { contractVersion: '2025+' },
        aircraft: { aircraftCode: 'B-777' },
        position: 'Captain',
        yearOfService: 12
      },
      include: {
        aircraft: true,
        payScale: true
      }
    });
    
    if (b777CaptainRate) {
      console.log(`B-777 Captain Year 12: $${b777CaptainRate.hourlyRate}/hour`);
    }
    
    // Get First Officer rates for EMB-190/CRJ-900
    const embFirstOfficerRates = await prisma.payRate.findMany({
      where: {
        payScale: { contractVersion: '2025+' },
        aircraft: { aircraftCode: 'EMB-190/CRJ-900' },
        position: 'First Officer'
      },
      orderBy: { yearOfService: 'asc' },
      include: { aircraft: true }
    });
    
    console.log(`EMB-190/CRJ-900 First Officer rates: Year 1: $${embFirstOfficerRates[0]?.hourlyRate}, Year 12: $${embFirstOfficerRates[11]?.hourlyRate}`);
    
  } catch (error) {
    console.error('Error importing pay scale:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the import
importPayScale()
  .then(() => {
    console.log('\\nPay scale import completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Import failed:', error);
    process.exit(1);
  });