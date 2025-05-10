import React from 'react';
import { FaUpload, FaTags, FaMoneyBillWave } from 'react-icons/fa';
import './HowItWorksSection.css';

function HowItWorksSection() {
  return (
    <div className="how-it-works-section">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <FaUpload className="step-icon" />
          <h3 className="step-title">Upload License</h3>
          <p className="step-description">Securely upload details of your software licenses.</p>
        </div>
        <div className="step">
          <FaTags className="step-icon" />
          <h3 className="step-title">Receive Valuation</h3>
          <p className="step-description">Get a fair and accurate quote.</p>
        </div>
        <div className="step">
          <FaMoneyBillWave className="step-icon" />
          <h3 className="step-title">Get Paid</h3>
          <p className="step-description">Accept the offer and receive payment.</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksSection;