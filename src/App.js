import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import './App.css';
import PoolMap from './components/PoolMap';

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
      .catch((err) => console.error('Error loading poolBars.json:', err));
  }, []);

  return (
    <div className="App">
      <h1>Hoboken Pool Tables</h1>
      <PoolMap poolBars={poolBars} />
    </div>
  );
}

export default App;