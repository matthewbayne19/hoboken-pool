import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PoolMap from './components/PoolMap';
import Homepage from './pages/Homepage'; 
import TournamentsPage from './pages/TournamentsPage';
import BarsListPage from './pages/BarsListPage';
import RulesPage from './pages/RulesPage';

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
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/map" element={<PoolMap poolBars={poolBars} />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
        <Route path="/bars" element={<BarsListPage />} />
        <Route path="/rules" element={<RulesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
