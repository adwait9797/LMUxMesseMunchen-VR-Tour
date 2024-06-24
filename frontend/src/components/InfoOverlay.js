import React from 'react';
import './InfoOverlay.css';
import closeIcon from './assets/close_icon.svg';

const InfoOverlay = ({ roomInfo, onClose }) => {
  if (!roomInfo) {
    return null;
  }

  return (
    <div className="info-overlay">
      <div className="close-overlay" onClick={onClose}>
        <img src={closeIcon} alt="Close" />
      </div>
      <div className="overlay-content">
        <h2>{roomInfo.title}</h2>
        <p>{roomInfo.description}</p>
        {/* Add more room details here if needed */}
      </div>
    </div>
  );
};

export default InfoOverlay;

