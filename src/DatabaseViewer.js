import React, { useState, useEffect } from 'react';

const DatabaseViewer = () => {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState('');
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTables();
  }, []);

  const fetchTables = async () => {
    try {
      const response = await fetch('/api/database/tables');
      if (!response.ok) throw new Error('Failed to fetch tables');
      const data = await response.json();
      setTables(data);
    } catch (err) {
      setError('Error loading tables: ' + err.message);
    }
  };

  const fetchTableData = async (tableName) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`/api/database/table/${tableName}`);
      if (!response.ok) throw new Error('Failed to fetch table data');
      
      const data = await response.json();
      setTableData(data.rows || []);
      setColumns(data.columns || []);
      setSelectedTable(tableName);
    } catch (err) {
      setError('Error loading table data: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Database Viewer</h1>
      
      {error && (
        <div style={{ 
          color: '#dc3545', 
          backgroundColor: '#f8d7da', 
          padding: '10px', 
          borderRadius: '4px',
          margin: '10px 0'
        }}>
          {error}
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <h3>Tables:</h3>
        <select 
          value={selectedTable} 
          onChange={(e) => fetchTableData(e.target.value)}
          style={{ 
            padding: '8px', 
            fontSize: '16px',
            minWidth: '200px'
          }}
        >
          <option value="">Select a table...</option>
          {tables.map(table => (
            <option key={table.name} value={table.name}>
              {table.name} ({table.count?.toLocaleString() || 0} rows)
            </option>
          ))}
        </select>
      </div>

      {loading && <div>Loading table data...</div>}

      {tableData.length > 0 && (
        <div>
          <h3>{selectedTable} ({tableData.length.toLocaleString()} rows)</h3>
          <div style={{ overflow: 'auto', maxHeight: '600px' }}>
            <table style={{ 
              borderCollapse: 'collapse', 
              width: '100%',
              fontSize: '12px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  {columns.map(col => (
                    <th key={col} style={{ 
                      border: '1px solid #dee2e6', 
                      padding: '8px',
                      position: 'sticky',
                      top: 0,
                      backgroundColor: '#f8f9fa'
                    }}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.slice(0, 100).map((row, index) => (
                  <tr key={index}>
                    {columns.map(col => (
                      <td key={col} style={{ 
                        border: '1px solid #dee2e6', 
                        padding: '6px',
                        maxWidth: '200px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {row[col]?.toString() || ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {tableData.length > 100 && (
              <p style={{ textAlign: 'center', color: '#6c757d', margin: '10px' }}>
                Showing first 100 rows of {tableData.length.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatabaseViewer;