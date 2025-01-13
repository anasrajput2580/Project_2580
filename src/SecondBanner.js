import React from 'react';
import './SecondBanner.css';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const SecondBanner = ({ imgSrc, title, subtitle }) => {
  // Define breakpoints
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="banner1">
      {/* Menu Section */}
      <nav className="navbar1">
        <div className="logo1">
          <a href="/" className="home-button1">
            <img src="/img/TREASURE_HINT_LOGO.png" alt="Logo" className="logo-img1" />
          </a>
        </div>
        <ul className={`menu1 ${isMobile ? 'menu1-mobile' : ''}`}>
          <li><NavLink to="/program" activeClassName="active-link">PROGRAM</NavLink></li>
          <li><NavLink to="/benefits" activeClassName="active-link">BENEFITS</NavLink></li>
          <li><NavLink to="/membership" activeClassName="active-link">MEMBERSHIP</NavLink></li>
          <li><NavLink to="/about" activeClassName="active-link">ABOUT US</NavLink></li>
        </ul>
       
      </nav>

      {/* Image Background */}
      <img src={imgSrc} alt="Contact Us Banner" className="banner-image" />

      {/* Header Section */}
      <div className="banner-header1">
        <h1 className="banner-title1">{title}</h1>
        <p className="banner-subtitle1">{subtitle}</p>
      </div>
    </div>
  );
};

export default SecondBanner;
