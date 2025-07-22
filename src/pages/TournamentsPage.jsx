import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../components/PoolMap.module.css';

const tournaments = [
  {
    location: "Mulligan's Pub",
    date: "Every Tuesday",
    time: "9:00 PM",
    description: "Single elimination. Random matchups. Signup starts at 8:30 PM."
  }
];

const TournamentsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="barlist-root" style={{ minHeight: '100vh', width: '100vw', background: '#f7f7f4', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2.2rem 0 2.2rem 0', fontFamily: 'Montserrat, Arial, sans-serif' }}>
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
      <h2 className="barlist-title">Upcoming Tournaments</h2>
      <div className="barlist-list" style={{ width: '100%', maxWidth: 420, display: 'flex', flexDirection: 'column', gap: '1.3rem', alignItems: 'center' }}>
        {tournaments.map((t, i) => (
          <div key={i} className="barlist-card" style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px #0001', padding: '1.3em 1.4em 1.1em 1.4em', width: '100%', maxWidth: 370, border: '1.5px solid #f3e7b3', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', minHeight: 180 }}>
            <div className="bar-popup-title" style={{ fontSize: '1.22em', fontWeight: 800, marginBottom: '0.45em', color: '#184d27', letterSpacing: '0.7px', textShadow: '0 2px 8px #e6c97a33, 0 1px 0 #bfa76a22', lineHeight: 1.2 }}>{t.location}</div>
            <div className="bar-popup-divider" style={{ height: '1.5px', width: '100%', background: 'linear-gradient(90deg, #e6c97a 0%, #fffbe6 100%)', border: 'none', margin: '0.5em 0 0.7em 0', opacity: 0.7, borderRadius: 1 }} />
            <div className="bar-popup-section" style={{ fontSize: '1.01em', marginBottom: '0.55em', lineHeight: 1.5, letterSpacing: '0.01em' }}><strong>Date:</strong> {t.date}</div>
            <div className="bar-popup-section" style={{ fontSize: '1.01em', marginBottom: '0.55em', lineHeight: 1.5, letterSpacing: '0.01em' }}><strong>Time:</strong> {t.time}</div>
            <div className="bar-popup-section" style={{ fontSize: '1.01em', marginBottom: 0, lineHeight: 1.5, letterSpacing: '0.01em' }}>{t.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentsPage;
