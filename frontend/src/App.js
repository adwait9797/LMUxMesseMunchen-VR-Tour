import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VRTour from './components/VRTour';
import GuidedTour from './components/GuidedTour';
import CombinedRooms from './components/CombinedRooms';
import ContactUs from './components/ContactUs';
import HelpCenter from './components/HelpCenter';
import SelfGuidedTourInstructions from './components/SelfGuidedTourInstructions'; // Import the new component
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vrtour" element={<VRTour />} />
      <Route path="/guided-tour" element={<GuidedTour />} />
      <Route path="/combined-rooms" element={<CombinedRooms />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/self-guided-tour-instructions" element={<SelfGuidedTourInstructions />} /> {/* Add the new route */}
      <Route path="/self-guided-tour" element={<VRTour />} /> {/* Add the route for the self-guided tour, pointing to VRTour */}
    </Routes>
  );
}

export default App;
