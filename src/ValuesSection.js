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
          <img  className ='card1-image' src="/img/About_Us_Page/Growth.png" alt="Growth" />
          <div className="value-card-text">
            <h3>Growth You Can Count On</h3>
            <p>We’re here to make earning extra income simple—no major changes required. Your progress is our priority, and we’re here to guide you.</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="value-card">
          
          <div className="value-card-text">
            <h3>Teamwork Drives Success</h3>
            <p>Together, we create opportunities for you to earn more. The stronger our partnership, the better your results.</p>
          </div>
          <img className='card2-image' src="/img/About_Us_Page/Teamwork.png" alt="Teamwork" />
        </div>
        
        {/* Card 4 */}
        <div className="value-card">
          
          <div className="value-card-text">
            <h3>Supporting Every Step</h3>
            <p>We’re here for you at every step of your ​journey, from earning that first dollar to ​reaching new goals.</p>
          </div>
          <img className='card2-image' src="/img/About_Us_Page/Support.png" alt="Support" />
        </div>
         {/* Card 3 */}
         <div className="value-card">
          <img  className ='card1-image' src="/img/About_Us_Page/Innovation.png" alt="Innovation" />
          <div className="value-card-text">
            <h3>Driven by Innovation</h3>
            <p>We’re always finding smarter ways to help you ​earn. Whether it’s new tools or fresh ideas, we ​make sure you’re set for success.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
