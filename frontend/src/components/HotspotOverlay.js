import React from 'react';
import 'aframe';
import './Hotspot.css';
import hotspotImage from './assets/Rectangle_hotspot.png';

const HotspotOverlay = ({ hotspot, onClose }) => {
  const [x, y, z] = hotspot.position.split(' ').map(Number);
  const adjustedPosition = `${x} ${y} ${parseFloat(z) + 1}`;

  return (
    <a-entity id="hotspotOverlay" position={adjustedPosition}>
      <a-image
        src={hotspotImage}
        width="4"
        height="3"
        look-at="#camera"
        class="hotspot-overlay-background"
      >
          <a-plane
              width="3.8"
              height="2.8"
              material="color: #ffffff; transparent = true"
              position="0 0 0.005"
          ></a-plane>
          <a-text
          value={hotspot.title}
          color="#000000"
          align="center"
          position="0 1.2 0.01"
          width="3.5"
          font="kelsonsans"
          shader="msdf"
          negate="false"
          scale="1.2 1.2 1"
          class="hotspot-overlay-title"
        ></a-text>

        <a-text
          value={hotspot.description}
          color="#333333"
          align="center"
          position="0 0.2 0.01"
          width="3.5"
          font="kelsonsans"
          shader="msdf"
          negate="false"
          scale="0.8 0.8 1"
          class="hotspot-overlay-description"
          wrap-count="30"
        ></a-text>
        <a-entity
        geometry="primitive: circle; radius: 0.6"
        material="color: #4a4a4a; opacity: 0.9"
        position="0 -1.3 0.02"
        class="clickable hotspot-overlay-close"
        onClick={onClose}
      >
      <a-text
        value="Close"
        color="#ffffff"
        align="center"
        position="0 0 0.01"
        scale="0.8 0.8 1"
        font="kelsonsans"
        shader="msdf"
        negate="false"
      ></a-text>
    </a-entity>
      </a-image>
    </a-entity>
  );
};

export default HotspotOverlay;
