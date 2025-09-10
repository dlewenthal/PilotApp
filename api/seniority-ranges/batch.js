import { getSeniorityRangesPostgreSQL } from '../../api-auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { requests } = req.body;
    
    if (!requests || !Array.isArray(requests)) {
      return res.status(400).json({ error: 'Requests array is required' });
    }
    
    const results = {};
    const BATCH_SIZE = 5; // Limit concurrent requests
    
    for (let i = 0; i < requests.length; i += BATCH_SIZE) {
      const batch = requests.slice(i, i + BATCH_SIZE);
      const batchPromises = batch.map(async ({ key, base, fleet, position }) => {
        try {
          const ranges = await getSeniorityRangesPostgreSQL(base, fleet, position);
          results[key] = ranges;
        } catch (error) {
          console.error(`Error getting ranges for ${key}:`, error);
          results[key] = { error: 'Failed to get ranges' };
        }
      });
      
      await Promise.all(batchPromises);
    }
    
    res.json(results);
  } catch (error) {
    console.error('Error in batch seniority ranges:', error);
    res.status(500).json({ error: 'Failed to get seniority ranges' });
  }
}