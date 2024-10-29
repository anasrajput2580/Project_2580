import React, { useEffect, useState } from 'react';
import './OurMembersResources.css';
const OurMembersResources = () => {
  const [animate, setAnimate] = useState(false);

  // This effect triggers the animation when the component is in view
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.resources-container');
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= window.innerHeight - 100) {
        setAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="resources-container">
      <h2 className="resources-heading">OUR MEMBERS RESOURCES</h2>
      <div className="resources-section">
        <div className="resource-card">
          <img
            src="img/Membership_Page/banner1.png"
            alt="Comprehensive Training"
            className="resource-image"
          />
          <div className={`resource-text ${animate ? 'animate-up' : ''}`}>
            <h3>COMPREHENSIVE TRAINING</h3>
            <p>Access video tutorials, webinars, and guides.</p>
          </div>
        </div>

        <div className="resource-card">
          <img
            src="img/Membership_Page/banner2.png"
            alt="Marketing Tools"
            className="resource-image"
          />
          <div className={`resource-text ${animate ? 'animate-up' : ''}`}>
            <h3>MARKETING TOOLS</h3>
            <p>Utilize banners, email templates, and social media assets.</p>
          </div>
        </div>
      </div>
      <div className="resources-section">
        <div className="resource-card">
          <img
            src="img/Membership_Page/banner3.png"
            alt="Comprehensive Training"
            className="resource-image"
          />
          <div className={`resource-text ${animate ? 'animate-up' : ''}`}>
            <h3>PERFORMANCE BONUSES</h3>
            <p>Incentives for top-performing ​affiliates..</p>
          </div>
        </div>

        <div className="resource-card">
          <img
            src="img/Membership_Page/banner4.png"
            alt="Marketing Tools"
            className="resource-image"
          />
          <div className={`resource-text ${animate ? 'animate-up' : ''}`}>
            <h3>TIERED MEMBERSHIP LEVELS</h3>
            <p>Growing rewards as affiliates ​achieve milestones.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OurMembersResources;
