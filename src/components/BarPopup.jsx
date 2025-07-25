import React, { useState } from 'react';
import '../styles/BarPopup.css';

// Reusable component for showing details of a single game at a bar
function BarGameDetails({ game, data, cashOnly }) {
  if (!data) return null;
  if (game === 'pool') {
    return (
      <div className="bar-popup-section">
        <strong>League Nights:</strong> {Array.isArray(data.league) && data.league.length > 0 ? data.league.join(', ') : 'None'}<br />
        <strong>Table Rating:</strong> {data.rating || 'Not rated'}<br />
        <strong>Tables:</strong> {data.tables || 'N/A'}<br />
        <strong>Price/Game:</strong> {data.pricePerGame || 'N/A'}<br />
        <strong>Cash Only:</strong> {cashOnly ? 'Yes' : 'No'}
      </div>
    );
  }
  if (game === 'darts') {
    return (
      <div className="bar-popup-section">
        <strong>Darts Available</strong><br />
        {/* Add more darts details here if you add them to the data */}
      </div>
    );
  }
  if (game === 'shuffleboard') {
    return (
      <div className="bar-popup-section">
        <strong>Shuffleboard Available</strong><br />
        {/* Add more shuffleboard details here if you add them to the data */}
      </div>
    );
  }
  if (game === 'arcade') {
    return (
      <div className="bar-popup-section">
        <strong>Arcade Games Available</strong><br />
        {/* Add more arcade details here if you add them to the data */}
      </div>
    );
  }
  if (game === 'photobooth') {
    return (
      <div className="bar-popup-section">
        <strong>Photobooth Available</strong><br />
        {/* Add more photobooth details here if you add them to the data */}
      </div>
    );
  }
  return null;
}

const BarPopup = ({ bar }) => {
  const [selectedGame, setSelectedGame] = useState(null);
  if (!bar || !bar.amenities) {
    return <div className="bar-popup-root"><div className="bar-popup-title">Bar Info Unavailable</div></div>;
  }
  const amenities = bar.amenities;
  // List of amenity keys to display (games and other amenities)
  const AMENITY_LABELS = {
    pool: 'Pool',
    darts: 'Darts',
    shuffleboard: 'Shuffleboard',
    arcade: 'Arcade',
    photobooth: 'Photobooth',
    dj: 'DJ',
    liveMusic: 'Live Music',
    touchtunes: 'Touchtunes',
  };
  // Only show amenities that are true or are objects (like pool)
  const availableAmenities = Object.keys(AMENITY_LABELS).filter(
    (key) => amenities[key] && (typeof amenities[key] === 'object' || amenities[key] === true)
  );

  if (!selectedGame) {
    return (
      <div className="bar-popup-root">
        <div className="bar-popup-title">{bar.name}</div>
        <div className="bar-popup-divider" />
        <div className="bar-popup-section">
          <strong>Address:</strong><br />{bar.address}
        </div>
        <div className="bar-popup-section amenities-row">
          {availableAmenities.length > 0 && (
            <div className="amenities-row bar-popup-section amenities-row" style={{ color: '#fff', display: 'flex', flexWrap: 'wrap', gap: '0.7em', marginTop: '0.7em', alignItems: 'center' }}>
              {availableAmenities.map((key, idx) => (
                <span key={key} style={{ fontWeight: 700, fontSize: '1em' }}>
                  {AMENITY_LABELS[key]}{idx < availableAmenities.length - 1 ? ',' : ''}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // For details, only pass the amenity object (e.g., pool) if it exists
  return (
    <div className="bar-popup-root">
      <button
        onClick={() => setSelectedGame(null)}
        style={{ background: 'none', border: 'none', color: '#184d27', cursor: 'pointer', marginBottom: 8, display: 'flex', alignItems: 'center', fontWeight: 600 }}
        aria-label="Back"
      >
        &larr; Back
      </button>
      <div className="bar-popup-title">{bar.name} - {AMENITY_LABELS[selectedGame] || selectedGame}</div>
      <div className="bar-popup-divider" />
      <div className="bar-popup-section">
        <strong>Address:</strong><br />{bar.address}
      </div>
      <BarGameDetails game={selectedGame} data={amenities[selectedGame]} cashOnly={amenities.pool && amenities.pool.cashOnly} />
    </div>
  );
};

export default BarPopup;
