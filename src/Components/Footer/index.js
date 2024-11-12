// Footer.js
import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <p>
              This is a portfolio website showcasing my projects and skills. Feel free to explore and
              get in touch.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">CV</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: kimurakhamali@gmail.com</p>
            <p>Phone: +254113449867</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 @Brenda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;