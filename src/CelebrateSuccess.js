import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './CelebrateSuccess.css';

const CelebrateSuccess = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  return (
    <div className="celebrate-section">
      <h1 className="celebrate-title">Celebrate Your Success</h1>
      <div className="reward-cards">
        {/* Bonus Card */}
        <div className="card">
          <h2 className="card-title">Bonuses</h2>
          <p className="card-subtitle">Stage 1 Reward</p>
        </div>
       
        {/* Exclusive Perks Card */}
        <div className="card">
          <h2 className="card-title">Exclusive Perks</h2>
          <p className="card-subtitle">Milestone Rewards</p>
        </div>
       
        {/* Mastery Reward Card */}
        <div className="card">
          <h2 className="card-title">Mastery Reward</h2>
          <p className="card-subtitle">Top-Tier Rewards</p>
        </div>
        
        {/* Lists for each card */}
        <ul className="card-list">
          <li>Complete Initial Training</li>
          <li>Earn a Bonus</li>
        </ul>
        <ul className="card-list">
          <li>Special Access</li>
          <li>Program Benefits</li>
        </ul>
        <ul className="card-list">
          <li>Top-tier rewards</li>
          <li>Become a leader</li>
        </ul>
      </div>
    </div>
  );
};

export default CelebrateSuccess;
