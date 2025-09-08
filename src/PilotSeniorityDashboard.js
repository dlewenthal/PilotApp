import React, { useState } from 'react';

const PilotSeniorityDashboard = () => {
  const [empNumber, setEmpNumber] = useState('');
  const [pilotData, setPilotData] = useState(null);
  const [seniorityAnalysis, setSeniorityAnalysis] = useState(null);
  const [careerProgression, setCareerProgression] = useState(null);
  const [fleetComparison, setFleetComparison] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('seniority');

  const analyzePilot = async () => {
    if (!empNumber.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Fetch pilot data
      const pilotResponse = await fetch(`/api/pilots/${empNumber}`);
      if (!pilotResponse.ok) {
        throw new Error('Pilot not found');
      }
      const pilot = await pilotResponse.json();
      setPilotData(pilot);
      
      // Fetch seniority analysis
      const seniorityResponse = await fetch(`/api/analyze/seniority/${empNumber}`);
      const seniorityData = await seniorityResponse.json();
      setSeniorityAnalysis(seniorityData);
      
      // Fetch career progression
      const progressionResponse = await fetch(`/api/analyze/progression/${empNumber}`);
      const progressionData = await progressionResponse.json();
      setCareerProgression(progressionData);
      
      // Fetch fleet comparison for Captain position
      const fleetResponse = await fetch(`/api/analyze/fleet-comparison/${empNumber}/A`);
      const fleetData = await fleetResponse.json();
      setFleetComparison(fleetData);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatPercentile = (percentile) => {
    if (percentile === null || percentile === undefined) return 'N/A';
    if (percentile === 0) return 'Top (0%)';
    return `${percentile}%`;
  };

  const getSeniorityColor = (percentile) => {
    if (percentile === null) return 'text-gray-500';
    if (percentile <= 10) return 'text-green-600 font-bold';
    if (percentile <= 25) return 'text-green-500';
    if (percentile <= 50) return 'text-yellow-500';
    if (percentile <= 75) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
      <div style={{ backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Delta Pilot Seniority Analysis Dashboard
        </h1>
        
        {/* Search Section */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter Employee Number (e.g., 0819310)"
            value={empNumber}
            onChange={(e) => setEmpNumber(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && analyzePilot()}
          />
          <button
            onClick={analyzePilot}
            disabled={loading || !empNumber.trim()}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? 'Analyzing...' : 'Analyze Pilot'}
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}
      </div>

      {pilotData && (
        <>
          {/* Pilot Info Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pilot Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-semibold">{pilotData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Employee Number</p>
                <p className="font-semibold">{pilotData.empNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Overall Seniority</p>
                <p className="font-semibold text-blue-600">#{seniorityAnalysis?.pilot?.overallSeniority}</p>
              </div>
            </div>
            {seniorityAnalysis?.pilot?.currentAssignment && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Current Assignment</p>
                <p className="font-semibold text-lg">
                  {seniorityAnalysis.pilot.currentAssignment.baseCity} {seniorityAnalysis.pilot.currentAssignment.fleetName} {seniorityAnalysis.pilot.currentAssignment.positionName}
                </p>
              </div>
            )}
          </div>

          {/* Tab Navigation */}
          <div className="bg-white shadow-lg rounded-lg mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex">
                <button
                  onClick={() => setActiveTab('seniority')}
                  className={`px-6 py-3 border-b-2 font-medium text-sm ${
                    activeTab === 'seniority' 
                      ? 'border-blue-500 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Aircraft Seniority
                </button>
                <button
                  onClick={() => setActiveTab('progression')}
                  className={`px-6 py-3 border-b-2 font-medium text-sm ${
                    activeTab === 'progression' 
                      ? 'border-blue-500 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Career Progression
                </button>
                <button
                  onClick={() => setActiveTab('fleet')}
                  className={`px-6 py-3 border-b-2 font-medium text-sm ${
                    activeTab === 'fleet' 
                      ? 'border-blue-500 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Captain Fleet Comparison
                </button>
              </nav>
            </div>

            <div className="p-6">
              {/* Aircraft Seniority Tab */}
              {activeTab === 'seniority' && seniorityAnalysis && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Seniority on Different Aircraft</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aircraft</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seniority</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentile</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Pilots</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {seniorityAnalysis.seniorityOptions.slice(0, 20).map((option, index) => (
                          <tr key={index} className={option.isCurrentAssignment ? 'bg-blue-50' : ''}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {option.isCurrentAssignment && '→ '}{option.baseCity}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{option.fleetName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{option.positionName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">
                              #{option.pilotPosition}/{option.totalPilots}
                            </td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getSeniorityColor(option.percentile)}`}>
                              {formatPercentile(option.percentile)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{option.totalPilots}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Career Progression Tab */}
              {activeTab === 'progression' && careerProgression && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Career Progression History</h3>
                  
                  {/* Career Milestones */}
                  {careerProgression.milestones && careerProgression.milestones.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Major Career Changes</h4>
                      <div className="space-y-3">
                        {careerProgression.milestones.map((milestone, index) => (
                          <div key={index} className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                            <p className="font-medium">
                              {milestone.type.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
                            </p>
                            <p className="text-sm text-gray-600">
                              {new Date(milestone.date).toLocaleDateString()} - 
                              From {milestone.from} to {milestone.to}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Complete History */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Complete Seniority History</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seniority #</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aircraft</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {careerProgression.progression.map((snapshot, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {new Date(snapshot.date).toLocaleDateString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">
                                #{snapshot.seniorityNumber}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{snapshot.baseCity}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{snapshot.fleetName}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{snapshot.positionName}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Fleet Comparison Tab */}
              {activeTab === 'fleet' && fleetComparison && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Captain Position Fleet Comparison</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aircraft</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seniority</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentile</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Captains</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eligible</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {fleetComparison.fleetOptions.map((fleet, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{fleet.baseCity}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fleet.fleetName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">
                              {fleet.pilotPosition ? `#${fleet.pilotPosition}/${fleet.totalPilots}` : 'N/A'}
                            </td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getSeniorityColor(fleet.percentile)}`}>
                              {formatPercentile(fleet.percentile)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fleet.totalPilots}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                fleet.wouldBeEligible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {fleet.wouldBeEligible ? 'Yes' : 'No'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PilotSeniorityDashboard;