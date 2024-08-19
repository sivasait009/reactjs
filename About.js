import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Assuming you have an About.css for styling

const About = () => {
  return (
    <div className="about-page">
      {/* Image Section */}
      <img src="/newf.jpg" alt="Description of Image" style={{ width: '200vh', height: '89vh' }} />

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>Ready to Work with Us?</h2>
        <Link to="/contact">
          <button className="cta-button">Contact Us</button>
        </Link>
        
      </div>
    </div>
  );
}

export default About;


