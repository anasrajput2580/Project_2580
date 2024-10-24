import React, { useState } from 'react';
import './banner.css';

const Banner = ({ videoSrc, title, subtitle }) => {
  // State to track which menu item is active
  // const [activeMenuItem, setActiveMenuItem] = useState('/'); // Default is home

  // Function to handle menu item click
  const [activeMenuItem, setActiveMenuItem] = useState(''); // State to track active item

  const handleMenuClick = (menuItem) => {
    setActiveMenuItem(menuItem);  // Set the active menu item
  };

  return (
    <div className="banner">
      {/* Menu Section */}
      <nav className="navbar">
        <div className="logo">
          <a href="/" className="home-button" onClick={() => handleMenuClick('/')}>
            <img src="/img/TREASURE_HINT_LOGO.png" alt="Logo" className="logo-img" />
          </a>
        </div>
        <ul className="menu">
          <li>
            <a
              href="/program"
              className={activeMenuItem === '/program' ? 'active' : ''}  // Check if it's the active item
              onClick={() => handleMenuClick('/program')}
            >
              PROGRAM
            </a>
          </li>
          <li>
            <a
              href="/benefits"
              className={activeMenuItem === '/benefits' ? 'active' : ''}
              onClick={() => handleMenuClick('/benefits')}
            >
              BENEFITS
            </a>
          </li>
          <li>
            <a
              href="/membership"
              className={activeMenuItem === '/membership' ? 'active' : ''}
              onClick={() => handleMenuClick('/membership')}
            >
              MEMBERSHIP
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={activeMenuItem === '/about' ? 'active' : ''}
              onClick={() => handleMenuClick('/about')}
            >
              ABOUT US
            </a>
          </li>
        </ul>
        <a href="#contact" className="contact-button">CONTACT US</a>
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
