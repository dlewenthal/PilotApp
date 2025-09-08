const fs = require('fs');
const { parseCategoryCode } = require('./src/categoryParser');

// Test the category parser with empty values
console.log('🧪 Testing category parser with empty values:');
console.log('Empty string:', JSON.stringify(parseCategoryCode('')));
console.log('Null:', JSON.stringify(parseCategoryCode(null)));
console.log('Undefined:', JSON.stringify(parseCategoryCode(undefined)));
console.log('Normal category:', JSON.stringify(parseCategoryCode('ATL350A')));

// Check how many records in Feb 2025 have empty categories
const content = fs.readFileSync('/home/david/GoogleDrive/D_Data/sen_lists/February 2025 Seniority List(Sheet1).csv', 'utf8');
const lines = content.split(/\r?\n/);

let emptyCategories = 0;
let totalRecords = 0;
let headerFound = false;

lines.forEach((line, index) => {
  const trimmed = line.trim();
  if (!trimmed) return;
  
  if (trimmed.includes('SENIORITY_NBR')) {
    headerFound = true;
    return;
  }
  
  if (headerFound) {
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
    
    if (values.length >= 4) {
      totalRecords++;
      const category = values[3];
      if (!category || category.trim() === '') {
        emptyCategories++;
      }
    }
  }
});

console.log('\n📊 February 2025 Category Analysis:');
console.log('Total records:', totalRecords);
console.log('Empty categories:', emptyCategories);
console.log('Records with categories:', totalRecords - emptyCategories);