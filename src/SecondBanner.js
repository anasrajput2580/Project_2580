import React from 'react';
import './SecondBanner.css';
import { NavLink } from 'react-router-dom';

const SecondBanner= ({ imgSrc, title, subtitle }) => {

  return (
    <div>
        <div className="banner1">
        {/* Menu Section */}
        <nav className="navbar1">
            <div className="logo1">
                <a href="/" className="home-button1">
                <img src="/img/TREASURE_HINT_LOGO.png" alt="Logo" className="logo-img1" />
                </a>
            </div>
            <ul className="menu1">
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
        <NavLink to="/contact-us" className="contact-button1">CONTACT US</NavLink>
      </nav>
      {/* Image Background */}
      <img src={imgSrc} alt="Contact Us Banner" className="banner-image" />

      {/* Header Section */}
      <div className="banner-header1">
        <h1 className="banner-title1">{title}</h1>
        <p className="banner-subtitle1">{subtitle}</p>
      </div>
    </div>
</div>
  );
};

export default SecondBanner;
