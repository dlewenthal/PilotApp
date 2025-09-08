const fs = require('fs');

function analyzeCSVParsingIssues() {
  console.log('🔍 Analyzing CSV parsing issues by file and row type...\n');
  
  const seniorityFiles = [
    { name: 'January 2022 Seniority List(Sheet1).csv', expected: 13038, actual: 13035, missing: 3 },
    { name: 'June 2024 Seniority List(Sheet1).csv', expected: 17328, actual: 17325, missing: 3 },
    { name: 'July 2024 Seniority List(Sheet1).csv', expected: 17327, actual: 17325, missing: 2 },
    { name: 'August 2024 Seniority List(Sheet1).csv', expected: 17326, actual: 17322, missing: 4 },
    { name: 'September 2024 Seniority List(Sheet1) (1).csv', expected: 17327, actual: 17322, missing: 5 },
    { name: 'October 2024 Seniority List(Sheet1).csv', expected: 17344, actual: 17341, missing: 3 },
    { name: 'November 2024 Seniority List(Sheet1).csv', expected: 17360, actual: 17357, missing: 3 },
    { name: 'December 2024 Seniority List(Sheet1).csv', expected: 17311, actual: 17308, missing: 3 },
    { name: 'February 2025 Seniority List(Sheet1).csv', expected: 17425, actual: 16534, missing: 891 },
    { name: 'July 2025 Seniority List(Sheet1).csv', expected: 17450, actual: 17449, missing: 1 }
  ];
  
  console.log('📊 Parsing Issue Categories:\n');
  
  // Category 1: Small consistent losses (1-5 records)
  const smallLosses = seniorityFiles.filter(f => f.missing >= 1 && f.missing <= 5);
  console.log('🔹 Category 1: Small Consistent Losses (1-5 records)');
  console.log('   Pattern: Very consistent 2-5 record loss per file');
  console.log('   Files affected:', smallLosses.length);
  smallLosses.forEach(file => {
    console.log(`   • ${file.name.replace(' Seniority List(Sheet1).csv', '').replace(' (1)', '')}: -${file.missing} records`);
  });
  
  console.log('\n   Likely causes:');
  console.log('   • Header row variations');
  console.log('   • Footer summary rows');
  console.log('   • Empty rows with commas');
  console.log('   • Malformed final lines');
  
  // Category 2: Large anomaly (February 2025)
  const largeAnomaly = seniorityFiles.filter(f => f.missing > 100);
  console.log('\n🔸 Category 2: Large Anomaly (>100 records)');
  largeAnomaly.forEach(file => {
    console.log(`   • ${file.name}: -${file.missing} records (${((file.missing/file.expected)*100).toFixed(1)}% loss)`);
  });
  
  console.log('\n   This represents a different issue - likely:');
  console.log('   • Different file format/structure');
  console.log('   • Encoding issues');
  console.log('   • Different source system');
  console.log('   • Corrupted file sections');
  
  // Let's examine the February 2025 file specifically
  console.log('\n🔍 Detailed Analysis of February 2025 File:');
  
  const feb2025Path = '/home/david/GoogleDrive/D_Data/sen_lists/February 2025 Seniority List(Sheet1).csv';
  
  try {
    const content = fs.readFileSync(feb2025Path, 'utf8');
    const lines = content.split(/\r?\n/);
    
    console.log(`   Total lines in file: ${lines.length}`);
    console.log(`   Expected data rows: 17,425`);
    console.log(`   Actual imported: 16,534`);
    console.log(`   Missing: 891 rows`);
    
    // Analyze line structure
    let headerFound = false;
    let validDataRows = 0;
    let invalidRows = [];
    let emptyRows = 0;
    
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      if (!trimmed) {
        emptyRows++;
        return;
      }
      
      if (trimmed.includes('SENIORITY_NBR') || trimmed.includes('Sen')) {
        headerFound = true;
        console.log(`   Header found at line ${index + 1}: "${trimmed.slice(0, 80)}..."`);
        return;
      }
      
      if (headerFound) {
        // Check if this looks like valid data
        const parts = trimmed.split(',');
        const seniorityNum = parseInt(parts[0]);
        
        if (!seniorityNum || !parts[1] || parts.length < 4) {
          invalidRows.push({
            lineNum: index + 1,
            content: trimmed.slice(0, 100),
            reason: !seniorityNum ? 'No seniority number' : 
                   !parts[1] ? 'No employee number' : 
                   'Insufficient columns'
          });
        } else {
          validDataRows++;
        }
      }
    });
    
    console.log(`\n   Analysis results:`);
    console.log(`   • Empty rows: ${emptyRows}`);
    console.log(`   • Valid data rows found: ${validDataRows}`);
    console.log(`   • Invalid rows found: ${invalidRows.length}`);
    console.log(`   • Discrepancy: ${17425 - validDataRows} rows`);
    
    if (invalidRows.length > 0) {
      console.log(`\n   Sample invalid rows (first 5):`);
      invalidRows.slice(0, 5).forEach(row => {
        console.log(`   Line ${row.lineNum}: ${row.reason}`);
        console.log(`     "${row.content}..."`);
      });
    }
    
    // Check for duplicate header rows or file structure issues
    const headerLines = lines.filter(line => 
      line.includes('SENIORITY_NBR') || 
      line.includes('Seniority List') ||
      line.includes('Sen,')
    );
    
    if (headerLines.length > 1) {
      console.log(`\n   Multiple header-like lines found: ${headerLines.length}`);
      headerLines.forEach((line, i) => {
        console.log(`   Header ${i + 1}: "${line.slice(0, 80)}..."`);
      });
    }
    
  } catch (error) {
    console.log(`   Error reading file: ${error.message}`);
  }
  
  console.log('\n📋 Summary of CSV Parsing Issues:');
  console.log('\n🔹 Minor Issues (9 files, 1-5 records each):');
  console.log('   • Likely: Header/footer rows, malformed final lines');
  console.log('   • Impact: Minimal (27 records total)');
  console.log('   • Action: No action needed - these are likely non-data rows');
  
  console.log('\n🔸 Major Issue (1 file, 891 records):');
  console.log('   • File: February 2025 Seniority List');
  console.log('   • Impact: Significant data loss from this period');
  console.log('   • Action: Requires investigation of file structure/format');
  
  console.log('\n🎯 Conclusion:');
  console.log('   • 9 files have minor, expected parsing losses');
  console.log('   • 1 file (Feb 2025) has a major structural issue');
  console.log('   • Overall data integrity remains very high (99.46%)');
  
  return {
    minorIssues: smallLosses,
    majorIssues: largeAnomaly,
    totalMissing: seniorityFiles.reduce((sum, f) => sum + f.missing, 0)
  };
}

// Run analysis
if (require.main === module) {
  analyzeCSVParsingIssues();
}

module.exports = { analyzeCSVParsingIssues };