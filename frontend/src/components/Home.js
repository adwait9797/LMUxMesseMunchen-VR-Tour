import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo from './assets/logo.png';
import imageIcon from './assets/image_icon.svg';
import videoIcon from './assets/video_icon.svg';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleStartTour = () => {
    // This checks which option is selected and navigates accordingly
    if (selectedOption) {
      const destination = selectedOption === 'guided' ? '/guided-tour' : '/vrtour';
      navigate(destination);
    }
  };

  return (
    <div className="home">
      <img src={logo} alt="Messe München" className="logo" />
      <div className="main-text-container">
        <div className="main-text">
          Experience <span className="highlight">Messe München</span>
          <small>Now in VR</small>
        </div>
      </div>
      <div className="card">
        <h2>Choose tour method</h2>
        <div
          className={`option ${selectedOption === 'self' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('self')}
        >
          <img src={imageIcon} alt="Self-guided" />
          <div className="option-text">
            <div className="option-title">Self Guided Tour</div>
            <div className="option-subtitle">Explore at your own pace</div>
          </div>
        </div>
        <div
          className={`option ${selectedOption === 'guided' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('guided')}
        >
          <img src={videoIcon} alt="Guided" />
          <div className="option-text">
            <div className="option-title">Guided Tour</div>
            <div className="option-subtitle">Join a guided session</div>
          </div>
        </div>
        <button className="start-button" onClick={handleStartTour}>
          Start Tour
        </button>
      </div>
    </div>
  );
};

export default Home;
