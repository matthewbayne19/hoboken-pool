import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];

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
    maxWidth: '300px',
    textAlign: 'center'
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
        Welcome! Use this app to find pool tables and league info around Hoboken.
      </p>

      <button onClick={() => navigate('/map')} style={buttonStyle}>
        View Map
      </button>

      <button onClick={() => navigate('/bars')} style={buttonStyle}>
        View Bar List
      </button>

      <button onClick={() => navigate('/tournaments')} style={buttonStyle}>
        View Tournaments
      </button>

      <a
        href={`mailto:matthewbayne19@gmail.com?subject=Suggestion/Correction - ${today}`}
            style={{
                ...buttonStyle,
                display: 'block',           // Force it to behave like a block element
                boxSizing: 'border-box',   // Match button behavior
                textDecoration: 'none',
                textAlign: 'center'
            }}
            >
            Make Suggestion
      </a>

    </div>
  );
};

export default Homepage;
