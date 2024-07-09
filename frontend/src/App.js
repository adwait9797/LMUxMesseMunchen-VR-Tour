import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VRTour from './components/VRTour';
import GuidedTour from './components/GuidedTour';
import CombinedRooms from './components/CombinedRooms';
import ContactUs from './components/ContactUs';  // Import ContactUs component
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vrtour" element={<VRTour />} />
      <Route path="/guided-tour" element={<GuidedTour />} />
      <Route path="/combined-rooms" element={<CombinedRooms />} />
      <Route path="/contact-us" element={<ContactUs />} />  {/* Add ContactUs route */}
    </Routes>
  );
}

export default App;
