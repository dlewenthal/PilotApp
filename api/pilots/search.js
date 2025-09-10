import { searchPilots } from '../../api';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
}