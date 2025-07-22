import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];

  const handleSuggestionClick = () => {
    window.location.href = `mailto:matthewbayne19@gmail.com?subject=Suggestion/Correction - ${today}`;
  };

  return (
    <main className="homepage-sleek-root">
      <div className="homepage-sleek-content">
        <h1 className="homepage-sleek-title">Hoboken Pool Tables</h1>
        <p className="homepage-sleek-subtitle">
          Discover every pool table, tournament, and league night in Hoboken.
        </p>
        <nav className="homepage-sleek-buttons">
          <button className="homepage-sleek-btn" onClick={() => navigate('/map')}>
            View Map
          </button>
          <button className="homepage-sleek-btn" onClick={() => navigate('/bars')}>
            Bar List
          </button>
          <button className="homepage-sleek-btn" onClick={() => navigate('/tournaments')}>
            Tournaments
          </button>
        </nav>
        <button className="homepage-sleek-link-btn" onClick={handleSuggestionClick}>
          Make a Suggestion
        </button>
      </div>
    </main>
  );
};

export default Homepage;
