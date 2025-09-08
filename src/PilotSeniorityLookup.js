import React, { useState } from 'react';
import './PilotSeniorityLookup.css';
import SystemSnapshot from './SystemSnapshot';
import WidgetView from './WidgetView';

const PilotSeniorityLookup = () => {
  const [pilotName, setPilotName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [seniorityData, setSeniorityData] = useState(null);
  const [selectedPilot, setSelectedPilot] = useState(null);
  const [currentView, setCurrentView] = useState('detailed'); // 'detailed', 'snapshot', or 'widget'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Search for pilots by name
  const searchPilots = async () => {
    if (!pilotName.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`/api/pilots/search?name=${encodeURIComponent(pilotName)}`);
      if (!response.ok) throw new Error('Failed to search pilots');
      
      const data = await response.json();
      setSearchResults(data);
    } catch (err) {
      setError('Error searching for pilots: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Get seniority data for a specific pilot
  const getSeniorityData = async (pilot) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`/api/pilots/${pilot.id}/seniority`);
      if (!response.ok) throw new Error('Failed to get seniority data');
      
      const data = await response.json();
      setSeniorityData(data);
      setSelectedPilot(pilot);
      setSearchResults([]); // Clear search results
    } catch (err) {
      setError('Error getting seniority data: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key in search input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchPilots();
    }
  };

  // Reset to search view
  const resetSearch = () => {
    setSeniorityData(null);
    setSelectedPilot(null);
    setSearchResults([]);
    setPilotName('');
    setError('');
    setCurrentView('detailed');
  };

  // Format seniority display
  const formatSeniority = (rank, total, isAvailable) => {
    if (!isAvailable) return 'N/A';
    if (!total || total === 0) return 'None';
    
    const percentage = ((rank / total) * 100).toFixed(1);
    return `${percentage}% [#${rank.toLocaleString()}/${total.toLocaleString()}]`;
  };

  return (
    <div className="pilot-seniority-lookup">
      <div className="header">
        <h1>Delta Pilot Seniority Lookup</h1>
        
        {/* Search Section */}
        <div className="search-section">
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Enter pilot name (e.g., LEWENTHAL or SMITH J)"
              value={pilotName}
              onChange={(e) => setPilotName(e.target.value)}
              onKeyPress={handleKeyPress}
              className="search-input"
            />
            <button 
              onClick={searchPilots} 
              disabled={loading}
              className="search-button"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
          
          {(seniorityData || selectedPilot) && (
            <div className="action-buttons">
              <button onClick={resetSearch} className="reset-button">
                New Search
              </button>
              {selectedPilot && (
                <div className="view-toggle">
                  <button 
                    onClick={() => setCurrentView('detailed')}
                    className={`view-button ${currentView === 'detailed' ? 'active' : ''}`}
                  >
                    Detailed View
                  </button>
                  <button 
                    onClick={() => setCurrentView('snapshot')}
                    className={`view-button ${currentView === 'snapshot' ? 'active' : ''}`}
                  >
                    System Snapshot
                  </button>
                  <button 
                    onClick={() => setCurrentView('widget')}
                    className={`view-button ${currentView === 'widget' ? 'active' : ''}`}
                  >
                    Widget View
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Error Display */}
        {error && <div className="error-message">{error}</div>}
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Select Pilot:</h3>
          {searchResults.map((pilot) => (
            <div key={pilot.id} className="pilot-result" onClick={() => getSeniorityData(pilot)}>
              <div className="pilot-name">{pilot.name}</div>
              <div className="pilot-details">
                Employee: {pilot.empNumber} | 
                Hire Date: {new Date(pilot.pilotHireDate).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* System Snapshot View */}
      {selectedPilot && currentView === 'snapshot' && (
        <SystemSnapshot pilotId={selectedPilot.id} />
      )}

      {/* Widget View */}
      {seniorityData && currentView === 'widget' && (
        <WidgetView seniorityData={seniorityData} />
      )}

      {/* Detailed Seniority Data Table */}
      {seniorityData && currentView === 'detailed' && (
        <div className="seniority-data">
          <div className="pilot-info">
            <h2>{seniorityData.pilot.name}</h2>
            <p>
              Employee: {seniorityData.pilot.empNumber} | 
              Hire Date: {new Date(seniorityData.pilot.pilotHireDate).toLocaleDateString()} | 
              System Seniority: #{seniorityData.systemSeniority?.toLocaleString()}
            </p>
          </div>

          {seniorityData.bases.map((base) => (
            <div key={base.baseCity} className="base-section">
              <h3>{base.baseCity} ({base.totalPilots.toLocaleString()} pilots)</h3>
              
              <table className="seniority-table">
                <thead>
                  <tr>
                    <th>Aircraft</th>
                    <th>Captain</th>
                    <th>Capt Pay</th>
                    <th>First Officer</th>
                    <th>FO Pay</th>
                  </tr>
                </thead>
                <tbody>
                  {base.aircraft.map((aircraft) => (
                    <tr key={`${base.baseCity}-${aircraft.fleetCode}`}>
                      <td className="aircraft-name">
                        {aircraft.fleetCode} {aircraft.fleetName}
                      </td>
                      <td className="captain-cell">
                        {formatSeniority(
                          aircraft.captainRank, 
                          aircraft.captainTotal, 
                          aircraft.captainAvailable
                        )}
                      </td>
                      <td className="pay-cell">
                        {aircraft.captainPay ? `$${aircraft.captainPay.toFixed(2)}` : 'N/A'}
                      </td>
                      <td className="fo-cell">
                        {formatSeniority(
                          aircraft.foRank, 
                          aircraft.foTotal, 
                          aircraft.foAvailable
                        )}
                      </td>
                      <td className="pay-cell">
                        {aircraft.foPay ? `$${aircraft.foPay.toFixed(2)}` : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}

      {/* Loading State */}
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default PilotSeniorityLookup;