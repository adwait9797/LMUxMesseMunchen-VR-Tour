import React from 'react';
import './Navigation.css';
import infoIcon from './assets/info_icon.svg';
import mapIcon from './assets/map_icon.svg';
import shareIcon from './assets/share_icon.svg';
import myLocationIcon from './assets/mylocation_icon.svg'; // New icon import

const Navigation = ({ currentRoom, onNavigationClick, onInfoClick }) => {
  return (
    <div className="navigation">
      <h2>{currentRoom}</h2>
      <div className="icons">
        <div className="icon-container" title="Learn about the room" onClick={onInfoClick}>
          <img src={infoIcon} alt="Info" className="icon" />
        </div>
        <div className="icon-container navigation-button" title="Choose from a selection of rooms" onClick={onNavigationClick}>
          <img src={mapIcon} alt="Navigation" className="icon" />
          <span>Navigation</span>
        </div>
        <div className="icon-container" title="Learn where you are">
          <img src={myLocationIcon} alt="My Location" className="icon" />
        </div>
        <div className="icon-container" title="Share this room">
          <img src={shareIcon} alt="Share" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
