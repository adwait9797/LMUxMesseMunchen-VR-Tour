import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'aframe';
import './VRTour.css';
import MenuIcon from '@mui/icons-material/Menu';

const VRTour = ({ setPage }) => {
  const [tour, setTour] = useState(null);
  const [menuActive, setMenuActive] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(0);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await axios.get('http://localhost:5002/api/tour'); // Updated port number
        setTour(res.data);
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    };
    fetchTour();
  }, []);

  if (!tour) return <div>Loading...</div>;

  const handleRoomChange = (index) => {
    setCurrentRoom(index);
    setMenuActive(false);
  };

  return (
    <div className="vr-tour">
      <a-scene>
        <a-sky src={tour.parts[currentRoom].imageUrl} rotation="0 -90 0"></a-sky>
        <a-circle
          position="0 1 -3"
          radius="0.2"
          color="#CCC"
          opacity="0.5"
          className="clickable"
          onClick={() => handleRoomChange((currentRoom + 1) % tour.parts.length)}
        ></a-circle>
      </a-scene>
      <div className="top-strip">
        <div className={`hamburger-menu ${menuActive ? 'active' : ''}`} onClick={() => setMenuActive(!menuActive)}>
          <MenuIcon className="hamburger-icon" />
          {menuActive && (
            <div className="menu-dropdown">
              {tour.parts.map((part, index) => (
                <div key={index} className="menu-item" onClick={() => handleRoomChange(index)}>
                  {part.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <button className="back-button" onClick={() => setPage('home')}>Back to Home</button>
    </div>
  );
};

export default VRTour;
