import React, { useState } from 'react';
import { slidercard } from './CardData';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slidercard.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slidercard.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="slider-button prev" onClick={prevSlide}>&lt;</button>
        
        <div className="slider-content">
          {slidercard.slice(currentIndex, currentIndex + 3).map((item) => (
            <div key={item.id} className="slider-card">
              <div className="card-header">
              <img src={item.img} alt="" />
              </div>
               
                <h3 className="card-name">{item.name}</h3>
              <p className="card-description">{item.descreption}</p>
            </div>
          ))}
        </div>
        
        <button className="slider-button next" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default Slider;