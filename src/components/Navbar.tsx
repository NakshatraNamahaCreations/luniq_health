import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopContactBar from './TopContactBar';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const services = [
    // { name: "Doctor Consultation", path: "/doctor-consultation" },
    { name: "Nursing Care", path: "/nursing" },
    { name: "Lab Tests", path: "/lab-tests" },
    { name: "Medical Equipment", path: "/medical-equipment" },
    { name: "Physiotherapy", path: "/physiotherapy" },
    { name: "Elder Care", path: "/elder-care" },
    { name: "Baby Care", path: "/baby-care" },
    { name: "Intensive Care", path: "/intensive-care" },
    { name: "Corporate Health", path: "/corporate-health" },
    { name: "Trained Caretakers", path: "/trained-caretakers" }
  ];

  return (
    <>
      <TopContactBar />
      <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src="/logo_bg.png" alt="LUNIQ Health" className="logo-image" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About Us
            </Link>
          </li>
          <li className="navbar-item dropdown">
            <p 
              // to="/services" 
              className="navbar-link dropdown-toggle"
            >
              Services
              <span className="dropdown-arrow">▼</span>
            </p>
            <ul className="dropdown-menu">
              {services.map((service, index) => (
                <li key={index} className="dropdown-item">
                  <Link to={service.path} className="dropdown-link">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/appointment" className="navbar-link navbar-cta">
              Make an Appointment
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={`navbar-mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <li className="navbar-mobile-item">
          <Link to="/" className="navbar-mobile-link" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li className="navbar-mobile-item">
          <Link to="/about" className="navbar-mobile-link" onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li className="navbar-mobile-item">
          <p 
           
            className="navbar-mobile-link" 
            onClick={toggleServices}
          >
            Services
            <span className="mobile-dropdown-arrow">▼</span>
          </p>
          <ul className={`mobile-dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
            {services.map((service, index) => (
              <li key={index} className="mobile-dropdown-item">
                <Link to={service.path} className="mobile-dropdown-link" onClick={toggleMenu}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="navbar-mobile-item">
          <Link to="/contact" className="navbar-mobile-link" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
        <li className="navbar-mobile-item">
          <Link to="/appointment" className="navbar-mobile-link" onClick={toggleMenu}>
            Make an Appointment
          </Link>
        </li>
      </ul>
      </nav>
    </>
  );
};

export default Navbar;
