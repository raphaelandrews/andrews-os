import React from 'react';
import './style.css';

import statsCard from "../../assets/img/stats-preview-card.png";

const Gallery = () => {
  return (
    <div className="gallery__wrapper">
      <div className="gallery__box">
        <img src={statsCard} alt="img.jpg" className='gallery__img' />
      </div>
      <div className="gallery__box">
        <img src={statsCard} alt="img.jpg" className='gallery__img' />
      </div>
      <div className="gallery__box">
        <img src={statsCard} alt="img.jpg" className='gallery__img' />
      </div>
      <div className="gallery__box">
        <img src={statsCard} alt="img.jpg" className='gallery__img' />
      </div>
      <div className="gallery__box">
        <img src={statsCard} alt="img.jpg" className='gallery__img' />
      </div>
      <div className="gallery__box">
        <img src={statsCard} alt="img.jpg" className='gallery__img' />
      </div>
    </div>
  )
}

export default Gallery;