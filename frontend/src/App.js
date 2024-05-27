import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import VRTour from './components/VRTour';

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      {page === 'home' ? <Home setPage={setPage} /> : <VRTour setPage={setPage} />}
    </div>
  );
};

export default App;
