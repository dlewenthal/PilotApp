import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import SystemSnapshot from '../SystemSnapshot';
import WidgetView from '../WidgetView';
import '../PilotSeniorityLookup.css';

function Dashboard() {
  const [pilotData, setPilotData] = useState(null);
  const [seniorityData, setSeniorityData] = useState(null);
  const [currentView, setCurrentView] = useState('detailed');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser && currentUser.emailVerified) {
      fetchPilotData();
    } else if (currentUser && !currentUser.emailVerified) {
      setError('Please verify your email address before accessing your dashboard.');
      setLoading(false);
    }
  }, [currentUser]);

  async function fetchPilotData() {
    try {
      // Get Firebase ID token for authentication
      const token = await currentUser.getIdToken();
      
      // Get user's seniority data using the authenticated endpoint
      const seniorityResponse = await fetch('/api/user/seniority', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!seniorityResponse.ok) {
        throw new Error('Failed to get seniority data');
      }
      
      const seniority = await seniorityResponse.json();
      setPilotData(seniority.pilot);
      setSeniorityData(seniority);
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

  if (loading) {
    return <div className="loading">Loading your seniority information...</div>;
  }

  if (error) {
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <button onClick={handleLogout} className="btn-secondary">Logout</button>
        </div>
        <div className="alert alert-error">{error}</div>
        {!currentUser?.emailVerified && (
          <p>Check your email and click the verification link, then refresh this page.</p>
        )}
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {currentUser?.displayName?.split(' (')[0]}</h1>
        <button onClick={handleLogout} className="btn-secondary">Logout</button>
      </div>
      
      {seniorityData && (
        <div className="pilot-seniority-lookup">
          {/* Pilot Summary */}
          <div className="pilot-summary">
            <h2>{seniorityData.pilot.name}</h2>
            <div className="pilot-details">
              <span>Employee #{seniorityData.pilot.empNumber}</span>
              <span>Total Snapshots: {seniorityData.count || 0}</span>
              {seniorityData.senioritySnapshots && seniorityData.senioritySnapshots.length > 0 && (
                <span>Latest Seniority: #{seniorityData.senioritySnapshots[0].seniorityNumber?.toLocaleString() || 'N/A'}</span>
              )}
            </div>
          </div>

          {/* View Toggle */}
          <div className="view-controls">
            <button 
              className={currentView === 'detailed' ? 'active' : ''}
              onClick={() => setCurrentView('detailed')}
            >
              Detailed View
            </button>
            <button 
              className={currentView === 'snapshot' ? 'active' : ''}
              onClick={() => setCurrentView('snapshot')}
            >
              System Snapshot
            </button>
            <button 
              className={currentView === 'widget' ? 'active' : ''}
              onClick={() => setCurrentView('widget')}
            >
              Widget View
            </button>
          </div>

          {/* Results Display */}
          <div className="results-container">
            {currentView === 'detailed' && (
              <div className="detailed-results">
                {seniorityData.senioritySnapshots && seniorityData.senioritySnapshots.length > 0 ? (
                  <div className="seniority-history">
                    <h3>Recent Seniority Snapshots</h3>
                    <div className="snapshots-grid">
                      {seniorityData.senioritySnapshots.map((snapshot, index) => (
                        <div key={index} className="snapshot-card">
                          <div className="snapshot-header">
                            <span className="report-date">
                              {new Date(snapshot.reportDate).toLocaleDateString()}
                            </span>
                            <span className="seniority-number">
                              #{snapshot.seniorityNumber?.toLocaleString() || 'N/A'}
                            </span>
                          </div>
                          <div className="snapshot-details">
                            <span className="base">{snapshot.baseCity || 'N/A'}</span>
                            <span className="fleet">{snapshot.fleetCode || 'N/A'}</span>
                            <span className="position">{snapshot.positionCode || 'N/A'}</span>
                            <span className="category">{snapshot.category || 'N/A'}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="no-data">
                    <p>No seniority data found for this pilot.</p>
                  </div>
                )}
              </div>
            )}

            {currentView === 'snapshot' && seniorityData && (
              <SystemSnapshot seniorityData={seniorityData} />
            )}

            {currentView === 'widget' && seniorityData && (
              <WidgetView seniorityData={seniorityData} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;