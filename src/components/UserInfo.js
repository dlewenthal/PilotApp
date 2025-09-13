import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function UserInfo() {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [creating, setCreating] = useState(false);
  const [createMessage, setCreateMessage] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser && currentUser.emailVerified) {
      fetchUserProfile();
    } else if (currentUser && !currentUser.emailVerified) {
      setError('Please verify your email address before accessing your profile.');
      setLoading(false);
    }
  }, [currentUser]);

  async function fetchUserProfile() {
    try {
      // Get Firebase ID token for authentication
      const token = await currentUser.getIdToken();
      
      // Get user profile from the authenticated endpoint
      const response = await fetch('/api/user/profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get user profile');
      }
      
      const profile = await response.json();
      setUserProfile(profile);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  }

  async function createUserRecord() {
    if (!currentUser?.displayName) {
      setCreateMessage('Error: No display name found. Employee ID cannot be extracted.');
      return;
    }

    // Extract employee ID from display name
    const displayName = currentUser.displayName;
    const employeeIdMatch = displayName.match(/\((\d+)\)/);
    
    if (!employeeIdMatch) {
      setCreateMessage('Error: Employee ID not found in display name format.');
      return;
    }

    const employeeId = employeeIdMatch[1];
    const nameWithoutId = displayName.split(' (')[0];
    const nameParts = nameWithoutId.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    try {
      setCreating(true);
      setCreateMessage('');
      
      const token = await currentUser.getIdToken();
      
      const response = await fetch('/api/auth/create-user-record', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          employeeId: employeeId,
          firstName: firstName,
          lastName: lastName
        })
      });
      
      if (response.ok) {
        setCreateMessage('User record created successfully! Refreshing profile...');
        // Refresh the profile data
        setTimeout(() => {
          fetchUserProfile();
        }, 1000);
      } else {
        const errorData = await response.json();
        setCreateMessage(`Error: ${errorData.error}`);
      }
    } catch (error) {
      setCreateMessage(`Error: ${error.message}`);
    }
    
    setCreating(false);
  }

  if (loading) {
    return <div className="loading">Loading your profile...</div>;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>User Profile - Troubleshooting</h1>
        <div>
          <button onClick={() => navigate('/dashboard')} className="btn-primary" style={{marginRight: '10px'}}>
            Go to Dashboard
          </button>
          <button onClick={handleLogout} className="btn-secondary">Logout</button>
        </div>
      </div>
      
      {error && (
        <div className="alert alert-error">
          <strong>Error:</strong> {error}
          {!currentUser?.emailVerified && (
            <p>Check your email and click the verification link, then refresh this page.</p>
          )}
          {error.includes('User profile not found') && (
            <div style={{marginTop: '15px'}}>
              <p><strong>Solution:</strong> It looks like your user record wasn't created in our database during registration. You can create it manually:</p>
              <button 
                onClick={createUserRecord} 
                disabled={creating}
                className="btn-primary"
                style={{marginTop: '10px'}}
              >
                {creating ? 'Creating User Record...' : 'Create User Record'}
              </button>
            </div>
          )}
        </div>
      )}

      {createMessage && (
        <div className={`alert ${createMessage.includes('Error') ? 'alert-error' : 'alert-success'}`}>
          {createMessage}
        </div>
      )}

      {userProfile && (
        <div className="user-info-container">
          <h2>Authentication Info</h2>
          
          <div className="info-section">
            <h3>Firebase User Data</h3>
            <table className="info-table">
              <tbody>
                <tr>
                  <td><strong>Firebase UID:</strong></td>
                  <td>{currentUser.uid}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>{currentUser.email}</td>
                </tr>
                <tr>
                  <td><strong>Display Name:</strong></td>
                  <td>{currentUser.displayName || 'Not set'}</td>
                </tr>
                <tr>
                  <td><strong>Email Verified:</strong></td>
                  <td>{currentUser.emailVerified ? 'Yes' : 'No'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="info-section">
            <h3>Database User Record</h3>
            <table className="info-table">
              <tbody>
                <tr>
                  <td><strong>Employee ID:</strong></td>
                  <td>{userProfile.employeeId || 'Not found'}</td>
                </tr>
                <tr>
                  <td><strong>First Name:</strong></td>
                  <td>{userProfile.firstName || 'Not found'}</td>
                </tr>
                <tr>
                  <td><strong>Last Name:</strong></td>
                  <td>{userProfile.lastName || 'Not found'}</td>
                </tr>
                <tr>
                  <td><strong>Pilot Name (from DB):</strong></td>
                  <td>{userProfile.name || 'Not found'}</td>
                </tr>
                <tr>
                  <td><strong>Created At:</strong></td>
                  <td>{userProfile.createdAt ? new Date(userProfile.createdAt).toLocaleString() : 'Not found'}</td>
                </tr>
                <tr>
                  <td><strong>Last Login:</strong></td>
                  <td>{userProfile.lastLoginAt ? new Date(userProfile.lastLoginAt).toLocaleString() : 'Never'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {userProfile.seniorityData && userProfile.seniorityData.length > 0 && (
            <div className="info-section">
              <h3>Recent Seniority Data</h3>
              <table className="info-table">
                <thead>
                  <tr>
                    <th>Report Date</th>
                    <th>Seniority #</th>
                    <th>Base</th>
                    <th>Fleet</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  {userProfile.seniorityData.map((snapshot, index) => (
                    <tr key={index}>
                      <td>{new Date(snapshot.reportDate).toLocaleDateString()}</td>
                      <td>#{snapshot.seniorityNumber?.toLocaleString() || 'N/A'}</td>
                      <td>{snapshot.baseCity || 'N/A'}</td>
                      <td>{snapshot.fleetCode || 'N/A'}</td>
                      <td>{snapshot.positionCode || 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="info-section">
            <h3>Raw Response Data</h3>
            <pre style={{background: '#f5f5f5', padding: '10px', overflow: 'auto', fontSize: '12px'}}>
              {JSON.stringify(userProfile, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserInfo;