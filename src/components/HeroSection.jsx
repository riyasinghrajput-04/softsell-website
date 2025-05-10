import React from 'react';
import { } from 'react-icons/fa'; // Add  icons if needed
import './HeroSection.css';

function HeroSection() {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
      // You would typically handle the file upload logic here,
      // such as sending it to a server using an API.
    }
  };

  return (
    <div className="hero-section">
      <h1 className="hero-title">Sell Your Software Licenses Easily</h1>
      <p className="hero-subtitle">Effortlessly turn your unused software licenses into cash.</p>
      <input
        type="file"
        id="uploadLicense"
        className="upload-button"
        onChange={handleFileChange}
      />
      <label htmlFor="uploadLicense" className="cta-button">Upload License</label>
      <p className="upload-instruction">Click "Upload License" to select your file.</p>
    </div>
  );
}

export default HeroSection;