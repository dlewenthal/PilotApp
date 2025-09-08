# Delta Pilot Seniority Lookup Application

A React-based web application for looking up Delta Air Lines pilot seniority information, providing comprehensive views of pilot rankings across different bases, aircraft types, and positions.

## Features

- **Pilot Search**: Search for pilots by name with real-time results
- **Multiple View Modes**:
  - **Detailed View**: Complete seniority breakdown with percentages and rankings
  - **Widget View**: Space-optimized layout showing seniority ranges and pay scales
  - **System Snapshot**: Historical data visualization
- **Comprehensive Data**: 
  - System-wide seniority rankings
  - Base-specific seniority by aircraft type
  - Captain and First Officer positions
  - Current pay scale integration
  - Equipment assignments and availability

## Technology Stack

- **Frontend**: React.js with custom CSS styling
- **Backend**: Node.js with Express.js API server
- **Database**: SQLite with Prisma ORM
- **Data**: Real pilot seniority snapshots and pay scale information

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dlewenthal/PilotApp.git
cd PilotApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development servers:
```bash
npm run dev
```

This starts both the React frontend (http://localhost:3000) and the API server (http://localhost:3001).

### Available Scripts

- `npm start` - Start the React development server
- `npm run server` - Start the API server only
- `npm run dev` - Start both frontend and backend servers concurrently
- `npm run build` - Build the app for production

## Application Structure

```
├── src/
│   ├── PilotSeniorityLookup.js    # Main search and display component
│   ├── WidgetView.js              # Optimized seniority display widget
│   ├── SystemSnapshot.js          # Historical data visualization
│   └── *.css                      # Component-specific styling
├── prisma/
│   ├── schema.prisma              # Database schema
│   └── dev.db                     # SQLite database file
├── api.js                         # Express.js API server
├── server.js                      # Server entry point
└── package.json                   # Dependencies and scripts
```

## API Endpoints

- `GET /api/pilots/search?name={name}` - Search pilots by name
- `GET /api/pilots/{id}/seniority` - Get detailed seniority data for a pilot
- `GET /api/seniority-ranges` - Get seniority range data for positions
- `GET /api/pay-rates` - Get current pay scale information

## Database Schema

The application uses a SQLite database with the following main tables:

- **Pilot**: Basic pilot information and hire dates
- **SenioritySnapshot**: Historical seniority data by report date
- **PayScale**: Contract-based pay scale information
- **Aircraft**: Fleet definitions and pay categories
- **PayRate**: Hourly rates by aircraft, position, and years of service

## Features in Detail

### Pilot Search
- Real-time search with autocomplete suggestions
- Search by last name or full name
- Displays employee number and hire date in results

### Seniority Data Display
- **System Seniority**: Overall company-wide ranking
- **Base Seniority**: Rankings within each pilot base
- **Equipment Seniority**: Rankings by aircraft type and position
- **Pay Information**: Current hourly rates based on years of service

### Widget View Optimization
- Compact, space-efficient layout
- Senior/Junior seniority number ranges
- Total pilot counts per equipment/position
- Pay scale integration
- Responsive design for mobile devices

## Data Sources

- Delta Air Lines seniority list data
- Pilot contract pay scales (2025+)
- Aircraft fleet assignments
- Base and equipment mappings

## Contributing

This application was developed for pilot career tracking and analysis. The data structure supports historical tracking of seniority changes over time.

## License

This project is for educational and informational purposes.