import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'aframe';
import './VRTour.css';
import Navigation from './Navigation';
import RoomOverlay from './RoomOverlay';

function VRTour() {
  const [tourData, setTourData] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/tour');
        console.log('Tour data fetched:', response.data);
        setTourData(response.data);
        setSelectedRoom(response.data.parts[0]);
      } catch (error) {
        console.error('Error fetching tour data:', error);
      }
    };

    fetchTourData();
  }, []);

  useEffect(() => {
    if (selectedRoom) {
      const scene = document.querySelector('a-scene');
      let skyElement = document.querySelector('a-sky');
      if (skyElement) {
        scene.removeChild(skyElement);
      }
      skyElement = document.createElement('a-sky');
      skyElement.setAttribute('src', selectedRoom.imageUrl);
      scene.appendChild(skyElement);
    }
  }, [selectedRoom]);

  const handleOverlayOpen = () => {
    setIsOverlayOpen(true);
  };

  const handleOverlayClose = () => {
    setIsOverlayOpen(false);
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setIsOverlayOpen(false);
  };

  if (!tourData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vr-tour">
      <Navigation currentRoom={selectedRoom ? selectedRoom.title : 'Loading...'} onNavigationClick={handleOverlayOpen} />
      {isOverlayOpen && (
        <RoomOverlay
          currentRoom={selectedRoom ? selectedRoom.title : 'Loading...'}
          rooms={tourData.parts}
          onRoomSelect={handleRoomSelect}
          onClose={handleOverlayClose}
        />
      )}
      <a-scene embedded>
        <a-assets>
          {tourData.parts.map((part, index) => (
            <img key={index} id={`roomImage-${part._id}`} src={part.imageUrl} alt={part.title} />
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
