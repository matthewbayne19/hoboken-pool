import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Homepage.css';
import logo_light from '../assets/logo_light.png';

const Homepage = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  const handleSuggestionClick = () => {
    window.location.href = `mailto:matthewbayne19@gmail.com?subject=Suggestion/Correction - ${today}`;
  };

  return (
    <main className="homepage-sleek-root">
      {loading && (
        <>
          <img src={logo_light} alt="The Backroom Logo" className="homepage-logo" />
          <div className="map-loading-overlay">
            <div className="map-spinner" />
          </div>
        </>
      )}
      {!loading && (
        <>
          <img src={logo_light} alt="The Backroom Logo" className="homepage-logo" />
          <p className="homepage-sleek-subtitle">
            Discover every amenity that bars in your area have to offer!
          </p>
          <nav className="homepage-sleek-buttons">
            <button className="homepage-sleek-btn" onClick={() => navigate('/map')}>
              View Map
            </button>
            <button className="homepage-sleek-btn" onClick={() => navigate('/bars')}>
              View Bar List
            </button>
            {/* <button className="homepage-sleek-btn" onClick={() => navigate('/ai')}>
              Backroom AI
            </button> */}
            {/* <button className="homepage-sleek-btn" onClick={() => navigate('/tournaments')}>
              Tournaments
            </button> */}
          </nav>
          <button className="homepage-sleek-link-btn" onClick={handleSuggestionClick}>
            Make a Suggestion
          </button>
        </>
      )}
    </main>
  );
};

export default Homepage;
