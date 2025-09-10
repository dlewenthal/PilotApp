import { getPilotByEmployeeId } from '../../api-auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { employeeId } = req.body;
    
    if (!employeeId) {
      return res.status(400).json({ error: 'Employee ID is required' });
    }
    
    const pilot = await getPilotByEmployeeId(employeeId);
    res.json(pilot);
  } catch (error) {
    console.error('Error checking employee ID:', error);
    res.status(500).json({ error: 'Failed to check employee ID' });
  }
}