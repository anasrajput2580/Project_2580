import React from 'react';
import './PartnerWithUs.css';

const PartnerWithUs = () => {
  return (
    <div className="partner-section">
      <h2>Partner With Us Today</h2>
      <div className="partner-steps">
        {/* Step 1 */}
        <div className="step">
          <img src="/img/Membership_Page/Sign_up.png" alt="Sign-up Icon" />
          <h3 className="step-title">Sign-up</h3>
          <p className="step-description">
            Quick and easy setup to become a partner.
          </p>
        </div>
        {/* Arrow GIF */}
        <div className='handle-gif'>
        <img className="arrow" src="/img/Membership_Page/arrow.gif" alt="Arrow GIF" />
        </div>
        
        {/* Step 2 */}
        <div className="step">
          <img src="/img/Membership_Page/Engage.png" alt="Engage Icon" />
          <h3 className="step-title">Engage</h3>
          <p className="step-description">
            Share your links to partner with new customers.
          </p>
        </div>

        {/* Arrow GIF */}
        <div className='handle-gif'>
        <img className="arrow" src="/img/Membership_Page/arrow.gif" alt="Arrow GIF" />
        </div>
        {/* Step 3 */}
        <div className="step">
          <img src="/img/Membership_Page/Earn.png" alt="Earn Icon" />
          <h3 className="step-title">Earn</h3>
          <p className="step-description">
            Earn from every successful partnership.
          </p>
        </div>
        <button className="message-btn">Message Us</button>
      </div>
      
    </div>
        
  );
};

export default PartnerWithUs;
