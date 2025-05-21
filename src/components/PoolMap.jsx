import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import BarPopup from './BarPopup';
import LegendOverlay from './LegendOverlay';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const redIcon = new L.Icon({
  iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const greenIcon = new L.Icon({
  iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const blueIcon = new L.Icon({
  iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const PoolMap = ({ poolBars }) => {
  const today = new Date().toLocaleString('en-US', { weekday: 'long' });

  return (
    <div style={{ position: 'relative' }}>
      <LegendOverlay />
      <MapContainer center={[40.744, -74.032]} zoom={15} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {poolBars.map((bar, idx) => {
          const hasLeague = Array.isArray(bar.league) && bar.league.length > 0;
          const isLeagueNight = hasLeague && bar.league.includes(today);

          const markerIcon = !hasLeague
            ? blueIcon
            : isLeagueNight
              ? redIcon
              : greenIcon;

          return (
            <Marker key={idx} position={[bar.lat, bar.lng]} icon={markerIcon}>
              <Popup minWidth={250}>
                <BarPopup bar={bar} />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default PoolMap;