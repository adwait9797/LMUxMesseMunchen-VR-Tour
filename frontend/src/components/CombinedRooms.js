import React, { useEffect, useState, useRef } from 'react';
import 'aframe';
import './CombinedRooms.css';
import audioFile from './assets/audio/west_entrance.mp3';
import { ReactComponent as PlayIcon } from './assets/play.svg';
import { ReactComponent as PauseIcon } from './assets/pause.svg';

const CombinedRooms = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const scenes = [
    { id: 'lobby', url: '/assets/first_entrance.jpg' },
    { id: 'lounge', url: '/assets/entrance_west.jpg' },
    { id: 'main_hall', url: '/assets/main_hall.jpg' },
    { id: 'hall1', url: '/assets/hall1.jpg' },
    { id: 'hall2', url: '/assets/hall2.jpg' },
    { id: 'B0', url: '/assets/B0.jpg' }, 
  ];

  const intervalRef = useRef(null);

  useEffect(() => {
    function handleSceneChange() {
      setCurrentSceneIndex(prevIndex => (prevIndex + 1) % scenes.length);
    }

    if (isPlaying) {
      intervalRef.current = setInterval(handleSceneChange, 30000); // Change scene every 30 seconds
      setProgress(0);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, scenes.length]);

  useEffect(() => {
    let progressInterval;
    if (isPlaying) {
      progressInterval = setInterval(() => {
        setProgress(prev => (prev + 100 / (30000 / 100)) % 100);
      }, 100);
    } else {
      setProgress(0);
    }
    return () => clearInterval(progressInterval);
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && audioRef.current) {
      audioRef.current.play().catch(err => console.error('Error playing audio:', err));
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    if (currentSceneIndex === 0 && !isPlaying) {
      setProgress(0);
    }
  }, [currentSceneIndex, isPlaying]);

  useEffect(() => {
    if (currentSceneIndex === scenes.length - 1 && progress === 100) {
      setIsPlaying(false);
    }
  }, [progress, currentSceneIndex, scenes.length]);

  const progressPercentage = ((currentSceneIndex + 1) / scenes.length) * 100;

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
        <button className="play-pause-button" onClick={togglePlayPause} title={isPlaying ? 'Pause Tour' : 'Play Tour'}>
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default CombinedRooms;
