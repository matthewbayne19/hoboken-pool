import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import ReactDOMServer from 'react-dom/server';
import { useNavigate } from 'react-router-dom';
import BarPopup from './BarPopup';
import LegendOverlay from './LegendOverlay';

const HOBOKEN_CENTER = { lat: 40.744, lng: -74.032 };
const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';

const markerColors = {
  leagueTonight: '#e53935', // red
  noLeagueTonight: '#43a047', // green
  noLeagueEver: '#222', // black
};

function getMarkerColor(bar, today) {
  const hasLeague = Array.isArray(bar.league) && bar.league.length > 0;
  const isLeagueNight = hasLeague && bar.league.includes(today);
  if (!hasLeague) return markerColors.noLeagueEver;
  if (isLeagueNight) return markerColors.leagueTonight;
  return markerColors.noLeagueTonight;
}

const PoolMap = ({ poolBars }) => {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  const navigate = useNavigate();

  useEffect(() => {
    if (!mapContainer.current) return;
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }
    setLoading(true);
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: MAP_STYLE,
      center: [HOBOKEN_CENTER.lng, HOBOKEN_CENTER.lat],
      zoom: 15,
      attributionControl: true,
    });
    mapRef.current = map;

    map.on('load', () => {
      setLoading(false);
    });

    poolBars.forEach((bar) => {
      const color = getMarkerColor(bar, today);
      // Create marker element
      const el = document.createElement('div');
      el.style.background = 'none';
      el.style.width = '32px';
      el.style.height = '32px';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
      el.innerHTML = `
        <svg height="32" width="32" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="12" fill="${color}" stroke="#fff" stroke-width="3" />
          <circle cx="16" cy="16" r="5" fill="#fff" />
        </svg>
      `;
      el.style.cursor = 'pointer';

      // Render BarPopup as HTML
      const popupHtml = ReactDOMServer.renderToString(<BarPopup bar={bar} />);
      const popupNode = document.createElement('div');
      popupNode.innerHTML = popupHtml;
      const popup = new maplibregl.Popup({ offset: 25, maxWidth: '260px' }).setDOMContent(popupNode);

      // Create marker and attach popup
      new maplibregl.Marker({ element: el })
        .setLngLat([bar.lng, bar.lat])
        .setPopup(popup)
        .addTo(map);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
    // eslint-disable-next-line
  }, [poolBars]);

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <button
        className="map-back-btn"
        onClick={() => navigate('/')}
        aria-label="Back to home"
        style={{ position: 'absolute', top: 18, left: 18, zIndex: 2100 }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#fff" fillOpacity="0.92" />
          <path d="M19.5 10L13.5 16L19.5 22" stroke="#184d27" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {loading && (
        <div className="map-loading-overlay">
          <div className="map-spinner" />
        </div>
      )}
      <LegendOverlay />
      <div ref={mapContainer} style={{ width: '100vw', height: '100vh', visibility: loading ? 'hidden' : 'visible' }} />
    </div>
  );
};

export default PoolMap;