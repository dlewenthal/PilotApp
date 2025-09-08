const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function analyzePilotNames() {
  try {
    console.log('🔍 Analyzing pilot name field structure...\n');
    
    // Get sample of pilot names to understand the format
    const samplePilots = await prisma.pilot.findMany({
      select: { name: true, empNumber: true },
      take: 20
    });
    
    console.log('📋 Sample pilot names from database:');
    samplePilots.forEach((pilot, i) => {
      console.log(`${(i+1).toString().padStart(2)}. ${pilot.name.padEnd(25)} (${pilot.empNumber})`);
    });
    
    // Analyze name patterns
    console.log('\n🔍 Name format analysis:');
    
    const namePatterns = {
      'LastName, FirstName MiddleInitial': 0,
      'LastName, FirstName': 0,
      'LastName FirstName': 0,
      'Other format': 0
    };
    
    const allPilots = await prisma.pilot.findMany({
      select: { name: true },
      take: 1000 // Sample for analysis
    });
    
    allPilots.forEach(pilot => {
      const name = pilot.name.trim();
      
      if (name.match(/^[A-Z]+,\s+[A-Z]+\s+[A-Z]$/)) {
        namePatterns['LastName, FirstName MiddleInitial']++;
      } else if (name.match(/^[A-Z]+,\s+[A-Z\s]+$/)) {
        namePatterns['LastName, FirstName']++;
      } else if (name.match(/^[A-Z]+\s+[A-Z\s]+$/)) {
        namePatterns['LastName FirstName']++;
      } else {
        namePatterns['Other format']++;
      }
    });
    
    console.log('\nPattern distribution in sample:');
    Object.entries(namePatterns).forEach(([pattern, count]) => {
      const percentage = ((count / 1000) * 100).toFixed(1);
      console.log(`   ${pattern.padEnd(35)} ${count.toString().padStart(4)} (${percentage}%)`);
    });
    
    // Show some edge cases
    const edgeCases = allPilots
      .filter(p => !p.name.match(/^[A-Z]+,\s+[A-Z\s]+$/))
      .slice(0, 10);
      
    if (edgeCases.length > 0) {
      console.log('\n⚠️  Edge case examples:');
      edgeCases.forEach((pilot, i) => {
        console.log(`   ${i+1}. "${pilot.name}"`);
      });
    }
    
  } catch (error) {
    console.error('❌ Analysis failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

analyzePilotNames();