#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const exportDir = './data-export';

function convertTimestamp(timestamp) {
    if (!timestamp) return null;
    if (typeof timestamp === 'string' && timestamp.includes('T')) return timestamp;
    if (typeof timestamp === 'number') return new Date(timestamp).toISOString();
    const date = new Date(timestamp);
    if (!isNaN(date.getTime())) return date.toISOString();
    return null;
}

function convertBoolean(value) {
    if (value === 1 || value === '1' || value === true || value === 'true') return true;
    if (value === 0 || value === '0' || value === false || value === 'false') return false;
    return value;
}

function cleanRecord(record, model) {
    const cleaned = { ...record };
    
    Object.keys(cleaned).forEach(key => {
        if (key.includes('Date') || key.includes('At')) {
            cleaned[key] = convertTimestamp(cleaned[key]);
        }
        if (key.includes('is') || key.includes('Active') || key.includes('Retired')) {
            cleaned[key] = convertBoolean(cleaned[key]);
        }
    });
    
    if (model === 'senioritySnapshot') {
        cleaned.reportDate = convertTimestamp(cleaned.reportDate);
        cleaned.createdAt = convertTimestamp(cleaned.createdAt);
        cleaned.isPlaceholder = convertBoolean(cleaned.isPlaceholder);
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

async function resumeImport() {
    try {
        console.log('🔄 Resuming PostgreSQL import...');
        
        // Check current progress
        const currentCounts = {};
        try { currentCounts.senioritySnapshots = await prisma.senioritySnapshot.count(); } catch { currentCounts.senioritySnapshots = 0; }
        try { currentCounts.payRates = await prisma.payRate.count(); } catch { currentCounts.payRates = 0; }
        try { currentCounts.dataImports = await prisma.dataImport.count(); } catch { currentCounts.dataImports = 0; }
        
        console.log('📊 Current status:');
        console.log(`  SenioritySnapshots: ${currentCounts.senioritySnapshots.toLocaleString()}`);
        console.log(`  PayRates: ${currentCounts.payRates.toLocaleString()}`);
        console.log(`  DataImports: ${currentCounts.dataImports.toLocaleString()}`);
        
        // Continue SenioritySnapshots if needed
        if (currentCounts.senioritySnapshots < 186613) {
            console.log('\n📥 Continuing seniority_snapshots.json import...');
            const filePath = path.join(exportDir, 'seniority_snapshots.json');
            const rawData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            
            // Skip already imported records
            const remainingData = rawData.slice(currentCounts.senioritySnapshots);
            console.log(`  Remaining records: ${remainingData.length.toLocaleString()}`);
            
            const batchSize = 100; // Larger batches for remaining records
            const totalBatches = Math.ceil(remainingData.length / batchSize);
            let imported = 0;
            
            for (let i = 0; i < totalBatches; i++) {
                const batch = remainingData.slice(i * batchSize, (i + 1) * batchSize);
                const cleanedBatch = batch.map(record => cleanRecord(record, 'senioritySnapshot'));
                
                try {
                    const result = await prisma.senioritySnapshot.createMany({
                        data: cleanedBatch,
                        skipDuplicates: true
                    });
                    imported += result.count || batch.length;
                    
                    if (i % 50 === 0) {
                        console.log(`  Batch ${i + 1}/${totalBatches}: ${imported.toLocaleString()} total imported`);
                    }
                } catch (error) {
                    console.error(`  ❌ Batch ${i + 1} failed, trying individual inserts...`);
                    for (const record of cleanedBatch) {
                        try {
                            await prisma.senioritySnapshot.create({ data: record });
                            imported++;
                        } catch (individualError) {
                            console.error(`    ⚠️  Skipped record ID ${record.id}`);
                        }
                    }
                }
            }
            console.log(`✅ SenioritySnapshots: ${imported.toLocaleString()} additional records imported`);
        }
        
        // Import PayRates
        if (currentCounts.payRates === 0) {
            console.log('\n📥 Importing pay_rates.json...');
            const filePath = path.join(exportDir, 'pay_rates.json');
            const rawData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            const cleanedData = rawData.map(record => cleanRecord(record, 'payRate'));
            
            try {
                const result = await prisma.payRate.createMany({
                    data: cleanedData,
                    skipDuplicates: true
                });
                console.log(`✅ PayRates: ${result.count} records imported`);
            } catch (error) {
                console.error('❌ PayRates batch failed, trying individual inserts...');
                let imported = 0;
                for (const record of cleanedData) {
                    try {
                        await prisma.payRate.create({ data: record });
                        imported++;
                    } catch (individualError) {
                        console.error(`⚠️  Skipped PayRate ID ${record.id}: ${individualError.message.substring(0, 100)}`);
                    }
                }
                console.log(`✅ PayRates: ${imported} records imported individually`);
            }
        }
        
        // Import DataImports
        if (currentCounts.dataImports === 0) {
            console.log('\n📥 Importing data_imports.json...');
            const filePath = path.join(exportDir, 'data_imports.json');
            const rawData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            const cleanedData = rawData.map(record => cleanRecord(record, 'dataImport'));
            
            try {
                const result = await prisma.dataImport.createMany({
                    data: cleanedData,
                    skipDuplicates: true
                });
                console.log(`✅ DataImports: ${result.count} records imported`);
            } catch (error) {
                console.error('❌ DataImports batch failed, trying individual inserts...');
                let imported = 0;
                for (const record of cleanedData) {
                    try {
                        await prisma.dataImport.create({ data: record });
                        imported++;
                    } catch (individualError) {
                        console.error(`⚠️  Skipped DataImport ID ${record.id}: ${individualError.message.substring(0, 100)}`);
                    }
                }
                console.log(`✅ DataImports: ${imported} records imported individually`);
            }
        }
        
        // Final verification
        console.log('\n🔍 Final verification...');
        const finalCounts = {};
        try { finalCounts.aircraft = await prisma.aircraft.count(); } catch { finalCounts.aircraft = 0; }
        try { finalCounts.payScales = await prisma.payScale.count(); } catch { finalCounts.payScales = 0; }
        try { finalCounts.pilots = await prisma.pilot.count(); } catch { finalCounts.pilots = 0; }
        try { finalCounts.senioritySnapshots = await prisma.senioritySnapshot.count(); } catch { finalCounts.senioritySnapshots = 0; }
        try { finalCounts.payRates = await prisma.payRate.count(); } catch { finalCounts.payRates = 0; }
        try { finalCounts.dataImports = await prisma.dataImport.count(); } catch { finalCounts.dataImports = 0; }
        
        console.log('📊 Final PostgreSQL Database Status:');
        Object.entries(finalCounts).forEach(([table, count]) => {
            console.log(`  ${table}: ${count.toLocaleString()} records`);
        });
        
        const total = Object.values(finalCounts).reduce((sum, count) => sum + count, 0);
        console.log(`  TOTAL: ${total.toLocaleString()} records`);
        
        console.log('\n🎉 Import completed successfully!');
        
    } catch (error) {
        console.error('❌ Resume import failed:', error);
    } finally {
        await prisma.$disconnect();
    }
}

resumeImport();