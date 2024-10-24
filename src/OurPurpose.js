import React from 'react';
import './OurPurpose.css'; // External CSS file

const OurPurpose = () => {
    return (
        <section className="purpose-section">
          <div className="content-wrapper">
            <div className="text-container">
              <h2 className="section-title">OUR PURPOSE</h2>
              <p>We’re here to help you earn extra money on the side, whether you're looking to build up your savings or just want a little more freedom.</p>
              <p>With us, you can earn in your free time at your own pace and on your own terms. It’s about helping you make the most of your time while building something valuable for yourself.</p>
            </div>
    
            <div className="image-container">
              <img 
                src="/img/About_Us_Page/Our_Purpose.png" 
                alt="Hands holding ropes" 
                className="purpose-image"
              />
            </div>
          </div>
        </section>
      );
    };
    

export default OurPurpose;
