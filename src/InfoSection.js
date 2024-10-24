import React from 'react';


const InfoSection = ({ image, title, description }) => {
  return (
    <div className="info-section">
      <img src={image} alt={title} />
      <div className="info-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoSection;
