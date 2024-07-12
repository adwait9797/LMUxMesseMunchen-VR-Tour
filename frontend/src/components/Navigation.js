import React, { useState } from 'react';
import './Navigation.css';
import infoIcon from './assets/info_icon.svg';
import mapIcon from './assets/map_icon.svg';
import shareIcon from './assets/share_icon.svg';
import myLocationIcon from './assets/mylocation_icon.svg';
import surveyIcon from './assets/survey_icon.svg'; // Import the new survey icon
import NpsSurvey from './NpsSurvey';

const Navigation = ({ currentRoom, onNavigationClick, onInfoClick, onMapClick, onShareClick }) => {
  const [showSurvey, setShowSurvey] = useState(false); // State to toggle NPS Survey

  const handleSurveyClick = () => {
    setShowSurvey(!showSurvey);
  };

  const handleCloseSurvey = () => {
    setShowSurvey(false);
  };

  return (
    <div className="navigation">
      <h2>{currentRoom}</h2>
      <div className="icons">
        <div className="icon-container" title="Rate your experience" onClick={handleSurveyClick}>
          <img src={surveyIcon} alt="Survey" className="icon" /> {/* Add this line for the survey button */}
        </div>
        <div className="icon-container" title="Learn about the room" onClick={onInfoClick}>
          <img src={infoIcon} alt="Info" className="icon" />
        </div>
        <div className="icon-container navigation-button" title="Choose from a selection of rooms" onClick={onNavigationClick}>
          <img src={mapIcon} alt="Navigation" className="icon" />
          <span>Navigation</span>
        </div>
        <div className="icon-container" title="Learn where you are" onClick={onMapClick}>
          <img src={myLocationIcon} alt="My Location" className="icon" />
        </div>
        <div className="icon-container" title="Share this room" onClick={onShareClick}>
          <img src={shareIcon} alt="Share" className="icon" />
        </div>
      </div>
      {showSurvey && <NpsSurvey onClose={handleCloseSurvey} />} {/* Pass onClose to NpsSurvey */}
    </div>
  );
};

export default Navigation;
