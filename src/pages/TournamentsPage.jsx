import React from 'react';

const tournaments = [
  {
    location: "Mulligan's Pub",
    date: "Every Tuesday",
    time: "9:00 PM",
    description: "Single elimination. Random matchups. Signup starts at 8:30 PM."
  }
];

const TournamentsPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Upcoming Tournaments</h2>
      {tournaments.map((t, i) => (
        <div key={i} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3>{t.location}</h3>
          <p><strong>Date:</strong> {t.date}</p>
          <p><strong>Time:</strong> {t.time}</p>
          <p>{t.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TournamentsPage;
