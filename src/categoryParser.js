// Parse Delta pilot category codes
// Format: [BASE][FLEET][POSITION]
// Example: ATL350A = Atlanta + Boeing 350 + Captain

const AIRPORT_CODES = {
  'ATL': 'Atlanta',
  'NYC': 'New York',
  'LAX': 'Los Angeles', 
  'DTW': 'Detroit',
  'SEA': 'Seattle',
  'MSP': 'Minneapolis',
  'SLC': 'Salt Lake City',
  'INS': 'Instructor',
  'SUP': 'Supervisor',
  'NBC': 'NBC (Special)'  // Need to research what NBC stands for
};

const FLEET_CODES = {
  '350': 'Airbus A350',
  '330': 'Airbus A330', 
  '320': 'Airbus A320',
  '765': 'Boeing 767-300',
  '73N': 'Boeing 737 Next Gen',
  '717': 'Boeing 717',
  '220': 'Airbus A220',
  '7ER': 'Boeing 777 Extended Range',
  'SIC': 'Second in Command',
  'MIL': 'Military',
  'PLA': 'Planning',
  'FML': 'Flight Management',
  'NEW': 'New Hire'
};

const POSITION_CODES = {
  'A': 'Captain',
  'B': 'First Officer'
};

function parseCategoryCode(category) {
  if (!category || category.trim() === '') {
    return { 
      base: 'UNASSIGNED', 
      fleet: 'UNASSIGNED', 
      position: 'UNASSIGNED',
      baseCity: 'Unassigned',
      fleetName: 'Unassigned', 
      positionName: 'Unassigned'
    };
  }
  
  // Handle special cases first
  if (category.startsWith('NBC')) {
    const position = category.slice(-1);
    const middle = category.slice(3, -1);
    return {
      base: 'NBC',
      fleet: middle,
      position: position,
      baseCity: AIRPORT_CODES['NBC'] || 'NBC',
      fleetName: FLEET_CODES[middle] || middle,
      positionName: POSITION_CODES[position] || position
    };
  }

  // Standard format: [3-letter base][fleet code][A/B position]
  const position = category.slice(-1);  // Last character (A/B)
  const base = category.slice(0, 3);    // First 3 characters
  const fleet = category.slice(3, -1);  // Middle part
  
  return {
    base: base,
    fleet: fleet, 
    position: position,
    baseCity: AIRPORT_CODES[base] || base,
    fleetName: FLEET_CODES[fleet] || fleet,
    positionName: POSITION_CODES[position] || position
  };
}

// Get all unique bases, fleets, positions from categories
function analyzeCategoryCodes(categories) {
  const bases = new Set();
  const fleets = new Set();
  const positions = new Set();
  
  categories.forEach(cat => {
    const parsed = parseCategoryCode(cat);
    if (parsed.base) bases.add(parsed.base);
    if (parsed.fleet) fleets.add(parsed.fleet);
    if (parsed.position) positions.add(parsed.position);
  });
  
  return {
    bases: Array.from(bases).sort(),
    fleets: Array.from(fleets).sort(), 
    positions: Array.from(positions).sort()
  };
}

module.exports = {
  parseCategoryCode,
  analyzeCategoryCodes,
  AIRPORT_CODES,
  FLEET_CODES,
  POSITION_CODES
};

// Test the parser if run directly
if (require.main === module) {
  const testCategories = ['ATL350A', 'MSP330A', 'DTW350A', 'SEA330A', 'LAX350A', 'NYC7ERA', 'NBCSICA'];
  
  console.log('Category Code Analysis:');
  testCategories.forEach(cat => {
    const parsed = parseCategoryCode(cat);
    console.log(`${cat}: ${parsed.baseCity} + ${parsed.fleetName} + ${parsed.positionName}`);
  });
  
  console.log('\nAll unique components:');
  console.log(analyzeCategoryCodes(testCategories));
}