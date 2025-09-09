#!/usr/bin/env node

console.log('💰 AWS RDS Cost Calculator for Your Setup\n');

const HOURS_PER_MONTH = 24 * 30; // 720 hours
const FREE_TIER_HOURS = 750;
const HOURLY_RATE = 0.018; // db.t3.micro rate
const STORAGE_RATE = 0.115; // per GB/month
const STORAGE_GB = 20;

console.log('🆓 FREE TIER STATUS:');
console.log(`   Compute Hours: ${HOURS_PER_MONTH}/750 hours (${(HOURS_PER_MONTH/FREE_TIER_HOURS*100).toFixed(1)}% of limit)`);
console.log(`   Storage: ${STORAGE_GB}/20 GB (${(STORAGE_GB/20*100).toFixed(0)}% of limit)`);

console.log('\n📊 MONTHLY COSTS:');

// Current (Free Tier)
const currentCost = 0;
console.log(`   Current (Free Tier): $${currentCost.toFixed(2)}/month`);

// After Free Tier
const computeCost = HOURS_PER_MONTH * HOURLY_RATE;
const storageCost = STORAGE_GB * STORAGE_RATE;
const totalAfterFreeTier = computeCost + storageCost;
console.log(`   After Free Tier: $${totalAfterFreeTier.toFixed(2)}/month`);
console.log(`     - Compute: $${computeCost.toFixed(2)}`);
console.log(`     - Storage: $${storageCost.toFixed(2)}`);

console.log('\n🛑 COST REDUCTION STRATEGIES:');

// 8 hours/day usage
const partTimeHours = 8 * 30; // 240 hours
const partTimeCost = partTimeHours * HOURLY_RATE + storageCost;
console.log(`   Run 8 hours/day: $${partTimeCost.toFixed(2)}/month (${((1-partTimeCost/totalAfterFreeTier)*100).toFixed(0)}% savings)`);

// Weekend only
const weekendHours = 8 * 8; // 64 hours (8 hours * 8 weekend days)
const weekendCost = weekendHours * HOURLY_RATE + storageCost;
console.log(`   Weekend testing only: $${weekendCost.toFixed(2)}/month (${((1-weekendCost/totalAfterFreeTier)*100).toFixed(0)}% savings)`);

// On-demand only
const onDemandCost = storageCost; // Only pay for storage when stopped
console.log(`   Stop when not using: $${onDemandCost.toFixed(2)}/month (${((1-onDemandCost/totalAfterFreeTier)*100).toFixed(0)}% savings)`);

console.log('\n⏰ CONTROL COMMANDS:');
console.log('   ./scripts/rds-control.sh stop   # Stop database (save ~70% costs)');
console.log('   ./scripts/rds-control.sh start  # Start when needed');
console.log('   ./scripts/rds-control.sh status # Check current state');

console.log('\n📅 TIMELINE:');
const now = new Date();
const freeUntil = new Date(now);
freeUntil.setFullYear(freeUntil.getFullYear() + 1);
console.log(`   Free Tier ends: ${freeUntil.toLocaleDateString()}`);
console.log(`   Monthly cost after: $${totalAfterFreeTier.toFixed(2)}`);