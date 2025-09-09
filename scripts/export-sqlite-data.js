#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

// Create export directory
const exportDir = './data-export';
if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true });
}

// Create temporary schema for SQLite
const tempSchemaPath = './scripts/temp-schema.prisma';
const originalSchema = fs.readFileSync('./prisma/schema.prisma', 'utf8');
const sqliteSchema = originalSchema.replace('provider = "postgresql"', 'provider = "sqlite"');
fs.writeFileSync(tempSchemaPath, sqliteSchema);

// Set environment for SQLite
process.env.DATABASE_URL = "file:./prisma/dev.db";

// Initialize Prisma client
const prisma = new PrismaClient();

async function exportData() {
    try {
        console.log('🔍 Checking SQLite database...');
        
        // Get table counts (wrap in try-catch for missing tables)
        const counts = {};
        
        try { counts.pilots = await prisma.pilot.count(); } catch { counts.pilots = 0; }
        try { counts.senioritySnapshots = await prisma.senioritySnapshot.count(); } catch { counts.senioritySnapshots = 0; }
        try { counts.payScales = await prisma.payScale.count(); } catch { counts.payScales = 0; }
        try { counts.aircraft = await prisma.aircraft.count(); } catch { counts.aircraft = 0; }
        try { counts.payRates = await prisma.payRate.count(); } catch { counts.payRates = 0; }
        try { counts.contracts = await prisma.contract.count(); } catch { counts.contracts = 0; }
        try { counts.contractItems = await prisma.contractItem.count(); } catch { counts.contractItems = 0; }
        try { counts.contractChanges = await prisma.contractChange.count(); } catch { counts.contractChanges = 0; }
        try { counts.dataImports = await prisma.dataImport.count(); } catch { counts.dataImports = 0; }
        
        console.log('📊 Database Summary:');
        Object.entries(counts).forEach(([table, count]) => {
            console.log(`  ${table}: ${count.toLocaleString()} records`);
        });
        
        const totalRecords = Object.values(counts).reduce((sum, count) => sum + count, 0);
        console.log(`  TOTAL: ${totalRecords.toLocaleString()} records`);
        
        if (totalRecords === 0) {
            console.log('⚠️  No data found in SQLite database');
            return;
        }
        
        console.log('\n📥 Starting data export...');
        
        // Export each table if it has data
        if (counts.pilots > 0) {
            console.log('Exporting Pilot data...');
            const pilots = await prisma.pilot.findMany();
            fs.writeFileSync(
                path.join(exportDir, 'pilots.json'), 
                JSON.stringify(pilots, null, 2)
            );
        }
        
        if (counts.senioritySnapshots > 0) {
            console.log('Exporting SenioritySnapshot data (in chunks)...');
            const chunkSize = 1000;
            const totalChunks = Math.ceil(counts.senioritySnapshots / chunkSize);
            const allSnapshots = [];
            
            for (let i = 0; i < totalChunks; i++) {
                const snapshots = await prisma.senioritySnapshot.findMany({
                    skip: i * chunkSize,
                    take: chunkSize,
                    orderBy: { id: 'asc' }
                });
                allSnapshots.push(...snapshots);
                console.log(`  Chunk ${i + 1}/${totalChunks}: ${snapshots.length} records`);
            }
            
            fs.writeFileSync(
                path.join(exportDir, 'seniority_snapshots.json'), 
                JSON.stringify(allSnapshots, null, 2)
            );
        }
        
        if (counts.payScales > 0) {
            console.log('Exporting PayScale data...');
            const payScales = await prisma.payScale.findMany();
            fs.writeFileSync(
                path.join(exportDir, 'pay_scales.json'), 
                JSON.stringify(payScales, null, 2)
            );
        }
        
        if (counts.aircraft > 0) {
            console.log('Exporting Aircraft data...');
            const aircraft = await prisma.aircraft.findMany();
            fs.writeFileSync(
                path.join(exportDir, 'aircraft.json'), 
                JSON.stringify(aircraft, null, 2)
            );
        }
        
        if (counts.payRates > 0) {
            console.log('Exporting PayRate data...');
            const payRates = await prisma.payRate.findMany();
            fs.writeFileSync(
                path.join(exportDir, 'pay_rates.json'), 
                JSON.stringify(payRates, null, 2)
            );
        }
        
        if (counts.contracts > 0) {
            console.log('Exporting Contract data...');
            const contracts = await prisma.contract.findMany();
            fs.writeFileSync(
                path.join(exportDir, 'contracts.json'), 
                JSON.stringify(contracts, null, 2)
            );
        }
        
        if (counts.contractItems > 0) {
            console.log('Exporting ContractItem data...');
            const contractItems = await prisma.contractItem.findMany();
            fs.writeFileSync(
                path.join(exportDir, 'contract_items.json'), 
                JSON.stringify(contractItems, null, 2)
            );
        }
        
        if (counts.contractChanges > 0) {
            console.log('Exporting ContractChange data...');
            const contractChanges = await prisma.contractChange.findMany();
            fs.writeFileSync(
                path.join(exportDir, 'contract_changes.json'), 
                JSON.stringify(contractChanges, null, 2)
            );
        }
        
        if (counts.dataImports > 0) {
            console.log('Exporting DataImport data...');
            const dataImports = await prisma.dataImport.findMany();
            fs.writeFileSync(
                path.join(exportDir, 'data_imports.json'), 
                JSON.stringify(dataImports, null, 2)
            );
        }
        
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
        
        console.log('\n✅ Export completed successfully!');
        console.log(`📂 Files saved to: ${exportDir}/`);
        console.log(`📄 Files created: ${summary.files.join(', ')}`);
        
    } catch (error) {
        console.error('❌ Export failed:', error);
    } finally {
        await prisma.$disconnect();
        // Clean up temporary schema
        if (fs.existsSync(tempSchemaPath)) {
            fs.unlinkSync(tempSchemaPath);
        }
    }
}

exportData();