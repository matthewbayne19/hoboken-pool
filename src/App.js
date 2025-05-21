import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import L from 'leaflet';
import './App.css';
import Header from './components/Header';
import PoolMap from './components/PoolMap';
import Homepage from './pages/Homepage'; 
import TournamentsPage from './pages/TournamentsPage'

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function App() {
  const [poolBars, setPoolBars] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/poolbars.json')
      .then((res) => res.json())
      .then((data) => setPoolBars(data))
      .catch((err) => console.error('Error loading poolbars.json:', err));
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/map" element={<PoolMap poolBars={poolBars} />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
