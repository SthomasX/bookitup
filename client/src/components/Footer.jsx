import React from 'react';
import {
  FaFilm,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaPhoneAlt,
  FaInfoCircle
} from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-sections">
        
        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/movies"><FaFilm style={{ marginRight: '8px' }} />Movies</a></li>
            <li><a href="/events"><FaCalendarAlt style={{ marginRight: '8px' }} />Events</a></li>
            <li><a href="/venues"><FaMapMarkerAlt style={{ marginRight: '8px' }} />Venues</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="/faq"><FaQuestionCircle style={{ marginRight: '8px' }} />FAQs</a></li>
            <li><a href="/contact"><FaPhoneAlt style={{ marginRight: '8px' }} />Contact Us</a></li>
            <li><a href="/help"><FaInfoCircle style={{ marginRight: '8px' }} />Help Center</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} <strong>Bookitup</strong>. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: '#aaa', marginTop: '5px' }}>
          Crafted with ❤️ for your next adventure.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
