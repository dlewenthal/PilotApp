import React, { useState } from 'react';

const SimplePilotAnalysis = () => {
  const [empNumber, setEmpNumber] = useState('');
  const [pilotData, setPilotData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzePilot = async () => {
    if (!empNumber.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Test with basic pilot fetch first
      const pilotResponse = await fetch(`http://localhost:3001/api/pilots/${empNumber}`);
      if (!pilotResponse.ok) {
        throw new Error('Pilot not found');
      }
      const pilot = await pilotResponse.json();
      setPilotData(pilot);
      
      // Try to get seniority analysis
      try {
        const seniorityResponse = await fetch(`http://localhost:3001/api/analyze/seniority/${empNumber}`);
        const seniorityData = await seniorityResponse.json();
        setPilotData(prev => ({ ...prev, seniorityAnalysis: seniorityData }));
      } catch (seniorityError) {
        console.error('Seniority analysis failed:', seniorityError);
      }
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const cardStyle = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const buttonStyle = {
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  const inputStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    marginRight: '10px',
    width: '300px'
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={cardStyle}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>
          Delta Pilot Seniority Analysis
        </h1>
        
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Enter Employee Number (e.g., 0819310)"
            value={empNumber}
            onChange={(e) => setEmpNumber(e.target.value)}
            style={inputStyle}
            onKeyPress={(e) => e.key === 'Enter' && analyzePilot()}
          />
          <button
            onClick={analyzePilot}
            disabled={loading || !empNumber.trim()}
            style={{
              ...buttonStyle,
              backgroundColor: (loading || !empNumber.trim()) ? '#ccc' : '#1976d2',
              cursor: (loading || !empNumber.trim()) ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Analyzing...' : 'Analyze Pilot'}
          </button>
        </div>

        {error && (
          <div style={{ backgroundColor: '#ffebee', border: '1px solid #f44336', color: '#d32f2f', padding: '15px', borderRadius: '4px', margin: '20px 0' }}>
            {error}
          </div>
        )}
      </div>

      {pilotData && (
        <div>
          {/* Basic Pilot Info */}
          <div style={cardStyle}>
            <h2 style={{ color: '#333', marginBottom: '15px' }}>Pilot Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
              <div>
                <strong>Name:</strong> {pilotData.name}
              </div>
              <div>
                <strong>Employee #:</strong> {pilotData.empNumber}
              </div>
              <div>
                <strong>Hire Date:</strong> {pilotData.pilotHireDate ? new Date(pilotData.pilotHireDate).toLocaleDateString() : 'N/A'}
              </div>
            </div>
            
            {pilotData.senioritySnapshots && pilotData.senioritySnapshots.length > 0 && (
              <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '4px' }}>
                <strong>Current Assignment:</strong><br/>
                {pilotData.senioritySnapshots[0].baseCity} {pilotData.senioritySnapshots[0].fleetName} {pilotData.senioritySnapshots[0].positionName}
                <br/>
                <strong>Overall Seniority:</strong> #{pilotData.senioritySnapshots[0].seniorityNumber}
              </div>
            )}
          </div>

          {/* Seniority Analysis */}
          {pilotData.seniorityAnalysis && (
            <div style={cardStyle}>
              <h2 style={{ color: '#333', marginBottom: '15px' }}>Seniority Analysis Results</h2>
              <p><strong>Analysis Date:</strong> {new Date(pilotData.seniorityAnalysis.analysisDate).toLocaleDateString()}</p>
              <p><strong>Total Options Available:</strong> {pilotData.seniorityAnalysis.seniorityOptions.length}</p>
              
              <h3 style={{ color: '#666', marginTop: '25px', marginBottom: '15px' }}>Top Seniority Positions</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f5f5f5' }}>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Base</th>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Aircraft</th>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Position</th>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Rank</th>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Percentile</th>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pilotData.seniorityAnalysis.seniorityOptions.slice(0, 15).map((option, index) => (
                      <tr key={index} style={{ 
                        backgroundColor: option.isCurrentAssignment ? '#e8f5e8' : (index % 2 === 0 ? '#fafafa' : 'white')
                      }}>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                          {option.isCurrentAssignment && '→ '}{option.baseCity}
                        </td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{option.fleetName}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{option.positionName}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', fontWeight: 'bold', color: '#1976d2' }}>
                          #{option.pilotPosition}/{option.totalPilots}
                        </td>
                        <td style={{ 
                          padding: '10px', 
                          border: '1px solid #ddd', 
                          fontWeight: 'bold',
                          color: option.percentile <= 10 ? '#4caf50' : 
                                 option.percentile <= 25 ? '#8bc34a' : 
                                 option.percentile <= 50 ? '#ff9800' : '#f44336'
                        }}>
                          {option.percentile === null ? 'N/A' : option.percentile === 0 ? 'Top (0%)' : `${option.percentile}%`}
                        </td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{option.totalPilots}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Career History */}
          {pilotData.senioritySnapshots && pilotData.senioritySnapshots.length > 1 && (
            <div style={cardStyle}>
              <h2 style={{ color: '#333', marginBottom: '15px' }}>Career History</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f5f5f5' }}>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Date</th>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Seniority #</th>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Base</th>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Aircraft</th>
                      <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pilotData.senioritySnapshots.map((snapshot, index) => (
                      <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fafafa' : 'white' }}>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                          {new Date(snapshot.reportDate).toLocaleDateString()}
                        </td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', fontWeight: 'bold', color: '#1976d2' }}>
                          #{snapshot.seniorityNumber}
                        </td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{snapshot.baseCity}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{snapshot.fleetName}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{snapshot.positionName}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SimplePilotAnalysis;