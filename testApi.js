const http = require('http');

function testAPI() {
  const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/api/pilots/0819310',
    method: 'GET'
  };

  console.log('🔍 Testing API endpoint: http://localhost:3001/api/pilots/0819310');

  const req = http.request(options, (res) => {
    console.log(`📡 Status: ${res.statusCode}`);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const result = JSON.parse(data);
        console.log('✅ API Response:');
        console.log(`   • Name: ${result.name}`);
        console.log(`   • Employee #: ${result.empNumber}`);
        console.log(`   • Snapshots: ${result.senioritySnapshots?.length || 0}`);
      } catch (error) {
        console.log('📄 Raw response:', data);
      }
    });
  });

  req.on('error', (error) => {
    console.error('❌ API Error:', error.message);
  });

  req.end();
}

testAPI();