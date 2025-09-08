const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const { parseCategoryCode } = require('./src/categoryParser');

const prisma = new PrismaClient({
  log: ['error', 'warn']
});

function parseDate(dateString) {
  if (!dateString || dateString.trim() === '') return null;
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
}

async function fullImportAugust2025() {
  const filePath = '/home/david/my-react-app/temp-import/August 2025 Seniority List(Sheet1).csv';
  const reportDate = new Date('2025-08-01');
  
  console.log('🚀 Starting FULL August 2025 import...');
  console.log(`📁 File: ${filePath.split('/').pop()}`);
  console.log(`📅 Report Date: ${reportDate.toISOString().slice(0, 10)}`);
  console.log(`⏰ Start time: ${new Date().toLocaleTimeString()}`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    
    // Find header row  
    let headerRowIndex = -1;
    for (let i = 0; i < Math.min(5, lines.length); i++) {
      if (lines[i].includes('SENIORITY_NBR')) {
        headerRowIndex = i;
        break;
      }
    }
    
    console.log(`📋 Header found at line ${headerRowIndex + 1}`);
    console.log(`📊 Total lines in file: ${lines.length}`);
    
    const dataLines = lines.slice(headerRowIndex + 1).filter(line => line.trim());
    console.log(`📝 Data rows to process: ${dataLines.length}`);
    
    let imported = 0;
    let skipped = 0;
    let errors = [];
    const startTime = Date.now();
    let lastProgressTime = startTime;
    
    // Process in smaller chunks to avoid memory issues
    const BATCH_SIZE = 100;
    
    for (let batchStart = 0; batchStart < dataLines.length; batchStart += BATCH_SIZE) {
      const batchEnd = Math.min(batchStart + BATCH_SIZE, dataLines.length);
      const batchLines = dataLines.slice(batchStart, batchEnd);
      
      console.log(`\n📦 Processing batch ${Math.floor(batchStart / BATCH_SIZE) + 1}/${Math.ceil(dataLines.length / BATCH_SIZE)} (records ${batchStart + 1}-${batchEnd})`);
      
      // Process batch
      for (let i = 0; i < batchLines.length; i++) {
        const line = batchLines[i];
        const globalLineNum = batchStart + i + headerRowIndex + 2; // Adjust for header
        
        try {
          // Parse CSV line
          const values = [];
          let currentValue = '';
          let inQuotes = false;
          
          for (let j = 0; j < line.length; j++) {
            const char = line[j];
            if (char === '"') {
              inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
              values.push(currentValue.trim().replace(/"/g, ''));
              currentValue = '';
            } else {
              currentValue += char;
            }
          }
          values.push(currentValue.trim().replace(/"/g, ''));
          
          const rawSeniorityNumber = parseInt(values[0]);
          const empNumber = values[1];
          const name = values[2];
          const category = values[3] || '';
          const pilotHireDate = parseDate(values[4]);
          const scheduledRetireDate = parseDate(values[5]);
          
          if (!rawSeniorityNumber || !empNumber || !name) {
            errors.push({ line: globalLineNum, issue: 'Missing required fields', empNumber: empNumber || 'unknown' });
            skipped++;
            continue;
          }
          
          const parsed = parseCategoryCode(category);
          const isRetired = scheduledRetireDate ? scheduledRetireDate < new Date() : false;
          
          // Find or create pilot
          let pilot = await prisma.pilot.findUnique({
            where: { empNumber: empNumber.toString() }
          });
          
          if (!pilot) {
            pilot = await prisma.pilot.create({
              data: {
                empNumber: empNumber.toString(),
                name,
                pilotHireDate,
                scheduledRetireDate,
                isRetired
              }
            });
          } else {
            await prisma.pilot.update({
              where: { id: pilot.id },
              data: {
                scheduledRetireDate,
                isRetired
              }
            });
          }
          
          // Create seniority snapshot
          await prisma.senioritySnapshot.create({
            data: {
              seniorityNumber: rawSeniorityNumber,
              category,
              reportDate,
              baseCode: parsed.base,
              fleetCode: parsed.fleet,
              positionCode: parsed.position,
              baseCity: parsed.baseCity,
              fleetName: parsed.fleetName,
              positionName: parsed.positionName,
              pilotId: pilot.id,
              isPlaceholder: rawSeniorityNumber > 90000
            }
          });
          
          imported++;
          
        } catch (rowError) {
          errors.push({ 
            line: globalLineNum, 
            issue: rowError.message, 
            empNumber: values && values[1] ? values[1] : 'unknown'
          });
          skipped++;
        }
      }
      
      // Progress reporting
      const currentTime = Date.now();
      const elapsedSinceLastProgress = currentTime - lastProgressTime;
      const totalElapsed = currentTime - startTime;
      const recordsPerSecond = imported > 0 ? (imported / (totalElapsed / 1000)).toFixed(1) : '0';
      
      console.log(`   ✅ Batch complete: +${batchLines.length - (errors.length + skipped - (imported - batchLines.length))} imported`);
      console.log(`   📊 Progress: ${imported.toLocaleString()}/${dataLines.length} (${((imported / dataLines.length) * 100).toFixed(1)}%)`);
      console.log(`   ⚡ Speed: ${recordsPerSecond} records/sec`);
      console.log(`   ⏰ Elapsed: ${Math.floor(totalElapsed / 1000)}s`);
      
      // Estimate remaining time
      if (imported > 0) {
        const avgTimePerRecord = totalElapsed / imported;
        const remainingRecords = dataLines.length - imported;
        const estimatedRemainingTime = Math.floor((remainingRecords * avgTimePerRecord) / 1000);
        console.log(`   🔮 Est. remaining: ${estimatedRemainingTime}s`);
      }
      
      lastProgressTime = currentTime;
      
      // Small delay to prevent overwhelming the database
      await new Promise(resolve => setTimeout(resolve, 10));
    }
    
    const totalTime = Date.now() - startTime;
    
    console.log(`\n🎯 FINAL IMPORT RESULTS:`);
    console.log(`   ✅ Successfully imported: ${imported.toLocaleString()}`);
    console.log(`   ⏭️ Skipped: ${skipped.toLocaleString()}`);
    console.log(`   ❌ Errors: ${errors.length.toLocaleString()}`);
    console.log(`   ⏰ Total time: ${Math.floor(totalTime / 1000)}s (${(totalTime / 60000).toFixed(1)} min)`);
    
    if (imported > 0) {
      const successRate = ((imported / (imported + skipped + errors.length)) * 100).toFixed(2);
      const avgSpeed = (imported / (totalTime / 1000)).toFixed(1);
      console.log(`   📈 Success rate: ${successRate}%`);
      console.log(`   ⚡ Average speed: ${avgSpeed} records/sec`);
    }
    
    // Show error sample if any
    if (errors.length > 0 && errors.length <= 10) {
      console.log(`\n⚠️ Error Details:`);
      errors.slice(0, 10).forEach(error => {
        console.log(`     Line ${error.line} (Emp ${error.empNumber}): ${error.issue}`);
      });
      if (errors.length > 10) {
        console.log(`     ... and ${errors.length - 10} more errors`);
      }
    }
    
    // Record import in database
    if (imported > 0) {
      console.log(`\n💾 Recording import in database...`);
      await prisma.dataImport.create({
        data: {
          filename: 'August 2025 Seniority List(Sheet1).csv',
          fileType: 'seniority_snapshot',
          reportDate,
          recordCount: imported
        }
      });
      console.log(`✅ Import recorded successfully`);
    }
    
    return { imported, skipped, errors, success: imported > 0 };
    
  } catch (error) {
    console.error(`❌ FULL IMPORT FAILED: ${error.message}`);
    return { imported: 0, skipped: 0, errors: [{ issue: error.message }], success: false };
  } finally {
    await prisma.$disconnect();
  }
}

fullImportAugust2025().then(result => {
  console.log(`\n🏁 Import process completed at ${new Date().toLocaleTimeString()}`);
  if (result.success) {
    console.log('🎉 August 2025 seniority data successfully imported!');
    console.log('   Ready to verify and test React app functionality.');
  } else {
    console.log('💥 Import failed - check errors above');
  }
}).catch(error => {
  console.error('❌ CRITICAL IMPORT ERROR:', error);
});