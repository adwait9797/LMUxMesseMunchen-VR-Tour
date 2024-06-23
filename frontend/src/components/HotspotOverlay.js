import React from 'react';
import 'aframe';
import 'aframe-look-at-component';
import './Hotspot.css'; 

const HotspotOverlay = ({ hotspot, onClose }) => (
  <a-entity position="0 1.6 -2" look-at="#camera">
    <a-plane
      geometry="primitive: plane; width: 2.5; height: 1.5;"
      material="color: white; opacity: 0.85; side: double; shader: flat"
      position="0 0 0"
    >
      <a-text
        value={hotspot.title}
        color="black"
        width="2.3"
        align="center"
        position="0 0.5 0.01"
        font-size="0.5"
      ></a-text>
      <a-text
        value={hotspot.description}
        color="black"
        width="2.3"
        align="center"
        position="0 0 0.01"
        font-size="0.2"
      ></a-text>
    </a-plane>
    <a-entity
      geometry="primitive: circle; radius: 0.25"
      material="color: #333; opacity: 0.8; shader: flat"
      position="0 -0.7 0.01"
      class="clickable"
      onClick={onClose}
    >
      <a-text
        value="Close"
        align="center"
        color="white"
        position="0 0 0.02"
        width="2"
      ></a-text>
    </a-entity>
  </a-entity>
);

export default HotspotOverlay;
