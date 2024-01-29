import React, { useState, useEffect } from 'react';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, [currentIndex, images.length]);

  const showImage = (index) => {
    setCurrentIndex(index);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleMouseEnter = () => clearInterval(intervalId);

  const handleMouseLeave = () =>
    setIntervalId(
      setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000)
    );

  return (
    <div className="ProjectsFlex" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {images.map((image, index) => (
        <div key={index} className="projectItem" style={{ display: index === currentIndex ? 'block' : 'none' }}>
          <img src={image} alt={`Project Image ${index + 1}`} />
        </div>
      ))}
      <LeftArrow onClick={prevImage} />
      <RightArrow onClick={nextImage} />
    </div>
  );
};

export default ImageSlider;
