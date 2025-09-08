const fs = require('fs');
const { parseCategoryCode } = require('./src/categoryParser');

function parseDate(dateString) {
  if (!dateString || dateString.trim() === '') return null;
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
}

function analyzeFeb2025File() {
  console.log('🔍 Deep analysis of February 2025 Seniority List...\n');
  
  const filePath = '/home/david/GoogleDrive/D_Data/sen_lists/February 2025 Seniority List(Sheet1).csv';
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    
    console.log(`📄 File: ${filePath.split('/').pop()}`);
    console.log(`📊 Total lines: ${lines.length}`);
    
    // Show first 10 lines to understand structure
    console.log('\n🔍 First 10 lines:');
    lines.slice(0, 10).forEach((line, i) => {
      console.log(`   ${(i + 1).toString().padStart(2)}: "${line}"`);
    });
    
    // Find header row
    let headerRowIndex = -1;
    for (let i = 0; i < Math.min(5, lines.length); i++) {
      if (lines[i].includes('SENIORITY_NBR')) {
        headerRowIndex = i;
        break;
      }
    }
    
    if (headerRowIndex === -1) {
      console.log('❌ No header row found');
      return;
    }
    
    console.log(`\n✅ Header found at line ${headerRowIndex + 1}`);
    console.log(`📋 Header: "${lines[headerRowIndex]}"`);
    
    // Simulate the import process exactly like the importer
    const results = [];
    let recordCount = 0;
    let errorCount = 0;
    const errors = [];
    
    console.log(`\n🔄 Processing data rows (starting from line ${headerRowIndex + 2})...`);
    
    for (let i = headerRowIndex + 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // Split CSV line (handle quoted values) - exact same logic as importer
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
      
      if (values.length < 4) {
        errors.push({
          line: i + 1,
          issue: `Insufficient columns (${values.length})`,
          content: line.slice(0, 100)
        });
        errorCount++;
        continue;
      }
      
      const seniorityNumber = parseInt(values[0]);
      const empNumber = values[1];
      const name = values[2];
      const category = values[3];
      const pilotHireDate = parseDate(values[4]);
      const scheduledRetireDate = parseDate(values[5]);
      
      if (!seniorityNumber) {
        errors.push({
          line: i + 1,
          issue: `Invalid seniority number: "${values[0]}"`,
          content: line.slice(0, 100)
        });
        errorCount++;
        continue;
      }
      
      if (!empNumber) {
        errors.push({
          line: i + 1,
          issue: `Missing employee number`,
          content: line.slice(0, 100)
        });
        errorCount++;
        continue;
      }
      
      if (!name) {
        errors.push({
          line: i + 1,
          issue: `Missing name`,
          content: line.slice(0, 100)
        });
        errorCount++;
        continue;
      }
      
      // Check for the retirement date issue that causes null isRetired
      let retirementIssue = false;
      if (scheduledRetireDate === null) {
        // This would cause: isRetired = scheduledRetireDate && scheduledRetireDate < new Date()
        // Which evaluates to null when scheduledRetireDate is null
        retirementIssue = true;
      }
      
      const parsed = parseCategoryCode(category);
      results.push({
        line: i + 1,
        seniorityNumber,
        empNumber: empNumber.toString(),
        name,
        category: category || '',
        pilotHireDate,
        scheduledRetireDate,
        retirementIssue,
        parsed
      });
      recordCount++;
      
      // Debug first few and last few records
      if (recordCount <= 5 || recordCount >= 17420) {
        console.log(`   Record ${recordCount}: Line ${i + 1}, Seniority #${seniorityNumber}, Emp ${empNumber}, Retirement: ${scheduledRetireDate ? 'SET' : 'NULL'}`);
      }
    }
    
    console.log(`\n📊 Processing Results:`);
    console.log(`   Valid records parsed: ${recordCount}`);
    console.log(`   Records with parsing errors: ${errorCount}`);
    console.log(`   Expected in database: ${16534}`);
    console.log(`   Missing from database: ${recordCount - 16534}`);
    
    // Analyze retirement date issues
    const retirementIssues = results.filter(r => r.retirementIssue);
    console.log(`   Records with null retirement dates: ${retirementIssues.length}`);
    
    if (retirementIssues.length > 0) {
      console.log(`\n⚠️  Sample records with null retirement dates:`);
      retirementIssues.slice(0, 10).forEach(record => {
        console.log(`   Line ${record.line}: #${record.seniorityNumber} ${record.empNumber} ${record.name.slice(0, 20)}`);
      });
    }
    
    // Show parsing errors
    if (errors.length > 0) {
      console.log(`\n❌ Sample parsing errors:`);
      errors.slice(0, 10).forEach(error => {
        console.log(`   Line ${error.line}: ${error.issue}`);
        console.log(`     "${error.content}..."`);
      });
    }
    
    // Check for duplicate employee numbers within this file
    const empNumbers = results.map(r => r.empNumber);
    const uniqueEmpNumbers = new Set(empNumbers);
    const duplicates = empNumbers.filter((emp, index) => empNumbers.indexOf(emp) !== index);
    
    if (duplicates.length > 0) {
      console.log(`\n🔄 Duplicate employee numbers found: ${duplicates.length}`);
      const uniqueDuplicates = [...new Set(duplicates)];
      uniqueDuplicates.slice(0, 10).forEach(empNum => {
        const records = results.filter(r => r.empNumber === empNum);
        console.log(`   Employee ${empNum}: appears ${records.length} times`);
        records.forEach(record => {
          console.log(`     Line ${record.line}: #${record.seniorityNumber}`);
        });
      });
    } else {
      console.log(`\n✅ No duplicate employee numbers found`);
    }
    
    // Check for unusual seniority number patterns
    const seniorityNumbers = results.map(r => r.seniorityNumber).sort((a, b) => a - b);
    const gaps = [];
    for (let i = 1; i < seniorityNumbers.length; i++) {
      if (seniorityNumbers[i] - seniorityNumbers[i-1] > 1) {
        gaps.push({
          from: seniorityNumbers[i-1],
          to: seniorityNumbers[i],
          gap: seniorityNumbers[i] - seniorityNumbers[i-1] - 1
        });
      }
    }
    
    console.log(`\n🔢 Seniority number analysis:`);
    console.log(`   Lowest: ${seniorityNumbers[0]}`);
    console.log(`   Highest: ${seniorityNumbers[seniorityNumbers.length - 1]}`);
    console.log(`   Gaps found: ${gaps.length}`);
    
    if (gaps.length > 0) {
      console.log(`   Sample gaps:`);
      gaps.slice(0, 5).forEach(gap => {
        console.log(`     Gap from #${gap.from} to #${gap.to} (${gap.gap} missing numbers)`);
      });
    }
    
    console.log(`\n💡 Potential causes of 891 missing database records:`);
    console.log(`   1. Null retirement date constraint failures: ${retirementIssues.length} records`);
    console.log(`   2. Duplicate employee number constraint failures: ${duplicates.length} records`);
    console.log(`   3. Category parsing failures: ${results.filter(r => !r.parsed.base).length} records`);
    console.log(`   4. Other database constraint violations`);
    console.log(`   5. Transaction rollbacks during batch processing`);
    
    return {
      totalParsed: recordCount,
      retirementIssues: retirementIssues.length,
      duplicates: duplicates.length,
      parsingErrors: errorCount
    };
    
  } catch (error) {
    console.error('❌ Analysis failed:', error.message);
  }
}

// Run analysis
if (require.main === module) {
  analyzeFeb2025File();
}

module.exports = { analyzeFeb2025File };