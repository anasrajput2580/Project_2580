import React from 'react';
import './StorySection.css'; // External CSS file

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="story-content-wrapper">
        <h2 className="story-section-title">OUR STORY OF DISCOVERY</h2>
        <p className="story-section-subtitle">Where Earning Becomes An Everyday Opportunity</p>
        
        <div className="story-content">
          <div className="story-image-container">
            <img 
              src="/img/About_Us_Page/Story_Discovery.png" 
              alt="Group working together"
              className="story-image"
            />
          </div>
          
          <div className="story-text-container">
            <p>
              Treasure Hint's journey began with a desire to create new opportunities for anyone looking to earn extra income. We set out to discover a way for people to make money in their free time without requiring a significant time commitment. We built a platform where individuals and businesses can share valuable products and services, while our members can enjoy exciting, limitless earning potential.
            </p>
            <p>
              As we grew, so did our understanding of what people needed: simplicity, flexibility, and real financial opportunity.
            </p>
          </div>
        </div>
        <div className="text-container2">
          <p>
              We came to understand that earning money should be accessible to everyone, and this belief continues to guide everything we do. Through this understanding, Treasure Hint became a space where anyone, whether balancing a busy career or seeking an additional source of income, can turn their free time into earnings.
            </p>
          </div>
      </div>
    </section>
  );
};

export default StorySection;
