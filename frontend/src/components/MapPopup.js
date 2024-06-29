import React from 'react';
import './MapPopup.css';

const MapPopup = ({ imageUrl, onClose }) => {
  return (
    <div className="map-popup">
      <div className="map-popup-content">
        <img src={imageUrl} alt="Map" className="map-image" />
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MapPopup;
