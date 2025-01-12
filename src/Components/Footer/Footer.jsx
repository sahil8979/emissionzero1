import React from "react";
import './Footer.css';
import facebookIcon from "../../../public/assets/facebook-app-symbol 1.png";
import instagramIcon from "../../../public/assets/mdi_instagram.png";
import linkedinIcon from "../../../public/assets/mdi_linkedin.png";
import logo from '../../../public/assets/em logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <img className="logo2" src={logo} alt="Logo" />
          <h2 className="footer-logo">Emission Zero</h2>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          {/* Platform */}
          <div className="footer-column">
            <h4>Platform</h4>
            <ul>
              <li>Solutions</li>
              <li>How it works</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Our Mission</li>
              <li>
                Careers <span className="hiring-badge">HIRING</span>
              </li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <div className="social-item-container">
            <div className="social-item">
              <img src={facebookIcon} alt="Facebook" />
            </div>
            <span>Follow us on Facebook</span>
          </div>
          <div className="social-item-container">
            <div className="social-item">
              <img src={instagramIcon} alt="Instagram" />
            </div>
            <span>Follow us on Instagram</span>
          </div>
          <div className="social-item-container">
            <div className="social-item">
              <img src={linkedinIcon} alt="LinkedIn" />
            </div>
            <span>Follow us on LinkedIn</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        &copy; 2024 Flow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
