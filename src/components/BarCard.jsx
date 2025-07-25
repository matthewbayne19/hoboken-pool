import React, { useState, useRef } from 'react';
import MapIcon from '@mui/icons-material/Map';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import poolPng from '../assets/pool.png';
import dartsPng from '../assets/darts.png';
import arcadePng from '../assets/arcade.png';
import photoboothPng from '../assets/photobooth.png';
import shuffleboardPng from '../assets/shuffleboard.png';
import djPng from '../assets/dj.png';
import liveMusicPng from '../assets/livemusic.png';
import jukeboxPng from '../assets/jukebox.png';
import '../styles/BarCard.css';

const GAME_LABELS = {
  pool: 'Pool',
  darts: 'Darts',
  shuffleboard: 'Shuffle',
  arcade: 'Arcade',
  photobooth: 'Photo',
  dj: 'DJ',
  liveMusic: 'Band',
  touchtunes: 'Touchtunes',
};

const GAME_ICONS = {
  pool: <img src={poolPng} alt="Pool" style={{ width: 36, height: 36, display: 'block', marginTop: 6, marginBottom: 4 }} />,
  darts: <img src={dartsPng} alt="Darts" style={{ width: 36, height: 36, display: 'block', marginTop: 6, marginBottom: 4 }} />,
  shuffleboard: <img src={shuffleboardPng} alt="Shuffleboard" style={{ width: 36, height: 36, display: 'block', marginTop: 6, marginBottom: 4 }} />,
  arcade: <img src={arcadePng} alt="Arcade" style={{ width: 36, height: 36, display: 'block', marginTop: 6, marginBottom: 4 }} />,
  photobooth: <img src={photoboothPng} alt="Photobooth" style={{ width: 36, height: 36, display: 'block', marginTop: 6, marginBottom: 4 }} />,
  dj: <img src={djPng} alt="DJ" style={{ width: 36, height: 36, display: 'block', marginTop: 6, marginBottom: 4 }} />,
  liveMusic: <img src={liveMusicPng} alt="Live Music" style={{ width: 36, height: 36, display: 'block', marginTop: 6, marginBottom: 4 }} />,
  touchtunes: <img src={jukeboxPng} alt="Jukebox" style={{ width: 36, height: 36, display: 'block', marginTop: 6, marginBottom: 4 }} />,
};

function BarGameDetails({ game, data }) {
  if (!data) return null;
  if (game === 'pool') {
    return (
      <div className="detailsSection">
        <strong>League Nights:</strong> {Array.isArray(data.league) && data.league.length > 0 ? data.league.join(', ') : 'None'}<br />
        <strong>Table Rating:</strong> {data.rating || 'Not rated'}<br />
        <strong>Tables:</strong> {data.tables || 'N/A'}<br />
        <strong>Price/Game:</strong> {data.pricePerGame || 'N/A'}<br />
        <strong>Cash Only:</strong> {data.cashOnly ? 'Yes' : 'No'}
      </div>
    );
  }
  // Show placeholder for all other options, including dj and liveMusic
  return (
    <div className="detailsSection">
      <strong>{GAME_LABELS[game] || game} available</strong>
    </div>
  );
}

const BarCard = ({ bar, onViewMap }) => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [showArrow, setShowArrow] = useState(true);
  const gamesRowRef = useRef(null);
  const amenities = bar.amenities || {};
  // List of amenity keys to display (games and other amenities)
  const AMENITY_LABELS = {
    pool: 'Pool',
    darts: 'Darts',
    shuffleboard: 'Shuffle',
    arcade: 'Arcade',
    photobooth: 'Photo',
    dj: 'DJ',
    liveMusic: 'Band',
    touchtunes: 'Touchtunes',
  };
  const availableAmenities = Object.keys(AMENITY_LABELS).filter(
    (key) => amenities[key] && (typeof amenities[key] === 'object' || amenities[key] === true)
  );

  // Helper to get the correct data for BarGameDetails
  const getGameData = (game) => {
    if (amenities[game]) return amenities[game];
    return null;
  };

  // Hide arrow if scrolled right, and only show if more than 4 icons
  const handleGamesRowScroll = () => {
    const el = gamesRowRef.current;
    if (!el) return;
    setShowArrow(el.scrollLeft < 10 && availableAmenities.length > 4);
  };

  return (
    <div className={`card${selectedGame ? ' flipped' : ''}`}>
      <button
        className="mapBtn"
        onClick={onViewMap}
        aria-label={`View ${bar.name} on map`}
      >
        <MapIcon style={{ fontSize: 22, color: '#e6c97a', marginBottom: '-2px' }} />
      </button>
      <div className="title">{bar.name}{selectedGame ? ` - ${AMENITY_LABELS[selectedGame] || selectedGame}` : ''}</div>
      <div className="divider" />
      <div className="flipWrap">
        <div className="flipInner" style={{ transform: selectedGame ? 'rotateY(180deg)' : 'none' }}>
          {/* Front Side */}
          <div className="front">
            <div className="section"><strong>Address:</strong><br />{bar.address}</div>
            <div className="gamesRow-wrapper" style={{ position: 'relative', width: '100%' }}>
              <div
                className="gamesRow"
                ref={gamesRowRef}
                onScroll={handleGamesRowScroll}
              >
                {availableAmenities.map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedGame(key)}
                    className="gameBtn"
                    aria-label={AMENITY_LABELS[key] || key}
                  >
                    <div className="gameBtn-inner">
                      {GAME_ICONS[key]}
                      <span style={{ fontSize: '0.93em', marginTop: 2 }}>{AMENITY_LABELS[key] || key}</span>
                    </div>
                  </button>
                ))}
              </div>
              {showArrow && availableAmenities.length > 4 && (
                <span
                  className="gamesRow-arrow"
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '1.3em',
                    color: '#e6c97a',
                    pointerEvents: 'none',
                    opacity: 0.7,
                    zIndex: 2,
                    paddingLeft: 10,
                    paddingRight: 2,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <ArrowForwardIosIcon style={{ fontSize: 22, color: '#e6c97a' }} />
                </span>
              )}
            </div>
          </div>
          {/* Back Side */}
          <div className="back">
            <button
              onClick={() => setSelectedGame(null)}
              style={{ background: 'none', border: 'none', color: '#184d27', fontSize: '1.2em', padding: 0, marginBottom: 8, cursor: 'pointer' }}
              aria-label="Back"
            >
              &larr;
            </button>
            <BarGameDetails game={selectedGame} data={getGameData(selectedGame)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarCard; 