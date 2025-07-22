import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdMap, MdLocalBar, MdEmojiEvents, MdLightbulbOutline } from 'react-icons/md';
import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];

  const handleSuggestionClick = () => {
    window.location.href = `mailto:matthewbayne19@gmail.com?subject=Suggestion/Correction - ${today}`;
  };

  return (
    <main className="homepage-root">
      <div className="homepage-animated-bg" />
      <div className="homepage-title-outer">
        <h1 className="homepage-main-title">Hoboken Pool Tables</h1>
      </div>
      <div className="homepage-content">
        <div className="homepage-buttons">
          <button className="homepage-btn" onClick={() => navigate('/map')}>
            <span className="homepage-btn-icon"><MdMap size={22} /></span>
            View Map
          </button>
          <button className="homepage-btn" onClick={() => navigate('/bars')}>
            <span className="homepage-btn-icon"><MdLocalBar size={22} /></span>
            View Bar List
          </button>
          <button className="homepage-btn" onClick={() => navigate('/tournaments')}>
            <span className="homepage-btn-icon"><MdEmojiEvents size={22} /></span>
            View Tournaments
          </button>
          {/* <button className="homepage-btn" onClick={() => navigate('/rules')}>
            View APA Rules
          </button> */}
          <button className="homepage-btn" onClick={handleSuggestionClick}>
            <span className="homepage-btn-icon"><MdLightbulbOutline size={22} /></span>
            Make Suggestion
          </button>
        </div>
      </div>
      <div className="homepage-fade" />
    </main>
  );
};

export default Homepage;
