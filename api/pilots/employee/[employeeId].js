const { getPilotByEmployeeId } = require('../../../api-auth');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const employeeId = req.query.employeeId;
    
    if (!employeeId) {
      return res.status(400).json({ error: 'Employee ID is required' });
    }
    
    const pilot = await getPilotByEmployeeId(employeeId);
    
    if (!pilot) {
      return res.status(404).json({ error: 'Pilot not found' });
    }
    
    res.json(pilot);
  } catch (error) {
    console.error('Error getting pilot by employee ID:', error);
    res.status(500).json({ error: 'Failed to get pilot data' });
  }
}