// testimonialSection.jsx
import React from 'react';
import { } from 'react-icons/fa'; // Add  icons if needed
import './TestimonialsSection.css';

function TestimonialsSection() {
  return (
    <div className="testimonials-section">
      <h2 className="section-title">Customer Testimonials</h2>
      <div className="testimonial-container"> {/* Changed class name */}
        <div className="testimonial">
          <p className="testimonial-quote">
            "SoftSell made the entire process quick and easy. Highly recommended!"
          </p>
          <p className="testimonial-author">- Mark D.</p>
        </div>
        <div className="testimonial">
          <p className="testimonial-quote">
            "I got a great price for my unused software license and the service was excellent."
          </p>
          <p className="testimonial-author">- Jane S., CEO, Tech Solutions.</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;