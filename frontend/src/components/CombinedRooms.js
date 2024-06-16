import React, { useEffect, useState, useRef } from 'react';
import 'aframe';
import './CombinedRooms.css';
import audioFile from './audio/west_entrance.mp3';
import { ReactComponent as PlayIcon } from './assets/play.svg'; 
import { ReactComponent as PauseIcon } from './assets/pause.svg';

const CombinedRooms = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const scenes = [
    { id: 'lobby', url: '/assets/first_entrance.jpg', title: 'Messe Muenchen Lobby' },
    { id: 'lounge', url: '/assets/entrance_west.jpg', title: 'Messe Muenchen Lounge' },
    { id: 'hall1', url: '/assets/Auditorium.jpg', title: 'Messe Muenchen Hall' }
  ];
  const intervalRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Calculate progress percentage based on the current index
  const progressPercentage = ((currentSceneIndex + 1) / scenes.length) * 100;

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSceneIndex(prevIndex => (prevIndex + 1) % scenes.length);
      }, 6000); // Change scene every 6 seconds
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, scenes.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="scene-container">
      <a-scene>
        <a-assets>
          <audio id="tour" src={audioFile} preload="auto"></audio>
        </a-assets>

        <a-camera position="0 1.6 0" animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear;"></a-camera>

        {scenes.map((scene, index) => (
          <a-sky key={scene.id} src={scene.url} visible={index === currentSceneIndex}>
            <a-text value={scene.title} font="kelsonsans" width="6" position="-2.5 0.25 -1.5" rotation="0 15 0"></a-text>
          </a-sky>
        ))}
      </a-scene>

      <div className="timeline-container">
        <div className="timeline-progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <button className="play-pause-button" onClick={togglePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </div>
  );
}

export default CombinedRooms;