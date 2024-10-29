import React from 'react';
import './PathToMembership.css'; 
import checkIcon from './check-icon.png'; // Add the path to your check icon image

const PathToMembership = () => {
  return (
    <div className="path-to-membership">
      <h1 className="membership-header">PATH TO MEMBERSHIP</h1>
      <p className="membership-paragraph">
        Whether you're growing your network or aiming for our top-tier rewards, your success is our mission.
      </p>

      <ul className="membership-benefits">
        <li>
          <img src={checkIcon} alt="check" className="check-icon" />
          <span className="bold-text">FREE MEMBERSHIP</span>
        </li>
        <li>
          <img src={checkIcon} alt="check" className="check-icon" />
          <span>Hit the top level and drive home a <strong>LUXURY CAR</strong></span>
        </li>
        <li>
          <img src={checkIcon} alt="check" className="check-icon" />
          Open to North American residents aged 21 and over with a clean drug test.
        </li>
        <li>
          <img src={checkIcon} alt="check" className="check-icon" />
          Earn commissions on every successful deal with every paid invoice.
        </li>
      </ul>
    </div>
  );
};

export default PathToMembership;
