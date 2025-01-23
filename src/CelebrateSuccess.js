import React from 'react';
import './CelebrateSuccess.css';

const CelebrateSuccess = () => {
  return (
    <div className="celebrate-section">
      <h1 className="celebrate-title">Celebrate Your Success</h1>
      <div className="reward-cards">
        <div className="card-handle">  
          <div className="card">
          <h2 className="card-title">Bonuses</h2>
          <p className="card-subtitle">Stage 1 Reward</p>
        </div>
        <ul className="card-list">
          <li>Complete Initial Training</li>
          <li>Earn a Bonus</li>
        </ul></div>
        {/* Bonus Card */}
        <div className="card-handle"> <div className="card">
          <h2 className="card-title">Exclusive Perks</h2>
          <p className="card-subtitle">Milestone Rewards</p>
        </div>
        <ul className="card-list">
          <li>Special Access</li>
          <li>Program Benefits</li>
        </ul>
        </div>
        {/* Exclusive Perks Card */}
       
        {/* Mastery Reward Card */}
        <div className="card-handle">
        <div className="card">
          <h2 className="card-title">Mastery Reward</h2>
          <p className="card-subtitle">Top-Tier Rewards</p>
        </div>
        <ul className="card-list">
          <li>Top-tier rewards</li>
          <li>Become a leader</li>
        </ul>
        </div>
        
        {/* Lists for each card */}
        
      </div>
    </div>
  );
};

export default CelebrateSuccess;
