import { FaTasks, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <FaTasks />
              </div>
              TaskFlow AI
            </div>
            <p className="footer-description">
              Work smarter. Achieve more. TaskFlow AI helps individuals and teams organize work, automate repetitive tasks, and stay focused on what matters most.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="footer-social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Product</h4>
            <div className="footer-links">
              <a href="#features" className="footer-link">Features</a>
              <a href="#pricing" className="footer-link">Pricing</a>
              <a href="#" className="footer-link">Integrations</a>
              <a href="#" className="footer-link">Updates</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Company</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">About</a>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Legal</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy</a>
              <a href="#" className="footer-link">Terms</a>
              <a href="#" className="footer-link">Security</a>
              <a href="#" className="footer-link">Cookies</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 TaskFlow AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
