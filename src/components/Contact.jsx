import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import useScrollAnimation from './useScrollAnimation'; // Ensure correct path

function Contact() {
  useScrollAnimation(); // Apply the scroll animation hook

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const form = event.target.closest('form'); // Get the form element
    if (form) {
      form.submit(); // Submit the form
    }
  };

  return (
    <div id="contact" className="section">
      <h1 className="section-title">Contact</h1>
      <div className="contact-content">
        <div className="form-container">
          <form id="contact-form" action="/submit" method="post">
            <input name="name" type="text" className="feedback-input" placeholder="Name" />
            <input name="email" type="text" className="feedback-input" placeholder="Email" />
            <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
            <div className="button-container">
              <button type="submit" className="btn-glitch-fill" onClick={handleFormSubmit}>
                <span className="text">// Submit</span><span className="text-decoration">_</span><span className="decoration">&rArr;</span>
              </button>
            </div>
          </form>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0849900471326!2d-122.41306818468157!3d37.78329877975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809d5f7e6b5d%3A0x879e01d3a2d0f7!2s1%20Market%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sin!4v1630989323794!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
