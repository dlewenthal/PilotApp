const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3002;

// Database connection
const dbPath = path.join(__dirname, 'prisma', 'dev.db');
const db = new sqlite3.Database(dbPath);

// Middleware
app.use(cors());
app.use(express.json());

// Get database tables
app.get('/api/tables', (req, res) => {
  const query = `
    SELECT name, type 
    FROM sqlite_master 
    WHERE type='table' 
    ORDER BY name
  `;
  
  db.all(query, [], (err, tables) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    
    // Get row counts for each table
    let processed = 0;
    const tablesWithCounts = [];
    
    if (tables.length === 0) {
      res.json([]);
      return;
    }
    
    tables.forEach((table) => {
      const countQuery = `SELECT COUNT(*) as count FROM ${table.name}`;
      db.get(countQuery, [], (err, result) => {
        tablesWithCounts.push({
          name: table.name,
          type: table.type,
          count: err ? 0 : result.count
        });
        
        processed++;
        if (processed === tables.length) {
          res.json(tablesWithCounts.sort((a, b) => a.name.localeCompare(b.name)));
        }
      });
    });
  });
});

// Get table data
app.get('/api/table/:tableName', (req, res) => {
  const tableName = req.params.tableName;
  
  // Sanitize table name
  if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(tableName)) {
    res.status(400).json({ error: 'Invalid table name' });
    return;
  }
  
  // Get table schema
  const schemaQuery = `PRAGMA table_info(${tableName})`;
  db.all(schemaQuery, [], (err, schema) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    
    const columns = schema.map(col => col.name);
    
    // Get table data (all rows)
    const dataQuery = `SELECT * FROM ${tableName}`;
    db.all(dataQuery, [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      
      res.json({
        columns: columns,
        rows: rows,
        total: rows.length
      });
    });
  });
});

// Serve basic HTML page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>SQLite Database Viewer</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { border-collapse: collapse; width: 100%; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; position: sticky; top: 0; }
            select { padding: 10px; font-size: 16px; margin-bottom: 20px; }
            .table-container { max-height: 600px; overflow: auto; }
            .info { background: #e3f2fd; padding: 10px; border-radius: 4px; margin: 10px 0; }
        </style>
    </head>
    <body>
        <h1>SQLite Database Viewer</h1>
        
        <select id="tableSelect" onchange="loadTable()">
            <option value="">Select a table...</option>
        </select>
        
        <div id="info" class="info" style="display: none;"></div>
        
        <div class="table-container">
            <table id="dataTable" style="display: none;">
                <thead id="tableHead"></thead>
                <tbody id="tableBody"></tbody>
            </table>
        </div>

        <script>
            let tables = [];
            
            // Load tables on page load
            fetch('/api/tables')
                .then(response => response.json())
                .then(data => {
                    tables = data;
                    const select = document.getElementById('tableSelect');
                    tables.forEach(table => {
                        const option = document.createElement('option');
                        option.value = table.name;
                        option.textContent = table.name + ' (' + table.count.toLocaleString() + ' rows)';
                        select.appendChild(option);
                    });
                });

            function loadTable() {
                const tableName = document.getElementById('tableSelect').value;
                if (!tableName) {
                    document.getElementById('dataTable').style.display = 'none';
                    document.getElementById('info').style.display = 'none';
                    return;
                }
                
                fetch('/api/table/' + tableName)
                    .then(response => response.json())
                    .then(data => {
                        // Show info
                        const info = document.getElementById('info');
                        info.textContent = 'Table: ' + tableName + ' - ' + data.total.toLocaleString() + ' rows';
                        info.style.display = 'block';
                        
                        // Clear table
                        const head = document.getElementById('tableHead');
                        const body = document.getElementById('tableBody');
                        head.innerHTML = '';
                        body.innerHTML = '';
                        
                        // Add headers
                        const headerRow = document.createElement('tr');
                        data.columns.forEach(col => {
                            const th = document.createElement('th');
                            th.textContent = col;
                            headerRow.appendChild(th);
                        });
                        head.appendChild(headerRow);
                        
                        // Add data rows
                        data.rows.forEach(row => {
                            const tr = document.createElement('tr');
                            data.columns.forEach(col => {
                                const td = document.createElement('td');
                                td.textContent = row[col] || '';
                                td.style.maxWidth = '200px';
                                td.style.overflow = 'hidden';
                                td.style.textOverflow = 'ellipsis';
                                tr.appendChild(td);
                            });
                            body.appendChild(tr);
                        });
                        
                        document.getElementById('dataTable').style.display = 'table';
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        document.getElementById('info').textContent = 'Error loading table data';
                        document.getElementById('info').style.display = 'block';
                    });
            }
        </script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`SQLite Database Viewer running on http://localhost:${port}`);
});