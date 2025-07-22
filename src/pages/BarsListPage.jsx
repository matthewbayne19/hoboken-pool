import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';
import styles from '../components/PoolMap.module.css';

const BarsListPage = () => {
  const [bars, setBars] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(process.env.PUBLIC_URL + '/data/poolbars.json')
      .then(res => res.json())
      .then(data => {
        setBars(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading bar data:', err);
        setLoading(false);
      });
  }, []);

  const handleViewOnMap = (bar) => {
    navigate(`/map#${encodeURIComponent(bar.name)}`);
  };

  return (
    <main className="barlist-root">
      <button
        className={styles['map-back-btn']}
        onClick={() => navigate('/')}
        aria-label="Back to home"
        style={{ position: 'absolute', top: 18, left: 18, zIndex: 2100 }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#fff" fillOpacity="0.92" />
          <path d="M19.5 10L13.5 16L19.5 22" stroke="#184d27" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {loading && (
        <div className="map-loading-overlay">
          <div className="map-spinner" />
        </div>
      )}
      <h2 className="barlist-title">Pool Bar List</h2>
      <div className="barlist-list">
        {bars.map((bar, i) => (
          <div key={i} className="barlist-card">
            <div className="bar-popup-title">{bar.name}</div>
            <div className="bar-popup-divider" />
            <div className="bar-popup-section">
              <strong>Address:</strong><br />{bar.address}
            </div>
            <div className="bar-popup-section">
              <strong>League Nights:</strong> {Array.isArray(bar.league) && bar.league.length > 0 ? bar.league.join(', ') : 'None'}
            </div>
            <div className="bar-popup-section">
              <strong>Table Rating:</strong> {bar.rating || 'Not rated'}<br />
              <strong>Tables:</strong> {bar.tables}<br />
              <strong>Price/Game:</strong> {bar.pricePerGame}<br />
              <strong>Cash Only:</strong> {bar.cashOnly ? 'Yes' : 'No'}
            </div>
            <button
              className="barlist-viewmap-btn"
              onClick={() => handleViewOnMap(bar)}
              aria-label={`View ${bar.name} on map`}
            >
              <MapIcon style={{ fontSize: 20, color: '#e6c97a', marginBottom: '-2px' }} />
              View on Map
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BarsListPage;
