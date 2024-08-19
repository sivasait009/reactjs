import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container">
      <header className="header">
        <h1>Contact Us :  OUR BRANCHES ALL OVER THE WORLD</h1>

      
      </header>
      <div className="main-content">
        <div className="contact-info">
          <div className="info-box">
            <span>📍</span>
            <div>
              <h3>Our Main Office</h3>
              <p> <b>PEOPLE TECH GROUP</b><br></br>Hitech city
                RMZ Futura block-B Hyderabad,500082</p>
              <p></p>
            </div>
          </div>
          <div className="info-box">
            <span>📞</span>
            <div>
              <h3>Phone Number</h3>
              <p>+91-924589756</p>
              
            </div>
          </div>
          <div className="info-box">
            <span>📠</span>
            <div>
              <h3>Fax</h3>
              <p>1-234-567-9870</p>
            </div>
          </div>
          <div className="info-box">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>peopletechgroup@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Enter your Name" required />
            <input type="email" placeholder="Enter a valid email address" required />
            <textarea placeholder="Enter your message" required></textarea>
            <button type="submit">Submit</button>
          </form>
          
      
</div>

        </div>

        <div className="map-section">
  <h2>Our Locations</h2>
  <div className="map-container">
    {/* Embed Google Maps or another map service */}
    <a
          href="https://www.google.com/maps/dir/17.4555136,78.3745024/People+Tech+Group,+RMZ+Futura+Block+B,+Plot+no.+14+%26+15,+Phase+2,+HITEC+City,+Hyderabad,+Telangana+500081/@17.4518384,78.3676333,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bcb93cfef34a9e1:0x9ebd6ff137acb6f1!2m2!1d78.3752455!2d17.4483524?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '1rem',
            color: '#007bff',
            textDecoration: 'none',
            textAlign:"center"
          }}
        >
          View Location on Google Maps
        </a>
    <iframe src="https://www.google.com/maps/embed?pb=..." width="1200" height="450"></iframe>
  </div>
      </div>
     
    </div>
  );
}

export default Contact;

   







