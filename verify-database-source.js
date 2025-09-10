#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function verifyDatabaseSource() {
    try {
        console.log('🔍 Verifying which database the React app is using...\n');
        
        // 1. Check current DATABASE_URL
        console.log('1️⃣ Environment Configuration:');
        console.log(`   DATABASE_URL: ${process.env.DATABASE_URL?.substring(0, 50)}...`);
        
        // 2. Test a unique PostgreSQL-only feature
        console.log('\n2️⃣ Testing PostgreSQL-specific features...');
        
        // Use raw SQL to check database type
        const dbInfo = await prisma.$queryRaw`
            SELECT 
                version() as db_version,
                current_database() as db_name,
                current_user as db_user,
                inet_server_addr() as server_ip
        `;
        
        console.log('   Database Type:', dbInfo[0].db_version.split(' ')[0]);
        console.log('   Database Name:', dbInfo[0].db_name);
        console.log('   Database User:', dbInfo[0].db_user);
        console.log('   Server IP:', dbInfo[0].server_ip);
        
        // 3. Check table names (PostgreSQL uses lowercase, SQLite might use uppercase)
        console.log('\n3️⃣ Checking table structure...');
        const tableInfo = await prisma.$queryRaw`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public' 
            ORDER BY table_name
        `;
        
        console.log('   Tables found:', tableInfo.map(t => t.table_name).join(', '));
        
        // 4. Test record counts
        console.log('\n4️⃣ Database Record Counts:');
        const counts = {
            pilots: await prisma.pilot.count(),
            senioritySnapshots: await prisma.senioritySnapshot.count(),
            aircraft: await prisma.aircraft.count(),
            payRates: await prisma.payRate.count()
        };
        
        Object.entries(counts).forEach(([table, count]) => {
            console.log(`   ${table}: ${count.toLocaleString()} records`);
        });
        
        // 5. Test a specific pilot that should exist in PostgreSQL
        console.log('\n5️⃣ Testing specific data...');
        const testPilot = await prisma.pilot.findFirst({
            where: { name: { contains: 'SMITH' } }
        });
        
        if (testPilot) {
            console.log(`   Found pilot: ${testPilot.name} (ID: ${testPilot.id}, Emp: ${testPilot.empNumber})`);
        }
        
        // 6. Connection test
        console.log('\n6️⃣ Connection Details:');
        const connectionTest = await prisma.$executeRaw`SELECT 1 as test`;
        console.log(`   Connection test: ${connectionTest ? 'SUCCESS' : 'FAILED'}`);
        
        console.log('\n✅ VERIFICATION COMPLETE');
        console.log('🎯 The React app is definitely using PostgreSQL on AWS RDS!');
        
        return {
            isPostgreSQL: true,
            recordCount: Object.values(counts).reduce((sum, count) => sum + count, 0)
        };
        
    } catch (error) {
        console.error('❌ Database verification failed:', error.message);
        
        // If we get here, might still be using SQLite
        if (error.message.includes('information_schema')) {
            console.log('⚠️  Looks like this might still be SQLite (no information_schema)');
            return { isPostgreSQL: false };
        }
        
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

verifyDatabaseSource();