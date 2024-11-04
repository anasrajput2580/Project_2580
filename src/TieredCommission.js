import React from 'react';
import './TieredCommission.css'; // Import the styles

const TieredCommission = () => {
  return (
    <div className="program-section1">
      {/* Content Section */}
      <div className="content-section1">
         {/* Image */}
         <div className="image-container1">
          <img src="/img/Benefits_Page/luxury_cars.png" alt="Milestone Bonuses" className="bonus-image1" />
        </div>
        {/* Text Block */}
        <div className="text-block1">
          <h2 className="block-title1">Luxury Cars <br/> Exclusive Access to Elite Style</h2>
          <p className="block-description1">
          These rewards go beyond the ordinary​—they’re crafted to elevate your ​lifestyle, giving you the prestige of ​luxury with benefits that only Treasure ​Hint can offer.
          </p>
        </div>
      
      </div>
       {/* Content Section */}
       <div className="content-section2">
      
        {/* Text Block */}
        <div className="text-block2">
          <h2 className="block-title2">Luxury House <br/>Exclusive Rewards for <br/>​Extraordinary Living</h2>
          <p className="block-description2">
          This isn’t just about owning a home—​it’s about living the extraordinary life ​you deserve, with benefits reserved for ​those who reach for more.
            </p>
        </div>
           {/* Image */}
           <div className="image-container2">
          <img src="/img/Benefits_Page/luxury_house.png" alt="Luxury House" className="bonus-image2" />
        </div>
      
      </div>
    </div>
    
  );
};

export default TieredCommission;
