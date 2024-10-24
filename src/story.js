import React from 'react';
import './story.css'; // Import the CSS file

const Story = ({ heading, description }) => {
  return (
    <div className="statement-section">
      <div className="statement-text">
        <h2 className="h2">{heading}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Story;
