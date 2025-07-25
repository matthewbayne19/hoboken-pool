import React from 'react';
import '../styles/TournamentCard.css';

const TournamentCard = ({ tournament }) => {
  // Split description into bullet points by period, semicolon, or newline
  const details = tournament.description
    ? tournament.description.split(/\.|;|\n/).map(s => s.trim()).filter(Boolean)
    : [];

  return (
    <div className="tournament-card">
      <div className="tournament-title">{tournament.location}</div>
      <div className="tournament-divider" />
      <div className="tournament-section"><strong>Date:</strong> {tournament.date}</div>
      <div className="tournament-section"><strong>Time:</strong> {tournament.time}</div>
      <div className="tournament-section"><strong>Details:</strong></div>
      <ul className="tournament-details-list" style={{ margin: 0, paddingLeft: '1.2em' }}>
        {details.map((item, i) => (
          <li key={i} style={{ listStyle: 'none', marginBottom: 2 }}>
            - {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentCard; 