import React from 'react';
import './banner.css';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Banner = ({ videoSrc, title, subtitle }) => {
  // Media Queries
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1025 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="banner">
      {/* Menu Section */}
      <nav className={`navbar ${isMobile ? 'navbar-mobile' : ''}`}>
        <div className="logo">
          <a href="/" className="home-button">
            <img src="/img/TREASURE_HINT_LOGO.png" alt="Logo" className="logo-img" />
          </a>
        </div>
        <ul className={`menu ${isMobile ? 'menu-mobile' : isTablet ? 'menu-tablet' : ''}`}>
          <li>
            <NavLink to="/program" activeClassName="active-link">PROGRAM</NavLink>
          </li>
          <li>
            <NavLink to="/benefits" activeClassName="active-link">BENEFITS</NavLink>
          </li>
          <li>
            <NavLink to="/membership" activeClassName="active-link">MEMBERSHIP</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link">ABOUT US</NavLink>
          </li>
        </ul>
        <NavLink to="/contact-us" className="contact-button">CONTACT US</NavLink>
      </nav>

      {/* Video Background */}
      <video autoPlay muted loop className="video-bg">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header Section */}
      <div className="banner-header">
        <h1 className={`banner-title ${isMobile ? 'title-mobile' : isTablet ? 'title-tablet' : ''}`}>
          {title}
        </h1>
        <p className={`banner-subtitle ${isMobile ? 'subtitle-mobile' : isTablet ? 'subtitle-tablet' : ''}`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Banner;
