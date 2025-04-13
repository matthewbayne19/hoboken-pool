import React from 'react';

const LegendOverlay = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: 'white',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      zIndex: 1000,
      fontSize: '14px',
      textAlign: 'left'
    }}>
      <div><span style={{ color: 'red', fontWeight: 'bold' }}>●</span> League Night (Today)</div>
      <div><span style={{ color: 'green', fontWeight: 'bold' }}>●</span> Has League (Not Today)</div>
      <div><span style={{ color: 'blue', fontWeight: 'bold' }}>●</span> No League</div>
    </div>
  );
};

export default LegendOverlay;