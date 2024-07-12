import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelfGuidedTourInstructions.css';
import instructionsImage from './assets/selfguidedinstructions.png';

const SelfGuidedTourInstructions = () => {
  const navigate = useNavigate();

  const handleStartTour = () => {
    navigate('/vrtour?room=Entrance West'); // Navigate to the self-guided tour with the correct parameter
  };

  return (
    <div className="self-guided-tour-instructions">
      <div className="overlay">
        <img src={instructionsImage} alt="Self-Guided Tour Instructions" className="instructions-image" />
        <button className="start-button" onClick={handleStartTour}>Start Self-Guided Tour</button>
      </div>
    </div>
  );
};

export default SelfGuidedTourInstructions;
