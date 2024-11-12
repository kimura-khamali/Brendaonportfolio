import './index.css'
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-logo">
          Portfolio
        </Link>

        {/* Mobile menu button */}
        <button className="mobile-menu-button" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation links */}
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/home" 
            className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            CV
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;