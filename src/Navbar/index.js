import './index.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/"> (CV)</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    );
  }
  
  export default Navbar;