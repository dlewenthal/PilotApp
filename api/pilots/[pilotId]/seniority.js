import { getPilotSeniorityById } from '../../../api-auth';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const pilotId = parseInt(req.query.pilotId);
    
    if (isNaN(pilotId)) {
      return res.status(400).json({ error: 'Invalid pilot ID' });
    }
    
    const seniorityData = await getPilotSeniorityById(pilotId);
    res.json(seniorityData);
  } catch (error) {
    console.error('Error getting seniority data:', error);
    res.status(500).json({ error: 'Failed to get seniority data' });
  }
}