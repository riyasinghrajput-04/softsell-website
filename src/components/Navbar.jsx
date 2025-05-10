import React from 'react';
import {  } from 'react-icons/fa'; //  Add relevant icons as needed
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SoftSell</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#help">Help</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;