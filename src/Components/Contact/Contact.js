import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';

function Contact({ handleNavClick = () => {} }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500); // simulate sending
  };

  return (
    <section className="content-section1" id="contact">
      <h2>Contact Us</h2>
      <p>Feel free to reach out for collaborations, speaking engagements, or inquiries.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" id="name" required placeholder=" " />
          <label htmlFor="name">Your Name</label>
        </div>
        <div className="form-group">
          <input type="email" id="email" required placeholder=" " />
          <label htmlFor="email">Your Email</label>
        </div>
        <div className="form-group">
          <input type="tel" id="phone" required placeholder=" " />
          <label htmlFor="phone">Your Phone Number</label>
        </div>
        <div className="form-group">
          <textarea id="message" rows="5" required placeholder=" "></textarea>
          <label htmlFor="message">Your Message</label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {submitted && <p className="success-message">✅ Message sent successfully!</p>}
      </form>

      {/* Social Media Buttons */}
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/dreva"
          className="social-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.youtube.com/@DrEvaMS"
          className="social-button youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={24} />
        </a>
      </div>

      {/* Footer with Navigation Links and Address */}
      {/* <footer className="footer">
        <div className="footer-links">
          {['home', 'about', 'videos', 'publications', 'podcasts', 'events'].map((tab) => (
            <button key={tab} className="footer-link" onClick={() => handleNavClick(tab)}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="footer-address">
          <p>Dr. Eva</p>
          <p>123 Health Street, Suite 456</p>
          <p>New York, NY 10001</p>
        </div>
      </footer> */}
    </section>
  );
}

export default Contact;
