import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BarCard from '../components/BarCard';
import logo_light from '../assets/logo_light.png';
import FilterMenu from '../components/FilterMenu';
import '../styles/FilterMenu.css';

const BarsListPage = () => {
  const [bars, setBars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(process.env.PUBLIC_URL + '/data/barData.json')
      .then(res => res.json())
      .then(data => {
        setBars(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading bar data:', err);
        setLoading(false);
      });
  }, []);

  const handleViewOnMap = (bar) => {
    navigate(`/map#${encodeURIComponent(bar.name)}`);
  };

  // Filter logic: show bars that have at least one of the selected amenities
  const filteredBars = useMemo(() => {
    if (!filter.length) return bars;
    return bars.filter(bar => {
      const amenities = bar.amenities || {};
      return filter.some(key => amenities[key] && (typeof amenities[key] === 'object' || amenities[key] === true));
    });
  }, [bars, filter]);

  return (
    <main className="barlist-root">
      {loading ? (
        <>
          <img src={logo_light} alt="Logo" className="barlist-logo" />
          <div className="map-loading-overlay">
            <div className="map-spinner" />
          </div>
        </>
      ) : (
        <>
          <img src={logo_light} alt="Logo" className="barlist-logo" />
          <FilterMenu selected={filter} onChange={setFilter} />
          <button
            className="map-back-btn barlist-back-btn"
            onClick={() => navigate('/')}
            aria-label="Back to home"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 10L13.5 16L19.5 22" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="barlist-list">
            {filteredBars.map((bar, i) => (
              <BarCard key={i} bar={bar} onViewMap={() => handleViewOnMap(bar)} />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default BarsListPage;
