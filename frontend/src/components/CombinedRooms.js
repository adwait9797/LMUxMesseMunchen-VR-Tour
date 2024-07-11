import React, { useEffect, useState, useRef } from 'react';
import 'aframe';
import './CombinedRooms.css';
import audioFile from './assets/audio/west_entrance.mp3';
import { ReactComponent as PlayIcon } from './assets/play.svg';
import { ReactComponent as PauseIcon } from './assets/pause.svg';

const CombinedRooms = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const scenes = [
    { id: 'lobby', url: '/assets/main_hall.jpg', duration: 1000000 }, // 10 seconds
    { id: 'lounge', url: '/assets/entrance_west.jpg', duration: 20000 }, // 20 seconds
    { id: 'main_hall', url: '/assets/main_hall.jpg', duration: 15000 }, // 15 seconds
    { id: 'hall1', url: '/assets/hall1.jpg', duration: 25000 }, // 25 seconds
    { id: 'hall2', url: '/assets/hall2.jpg', duration: 30000 }, // 30 seconds
    { id: 'B0', url: '/assets/B0.jpg', duration: 200000000 }, // 20 seconds
  ];

  const timeoutRef = useRef(null);
  const progressIntervalRef = useRef(null);

  useEffect(() => {
    function changeScene() {
      console.log(`Changing scene from index ${currentSceneIndex} to ${(currentSceneIndex + 1) % scenes.length}`);
      setCurrentSceneIndex(prevIndex => (prevIndex + 1) % scenes.length);
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      changeScene();
    }, scenes[currentSceneIndex].duration);

    return () => clearTimeout(timeoutRef.current);
  }, [currentSceneIndex]);

  useEffect(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    setProgress(0);

    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => Math.min(prev + (100 / (scenes[currentSceneIndex].duration / 1000)), 100));
    }, 1000);

    return () => clearInterval(progressIntervalRef.current);
  }, [currentSceneIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.error('Error playing audio:', err);
      });
    }
  }, []);

  const progressPercentage = Math.min(progress, 100);

  return (
    <div className="scene-container">
      <a-scene>
        <a-assets>
          <audio ref={audioRef} id="tour" src={audioFile} preload="auto"></audio>
        </a-assets>

        <a-camera position="0 1.6 0" animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear;"></a-camera>

        {scenes.map((scene, index) => (
          <a-sky key={scene.id} src={scene.url} visible={index === currentSceneIndex}></a-sky>
        ))}
      </a-scene>

      <div className="controls-container">
        <div className="left-controls">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
        <div className="right-controls">
          <button className="back-to-home-button" onClick={() => window.location.href = '/'}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default CombinedRooms;