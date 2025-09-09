#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkProgress() {
    try {
        console.log('🔍 Checking PostgreSQL import progress...');
        
        const counts = {};
        try { counts.aircraft = await prisma.aircraft.count(); } catch { counts.aircraft = 0; }
        try { counts.payScales = await prisma.payScale.count(); } catch { counts.payScales = 0; }
        try { counts.pilots = await prisma.pilot.count(); } catch { counts.pilots = 0; }
        try { counts.senioritySnapshots = await prisma.senioritySnapshot.count(); } catch { counts.senioritySnapshots = 0; }
        try { counts.payRates = await prisma.payRate.count(); } catch { counts.payRates = 0; }
        try { counts.dataImports = await prisma.dataImport.count(); } catch { counts.dataImports = 0; }
        
        console.log('📊 Current PostgreSQL Database Status:');
        Object.entries(counts).forEach(([table, count]) => {
            console.log(`  ${table}: ${count.toLocaleString()} records`);
        });
        
        const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
        console.log(`  TOTAL: ${total.toLocaleString()} records`);
        
        // Compare with expected totals
        const expected = {
            aircraft: 17,
            payScales: 1,
            pilots: 19273,
            senioritySnapshots: 186613,
            payRates: 396,
            dataImports: 1
        };
        
        console.log('\n📋 Progress Summary:');
        Object.entries(expected).forEach(([table, expectedCount]) => {
            const actual = counts[table] || 0;
            const percentage = expectedCount > 0 ? ((actual / expectedCount) * 100).toFixed(1) : '0.0';
            const status = actual === expectedCount ? '✅' : actual > 0 ? '🔄' : '⏸️';
            console.log(`  ${status} ${table}: ${actual.toLocaleString()}/${expectedCount.toLocaleString()} (${percentage}%)`);
        });
        
        const totalExpected = Object.values(expected).reduce((sum, count) => sum + count, 0);
        const totalPercentage = ((total / totalExpected) * 100).toFixed(1);
        console.log(`\n📊 Overall Progress: ${total.toLocaleString()}/${totalExpected.toLocaleString()} (${totalPercentage}%)`);
        
    } catch (error) {
        console.error('❌ Error checking progress:', error.message);
    } finally {
        await prisma.$disconnect();
    }
}

checkProgress();