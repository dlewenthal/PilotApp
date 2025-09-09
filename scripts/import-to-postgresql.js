#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const exportDir = './data-export';

// Import order matters due to foreign key relationships
const importOrder = [
    { file: 'contracts.json', model: 'contract' },
    { file: 'aircraft.json', model: 'aircraft' },
    { file: 'pay_scales.json', model: 'payScale' },
    { file: 'pilots.json', model: 'pilot' },
    { file: 'seniority_snapshots.json', model: 'senioritySnapshot' },
    { file: 'pay_rates.json', model: 'payRate' },
    { file: 'contract_items.json', model: 'contractItem' },
    { file: 'contract_changes.json', model: 'contractChange' },
    { file: 'data_imports.json', model: 'dataImport' }
];

async function importData() {
    try {
        console.log('🚀 Starting PostgreSQL data import...');
        console.log('📂 Looking for export files in:', exportDir);
        
        if (!fs.existsSync(exportDir)) {
            console.log('❌ Export directory not found. Run export-sqlite-data.js first.');
            return;
        }
        
        // Check summary file
        const summaryPath = path.join(exportDir, 'export_summary.json');
        if (!fs.existsSync(summaryPath)) {
            console.log('❌ No export summary found. Run export-sqlite-data.js first.');
            return;
        }
        
        const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
        console.log('📊 Export Summary:', summary.counts);
        console.log(`📅 Exported: ${new Date(summary.exportedAt).toLocaleString()}`);
        
        let totalImported = 0;
        
        // Import data in correct order
        for (const { file, model } of importOrder) {
            const filePath = path.join(exportDir, file);
            
            if (!fs.existsSync(filePath)) {
                console.log(`⏭️  Skipping ${file} (not found)`);
                continue;
            }
            
            console.log(`\n📥 Importing ${file}...`);
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            
            if (!Array.isArray(data) || data.length === 0) {
                console.log(`⏭️  Skipping ${file} (empty)`);
                continue;
            }
            
            console.log(`  Records to import: ${data.length.toLocaleString()}`);
            
            // Import in batches to handle large datasets
            const batchSize = 100;
            const totalBatches = Math.ceil(data.length / batchSize);
            let imported = 0;
            
            for (let i = 0; i < totalBatches; i++) {
                const batch = data.slice(i * batchSize, (i + 1) * batchSize);
                
                try {
                    // Use createMany for better performance
                    const result = await prisma[model].createMany({
                        data: batch,
                        skipDuplicates: true
                    });
                    
                    imported += result.count || batch.length;
                    
                    if (totalBatches > 1) {
                        console.log(`  Batch ${i + 1}/${totalBatches}: ${result.count || batch.length} records`);
                    }
                } catch (error) {
                    console.error(`  ❌ Batch ${i + 1} failed:`, error.message);
                    
                    // Try individual inserts if batch fails
                    console.log(`  🔄 Trying individual inserts for batch ${i + 1}...`);
                    for (const record of batch) {
                        try {
                            await prisma[model].create({ data: record });
                            imported++;
                        } catch (individualError) {
                            console.error(`    ⚠️  Skipped record:`, individualError.message.substring(0, 100));
                        }
                    }
                }
            }
            
            console.log(`✅ ${file}: ${imported.toLocaleString()} records imported`);
            totalImported += imported;
        }
        
        console.log(`\n🎉 Import completed successfully!`);
        console.log(`📊 Total records imported: ${totalImported.toLocaleString()}`);
        
        // Verify import
        console.log('\n🔍 Verifying import...');
        const verificationCounts = {
            pilots: await prisma.pilot.count(),
            senioritySnapshots: await prisma.senioritySnapshot.count(),
            payScales: await prisma.payScale.count(),
            aircraft: await prisma.aircraft.count(),
            payRates: await prisma.payRate.count(),
            contracts: await prisma.contract.count(),
            contractItems: await prisma.contractItem.count(),
            contractChanges: await prisma.contractChange.count(),
            dataImports: await prisma.dataImport.count()
        };
        
        console.log('📋 PostgreSQL Database Summary:');
        Object.entries(verificationCounts).forEach(([table, count]) => {
            console.log(`  ${table}: ${count.toLocaleString()} records`);
        });
        
        const totalInPostgres = Object.values(verificationCounts).reduce((sum, count) => sum + count, 0);
        console.log(`  TOTAL: ${totalInPostgres.toLocaleString()} records`);
        
    } catch (error) {
        console.error('❌ Import failed:', error);
    } finally {
        await prisma.$disconnect();
    }
}

// Show help if no arguments or help requested
if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log(`
PostgreSQL Import Script

Usage: node scripts/import-to-postgresql.js

Prerequisites:
1. Run 'node scripts/export-sqlite-data.js' first to create export files
2. Ensure PostgreSQL database is running (./scripts/rds-control.sh start)
3. Ensure DATABASE_URL points to PostgreSQL

Cost Management:
- Start RDS instance: ./scripts/rds-control.sh start
- Stop RDS instance: ./scripts/rds-control.sh stop (saves ~70% costs)

The script will:
- Import data in the correct order to handle foreign key relationships
- Use batch imports for better performance
- Skip duplicates automatically
- Provide detailed progress reporting
- Verify the import was successful
`);
    process.exit(0);
}

importData();