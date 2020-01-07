/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
  `${process.env.PUBLIC_URL}/Pictures/img1.png`,
  `${process.env.PUBLIC_URL}/Pictures/img2.png`,
  `${process.env.PUBLIC_URL}/Pictures/img3.png`,
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
};

const ControlledCarousel = () => (
  <Fade {...fadeProperties}>
    <div className="each-fade">
      <div className="image-container">
        <img src={fadeImages[0]} alt="Carousel1" />
      </div>
    </div>
    <div className="each-fade">
      <div className="image-container">
        <img src={fadeImages[1]} alt="Carousel2" />
      </div>
    </div>
    <div className="each-fade">
      <div className="image-container">
        <img src={fadeImages[2]} alt="Carousel3" />
      </div>
    </div>
  </Fade>
);


export default ControlledCarousel;
