import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './GuidedTour.css';
import logo from './assets/logo.png';
import { ReactComponent as HeadphonesIcon } from './assets/headphones.svg';
import { ReactComponent as VRHeadsetIcon } from './assets/head_mounted_device_icon.svg';

const GuidedTour = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleStartTour = () => {
        // This function will navigate to CombinedRooms if the selected option matches
        if (selectedOption === 'CombinedRooms') {
            navigate('/combined-rooms');
        }
    };

    return (
        <div className="background-image">
            <div className="content-container">
                <div className="logo-container">
                    <img src={logo} alt="Messe Muenchen Logo" className="logo" />
                </div>
                <div className="text-content">
                    <h1>Welcome to the Guided Tour</h1>
                    <h4>Experience our world-class event spaces as if you were there in person.</h4>
                    <div className="horizontal-line"></div>
                    <p><HeadphonesIcon className="audio-icon" /> Use your headphones for immersive audio.</p>
                    <div className="horizontal-line"></div>
                    <div className="vr-mode">
                        <p><VRHeadsetIcon className="vr-icon" /> To view the virtual reality version of this story, visit this page using your Oculus Rift.</p>
                    </div>
                
                    <button onClick={() => handleStartTour('CombinedRooms')} className="start-button">Start Guided Tour</button>
                </div>
            </div>
        </div>
    );
};

export default GuidedTour;
