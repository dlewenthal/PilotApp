#!/usr/bin/env node

// Test API connection to PostgreSQL
async function testAPI() {
    try {
        console.log('🧪 Testing API connection to PostgreSQL...');
        
        // Test pilot search
        const response = await fetch('http://localhost:3001/api/pilots/search?name=smith');
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        console.log('✅ API Response Success!');
        console.log(`📊 Found ${data.length} pilots with "smith" in name`);
        
        if (data.length > 0) {
            console.log('🎯 Sample pilot:', {
                name: data[0].name,
                empNumber: data[0].empNumber,
                hireDate: data[0].pilotHireDate
            });
        }
        
        console.log('\n🎉 PostgreSQL connection working perfectly!');
        console.log('🌐 Your React app can now access PostgreSQL data');
        
    } catch (error) {
        console.error('❌ API Test failed:', error.message);
    }
}

testAPI();