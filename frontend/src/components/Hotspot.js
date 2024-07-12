import React from 'react';
import 'aframe';
import 'aframe-look-at-component';
import './Hotspot.css';
import infoIcon from './assets/Info_Icon_Hotspots.png';
import arrowIcon from './assets/Arrow_hotspot.png';
import arrowOverlayImage from './assets/Overlay_Arrow.png';

const Hotspot = ({ hotspot, handleHotspotClick, handleArrowClick }) => {
  const overlayId = `${hotspot.id}-overlay`;

  return (
    <a-entity
      position={hotspot.position}
      class="clickable hotspot-wrapper"
      look-at="#camera"
      onClick={() => hotspot.targetRoom ? handleArrowClick(hotspot) : handleHotspotClick(hotspot)}
      render-order="1"
    >
      <a-circle
        radius="0.6"
        color="white"
        opacity="0.6"
        position="0 0 -0.02"
      ></a-circle>
      <a-plane
        class="hotspot-icon"
        height="0.8"
        width="0.8"
        position="0 0 -0.01"
        material={`src: url(${hotspot.targetRoom ? arrowIcon : infoIcon}); transparent: true; opacity: 1`}
        animation__mouseenter="property: scale; to: 1.2 1.2 1; startEvents: mouseenter; dur: 200"
        animation__mouseleave="property: scale; to: 1 1 1; startEvents: mouseleave; dur: 200"
      ></a-plane>
      {hotspot.targetRoom && (
        <a-entity 
          position="0 -1.1 0" 
          class="arrow-hotspot-overlay" 
          id={overlayId}
          visible="false"
        >
          <a-image
            src={arrowOverlayImage}
            width="2"
            height="1"
            look-at="#camera"
            class="arrow-hotspot-overlay-background"
            animation__fade_in="property: opacity; from: 0; to: 1; dur: 200; startEvents: showoverlay"
            animation__fade_out="property: opacity; from: 1; to: 0; dur: 200; startEvents: hideoverlay"
          >
            <a-plane
              width="1.8"
              height="0.4"
              material="color: white; transparent: true; opacity: 0.8"
              position="0 -0.1 0.001"
            ></a-plane>
            <a-text
              value={hotspot.title}
              color="#000000"
              align="center"
              position="0 -0.08 0.002"
              width="1.7"
              font="kelsonsans"
              shader="msdf"
              negate="false"
              scale="2.5 2.5 2.5"
              class="arrow-hotspot-overlay-title"
            ></a-text>
          </a-image>
        </a-entity>
      )}
    </a-entity>
  );
};

export default Hotspot;