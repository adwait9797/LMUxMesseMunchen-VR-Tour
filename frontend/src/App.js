import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VRTour from './components/VRTour';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vrtour" element={<VRTour />} />
    </Routes>
  );
}

export default App;
