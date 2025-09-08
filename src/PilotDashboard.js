import { useState, useEffect } from 'react';

function PilotDashboard() {
  const [stats, setStats] = useState({});
  const [pilots, setPilots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const recordsPerPage = 50;

  useEffect(() => {
    loadDashboardData();
  }, [currentPage, searchTerm, filterCategory]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      
      // Load statistics from API
      const statsResponse = await fetch('http://localhost:3001/api/stats');
      const statsData = await statsResponse.json();
      setStats(statsData);

      // Load pilot data from API
      const pilotsResponse = await fetch(
        `http://localhost:3001/api/pilots?page=${currentPage}&limit=${recordsPerPage}&search=${encodeURIComponent(searchTerm)}&category=${encodeURIComponent(filterCategory)}`
      );
      const pilotsData = await pilotsResponse.json();
      setPilots(pilotsData.pilots || []);

    } catch (error) {
      console.error('Error loading dashboard data:', error);
      // Set fallback data
      setStats({});
      setPilots([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
  };

  const getRetirementStatus = (retireDate) => {
    if (!retireDate) return { status: 'Unknown', color: '#666' };
    
    const retire = new Date(retireDate);
    const now = new Date();
    const yearFromNow = new Date();
    yearFromNow.setFullYear(yearFromNow.getFullYear() + 1);
    
    if (retire < now) return { status: 'Retired', color: '#666' };
    if (retire < yearFromNow) return { status: 'Retiring Soon', color: '#ff9800' };
    return { status: 'Active', color: '#4caf50' };
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading pilot data...</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>🛩️ Delta Pilot Management Dashboard</h1>
      
      {/* Statistics Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#1976d2' }}>{stats.totalPilots?.toLocaleString()}</h3>
          <p style={{ margin: 0 }}>Total Pilots</p>
        </div>
        
        <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#4caf50' }}>{stats.totalSeniorityRecords?.toLocaleString()}</h3>
          <p style={{ margin: 0 }}>Seniority Records</p>
        </div>
        
        <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ margin: '0 0 10px 0', color: '#ff9800' }}>{stats.upcomingRetirements}</h3>
          <p style={{ margin: 0 }}>Retiring This Year</p>
        </div>
      </div>

      {/* Base Distribution */}
      <div style={{ marginBottom: '30px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <h3>Pilots by Base</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', marginBottom: '20px' }}>
          {stats.categoryStats?.byBase?.map(([base, count], index) => (
            <div key={index} style={{ textAlign: 'center', padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
              <strong>{base}</strong>
              <div>{count?.toLocaleString()} pilots</div>
            </div>
          ))}
        </div>
        
        <h3>Pilots by Fleet</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
          {stats.categoryStats?.byFleet?.map(([fleet, count], index) => (
            <div key={index} style={{ textAlign: 'center', padding: '10px', backgroundColor: 'white', borderRadius: '4px' }}>
              <strong>{fleet}</strong>
              <div>{count?.toLocaleString()} pilots</div>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Search pilots by name or employee number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', minWidth: '250px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        >
          <option value="">All Categories</option>
          <optgroup label="By Base">
            <option value="Atlanta">Atlanta (ATL)</option>
            <option value="Detroit">Detroit (DTW)</option>
            <option value="Minneapolis">Minneapolis (MSP)</option>
            <option value="Seattle">Seattle (SEA)</option>
            <option value="Los Angeles">Los Angeles (LAX)</option>
            <option value="New York">New York (NYC)</option>
            <option value="Salt Lake City">Salt Lake City (SLC)</option>
          </optgroup>
          <optgroup label="By Fleet">
            <option value="350">Airbus A350</option>
            <option value="330">Airbus A330</option>
            <option value="320">Airbus A320</option>
            <option value="717">Boeing 717</option>
            <option value="7ER">Boeing 777 Extended Range</option>
          </optgroup>
        </select>
        
        <button 
          onClick={() => { setSearchTerm(''); setFilterCategory(''); setCurrentPage(1); }}
          style={{ padding: '8px 16px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Clear Filters
        </button>
      </div>

      {/* Pilot List */}
      <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px solid #ddd' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f5f5f5' }}>
            <tr>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Employee #</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Name</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Base</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Fleet</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Position</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Seniority #</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Hire Date</th>
              <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Retire Date</th>
              <th style={{ padding: '12px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {pilots.map((pilot, index) => {
              const latestRecord = pilot.seniorityRecords?.[0];
              const parsedCategory = pilot.parsedCategory;
              const retirementStatus = getRetirementStatus(pilot.scheduledRetireDate);
              
              return (
                <tr key={pilot.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                  <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{pilot.empNumber}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>{pilot.name}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{parsedCategory?.baseCity || 'N/A'}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{parsedCategory?.fleetName || 'N/A'}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{parsedCategory?.positionName || 'N/A'}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{latestRecord?.seniorityNumber || 'N/A'}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{formatDate(pilot.pilotHireDate)}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{formatDate(pilot.scheduledRetireDate)}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #eee', textAlign: 'center' }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '12px', 
                      fontSize: '12px', 
                      backgroundColor: retirementStatus.color + '20', 
                      color: retirementStatus.color,
                      border: `1px solid ${retirementStatus.color}40`
                    }}>
                      {retirementStatus.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          style={{ 
            padding: '8px 16px', 
            margin: '0 5px',
            backgroundColor: currentPage === 1 ? '#ccc' : '#1976d2', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer' 
          }}
        >
          Previous
        </button>
        
        <span style={{ margin: '0 10px' }}>Page {currentPage}</span>
        
        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={pilots.length < recordsPerPage}
          style={{ 
            padding: '8px 16px', 
            margin: '0 5px',
            backgroundColor: pilots.length < recordsPerPage ? '#ccc' : '#1976d2', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: pilots.length < recordsPerPage ? 'not-allowed' : 'pointer' 
          }}
        >
          Next
        </button>
      </div>

      {/* Recent Imports */}
      <div style={{ marginTop: '30px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <h3>Recent Data Imports</h3>
        {stats.recentImports?.map(imp => (
          <div key={imp.id} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
            <strong>{imp.filename}</strong> - {imp.recordCount.toLocaleString()} records - {formatDate(imp.importedAt)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PilotDashboard;