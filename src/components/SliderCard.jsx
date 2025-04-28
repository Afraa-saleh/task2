import React from 'react';

export default function SliderCard({ img, name, descreption }) {
  return (
    <div className="slider-card">
      <div className="img-slider-card">
        <img src={img} alt={name} className="img-slider" />
      </div>
      <div className="info-slider">
        <h3>{name}</h3>
        <p>{descreption}</p>
      </div>
    </div>
  );
}
