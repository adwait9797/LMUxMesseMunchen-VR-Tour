import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo from './assets/logo.png';
import imageIcon from './assets/image_icon.svg';
import videoIcon from './assets/video_icon.svg';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [randomFact, setRandomFact] = useState('');
  const navigate = useNavigate();

  const facts = [
    "Did you know? In 2006, Trade Fair Center Messe München was transformed into the media center of the FIFA World Cup and hosted the church service during the Pope's visit.",
    "Did you know? With 200,000 square meters of exhibition space, the Trade Fair Center is the perfect location for trade fairs.",
    "Did you know? Messe München hosts XXL product presentations and events with plenums of up to 6,000 people."
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setRandomFact(facts[randomIndex]);
  }, []);

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
        <p className="random-fact">{randomFact}</p> {/* Added fact display */}
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
