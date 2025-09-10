import { createUserAccount } from '../../api-auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firebaseUid, email, employeeId, name } = req.body;
    
    if (!firebaseUid || !email || !employeeId || !name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const user = await createUserAccount(firebaseUid, email, employeeId, name);
    res.json(user);
  } catch (error) {
    console.error('Error creating user account:', error);
    res.status(500).json({ error: 'Failed to create user account' });
  }
}