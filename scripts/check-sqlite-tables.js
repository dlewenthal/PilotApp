#!/usr/bin/env node

const Database = require('sqlite3').Database;
const path = require('path');

const dbPath = './prisma/dev.db';

console.log('🔍 Checking SQLite database directly...');
console.log(`📂 Database: ${path.resolve(dbPath)}`);

const db = new Database(dbPath, (err) => {
    if (err) {
        console.error('❌ Error opening database:', err);
        return;
    }
    
    console.log('✅ Connected to SQLite database');
    
    // Get all table names
    db.all("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name", [], (err, tables) => {
        if (err) {
            console.error('❌ Error getting tables:', err);
            db.close();
            return;
        }
        
        console.log('\n📋 Tables found:');
        if (tables.length === 0) {
            console.log('  No tables found');
            db.close();
            return;
        }
        
        tables.forEach(table => console.log(`  - ${table.name}`));
        
        // Check each table for row counts
        console.log('\n📊 Row counts:');
        let completed = 0;
        
        tables.forEach(table => {
            db.get(`SELECT COUNT(*) as count FROM "${table.name}"`, [], (err, row) => {
                if (err) {
                    console.log(`  ${table.name}: ERROR - ${err.message}`);
                } else {
                    console.log(`  ${table.name}: ${row.count.toLocaleString()} rows`);
                }
                
                completed++;
                if (completed === tables.length) {
                    db.close();
                }
            });
        });
    });
});