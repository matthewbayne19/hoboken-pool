import React from 'react';

const BarPopup = ({ bar }) => {
  const leagueDays = Array.isArray(bar.league) && bar.league.length > 0
    ? bar.league.join(', ')
    : 'None';

  return (
    <div className="bar-popup-root">
      <div className="bar-popup-title">{bar.name}</div>
      <div className="bar-popup-divider" />
      <div className="bar-popup-section">
        <strong>Address:</strong><br />{bar.address}
      </div>
      <div className="bar-popup-section">
        <strong>League Nights:</strong> {leagueDays}
      </div>
      <div className="bar-popup-section">
        <strong>Table Rating:</strong> {bar.rating || 'Not rated'}<br />
        <strong>Tables:</strong> {bar.tables}<br />
        <strong>Price/Game:</strong> {bar.pricePerGame}<br />
        <strong>Cash Only:</strong> {bar.cashOnly ? 'Yes' : 'No'}
      </div>
    </div>
  );
};

export default BarPopup;
