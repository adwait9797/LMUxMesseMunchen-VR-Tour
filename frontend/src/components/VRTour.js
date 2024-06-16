import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'aframe';
import './VRTour.css';
import menuIcon from './assets/menu_icon.svg';
import Navigation from './Navigation';

function VRTour() {
  const [tourData, setTourData] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/tours');
        console.log('Tour data fetched:', response.data);
        setTourData(response.data);
        if (response.data[0].parts && response.data[0].parts.length > 0) {
          setSelectedRoom(response.data[0].parts[0]);
        }
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    };

    fetchTourData();
  }, []);

  useEffect(() => {
    if (selectedRoom) {
      console.log('Selected room:', selectedRoom);
      const scene = document.querySelector('a-scene');
      let skyElement = document.querySelector('a-sky');
      if (skyElement) {
        skyElement.setAttribute('src', selectedRoom.imageUrl);
      } else {
        skyElement = document.createElement('a-sky');
        skyElement.setAttribute('src', selectedRoom.imageUrl);
        scene.appendChild(skyElement);
      }
    }
  }, [selectedRoom]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRoomSelect = (room) => {
    console.log('Room selected:', room);
    setSelectedRoom(room);
    setIsMenuOpen(false);
  };

  if (!tourData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vr-tour">
      <Navigation currentRoom={selectedRoom ? selectedRoom.title : 'Loading...'} />
      <div className="menu-strip" onClick={handleMenuClick}>
        <img src={menuIcon} alt="Menu" className="menu-icon" />
        {selectedRoom && (
          <div className="room-info">
            <div className="room-title">{selectedRoom.title}</div>
            <div className="room-description">{selectedRoom.description}</div>
          </div>
        )}
      </div>
      {isMenuOpen && (
        <div className="menu">
          {tourData.map((tour, tourIndex) => (
            tour.parts && tour.parts.map((part, partIndex) => (
              <div key={`${tourIndex}-${partIndex}`} className="menu-item" onClick={() => handleRoomSelect(part)}>
                {part.title}
              </div>
            ))
          ))}
        </div>
      )}
      <a-scene embedded>
        <a-assets>
          {tourData.map((tour, tourIndex) => (
            tour.parts && tour.parts.map((part, partIndex) => (
              <img key={`${tourIndex}-${part._id}`} id={`roomImage-${part._id}`} src={part.imageUrl} alt={part.title} />
            ))
          ))}
        </a-assets>
        {selectedRoom && (
          <a-sky src={selectedRoom.imageUrl}></a-sky>
        )}
      </a-scene>
      <button className="back-to-home-button" onClick={() => window.location.href = '/'}>
        Back to Home
      </button>
    </div>
  );
}

export default VRTour;
