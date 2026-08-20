import { useState } from 'react';
import { FaTasks, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="navbar-logo-icon">
            <FaTasks />
          </div>
          TaskFlow AI
        </div>

        <ul className="navbar-nav">
          <li>
            <a href="#hero" className="navbar-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}>
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="navbar-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('features');
            }}>
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="navbar-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('how-it-works');
            }}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#pricing" className="navbar-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('pricing');
            }}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#testimonials" className="navbar-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection('testimonials');
            }}>
              Testimonials
            </a>
          </li>
        </ul>

        <div className="navbar-buttons">
          <button className="navbar-button navbar-button-login">Login</button>
          <button className="navbar-button navbar-button-primary">Get Started</button>
        </div>

        <button 
          className="navbar-menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`navbar-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="#hero" className="navbar-mobile-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('hero');
        }}>
          Home
        </a>
        <a href="#features" className="navbar-mobile-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('features');
        }}>
          Features
        </a>
        <a href="#how-it-works" className="navbar-mobile-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('how-it-works');
        }}>
          How It Works
        </a>
        <a href="#pricing" className="navbar-mobile-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('pricing');
        }}>
          Pricing
        </a>
        <a href="#testimonials" className="navbar-mobile-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('testimonials');
        }}>
          Testimonials
        </a>
        <div className="navbar-mobile-buttons">
          <button className="navbar-button navbar-button-login">Login</button>
          <button className="navbar-button navbar-button-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
