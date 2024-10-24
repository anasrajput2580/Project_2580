import React from 'react';
import './BehindProgram.css'; // Import the CSS file

const BehindProgram = ({ quote, author, imgSource}) => {
  return (
    <div className="program-section">
      <div className="program-image">
        <img src={imgSource} alt="Woman pointing finger" />
      </div>
      <div className="program-content">
        <h1 className="program-title">Behind the Program</h1>
        <h2 className="program-subtitle">Insights From Those Who Know</h2>
        <p className="program-quote">
          {quote}
        </p>
        <p className="program-author">{author}</p>
      </div>

    </div>
  );
};

export default BehindProgram;
