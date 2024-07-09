import React from 'react';
import { Link } from 'react-router-dom';
import './HelpCenter.css';
import logo from './assets/logo.png';
import emailIcon from './assets/email_icon.svg';

const HelpCenter = () => {
  return (
    <div className="help-center-container">
      <div className="logo-container">
        <img src={logo} alt="Messe München" className="logo" />
      </div>
      <div className="content-container">
        <h1>Help Center</h1>
        <p className="help-text">
          Not finding what you are looking for? <br />
          Chat with us or send us an email.
        </p>
        <Link to="/contact-us" className="button email-button">
          <img src={emailIcon} alt="Email Icon" className="email-icon" />
          Send us an email
        </Link>
      </div>
    </div>
  );
};

export default HelpCenter;
