import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  return (
    <header style={{
      backgroundColor: 'white',
      color: 'black',
      padding: '1rem',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      fontSize: '1.5rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
      position: 'relative'
    }}>
      {!isHome && (
        <button
          onClick={() => navigate('/')}
          style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            color: 'black',
            cursor: 'pointer',
            padding: 0
          }}
          aria-label="Back to home"
        >
          ←
        </button>
      )}
      🎱 Hoboken Pool
    </header>
  );
};

export default Header;
