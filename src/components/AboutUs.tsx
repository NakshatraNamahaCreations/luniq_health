import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import aboutUsBanner from '/about_us banner.jpg';
import case10 from '../assets/case_studies/case10.avif';
import case2 from '../assets/case_studies/case2.avif';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      {/* Sticky Background Text */}
      <div className="sticky-background-text">
        <div className="sticky-text-content">
          <div className="sticky-text-line">LUNIQ HEALTH - Care at</div>
          <div className="sticky-text-line sticky-highlight">The Comfort of</div>
          <div className="sticky-text-line">Your Home</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-image">
          <img src={aboutUsBanner} alt="About Us Banner" className="about-hero-bg-image" />
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1 className="about-hero-title">ABOUT US</h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Text Section */}
      <section className="about-text-section">
        <div className="about-text-container">
          <div className="about-text-left">
            <div className="about-text-content">
              <div className="simple-text-block">
                <div className="text-line">
                  <span className="text-word">LUNIQ HEALTH-Care at</span>
                </div>
                <div className="text-line">
                  <span className="text-highlight">The Comfort of</span>
                </div>
                <div className="text-line">
                  <span className="text-word">Your Home</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text-right">
            <p className="about-text-description">
              LUNIQ HEALTH delivers quality care with compassion. We bring quality medical care into our patients' homes and aim to make primary healthcare not only more accessible, but also more affordable and accountable to our patients' needs.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies-section">
        <div className="case-studies-container">
          <div className="case-studies-grid">
            <div className="case-study-card">
              <img src={case10} alt="Case Study 1" />
              <div className="case-study-overlay">
                <div className="case-study-content">
                  <h3>Patient Recovery Success</h3>
                  <p>Comprehensive care leading to full recovery and improved quality of life</p>
                </div>
              </div>
            </div>
            <div className="case-study-card">
              <img src={case2} alt="Case Study 2" />
              <div className="case-study-overlay">
                <div className="case-study-content">
                  <h3>Medical Excellence</h3>
                  <p>Advanced treatment protocols ensuring optimal patient outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission-container">
          <h2 className="mission-title">Our Mission & Vision</h2>
          <p className="mission-subtitle">Driving healthcare innovation with purpose and passion</p>
          <div className="mission-content">
            <div className="mission-card">
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide accessible, affordable, and high-quality healthcare services to every Indian, 
                ensuring that distance and location never become barriers to receiving the best medical care.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To become India's most trusted healthcare partner, revolutionizing healthcare delivery 
                through innovation, technology, and compassionate care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="why-choose-container">
          <h2 className="why-choose-title">Why Choose Us</h2>
          <p className="why-choose-subtitle">Experience the difference of quality healthcare</p>
          <div className="why-choose-content">
            <div className="why-choose-points">
              <div className="why-choose-point">
                <div className="point-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="point-content">
                  <h3>Quality Care Excellence</h3>
                  <p>We deliver exceptional healthcare services with the highest standards of medical excellence and patient safety. Our team of experienced healthcare professionals is dedicated to providing personalized care that meets your unique needs.</p>
                </div>
              </div>
              
              <div className="why-choose-point">
                <div className="point-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="point-content">
                  <h3>Home Convenience</h3>
                  <p>Receive professional medical care in the comfort of your own home, eliminating the stress of travel and hospital visits. Our round-the-clock medical assistance ensures help is always available when you need it most.</p>
                </div>
              </div>
              
              <div className="why-choose-point">
                <div className="point-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="point-content">
                  <h3>24/7 Support</h3>
                  <p>Our comprehensive approach to medical care combines advanced technology with compassionate service, ensuring that every patient receives the attention and treatment they deserve, whenever they need it.</p>
                </div>
              </div>
              
              <div className="why-choose-point">
                <div className="point-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 1v22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="point-content">
                  <h3>Affordable Care</h3>
                  <p>We offer accessible and cost-effective healthcare solutions that don't compromise on quality or patient outcomes. Our commitment to affordable care means quality healthcare is within reach for everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Experience Quality Healthcare?</h2>
          <p className="cta-description">
            Join thousands of satisfied patients who trust LUNIQ HEALTH for their medical needs.
          </p>
          <div className="cta-buttons">
            <Link to="/appointment" className="cta-button primary">Make an Appointment</Link>
            <Link to="/contact" className="cta-button secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
