import React from 'react';

import './TYSubscriber.css';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const TYSubscriber = ({ title, line1, line2, line3 }) => {
  // Define breakpoints
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="banner-ty">
      {/* Menu Section */}
      <nav className="navbar-ty">
        <div className="logo-ty">
          <a href="/" className="home-button-ty">
            <img src="/img/TREASURE_HINT_LOGO.png" alt="Logo" className="logo-img-ty" />
          </a>
        </div>
        <ul className={`menu-ty ${isMobile ? 'menu-ty-mobile' : ''}`}>
          <li><NavLink to="/program" activeClassName="active-link">PROGRAM</NavLink></li>
          <li><NavLink to="/benefits" activeClassName="active-link">BENEFITS</NavLink></li>
          <li><NavLink to="/membership" activeClassName="active-link">MEMBERSHIP</NavLink></li>
          <li><NavLink to="/about" activeClassName="active-link">ABOUT US</NavLink></li>
        </ul>
      </nav>
      {/* Thank You Section */}
      <div className="thank-you-page">
      <div className="side-image left-image">
          <img src="/img/ThankYou_Page/Ty1.png" alt="left side" />
        </div>
        <div className="side-image right-image">
          <img src="/img/ThankYou_Page/Ty2.png" alt="right side" />
        </div>

        <div className="content-tick">
          <div className="green-tick"></div>
          <div className="ty-content"> <h1>{title}</h1>
          <p>{line1}<br />{line2} <br/>{line3}</p>
         
          <div className="button-group">
          <NavLink to="/" className="button">back to homepage</NavLink>
          <NavLink to="/membership" className="button">visit our membership</NavLink>
          </div>
          <div className="social-media">
            <p>Let’s connect!</p>
            <div className="social-icons">
           <a href="https://www.facebook.com/people/Treasure-Hint/61562184812103/" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-facebook"></i>
           </a>
           <a href="https://www.instagram.com/treasurehintcom/" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-instagram"></i>
           </a>
           <a href="https://x.com/TreasureHintcom" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-x-twitter"></i>
           </a>
           <a href="https://www.linkedin.com/company/treasure-hint/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-linkedin"></i>
           </a>
           </div>
          </div>


          </div>
        

         
        </div>
      
      </div>
        
    </div>
  );
};

export default TYSubscriber;
