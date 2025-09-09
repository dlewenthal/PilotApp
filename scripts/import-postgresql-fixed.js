#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const exportDir = './data-export';

// Import order matters due to foreign key relationships
const importOrder = [
    { file: 'aircraft.json', model: 'aircraft' },
    { file: 'pay_scales.json', model: 'payScale' },
    { file: 'pilots.json', model: 'pilot' },
    { file: 'seniority_snapshots.json', model: 'senioritySnapshot' },
    { file: 'pay_rates.json', model: 'payRate' },
    { file: 'data_imports.json', model: 'dataImport' }
];

function convertTimestamp(timestamp) {
    if (!timestamp) return null;
    
    // If it's already an ISO string, return it
    if (typeof timestamp === 'string' && timestamp.includes('T')) {
        return timestamp;
    }
    
    // If it's a number (SQLite timestamp), convert to ISO string
    if (typeof timestamp === 'number') {
        return new Date(timestamp).toISOString();
    }
    
    // Try to parse as date
    const date = new Date(timestamp);
    if (!isNaN(date.getTime())) {
        return date.toISOString();
    }
    
    return null;
}

function convertBoolean(value) {
    if (value === 1 || value === '1' || value === true || value === 'true') return true;
    if (value === 0 || value === '0' || value === false || value === 'false') return false;
    return value;
}

function cleanRecord(record, model) {
    const cleaned = { ...record };
    
    // Convert timestamps
    Object.keys(cleaned).forEach(key => {
        if (key.includes('Date') || key.includes('At')) {
            cleaned[key] = convertTimestamp(cleaned[key]);
        }
        
        // Convert booleans
        if (key.includes('is') || key.includes('Active') || key.includes('Retired')) {
            cleaned[key] = convertBoolean(cleaned[key]);
        }
    });
    
    // Model-specific cleaning
    if (model === 'aircraft') {
        cleaned.isActive = convertBoolean(cleaned.isActive);
        cleaned.createdAt = convertTimestamp(cleaned.createdAt);
    }
    
    if (model === 'pilot') {
        cleaned.isRetired = convertBoolean(cleaned.isRetired);
        cleaned.pilotHireDate = convertTimestamp(cleaned.pilotHireDate);
        cleaned.scheduledRetireDate = convertTimestamp(cleaned.scheduledRetireDate);
        cleaned.lastSeenDate = convertTimestamp(cleaned.lastSeenDate);
        cleaned.createdAt = convertTimestamp(cleaned.createdAt);
        cleaned.updatedAt = convertTimestamp(cleaned.updatedAt);
    }
    
    if (model === 'senioritySnapshot') {
        cleaned.reportDate = convertTimestamp(cleaned.reportDate);
        cleaned.createdAt = convertTimestamp(cleaned.createdAt);
        cleaned.isPlaceholder = convertBoolean(cleaned.isPlaceholder);
    }
    
    if (model === 'payScale') {
        cleaned.effectiveDate = convertTimestamp(cleaned.effectiveDate);
        cleaned.expirationDate = convertTimestamp(cleaned.expirationDate);
        cleaned.createdAt = convertTimestamp(cleaned.createdAt);
        cleaned.isActive = convertBoolean(cleaned.isActive);
    }
    
    if (model === 'payRate') {
        cleaned.createdAt = convertTimestamp(cleaned.createdAt);
    }
    
    if (model === 'dataImport') {
        cleaned.reportDate = convertTimestamp(cleaned.reportDate);
        cleaned.importedAt = convertTimestamp(cleaned.importedAt);
    }
    
    return cleaned;
}

async function importData() {
    try {
        console.log('🚀 Starting PostgreSQL data import with data type conversion...');
        console.log('📂 Looking for export files in:', exportDir);
        
        if (!fs.existsSync(exportDir)) {
            console.log('❌ Export directory not found. Run export script first.');
            return;
        }
        
        // Check summary file
        const summaryPath = path.join(exportDir, 'export_summary.json');
        if (!fs.existsSync(summaryPath)) {
            console.log('❌ No export summary found. Run export script first.');
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
            const rawData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            
            if (!Array.isArray(rawData) || rawData.length === 0) {
                console.log(`⏭️  Skipping ${file} (empty)`);
                continue;
            }
            
            console.log(`  Records to import: ${rawData.length.toLocaleString()}`);
            
            // Clean and convert data types
            const cleanedData = rawData.map(record => cleanRecord(record, model));
            
            // Import in smaller batches to avoid timeouts
            const batchSize = 50; // Smaller batches for better error handling
            const totalBatches = Math.ceil(cleanedData.length / batchSize);
            let imported = 0;
            
            for (let i = 0; i < totalBatches; i++) {
                const batch = cleanedData.slice(i * batchSize, (i + 1) * batchSize);
                
                try {
                    // Try batch insert first
                    const result = await prisma[model].createMany({
                        data: batch,
                        skipDuplicates: true
                    });
                    
                    imported += result.count || batch.length;
                    
                    if (i % 20 === 0 || totalBatches <= 10) { // Show progress every 20 batches or always for small datasets
                        console.log(`  Batch ${i + 1}/${totalBatches}: ${result.count || batch.length} records`);
                    }
                } catch (error) {
                    console.error(`  ❌ Batch ${i + 1} failed:`, error.message.substring(0, 200));
                    
                    // Try individual inserts
                    for (const record of batch) {
                        try {
                            await prisma[model].create({ data: record });
                            imported++;
                        } catch (individualError) {
                            console.error(`    ⚠️  Skipped record ID ${record.id}:`, individualError.message.substring(0, 100));
                        }
                    }
                }
                
                // Small delay to avoid overwhelming the database
                if (i % 100 === 0) {
                    await new Promise(resolve => setTimeout(resolve, 10));
                }
            }
            
            console.log(`✅ ${file}: ${imported.toLocaleString()} records imported`);
            totalImported += imported;
        }
        
        console.log(`\n🎉 Import completed successfully!`);
        console.log(`📊 Total records imported: ${totalImported.toLocaleString()}`);
        
        // Verify import
        console.log('\n🔍 Verifying import...');
        const verificationCounts = {};
        try { verificationCounts.pilots = await prisma.pilot.count(); } catch { verificationCounts.pilots = 0; }
        try { verificationCounts.senioritySnapshots = await prisma.senioritySnapshot.count(); } catch { verificationCounts.senioritySnapshots = 0; }
        try { verificationCounts.payScales = await prisma.payScale.count(); } catch { verificationCounts.payScales = 0; }
        try { verificationCounts.aircraft = await prisma.aircraft.count(); } catch { verificationCounts.aircraft = 0; }
        try { verificationCounts.payRates = await prisma.payRate.count(); } catch { verificationCounts.payRates = 0; }
        try { verificationCounts.dataImports = await prisma.dataImport.count(); } catch { verificationCounts.dataImports = 0; }
        
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

importData();