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
    
    for (const base of bases) {
      for (const aircraft of base.aircraft) {
        const captainUrl = `/api/seniority-ranges?base=${encodeURIComponent(base.baseCity)}&fleet=${encodeURIComponent(aircraft.fleetCode)}&position=Captain`;
        console.log('Fetching captain data from:', captainUrl);
        
        // Fetch captain ranges
        try {
          const captainResponse = await fetch(captainUrl);
          console.log('Captain response status:', captainResponse.status);
          if (captainResponse.ok) {
            const captainRanges = await captainResponse.json();
            console.log(`Captain ranges for ${base.baseCity}-${aircraft.fleetCode}:`, captainRanges);
            rangesMap.set(`${base.baseCity}-${aircraft.fleetCode}-Captain`, captainRanges);
          } else {
            console.error('Captain response not ok:', await captainResponse.text());
          }
        } catch (error) {
          console.error('Error fetching captain ranges:', error);
        }

        const foUrl = `/api/seniority-ranges?base=${encodeURIComponent(base.baseCity)}&fleet=${encodeURIComponent(aircraft.fleetCode)}&position=First Officer`;
        console.log('Fetching FO data from:', foUrl);
        
        // Fetch first officer ranges
        try {
          const foResponse = await fetch(foUrl);
          console.log('FO response status:', foResponse.status);
          if (foResponse.ok) {
            const foRanges = await foResponse.json();
            console.log(`FO ranges for ${base.baseCity}-${aircraft.fleetCode}:`, foRanges);
            rangesMap.set(`${base.baseCity}-${aircraft.fleetCode}-First Officer`, foRanges);
          } else {
            console.error('FO response not ok:', await foResponse.text());
          }
        } catch (error) {
          console.error('Error fetching FO ranges:', error);
        }
      }
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