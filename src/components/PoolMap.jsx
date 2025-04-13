import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import BarPopup from './BarPopup'
import 'leaflet/dist/leaflet.css';

const PoolMap = ({ poolBars }) => {
  return (
    <MapContainer center={[40.744, -74.032]} zoom={15} style={{ height: '80vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {poolBars.map((bar, idx) => (
        <Marker key={idx} position={[bar.lat, bar.lng]}>
          <Popup minWidth={250}>
            <BarPopup bar={bar} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default PoolMap;