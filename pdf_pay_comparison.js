const fs = require('fs');
const payScaleData = require('./extractPayData.js');

// Pay scale data extracted from 2025plus_pay.pdf
const pdfPayData = {
  effectiveDate: '2025-01-01',
  contractVersion: '2025+',
  aircraft: [
    { code: 'B-777', name: 'Boeing 777' },
    { code: 'A-350', name: 'Airbus A350' },
    { code: 'B-757', name: 'Boeing 757' },
    { code: 'A-350-900/500-200', name: 'Airbus A350-900/500-200' },
    { code: 'B-767-300ER', name: 'Boeing 767-300ER' },
    { code: 'B-767-300/400', name: 'Boeing 767-300/400' },
    { code: 'A-330-900/300/200', name: 'Airbus A330-900/300/200' },
    { code: 'A-321N', name: 'Airbus A321N' },
    { code: 'B-757-300/400', name: 'Boeing 757-300/400' },
    { code: 'B-737-300/700', name: 'Boeing 737-300/700' },
    { code: 'A-320-319', name: 'Airbus A320-319' },
    { code: 'A-220-300', name: 'Airbus A220-300' },
    { code: 'A-220-100', name: 'Airbus A220-100' },
    { code: 'B-717', name: 'Boeing 717' },
    { code: 'EMB-195', name: 'Embraer 195' },
    { code: 'EMB-190/CRJ-900', name: 'Embraer 190/CRJ-900' }
  ],
  payRates: {
    // Captain rates from PDF (12 steps)
    'Captain': {
      'B-777': [465.13, 465.13, 465.13, 465.13, 465.13, 444.23, 447.73, 451.18, 454.68, 458.15, 461.62, 465.13],
      'A-350': [465.13, 465.13, 465.13, 465.13, 465.13, 444.23, 447.73, 451.18, 454.68, 458.15, 461.62, 465.13], 
      'B-757': [465.13, 430.24, 430.24, 437.26, 440.77, 444.23, 447.73, 451.18, 454.68, 458.15, 461.62, 465.13],
      'A-350-900/500-200': [465.13, 430.24, 433.76, 437.26, 440.77, 444.23, 447.73, 451.18, 454.68, 458.15, 461.62, 465.13],
      'B-767-300ER': [389.34, 356.98, 359.88, 362.79, 365.88, 368.73, 371.47, 374.54, 377.20, 381.25, 385.36, 389.34],
      'B-767-300/400': [389.34, 356.98, 359.88, 362.79, 365.88, 368.73, 371.47, 374.54, 377.20, 381.25, 385.36, 389.34],
      'A-330-900/300/200': [389.34, 356.98, 359.88, 362.79, 365.88, 368.73, 371.47, 374.54, 377.20, 381.25, 385.36, 389.34],
      'A-321N': [375.28, 346.95, 349.68, 352.11, 355.38, 358.22, 361.04, 363.87, 366.70, 369.49, 372.38, 375.28],
      'B-757-300/400': [373.33, 375.28, 373.33, 373.33, 373.33, 358.22, 360.04, 359.36, 346.64, 346.64, 349.34, 352.06],
      'B-737-300/700': [373.33, 345.42, 348.15, 350.86, 353.80, 356.58, 359.36, 362.16, 364.99, 367.76, 370.58, 373.33],
      'A-320-319': [360.24, 333.04, 335.72, 338.43, 341.17, 343.93, 346.64, 349.34, 352.06, 354.77, 357.52, 360.24],
      'A-220-300': [345.50, 319.41, 321.97, 324.59, 327.21, 329.86, 332.43, 335.04, 337.62, 340.24, 342.88, 345.50],
      'A-220-100': [335.99, 310.71, 313.28, 315.39, 318.25, 320.88, 323.32, 325.86, 328.33, 330.94, 333.52, 335.99],
      'B-717': [282.04, 260.86, 263.00, 265.13, 267.19, 269.37, 271.42, 273.55, 275.68, 277.81, 279.99, 282.04],
      'EMB-195': [239.96, 221.94, 223.80, 225.60, 227.30, 229.13, 230.93, 232.75, 234.54, 236.37, 238.19, 239.96],
      'EMB-190/CRJ-900': [221.94, 221.94, 223.80, 225.60, 227.30, 229.13, 230.93, 232.75, 234.54, 236.37, 238.19, 239.96]
    },
    // First Officer rates from PDF (12 steps)
    'First Officer': {
      'B-777': [317.73, 230.20, 269.38, 275.90, 282.49, 289.65, 297.70, 304.54, 307.86, 312.03, 314.83, 317.73],
      'A-350': [317.73, 230.20, 269.38, 275.90, 282.49, 289.65, 297.70, 304.54, 307.86, 312.03, 314.83, 317.73],
      'B-757': [317.73, 230.20, 269.38, 275.90, 282.49, 289.65, 297.70, 304.54, 307.86, 312.03, 314.83, 317.73],
      'A-350-900/500-200': [317.73, 230.20, 269.38, 275.90, 282.49, 289.65, 297.70, 304.54, 307.86, 312.03, 314.83, 317.73],
      'B-767-300ER': [265.92, 190.98, 223.49, 228.93, 234.54, 240.40, 247.03, 252.83, 255.39, 259.63, 262.82, 265.92],
      'B-767-300/400': [265.92, 190.98, 223.49, 228.93, 234.54, 240.40, 247.03, 252.83, 255.39, 259.63, 262.82, 265.92],
      'A-330-900/300/200': [265.92, 190.98, 223.49, 228.93, 234.54, 240.40, 247.03, 252.83, 255.39, 259.63, 262.82, 265.92],
      'A-321N': [256.33, 185.59, 217.17, 222.43, 227.77, 233.57, 240.11, 245.64, 248.28, 251.66, 253.97, 256.33],
      'B-757-300/400': [250.42, 185.59, 217.17, 222.43, 227.77, 233.57, 240.11, 245.64, 248.28, 251.66, 253.97, 256.33],
      'B-737-300/700': [250.42, 178.18, 208.50, 213.55, 218.70, 224.21, 230.50, 235.80, 238.50, 241.63, 243.83, 246.05],
      'A-320-319': [235.97, 170.88, 199.96, 204.79, 209.73, 215.01, 221.05, 226.15, 228.59, 231.72, 233.85, 235.97],
      'A-220-300': [229.43, 166.22, 194.53, 199.29, 203.98, 209.21, 215.05, 219.97, 222.39, 225.36, 227.31, 229.43],
      'A-220-100': [163.87, 163.33, 158.95, 142.33, 145.70, 149.40, 153.56, 157.10, 158.78, 160.94, 162.46, 163.87],
      'B-717': [192.66, 139.56, 163.33, 167.31, 171.30, 175.62, 180.50, 184.66, 186.60, 189.19, 190.96, 192.66],
      'EMB-195': [192.66, 139.56, 163.33, 167.31, 171.30, 175.62, 180.50, 184.66, 186.60, 189.19, 190.96, 192.66],
      'EMB-190/CRJ-900': [170.43, 125.14, 144.51, 148.02, 151.53, 155.37, 159.70, 163.38, 165.14, 167.38, 168.96, 170.43]
    }
  }
};

function comparePayData() {
  console.log('🔍 COMPARING PDF PAY DATA vs DATABASE PAY DATA\n');
  
  const dbAircraft = payScaleData.aircraft.map(a => a.code);
  const pdfAircraft = pdfPayData.aircraft.map(a => a.code);
  
  // Find missing aircraft in database
  const missingInDB = pdfAircraft.filter(code => !dbAircraft.includes(code));
  const missingInPDF = dbAircraft.filter(code => !pdfAircraft.includes(code));
  
  console.log('📊 AIRCRAFT COMPARISON:');
  console.log(`   Database has: ${dbAircraft.length} aircraft types`);
  console.log(`   PDF has: ${pdfAircraft.length} aircraft types`);
  console.log(`   Missing in DB: ${missingInDB.length} aircraft`);
  console.log(`   Missing in PDF: ${missingInPDF.length} aircraft\n`);
  
  if (missingInDB.length > 0) {
    console.log('❌ AIRCRAFT MISSING FROM DATABASE:');
    missingInDB.forEach(code => {
      const aircraft = pdfPayData.aircraft.find(a => a.code === code);
      console.log(`   ${code}: ${aircraft.name}`);
    });
    console.log();
  }
  
  if (missingInPDF.length > 0) {
    console.log('⚠️  AIRCRAFT IN DATABASE BUT NOT IN PDF:');
    missingInPDF.forEach(code => {
      const aircraft = payScaleData.aircraft.find(a => a.code === code);
      console.log(`   ${code}: ${aircraft.name}`);
    });
    console.log();
  }
  
  // Compare pay rates for common aircraft
  const commonAircraft = dbAircraft.filter(code => pdfAircraft.includes(code));
  
  console.log('💰 PAY RATE COMPARISON FOR COMMON AIRCRAFT:');
  
  for (const position of ['Captain', 'First Officer']) {
    console.log(`\n${position.toUpperCase()} RATES:`);
    
    for (const aircraft of commonAircraft) {
      const dbRates = payScaleData.payRates[position][aircraft];
      const pdfRates = pdfPayData.payRates[position][aircraft];
      
      if (!dbRates || !pdfRates) {
        console.log(`   ${aircraft}: Missing rates in one source`);
        continue;
      }
      
      // Compare rates
      let matching = true;
      for (let i = 0; i < Math.max(dbRates.length, pdfRates.length); i++) {
        if (Math.abs((dbRates[i] || 0) - (pdfRates[i] || 0)) > 0.01) {
          matching = false;
          break;
        }
      }
      
      if (matching) {
        console.log(`   ✅ ${aircraft}: Pay rates match`);
      } else {
        console.log(`   ❌ ${aircraft}: Pay rates differ`);
        console.log(`      DB:  [${dbRates.join(', ')}]`);
        console.log(`      PDF: [${pdfRates.join(', ')}]`);
      }
    }
  }
  
  // Show detailed missing pay data
  console.log('\n🚨 DETAILED MISSING PAY DATA FROM DATABASE:\n');
  
  if (missingInDB.length > 0) {
    for (const aircraft of missingInDB) {
      const aircraftInfo = pdfPayData.aircraft.find(a => a.code === aircraft);
      console.log(`${aircraft} (${aircraftInfo.name}):`);
      
      console.log(`  Captain Rates: [${pdfPayData.payRates.Captain[aircraft].join(', ')}]`);
      console.log(`  First Officer Rates: [${pdfPayData.payRates['First Officer'][aircraft].join(', ')}]`);
      console.log();
    }
  }
  
  return {
    missingInDB,
    missingInPDF,
    commonAircraft,
    totalPDFAircraft: pdfAircraft.length,
    totalDBAircraft: dbAircraft.length
  };
}

// Run the comparison
const results = comparePayData();

console.log('📋 SUMMARY:');
console.log(`   Total aircraft in PDF: ${results.totalPDFAircraft}`);
console.log(`   Total aircraft in DB: ${results.totalDBAircraft}`);
console.log(`   Common aircraft: ${results.commonAircraft.length}`);
console.log(`   Missing from DB: ${results.missingInDB.length}`);
console.log(`   Extra in DB: ${results.missingInPDF.length}`);

module.exports = { pdfPayData, comparePayData };