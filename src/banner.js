import React from 'react';
import './banner.css';
import { NavLink } from 'react-router-dom';

const Banner = ({ videoSrc, title, subtitle }) => {
  return (
    <div className="banner">
      {/* Menu Section */}
      <nav className="navbar">
        <div className="logo">
          <a href="/" className="home-button">
            <img src="/img/TREASURE_HINT_LOGO.png" alt="Logo" className="logo-img" />
          </a>
        </div>
        <ul className="menu">
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
        <h1 className="banner-title">{title}</h1>
        <p className="banner-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
