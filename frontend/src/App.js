import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VRTour from './components/VRTour';
import GuidedTour from './components/GuidedTour';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vrtour" element={<VRTour />} />
      <Route path="/guided-tour" element={<GuidedTour />} />
    </Routes>
  );
}

export default App;
