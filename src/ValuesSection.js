import React from 'react';
import './ValuesSection.css';

const ValuesSection = () => {
  return (
    <div className="values-section">
      <h2>VALUES THAT DEFINES US</h2>
      <p>We’re committed to building trust and long-term success for everyone involved by doing what’s right for both our members and partners.</p>

      <div className="value-cards">
        {/* Card 1 */}
        <div className="value-card">
          <img src="/img/About_Us_Page/Growth.png" alt="Growth" />
          <div className="value-card-text">
            <h3>Growth You Can Count On</h3>
            <p>We’re here to make earning extra income simple—no major changes required. Your progress is our priority, and we’re here to guide you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
