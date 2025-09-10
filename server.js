const express = require('express');
const cors = require('cors');
const path = require('path');
const { searchPilots, getPilotSeniority, getPilotSnapshot, getDatabaseTables, getTableData, getSeniorityRanges } = require('./api');
const { getPilotByEmployeeId, createUserAccount, getUserByFirebaseUid, updateUserLastLogin, verifyUserEmail, getPilotSeniorityAuth, getPilotSeniorityById, getSeniorityRangesPostgreSQL } = require('./api-auth');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'build')));

// API Routes

// Health check endpoint for Railway
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Search pilots endpoint
app.get('/api/pilots/search', (req, res) => {
  const { name } = req.query;
  
  if (!name) {
    return res.status(400).json({ error: 'Name parameter is required' });
  }
  
  searchPilots(name, (err, pilots) => {
    if (err) {
      console.error('Error searching pilots:', err);
      return res.status(500).json({ error: 'Failed to search pilots' });
    }
    
    res.json(pilots);
  });
});

// Get pilot seniority data endpoint (PostgreSQL version)
app.get('/api/pilots/:pilotId/seniority', async (req, res) => {
  try {
    const pilotId = parseInt(req.params.pilotId);
    
    if (isNaN(pilotId)) {
      return res.status(400).json({ error: 'Invalid pilot ID' });
    }
    
    const seniorityData = await getPilotSeniorityById(pilotId);
    res.json(seniorityData);
  } catch (error) {
    console.error('Error getting seniority data:', error);
    res.status(500).json({ error: 'Failed to get seniority data' });
  }
});

// Get pilot snapshot data endpoint
app.get('/api/pilots/:pilotId/snapshot', (req, res) => {
  const pilotId = parseInt(req.params.pilotId);
  
  if (isNaN(pilotId)) {
    return res.status(400).json({ error: 'Invalid pilot ID' });
  }
  
  getPilotSnapshot(pilotId, (err, snapshotData) => {
    if (err) {
      console.error('Error getting snapshot data:', err);
      return res.status(500).json({ error: 'Failed to get snapshot data' });
    }
    
    res.json(snapshotData);
  });
});

// Database viewer endpoints
app.get('/api/database/tables', (req, res) => {
  getDatabaseTables((err, tables) => {
    if (err) {
      console.error('Error getting tables:', err);
      return res.status(500).json({ error: 'Failed to get database tables' });
    }
    
    res.json(tables);
  });
});

app.get('/api/database/table/:tableName', (req, res) => {
  const tableName = req.params.tableName;
  
  getTableData(tableName, (err, data) => {
    if (err) {
      console.error('Error getting table data:', err);
      return res.status(500).json({ error: 'Failed to get table data' });
    }
    
    res.json(data);
  });
});

// Get seniority ranges endpoint (PostgreSQL version)
app.get('/api/seniority-ranges', async (req, res) => {
  try {
    const { base, fleet, position } = req.query;
    
    if (!base || !fleet || !position) {
      return res.status(400).json({ error: 'base, fleet, and position parameters are required' });
    }
    
    const ranges = await getSeniorityRangesPostgreSQL(base, fleet, position);
    res.json(ranges);
  } catch (error) {
    console.error('Error getting seniority ranges:', error);
    res.status(500).json({ error: 'Failed to get seniority ranges' });
  }
});

// Batch seniority ranges endpoint with connection limiting
app.post('/api/seniority-ranges/batch', async (req, res) => {
  try {
    const { requests } = req.body;
    
    if (!requests || !Array.isArray(requests)) {
      return res.status(400).json({ error: 'requests array is required' });
    }
    
    const results = {};
    const BATCH_SIZE = 5; // Limit concurrent requests to avoid connection pool exhaustion
    
    // Process requests in batches
    for (let i = 0; i < requests.length; i += BATCH_SIZE) {
      const batch = requests.slice(i, i + BATCH_SIZE);
      
      const batchPromises = batch.map(async ({ key, base, fleet, position }) => {
        if (!base || !fleet || !position) {
          results[key] = { error: 'Missing required parameters' };
          return;
        }
        
        try {
          const ranges = await getSeniorityRangesPostgreSQL(base, fleet, position);
          results[key] = ranges;
        } catch (error) {
          console.error(`Error getting ranges for ${key}:`, error);
          results[key] = { error: 'Failed to get seniority ranges' };
        }
      });
      
      await Promise.all(batchPromises);
    }
    
    res.json(results);
  } catch (error) {
    console.error('Error in batch seniority ranges:', error);
    res.status(500).json({ error: 'Failed to process batch request' });
  }
});

// Authentication endpoints

// Get pilot by employee ID (for registration validation)
app.get('/api/pilots/employee/:employeeId', async (req, res) => {
  try {
    const { employeeId } = req.params;
    const pilot = await getPilotByEmployeeId(employeeId);
    
    if (!pilot) {
      return res.status(404).json({ error: 'Pilot not found' });
    }
    
    res.json(pilot);
  } catch (error) {
    console.error('Error fetching pilot by employee ID:', error);
    res.status(500).json({ error: 'Failed to fetch pilot data' });
  }
});

// Create user account
app.post('/api/auth/register', async (req, res) => {
  try {
    const { firebaseUid, email, employeeId, firstName, lastName } = req.body;
    
    if (!firebaseUid || !email || !employeeId || !firstName || !lastName) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    const user = await createUserAccount(firebaseUid, email, employeeId, firstName, lastName);
    res.json(user);
  } catch (error) {
    console.error('Error creating user account:', error);
    
    if (error.message.includes('Employee ID not found')) {
      return res.status(404).json({ error: 'Employee ID not found in pilot database' });
    }
    
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Account already exists' });
    }
    
    res.status(500).json({ error: 'Failed to create user account' });
  }
});

// Get user by Firebase UID
app.get('/api/auth/user/:firebaseUid', async (req, res) => {
  try {
    const { firebaseUid } = req.params;
    const user = await getUserByFirebaseUid(firebaseUid);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

// Update user last login
app.post('/api/auth/login/:firebaseUid', async (req, res) => {
  try {
    const { firebaseUid } = req.params;
    const user = await updateUserLastLogin(firebaseUid);
    res.json(user);
  } catch (error) {
    console.error('Error updating last login:', error);
    res.status(500).json({ error: 'Failed to update login time' });
  }
});

// Get authenticated pilot seniority data
app.get('/api/auth/pilot/:employeeId/seniority', async (req, res) => {
  try {
    const { employeeId } = req.params;
    const data = await getPilotSeniorityAuth(employeeId);
    res.json(data);
  } catch (error) {
    console.error('Error fetching authenticated pilot seniority:', error);
    res.status(500).json({ error: 'Failed to fetch pilot seniority data' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`API available at http://localhost:${port}/api`);
});