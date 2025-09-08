const express = require('express');
const cors = require('cors');
const path = require('path');
const { searchPilots, getPilotSeniority, getPilotSnapshot, getDatabaseTables, getTableData, getSeniorityRanges } = require('./api');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'build')));

// API Routes

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

// Get pilot seniority data endpoint
app.get('/api/pilots/:pilotId/seniority', (req, res) => {
  const pilotId = parseInt(req.params.pilotId);
  
  if (isNaN(pilotId)) {
    return res.status(400).json({ error: 'Invalid pilot ID' });
  }
  
  getPilotSeniority(pilotId, (err, seniorityData) => {
    if (err) {
      console.error('Error getting seniority data:', err);
      return res.status(500).json({ error: 'Failed to get seniority data' });
    }
    
    res.json(seniorityData);
  });
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

// Get seniority ranges endpoint
app.get('/api/seniority-ranges', (req, res) => {
  const { base, fleet, position } = req.query;
  
  if (!base || !fleet || !position) {
    return res.status(400).json({ error: 'base, fleet, and position parameters are required' });
  }
  
  getSeniorityRanges(base, fleet, position, (err, ranges) => {
    if (err) {
      console.error('Error getting seniority ranges:', err);
      return res.status(500).json({ error: 'Failed to get seniority ranges' });
    }
    
    res.json(ranges);
  });
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