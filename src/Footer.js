import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';  // Import FaTwitter instead of FaXTwitter
import { AiOutlineClockCircle, AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section with Logo */}
        <div className="footer-logo-section">
          <img src="/img/TREASURE_HINT_LOGO.png" alt="Treasure Hint Logo" className="footer-logo" />
        </div>

        {/* Program, Benefits, Membership, About Us */}
        <div className="footer-menu">
          <div className="footer-column">
            <h4>PROGRAM</h4>
            <p>Explore Roles and Achieve Success.</p>
          </div>
          <div className="footer-column">
            <h4>BENEFITS</h4>
            <p>Exclusive Benefits and Exceptional Rewards.</p>
          </div>
          <div className="footer-column">
            <h4>MEMBERSHIP</h4>
            <p>Earn Money and Build Connections.</p>
          </div>
          <div className="footer-column">
            <h4>ABOUT US</h4>
            <p>Access to Exclusive Deals and Offers.</p>
          </div>
      
        </div>
     
        {/* Vertical Divider */}
        <div className="vertical-divider"></div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>Connect with Us</h4>
          <p><HiOutlineLocationMarker /> New York, NY</p>
          <p><AiOutlineClockCircle /> Monday - Friday 8:00 a.m. - 8:00 p.m. EST</p>
          <p><AiOutlinePhone /> +1 (886) 677-HINT</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/people/Treasure-Hint/61562184812103/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/treasurehintcom/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/TreasureHintcom" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/treasure-hint/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
              {/* Footer Bottom */}
        <div className="footer-bottom">
        <p><a href="https://drive.google.com/file/d/10Wu9u58Yv6i0Kryy0XM2ibSQ0unwnhFo/view">Terms and Conditions</a></p>
        <p><a href="/legal-notice">Legal Notice</a></p>
        <p><a href="/privacy-policy">Privacy Policy</a></p>
        <p>&copy; 2024 Treasure Hint</p>
      </div>

    </footer>
  );
};

export default Footer;
