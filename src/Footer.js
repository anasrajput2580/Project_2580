import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiOutlineClockCircle, AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <a href="/">
          <img src="/img/TREASURE_HINT_LOGO.png" alt="Treasure Hint Logo" className="footer-logo" />
          </a>
        </div>
        <div className="footer-menu">
          <div className="footer-column"><h4> <a href="/program">PROGRAM</a></h4><p>Explore Roles and Achieve Success.</p></div>
          <div className="footer-column"><h4><a href="/benefits">BENEFITS</a></h4><p>Exclusive Benefits and Exceptional Rewards.</p></div>
          <div className="footer-column"><h4><a href="/membership">MEMBERSHIP</a></h4><p>Earn Money and Build Connections.</p></div>
          <div className="footer-column"><h4><a href="/about">ABOUT US</a></h4><p>Access to Exclusive Deals and Offers.</p></div>
          <div className="vertical-divider"></div>
        </div>
        
        <div className="footer-contact">
          <h4>Connect with Us</h4>
          <p><i className="fas fa-map-marker-alt"></i>&emsp; New York, NY</p>
          <p><i className="fas fa-clock"></i>&emsp;Monday - Friday<br />&emsp;&emsp;8:00 a.m. - 8:00 p.m. EST</p>
          <p><i className="fas fa-phone-alt"></i>&emsp;+1 (886) 677-HINT</p>    
          <div className="social-links2">
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
      <div className="footer-bottom">
        <p><a href="https://drive.google.com/file/d/10Wu9u58Yv6i0Kryy0XM2ibSQ0unwnhFo/view">Terms and Conditions</a></p>
        <p><a href="/legal-notice">Legal Notice</a></p>
        <p><a href="/privacy-policy">Privacy Policy</a></p>
        <p>Copyright 2024<br/>Treasure Hint</p>       
      </div>
     
    </footer>
  );
};

export default Footer;
