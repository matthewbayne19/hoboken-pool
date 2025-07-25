import React from 'react';
import { useNavigate } from 'react-router-dom';
import TournamentCard from '../components/TournamentCard';
import '../styles/TournamentCard.css';

const tournaments = [
  {
    location: "Mulligan's Pub - Pool",
    date: "Every Tuesday",
    time: "9:00 PM",
    description: "8-Ball. Single elimination. Random matchups. Signup starts at 8:30 PM."
  }
];

const TournamentsPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2.2rem 0 2.2rem 0', fontFamily: 'Montserrat, Arial, sans-serif', position: 'relative' }}>
      <button
        className="map-back-btn"
        onClick={() => navigate('/')}
        aria-label="Back to home"
        style={{ position: 'absolute', top: 18, left: 18, zIndex: 2100 }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 10L13.5 16L19.5 22" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#184d27', letterSpacing: '1.1px', marginTop: '3.5rem', marginBottom: '1.2rem', textAlign: 'center' }}>Upcoming Tournaments</h2>
      <div style={{ width: '100%', maxWidth: 420, display: 'flex', flexDirection: 'column', gap: '1.3rem', alignItems: 'center' }}>
        {tournaments.map((t, i) => (
          <TournamentCard key={i} tournament={t} />
        ))}
      </div>
    </div>
  );
};

export default TournamentsPage;
