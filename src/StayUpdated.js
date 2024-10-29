import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StayUpdated.css';

const StayUpdated = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger email via mailto
    window.location.href = 'mailto:HR-HQ7@TreasureHint.com';
    // Redirect to the Thank You page after clicking Subscribe
    navigate('/thank-you');
  };

  return (
    <div className="stay-updated-section">
      <div className="content">
        <h2>Stay Updated with us!</h2>
        <p>Stay ahead with tips to earn more on the side.</p>
      </div>
      <form className="subscribe-box" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your e-mail address"
          className="email-input"
          required
        />
        <button type="submit" className="subscribe-button">SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default StayUpdated;
