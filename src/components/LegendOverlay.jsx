import React from 'react';

const legendItems = [
  { color: '#e53935', label: 'League Tonight' },
  { color: '#43a047', label: 'No League Tonight' },
  { color: '#222', label: 'No League Ever' }, // black
];

const LegendOverlay = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 18,
        right: 18,
        padding: 0,
        borderRadius: 0,
        boxShadow: 'none',
        zIndex: 1000,
        fontSize: '1rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        color: '#111',
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'flex-start', // left align
        maxWidth: '90vw',
        userSelect: 'none',
      }}
    >
      {legendItems.map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.7em', background: 'none', padding: 0 }}>
          <span
            style={{
              display: 'inline-block',
              width: 18,
              height: 18,
              borderRadius: '50%',
              background: item.color,
              boxShadow: '0 1px 4px #0003',
              border: '2px solid #fff',
            }}
          />
          <span style={{ fontSize: '0.98em', fontWeight: 600, color: '#111', textShadow: '0 1px 4px #fff8' }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default LegendOverlay;