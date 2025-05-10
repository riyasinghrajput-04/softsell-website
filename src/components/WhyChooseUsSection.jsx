import React from 'react';
import { FaShieldAlt, FaPercent, FaBolt, FaUsers } from 'react-icons/fa';
import './WhyChooseUsSection.css';

function WhyChooseUsSection() {
  return (
    <div className="why-choose-us-section">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="reasons-container">
        <div className="reason">
          <FaShieldAlt className="reason-icon" />
          <h3 className="reason-title">Trusted Service</h3>
          <p className="reason-description">Reliable and secure transactions.</p>
        </div>
        <div className="reason">
          <FaPercent className="reason-icon" />
          <h3 className="reason-title">Competitive Offers</h3>
          <p className="reason-description">Get the best price for your licenses.</p>
        </div>
        <div className="reason">
          <FaBolt className="reason-icon" />
          <h3 className="reason-title">Fast Process</h3>
          <p className="reason-description">Quick and streamlined sales process.</p>
        </div>
        <div className="reason">
          <FaUsers className="reason-icon" />
          <h3 className="reason-title">Expert Support</h3>
          <p className="reason-description">Professional assistance from our team.</p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUsSection;