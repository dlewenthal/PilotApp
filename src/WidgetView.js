import React, { useEffect, useState } from 'react';
import './WidgetView.css';

const WidgetView = ({ seniorityData }) => {
  const [summary, setSummary] = useState(null);
  const [seniorityRanges, setSeniorityRanges] = useState(new Map());

  useEffect(() => {
    if (seniorityData) {
      // Process seniority data and fetch ranges
      const processedBases = seniorityData.bases.map(base => {
        const aircraft = base.aircraft.map(ac => ({
          equipment: ac.fleetCode,
          fleetCode: ac.fleetCode,
          baseCity: base.baseCity,
          captainRank: ac.captainRank,
          captainTotal: ac.captainTotal,
          captainAvailable: ac.captainAvailable,
          captainPay: ac.captainPay,
          foRank: ac.foRank,
          foTotal: ac.foTotal,
          foAvailable: ac.foAvailable,
          foPay: ac.foPay
        })).sort((a, b) => {
          // Sort aircraft by captain pay (highest to lowest)
          const aPayNum = parseFloat(a.captainPay || 0);
          const bPayNum = parseFloat(b.captainPay || 0);
          return bPayNum - aPayNum;
        });
        
        return {
          baseCity: base.baseCity,
          totalPilots: base.totalPilots,
          aircraft
        };
      }).sort((a, b) => {
        // Sort bases alphabetically by city name
        return a.baseCity.localeCompare(b.baseCity);
      });

      setSummary({
        pilot: seniorityData.pilot,
        systemSeniority: seniorityData.systemSeniority,
        bases: processedBases
      });

      // Fetch seniority ranges for all aircraft/position combinations
      fetchSeniorityRanges(processedBases);
    }
  }, [seniorityData]);

  const fetchSeniorityRanges = async (bases) => {
    console.log('Fetching seniority ranges for bases:', bases);
    const rangesMap = new Map();
    
    // Build batch request
    const requests = [];
    for (const base of bases) {
      for (const aircraft of base.aircraft) {
        // Add captain request
        requests.push({
          key: `${base.baseCity}-${aircraft.fleetCode}-Captain`,
          base: base.baseCity,
          fleet: aircraft.fleetCode,
          position: 'Captain'
        });
        
        // Add first officer request
        requests.push({
          key: `${base.baseCity}-${aircraft.fleetCode}-First Officer`,
          base: base.baseCity,
          fleet: aircraft.fleetCode,
          position: 'First Officer'
        });
      }
    }
    
    console.log('Batch request with', requests.length, 'items');
    
    try {
      const response = await fetch('/api/seniority-ranges/batch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requests })
      });
      
      if (response.ok) {
        const results = await response.json();
        console.log('Batch results:', results);
        
        // Convert results to Map
        Object.entries(results).forEach(([key, ranges]) => {
          if (!ranges.error) {
            rangesMap.set(key, ranges);
          } else {
            console.error(`Error for ${key}:`, ranges.error);
          }
        });
      } else {
        console.error('Batch request failed:', await response.text());
      }
    } catch (error) {
      console.error('Error in batch fetch:', error);
    }
    
    console.log('Final rangesMap:', rangesMap);
    setSeniorityRanges(rangesMap);
  };

  // Calculate actual seniority numbers for Sr, Mid, Jr positions
  const getSeniorityNumbers = async (baseCity, fleetCode, positionCode) => {
    try {
      const response = await fetch(`/api/seniority-ranges?base=${baseCity}&fleet=${fleetCode}&position=${positionCode}`);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error('Error fetching seniority ranges:', error);
    }
    return { sr: null, mid: null, jr: null };
  };

  // For now, calculate estimated seniority numbers based on rank and total
  const getEstimatedSeniorityNumbers = (rank, total) => {
    if (!rank || !total || total === 0) return { sr: null, mid: null, jr: null };
    
    // Estimate Sr (top 25%), Mid (middle 50%), Jr (bottom 25%) seniority numbers
    const srCutoff = Math.ceil(total * 0.25);
    const jrStart = Math.floor(total * 0.75);
    const midPoint = Math.floor(total * 0.5);
    
    return {
      sr: 1, // Most senior is always #1
      mid: midPoint,
      jr: total // Most junior is the highest number
    };
  };

  if (!summary) return null;

  return (
    <div className="widget-view">
      <div className="widget-header">
        <h2>{summary.pilot.name}</h2>
        <p>Employee: {summary.pilot.empNumber} | System Seniority: #{summary.systemSeniority?.toLocaleString()}</p>
      </div>

      <div className="widget-content">
        {summary.bases.map((base) => (
          <div key={base.baseCity} className="base-widget">
            <h3 className="base-title">{base.baseCity}</h3>
            
            <div className="equipment-tables">
              <div className="position-section">
                <h4>Captains</h4>
                <table className="widget-table">
                  <thead>
                    <tr>
                      <th>Equipment</th>
                      <th>Sr</th>
                      <th>Jr</th>
                      <th>Total</th>
                      <th>Pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    {base.aircraft.map((aircraft, idx) => {
                      const rangeKey = `${base.baseCity}-${aircraft.fleetCode}-Captain`;
                      const ranges = seniorityRanges.get(rangeKey) || { sr: null, mid: null, jr: null };
                      const pilotRank = aircraft.captainRank;
                      const pilotIsInSr = pilotRank && pilotRank <= Math.ceil(aircraft.captainTotal * 0.25);
                      const pilotIsInMid = pilotRank && pilotRank > Math.ceil(aircraft.captainTotal * 0.25) && pilotRank <= Math.ceil(aircraft.captainTotal * 0.75);
                      const pilotIsInJr = pilotRank && pilotRank > Math.ceil(aircraft.captainTotal * 0.75);
                      
                      return (
                        <tr key={`capt-${idx}`}>
                          <td className="equipment-cell">{aircraft.equipment}</td>
                          <td className="seniority-cell">
                            {ranges.sr ? ranges.sr.toLocaleString() : 'Loading...'}
                          </td>
                          <td className="seniority-cell">
                            {ranges.jr ? ranges.jr.toLocaleString() : 'Loading...'}
                          </td>
                          <td className="total-cell">
                            {aircraft.captainTotal ? aircraft.captainTotal.toLocaleString() : 'N/A'}
                          </td>
                          <td className="pay-cell">
                            {aircraft.captainPay ? `$${aircraft.captainPay.toFixed(2)}` : 'N/A'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="position-section">
                <h4>First Officers</h4>
                <table className="widget-table">
                  <thead>
                    <tr>
                      <th>Equipment</th>
                      <th>Sr</th>
                      <th>Jr</th>
                      <th>Total</th>
                      <th>Pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    {base.aircraft.map((aircraft, idx) => {
                      const rangeKey = `${base.baseCity}-${aircraft.fleetCode}-First Officer`;
                      const ranges = seniorityRanges.get(rangeKey) || { sr: null, mid: null, jr: null };
                      const pilotRank = aircraft.foRank;
                      const pilotIsInSr = pilotRank && pilotRank <= Math.ceil(aircraft.foTotal * 0.25);
                      const pilotIsInMid = pilotRank && pilotRank > Math.ceil(aircraft.foTotal * 0.25) && pilotRank <= Math.ceil(aircraft.foTotal * 0.75);
                      const pilotIsInJr = pilotRank && pilotRank > Math.ceil(aircraft.foTotal * 0.75);
                      
                      return (
                        <tr key={`fo-${idx}`}>
                          <td className="equipment-cell">{aircraft.equipment}</td>
                          <td className="seniority-cell">
                            {ranges.sr ? ranges.sr.toLocaleString() : 'Loading...'}
                          </td>
                          <td className="seniority-cell">
                            {ranges.jr ? ranges.jr.toLocaleString() : 'Loading...'}
                          </td>
                          <td className="total-cell">
                            {aircraft.foTotal ? aircraft.foTotal.toLocaleString() : 'N/A'}
                          </td>
                          <td className="pay-cell">
                            {aircraft.foPay ? `$${aircraft.foPay.toFixed(2)}` : 'N/A'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WidgetView;