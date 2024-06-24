import React from 'react';
import 'aframe';
import 'aframe-look-at-component';
import './Hotspot.css';
import infoIcon from './assets/Info_Icon_Hotspots.png';

const Hotspot = ({ hotspot, handleHotspotClick }) => (
  <a-entity
    position={hotspot.position}
    class="clickable"
    look-at="#camera"
    onClick={() => handleHotspotClick(hotspot)}
    event-set__mouseenter="scale: 1.2 1.2 1.2"
    event-set__mouseleave="scale: 1 1 1"
  >
    <a-circle
      radius="0.6"
      color="white"
      opacity="0.6"
      position="0 0 -0.01"
    ></a-circle>
    <a-plane
      height="0.8"
      width="0.8"
      material={`src: url(${infoIcon}); transparent: true; opacity: 1`}
    ></a-plane>
    <a-animation
      attribute="scale"
      dur="150"
      fill="forwards"
      to="1.2 1.2 1.2"
      direction="alternate"
      repeat="indefinite"
    ></a-animation>
  </a-entity>
);

export default Hotspot;
