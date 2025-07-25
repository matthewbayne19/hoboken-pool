import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Map from './pages/Map';
import Homepage from './pages/Homepage'; 
// import TournamentsPage from './pages/TournamentsPage';
import BarsListPage from './pages/BarsListPage';
import RulesPage from './pages/RulesPage';
import BackroomAI from './pages/BackroomAI';

function App() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/barData.json')
      .then((res) => res.json())
      .then((data) => setBars(data))
      .catch((err) => console.error('Error loading barData.json:', err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/map" element={<Map bars={bars} />} />
        {/* <Route path="/tournaments" element={<TournamentsPage />} /> */}
        <Route path="/bars" element={<BarsListPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/ai" element={<BackroomAI />} />
      </Routes>
    </Router>
  );
}

export default App;
