import React, { useState } from 'react';
import './RoomOverlay.css';
import leftArrow from './assets/left_arrow.svg';
import rightArrow from './assets/right_arrow.svg';
import locationIcon from './assets/location_icon.svg';
import listIcon from './assets/list_icon.svg';
import mapIcon from './assets/map_icon.svg';
import closeIcon from './assets/close_icon.svg'; // Import the close icon

const RoomOverlay = ({ currentRoom, rooms, onRoomSelect, onClose }) => {
  const [view, setView] = useState('list');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const handleToggleView = (view) => {
    setView(view);
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * itemsPerPage < rooms.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRoomClick = (room) => {
    onRoomSelect(room);
  };

  return (
    <div className="room-overlay">
      <div className="close-overlay" onClick={onClose}>
        <img src={closeIcon} alt="Close" />
      </div>
      <div className="overlay-header">
        <div className="view-toggle">
          <img
            src={listIcon}
            alt="List View"
            className={`toggle-icon ${view === 'list' ? 'active' : ''}`}
            onClick={() => handleToggleView('list')}
          />
       
        </div>
        <div className="current-room">
          <img src={locationIcon} alt="Current Room" className="location-icon" />
          {currentRoom}
        </div>
      </div>
      {view === 'list' && (
        <div className="room-list">
          <div className="room-list-content">
            {rooms.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((room, index) => (
              <div key={index} className="room-card" onClick={() => handleRoomClick(room)}>
                <img src={room.imageUrl} alt={room.title} className="room-thumbnail" />
                <div className="room-title">{room.title}</div>
              </div>
            ))}
          </div>
          <div className="pagination">
            <div className="pagination-arrow" onClick={handlePrevPage}>
              <img src={leftArrow} alt="Previous" />
            </div>
            <div className="pagination-arrow" onClick={handleNextPage}>
              <img src={rightArrow} alt="Next" />
            </div>
          </div>
        </div>
      )}
      {view === 'map' && (
        <div className="map-view">
          {/* Map view content goes here */}
        </div>
      )}
    </div>
  );
};

export default RoomOverlay;
