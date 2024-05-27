import React from 'react';
import './Home.css';
import logo from './assets/logo.png';

const Home = ({ setPage }) => {
  return (
    <div className="home">
      <img src={logo} alt="Logo" className="logo" />
      <button onClick={() => setPage('tour')}>Start 360 Tour</button>
    </div>
  );
};

export default Home;
