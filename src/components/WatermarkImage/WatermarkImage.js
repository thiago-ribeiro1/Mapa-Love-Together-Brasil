import React from 'react';
import './WatermarkImage.css';
import image from '../../assets/img/image.jpeg'

const WatermarkImage = ({ src, alt }) => {
    return (
      <div className="watermark-layout">
        <div className="watermark-container">
          <img src={image} alt="Imagem com marca d'água" className="watermark-image" />
          <div className="watermark-overlay" />
        </div>
        <div className="watermark-text">
          Levar água e dignidade para comunidades do<br />
          <span className="highlighted-text">Sertão Nordestino</span>
        </div>
      </div>
    );
  };
  
  export default WatermarkImage;
