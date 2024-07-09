import React from 'react';
import { Link } from 'react-router-dom';
import './HelpCenter.css';
import logo from './assets/logo.png';

const HelpCenter = () => {
  return (
    <div className="help-center-container">
      <div className="logo-container">
        <img src={logo} alt="Messe München" className="logo" />
      </div>
      <div className="content-container">
        <h1 className="main-header">Help Center</h1>
        <div className="vr-instructions">
          <h2>Using the VR Tour with Oculus Rift</h2>
          <ol>
            <li>Ensure that your Oculus Rift headset is properly connected to your computer and that the necessary software is installed.</li>
            <li>Open the VR tour application on your computer.</li>
            <li>Put on your Oculus Rift headset.</li>
            <li>The VR tour should automatically launch in VR mode, providing an immersive 360-degree view of the Messe München Trade Fair Center.</li>
            <li>Use the Oculus Rift controllers or hand gestures to navigate through the tour, interact with hotspots, and access information.</li>
          </ol>
        </div>
        <div className="help-text-container">
          <p className="help-text">
            Not finding what you are looking for? <br />
            Chat with us or send us an email.
          </p>
          <div className="button-container">
            <Link to="/contact-us" className="button">
              Send us an email
            </Link>
            <Link to="/" className="button">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
