import React from 'react';
import './ExclusivePerks.css'; // Import the styles

const ExclusivePerks = () => {
  return (
    <div className="exclusive-perks-container">
      {/* Header Section */}
      <div className="header-section">
        <h1 className="header-title">OUR EXCLUSIVE PERKS</h1>
        <p className="header-subtitle">
          This isn't just a list of benefits; it's a <span className="bold-text">gateway</span> to a world of 
          <span className="bold-text"> extraordinary experiences</span>, created just for <span className="bold-text">you</span>!
        </p>
      </div>

      {/* Content Section */}
      <div className="content-section">
      
        {/* Text Block */}
        <div className="text-block">
          <h2 className="block-title">MILESTONE BONUSES</h2>
          <p className="block-description">
            Earn cash and perks by hitting milestones with our bonus-driven program.
          </p>
        </div>
          {/* Image */}
          <div className="image-container">
          <img src="/img/Benefits_Page/exclusive_perks.png" alt="Milestone Bonuses" className="bonus-image" />
        </div>

      </div>
    </div>
  );
};

export default ExclusivePerks;
