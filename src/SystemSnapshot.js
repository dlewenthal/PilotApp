import React, { useState, useEffect } from 'react';
import './SystemSnapshot.css';

const SystemSnapshot = ({ pilotId }) => {
  const [snapshotData, setSnapshotData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (pilotId) {
      fetchSnapshotData(pilotId);
    }
  }, [pilotId]);

  const fetchSnapshotData = async (id) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`/api/pilots/${id}/snapshot`);
      if (!response.ok) throw new Error('Failed to fetch snapshot data');
      
      const data = await response.json();
      setSnapshotData(data);
    } catch (err) {
      setError('Error loading snapshot data: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Get color class based on percentage
  const getPercentileColor = (percentage) => {
    if (!percentage) return '';
    if (percentage <= 20) return 'percentile-excellent';
    if (percentage <= 40) return 'percentile-good';
    if (percentage <= 60) return 'percentile-fair';
    if (percentage <= 80) return 'percentile-poor';
    return 'percentile-very-poor';
  };

  // Format large numbers with commas
  const formatNumber = (num) => {
    return num ? num.toLocaleString() : '';
  };

  // Render a single base section with side-by-side tables
  const renderBaseSection = (baseData) => {
    return (
      <div key={baseData.baseCity} className="base-section">
        <div className="base-tables-container">
          {/* Captains Table */}
          <div className="captain-table-container">
            <h3 className="table-title">{baseData.baseCity} Captains</h3>
            <table className="snapshot-table">
              <thead>
                <tr className="table-header">
                  <th>Fleet</th>
                  <th colSpan="3">Overall</th>
                  <th colSpan="2">You</th>
                </tr>
                <tr className="table-subheader">
                  <th></th>
                  <th>Senior</th>
                  <th>Junior</th>
                  <th>Total</th>
                  <th>Pos</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                {baseData.aircraft.map((aircraft) => {
                  const captainData = aircraft.captain;
                  const percentage = captainData.available ? 
                    ((captainData.rank / captainData.total) * 100).toFixed(0) : null;
                  
                  return (
                    <tr key={`${baseData.baseCity}-${aircraft.fleetCode}-capt`} 
                        className={percentage ? getPercentileColor(parseFloat(percentage)) : ''}>
                      <td className="fleet-code">{aircraft.fleetCode}</td>
                      <td className="number-cell">{captainData.available ? formatNumber(captainData.senior) : ''}</td>
                      <td className="number-cell">{captainData.available ? formatNumber(captainData.junior) : ''}</td>
                      <td className="number-cell">{captainData.available ? formatNumber(captainData.total) : ''}</td>
                      <td className="number-cell">{captainData.available ? formatNumber(captainData.rank) : ''}</td>
                      <td className="percentage-cell">{percentage ? `${percentage}%` : ''}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* First Officers Table */}
          <div className="fo-table-container">
            <h3 className="table-title">{baseData.baseCity} First Officers</h3>
            <table className="snapshot-table">
              <thead>
                <tr className="table-header">
                  <th>Fleet</th>
                  <th colSpan="3">Overall</th>
                  <th colSpan="2">You</th>
                </tr>
                <tr className="table-subheader">
                  <th></th>
                  <th>Senior</th>
                  <th>Junior</th>
                  <th>Total</th>
                  <th>Pos</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                {baseData.aircraft.map((aircraft) => {
                  const foData = aircraft.firstOfficer;
                  const percentage = foData.available ? 
                    ((foData.rank / foData.total) * 100).toFixed(0) : null;
                  
                  return (
                    <tr key={`${baseData.baseCity}-${aircraft.fleetCode}-fo`} 
                        className={percentage ? getPercentileColor(parseFloat(percentage)) : ''}>
                      <td className="fleet-code">{aircraft.fleetCode}</td>
                      <td className="number-cell">{foData.available ? formatNumber(foData.senior) : ''}</td>
                      <td className="number-cell">{foData.available ? formatNumber(foData.junior) : ''}</td>
                      <td className="number-cell">{foData.available ? formatNumber(foData.total) : ''}</td>
                      <td className="number-cell">{foData.available ? formatNumber(foData.rank) : ''}</td>
                      <td className="percentage-cell">{percentage ? `${percentage}%` : ''}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  if (loading) return <div className="loading-message">Loading System Snapshot...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!snapshotData) return <div className="no-data-message">Select a pilot to view System Snapshot</div>;

  return (
    <div className="system-snapshot">
      <div className="snapshot-header">
        <h1>System Snapshot</h1>
        <div className="pilot-info">
          {snapshotData.pilot.name} - Employee #{snapshotData.pilot.empNumber}
        </div>
      </div>
      
      <div className="snapshot-content">
        {snapshotData.bases.map(baseData => renderBaseSection(baseData))}
      </div>
    </div>
  );
};

export default SystemSnapshot;