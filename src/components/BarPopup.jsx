import React from 'react';

const BarPopup = ({ bar }) => {
  const leagueDays = Array.isArray(bar.league) && bar.league.length > 0
    ? bar.league.join(', ')
    : 'None';

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>{bar.name}</h3>
      <p><strong>Address:</strong><br />{bar.address}</p>
      <p><strong>League Nights:</strong> {leagueDays}</p>
    </div>
  );
};

export default BarPopup;