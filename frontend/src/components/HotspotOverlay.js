import React from 'react';
import 'aframe';
import './Hotspot.css';

const HotspotOverlay = ({ hotspot, onClose }) => {
  const [x, y, z] = hotspot.position.split(' ').map(Number);
  const adjustedPosition = `${x} ${y} ${parseFloat(z) + 1}`;

  return (
    <a-entity id="hotspotOverlay" position={adjustedPosition}>
      <a-plane
        width="6" /* Increased width */
        height="4" /* Increased height */
        material="color: #ffffff; opacity: 0.95; shader: flat"
        look-at="#camera"
        class="hotspot-overlay-background"
      >
        <a-text
          value={hotspot.title}
          color="#000000" 
          align="center"
          position="0 1.5 0.01" 
          width="5"
          font="kelsonsans"
          shader="msdf"
          negate="false"
          class="hotspot-overlay-title"
          height="1" 
        ></a-text>
        <a-text
          value={hotspot.description}
          color="#333333"
          align="center"
          position="0 0.5 0.01"
          width="5"
          font="kelsonsans"
          shader="msdf"
          negate="false"
          class="hotspot-overlay-description"
          height="0.8" 
        ></a-text>
        <a-circle
          radius="0.6"
          position="0 -1.7 0.01" /* Adjusted position */
          material="color: #333333; opacity: 0.8"
          class="clickable hotspot-overlay-close"
          onClick={onClose}
        >
          <a-text
            value="Close"
            color="#ffffff"
            align="center"
            position="0 0 0.01"
            width="4"
            font="kelsonsans"
            shader="msdf"
            negate="false"
          ></a-text>
        </a-circle>
      </a-plane>
    </a-entity>
  );
};

export default HotspotOverlay;
