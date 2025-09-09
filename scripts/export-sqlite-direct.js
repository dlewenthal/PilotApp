#!/usr/bin/env node

const Database = require('sqlite3').Database;
const fs = require('fs');
const path = require('path');

// Create export directory
const exportDir = './data-export';
if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true });
}

const dbPath = './prisma/dev.db';

// Table mappings (SQLite table name -> export filename)
const tableExports = [
    { table: 'Pilot', file: 'pilots.json' },
    { table: 'SenioritySnapshot', file: 'seniority_snapshots.json' },
    { table: 'PayScale', file: 'pay_scales.json' },
    { table: 'Aircraft', file: 'aircraft.json' },
    { table: 'PayRate', file: 'pay_rates.json' },
    { table: 'DataImport', file: 'data_imports.json' }
];

console.log('🔍 Exporting SQLite data directly...');
console.log(`📂 Database: ${path.resolve(dbPath)}`);

const db = new Database(dbPath, (err) => {
    if (err) {
        console.error('❌ Error opening database:', err);
        return;
    }
    
    console.log('✅ Connected to SQLite database');
    
    let completed = 0;
    let totalRecords = 0;
    const counts = {};
    
    tableExports.forEach(({ table, file }) => {
        console.log(`\n📥 Exporting ${table}...`);
        
        db.all(`SELECT * FROM "${table}" ORDER BY id`, [], (err, rows) => {
            if (err) {
                console.error(`❌ Error exporting ${table}:`, err.message);
            } else {
                console.log(`  Found ${rows.length.toLocaleString()} records`);
                counts[table] = rows.length;
                totalRecords += rows.length;
                
                // Convert date strings and handle data types
                const processedRows = rows.map(row => {
                    const processed = { ...row };
                    
                    // Convert date fields
                    Object.keys(processed).forEach(key => {
                        if (key.includes('Date') || key.includes('At')) {
                            if (processed[key] && typeof processed[key] === 'string') {
                                // Try to parse as date
                                const date = new Date(processed[key]);
                                if (!isNaN(date.getTime())) {
                                    processed[key] = date.toISOString();
                                }
                            }
                        }
                        
                        // Convert boolean strings
                        if (processed[key] === 'true') processed[key] = true;
                        if (processed[key] === 'false') processed[key] = false;
                    });
                    
                    return processed;
                });
                
                // Save to file
                if (processedRows.length > 0) {
                    const filePath = path.join(exportDir, file);
                    fs.writeFileSync(filePath, JSON.stringify(processedRows, null, 2));
                    console.log(`✅ Saved to ${file}`);
                }
            }
            
            completed++;
            if (completed === tableExports.length) {
                // Create summary file
                const summary = {
                    exportedAt: new Date().toISOString(),
                    totalRecords,
                    counts,
                    files: fs.readdirSync(exportDir).filter(f => f.endsWith('.json'))
                };
                
                fs.writeFileSync(
                    path.join(exportDir, 'export_summary.json'), 
                    JSON.stringify(summary, null, 2)
                );
                
                console.log('\n🎉 Export completed successfully!');
                console.log(`📊 Total records exported: ${totalRecords.toLocaleString()}`);
                console.log(`📂 Files saved to: ${exportDir}/`);
                console.log(`📄 Files created: ${summary.files.join(', ')}`);
                
                db.close();
            }
        });
    });
});