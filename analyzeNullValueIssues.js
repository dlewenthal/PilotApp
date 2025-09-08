// Extract and analyze null value issues from import process
const errorLog = `
❌ Error processing record 0574703: isRetired must not be null (June 2024)
❌ Error processing record 0574703: isRetired must not be null (July 2024) 
❌ Error processing record 0321574: isRetired must not be null (August 2024)
❌ Error processing record 0386130: isRetired must not be null (August 2024)
❌ Error processing record 0574703: isRetired must not be null (August 2024)
❌ Error processing record 0687201: isRetired must not be null (September 2024)
❌ Error processing record 0321574: isRetired must not be null (September 2024)
❌ Error processing record 0386130: isRetired must not be null (September 2024)
❌ Error processing record 0574703: isRetired must not be null (September 2024)
❌ Error processing record 0687201: isRetired must not be null (October 2024)
❌ Error processing record 0574703: isRetired must not be null (October 2024)
`;

function analyzeNullValueIssues() {
  console.log('⚠️  Null Value Issues Analysis\n');
  console.log('📋 Summary of Import Errors:\n');
  
  // Parse error patterns
  const errorLines = errorLog.trim().split('\n').filter(line => line.includes('❌'));
  
  // Extract unique employee numbers with issues
  const employeeErrors = {};
  const dateErrors = {};
  
  errorLines.forEach(line => {
    const empMatch = line.match(/record (\d+):/);
    const dateMatch = line.match(/\((.*?)\)/);
    
    if (empMatch && dateMatch) {
      const empNumber = empMatch[1];
      const dateContext = dateMatch[1];
      
      if (!employeeErrors[empNumber]) {
        employeeErrors[empNumber] = [];
      }
      employeeErrors[empNumber].push(dateContext);
      
      if (!dateErrors[dateContext]) {
        dateErrors[dateContext] = [];
      }
      dateErrors[dateContext].push(empNumber);
    }
  });
  
  console.log('👤 Problematic Employee Numbers:');
  Object.entries(employeeErrors).forEach(([empNum, dates]) => {
    console.log(`   ${empNum}: Failed in ${dates.length} files (${dates.join(', ')})`);
  });
  
  console.log('\n📅 Errors by Import File:');
  Object.entries(dateErrors).forEach(([date, empNums]) => {
    console.log(`   ${date}: ${empNums.length} pilots failed (${[...new Set(empNums)].join(', ')})`);
  });
  
  console.log('\n🔍 Root Cause Analysis:');
  console.log('   Issue: isRetired field cannot be null');
  console.log('   Cause: Some pilots have null scheduledRetireDate');
  console.log('   Logic: isRetired = scheduledRetireDate && scheduledRetireDate < new Date()');
  console.log('   Result: When scheduledRetireDate is null, expression evaluates to null');
  
  console.log('\n🔧 Required Fix:');
  console.log('   Change: isRetired = scheduledRetireDate ? scheduledRetireDate < new Date() : false');
  console.log('   Meaning: If no retirement date, assume not retired (false)');
  
  console.log('\n📊 Impact Assessment:');
  const uniqueEmployees = Object.keys(employeeErrors).length;
  const totalErrors = errorLines.length;
  console.log(`   Unique pilots affected: ${uniqueEmployees}`);
  console.log(`   Total error instances: ${totalErrors}`);
  console.log(`   Files affected: ${Object.keys(dateErrors).length}`);
  
  console.log('\n💡 Recommendation:');
  console.log('   1. Fix the isRetired logic in the import script');
  console.log('   2. Re-run import for affected pilots only');
  console.log('   3. Verify data completeness after fix');
  
  return {
    uniqueEmployees,
    totalErrors,
    filesAffected: Object.keys(dateErrors).length,
    employeeList: Object.keys(employeeErrors),
    errorsByFile: dateErrors
  };
}

// Run analysis
if (require.main === module) {
  const analysis = analyzeNullValueIssues();
  console.log(`\n📝 Analysis Complete - ${analysis.uniqueEmployees} pilots need attention`);
}

module.exports = { analyzeNullValueIssues };