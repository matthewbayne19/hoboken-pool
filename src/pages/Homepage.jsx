import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    fontSize: '1.2rem',
    borderRadius: '8px',
    backgroundColor: '#222',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1rem',
    width: '100%',
    maxWidth: '300px'
  };

  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <p style={{ fontSize: '1.1rem', maxWidth: '400px' }}>
        Welcome! Use this app to find pool tables, league info, and tournaments around Hoboken.
      </p>

      <button
        onClick={() => navigate('/map')}
        style={buttonStyle}
      >
        View Map
      </button>

      <button
        onClick={() => navigate('/tournaments')}
        style={buttonStyle}
      >
        View Tournaments
      </button>
    </div>
  );
};

export default Homepage;
