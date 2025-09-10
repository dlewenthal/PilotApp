import { getUserByFirebaseUid, updateUserLastLogin } from '../../api-auth';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { uid } = req.query;
      
      if (!uid) {
        return res.status(400).json({ error: 'Firebase UID is required' });
      }
      
      const user = await getUserByFirebaseUid(uid);
      res.json(user);
    } catch (error) {
      console.error('Error getting user profile:', error);
      res.status(500).json({ error: 'Failed to get user profile' });
    }
  } else if (req.method === 'POST') {
    try {
      const { uid } = req.body;
      
      if (!uid) {
        return res.status(400).json({ error: 'Firebase UID is required' });
      }
      
      await updateUserLastLogin(uid);
      res.json({ success: true });
    } catch (error) {
      console.error('Error updating last login:', error);
      res.status(500).json({ error: 'Failed to update last login' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}