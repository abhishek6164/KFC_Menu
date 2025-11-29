import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Footer Grid */}
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-section brand-section">
                        <h3 className="footer-logo">🍗 KFC</h3>
                        <p className="brand-desc">
                            Finger-Lickin' Good since 1952. Bringing you the taste of authentic, crispy, and delicious fried chicken.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon">f</a>
                            <a href="#" className="social-icon">𝕏</a>
                            <a href="#" className="social-icon">📷</a>
                            <a href="#" className="social-icon">▶️</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/rewards-coupons">Rewards</a></li>
                            <li><a href="/gift-cards">Gift Cards</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul className="footer-links">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Feedback</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <div className="contact-info">
                            <p><strong>📞 Phone:</strong><br />1800-22-4244</p>
                            <p><strong>📧 Email:</strong><br />support@kfc.co.in</p>
                            <p><strong>🕐 Hours:</strong><br />24/7 Service</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <p className="copyright">
                        &copy; {currentYear} KFC India. All rights reserved. | Finger-Lickin' Good 🍗
                    </p>
                    <div className="footer-badges">
                        <span className="badge">Made with ❤️ in India</span>
                        <span className="badge">🔒 Secure & Safe</span>
                    </div>
                </div>
            </div>

            {/* Gradient Background Effect */}
            <div className="footer-glow"></div>
        </footer>
    );
};

export default Footer;
