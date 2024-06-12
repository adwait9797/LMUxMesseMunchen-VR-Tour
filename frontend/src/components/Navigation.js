import React from 'react';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faMap, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ currentRoom }) => {
  return (
    <div className="navigation">
      <h2>{currentRoom}</h2>
      <div className="icons">
        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
        <FontAwesomeIcon icon={faMap} className="icon" />
        <FontAwesomeIcon icon={faShareAlt} className="icon" />
      </div>
    </div>
  );
};

export default Navigation;
