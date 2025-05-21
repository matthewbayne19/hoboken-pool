import React, { useEffect, useState } from 'react';

const BarsListPage = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/poolbars.json')
      .then(res => res.json())
      .then(data => setBars(data))
      .catch(err => console.error('Error loading bar data:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Pool Bar List</h2>
      {bars.map((bar, i) => (
        <div key={i} style={{
          marginBottom: '1.5rem',
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <h3>{bar.name}</h3>
          <p><strong>Address:</strong> {bar.address}</p>
          <p><strong>League Nights:</strong> {bar.league.length > 0 ? bar.league.join(', ') : 'None'}</p>
          <p><strong>Rating:</strong> {bar.rating}</p>
          <p><strong>Tables:</strong> {bar.tables}</p>
          <p><strong>Price Per Game:</strong> {bar.pricePerGame}</p>
          <p><strong>Cash Only:</strong> {bar.cashOnly ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default BarsListPage;
