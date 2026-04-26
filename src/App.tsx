import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Information from './pages/Information';
import CharacterDetail from './pages/CharacterDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Information />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<EventDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}
