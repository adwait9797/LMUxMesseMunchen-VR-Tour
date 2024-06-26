import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'aframe';
import 'aframe-event-set-component';
import './VRTour.css';
import Navigation from './Navigation';
import RoomOverlay from './RoomOverlay';
import InfoOverlay from './InfoOverlay';
import Hotspot from './Hotspot';
import HotspotOverlay from './HotspotOverlay';
import closeIcon from './assets/close_icon.svg';

function VRTour() {
  const [tourData, setTourData] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isHotspotOverlayOpen, setIsHotspotOverlayOpen] = useState(false);
  const [isInfoOverlayOpen, setIsInfoOverlayOpen] = useState(false);
  const [currentHotspot, setCurrentHotspot] = useState(null);
  const [currentRoomInfo, setCurrentRoomInfo] = useState(null);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/tours');
        console.log('Tour data fetched:', response.data);
        if (response.data[0] && response.data[0].parts) {
          setTourData(response.data[0]);
          setSelectedRoom(response.data[0].parts[0]);
        } else {
          console.error('Unexpected tour data structure:', response.data);
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

  const handleHotspotClick = (hotspot) => {
    setCurrentHotspot(hotspot);
    setIsHotspotOverlayOpen(true);
  };

  const handleHotspotOverlayClose = () => {
    setIsHotspotOverlayOpen(false);
  };

  const handleInfoClick = () => {
    setCurrentRoomInfo(selectedRoom);
    setIsInfoOverlayOpen(true);
  };

  const handleInfoOverlayClose = () => {
    setIsInfoOverlayOpen(false);
  };

  if (!tourData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vr-tour">
      <Navigation
        currentRoom={selectedRoom ? selectedRoom.title : 'Loading...'}
        onNavigationClick={handleOverlayOpen}
        onInfoClick={handleInfoClick}
      />
      {isOverlayOpen && (
        <RoomOverlay
          currentRoom={selectedRoom ? selectedRoom.title : 'Loading...'}
          rooms={tourData.parts}
          onRoomSelect={handleRoomSelect}
          onClose={handleOverlayClose}
        />
      )}
      {isInfoOverlayOpen && currentRoomInfo && (
        <InfoOverlay roomInfo={currentRoomInfo} onClose={handleInfoOverlayClose} />
      )}
      <a-scene embedded>
        <a-assets>
          {tourData.parts.map((part, index) => (
            <img key={index} id={`roomImage-${part._id}`} src={part.imageUrl} alt={part.title} />
          ))}
          <img id="closeIcon" src={closeIcon} alt="Close Icon" />
        </a-assets>
        <a-camera id="camera">
          <a-cursor color="white"></a-cursor>
        </a-camera>
        {selectedRoom && (
          <a-sky src={selectedRoom.imageUrl}></a-sky>
        )}
        {selectedRoom.hotspots && selectedRoom.hotspots.map((hotspot, index) => (
          <Hotspot key={index} hotspot={hotspot} handleHotspotClick={handleHotspotClick} />
        ))}
        {isHotspotOverlayOpen && currentHotspot && (
          <HotspotOverlay hotspot={currentHotspot} onClose={handleHotspotOverlayClose} />
        )}
      </a-scene>
      <button className="back-to-home-button" onClick={() => window.location.href = '/'}>
        Back to Home
      </button>
    </div>
  );
}

export default VRTour;
