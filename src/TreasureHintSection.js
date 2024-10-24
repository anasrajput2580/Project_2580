import React from 'react';
import './TreasureHintSection.css'; 

const TreasureHintSection = () => {
  return (
    <div className="treasure-hint-section">
      <h1 className="header1">OUR 4 TREASURE HINT PROGRAMS</h1>
      <p className="paragraph1">
        Each role offers an additional path to earn money and help businesses save more
      </p>

      <div className="roles-container">
        <div className="role-card">
          <div className="role-image-container">
            <img src="/img/Home_Page/deal_finder.png" alt="Deal Finder" className="role-image" />
          </div>
          <h3 className="role-title">DEAL FINDER</h3>
          <p className="role-description">Earn money by identifying great opportunities</p>
        </div>

        <div className="role-card">
          <div className="role-image-container">
            <img src="/img/Home_Page/affiliate.png" alt="Affiliate" className="role-image" />
          </div>
          <h3 className="role-title">AFFILIATE</h3>
          <p className="role-description">Earn money by sharing us with your network</p>
        </div>

        <div className="role-card">
          <div className="role-image-container">
            <img src="/img/Home_Page/representative.png" alt="Representative" className="role-image" />
          </div>
          <h3 className="role-title">REPRESENTATIVE</h3>
          <p className="role-description">Earn money by working with clients to secure the best deal</p>
        </div>

        <div className="role-card">
          <div className="role-image-container">
            <img src="/img/Home_Page/team_leader.png" alt="Team Leader" className="role-image" />
          </div>
          <h3 className="role-title">TEAM LEADER</h3>
          <p className="role-description">Earn money by building a team of advisors</p>
        </div>
      </div>
    </div>
  );
};

export default TreasureHintSection;
