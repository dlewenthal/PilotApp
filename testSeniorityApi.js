const http = require('http');

function testSeniorityAPI() {
  const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/api/analyze/seniority/0819310',
    method: 'GET'
  };

  console.log('🔍 Testing Seniority Analysis API...');

  const req = http.request(options, (res) => {
    console.log(`📡 Status: ${res.statusCode}`);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const result = JSON.parse(data);
        console.log('✅ Seniority Analysis Response:');
        console.log(`   • Pilot: ${result.pilot.name}`);
        console.log(`   • Overall Seniority: #${result.pilot.overallSeniority}`);
        console.log(`   • Current Assignment: ${result.pilot.currentAssignment.baseCity} ${result.pilot.currentAssignment.fleetName} ${result.pilot.currentAssignment.positionName}`);
        console.log(`   • Total Options: ${result.seniorityOptions.length}`);
        console.log(`   • Top 3 Options:`);
        result.seniorityOptions.slice(0, 3).forEach((option, i) => {
          console.log(`     ${i+1}. ${option.baseCity} ${option.fleetName} ${option.positionName}: #${option.pilotPosition}/${option.totalPilots} (${option.percentile}%)`);
        });
      } catch (error) {
        console.log('❌ Error parsing response:', error.message);
        console.log('📄 Raw response:', data.slice(0, 200));
      }
    });
  });

  req.on('error', (error) => {
    console.error('❌ API Error:', error.message);
  });

  req.end();
}

testSeniorityAPI();