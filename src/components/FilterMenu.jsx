import React, { useState } from 'react';
import '../styles/FilterMenu.css';

const AMENITY_LABELS = {
  pool: 'Pool',
  darts: 'Darts',
  shuffleboard: 'Shuffleboard',
  arcade: 'Arcade',
  photobooth: 'Photobooth',
  dj: 'DJ',
  liveMusic: 'Live Music',
  touchtunes: 'Touchtunes',
};

export default function FilterMenu({ selected, onChange, iconColor = '#fff' }) {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(selected);

  const handleCheckbox = (key) => {
    if (pending.includes(key)) {
      setPending(pending.filter((k) => k !== key));
    } else {
      setPending([...pending, key]);
    }
  };

  const handleOpen = () => {
    setPending(selected);
    setOpen((o) => !o);
  };

  const handleUpdate = () => {
    onChange(pending);
    setOpen(false);
  };

  const handleReset = () => {
    setPending([]);
    onChange([]);
  };

  return (
    <div className="filter-menu-root">
      <button className="filter-menu-btn" onClick={handleOpen} aria-label="Filter bars">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 4 21 4 14 14 14 20 10 20 10 14 3 4"/></svg>
      </button>
      {open && (
        <div className="filter-menu-dropdown">
          <button className="filter-menu-close-btn" onClick={() => setOpen(false)} aria-label="Close filter menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          {Object.entries(AMENITY_LABELS).map(([key, label]) => (
            <label key={key} className="filter-menu-checkbox">
              <input
                type="checkbox"
                checked={pending.includes(key)}
                onChange={() => handleCheckbox(key)}
              />
              {label}
            </label>
          ))}
          <div className="filter-menu-actions">
            <button className="filter-menu-update-btn" onClick={handleUpdate}>
              Update
            </button>
            {pending.length > 0 && (
              <button className="filter-menu-reset-btn" onClick={handleReset}>
                Reset
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 