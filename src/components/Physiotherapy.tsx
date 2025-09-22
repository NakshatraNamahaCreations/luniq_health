import React from 'react';
import './Physiotherapy.css';
import physioBanner from '../../public/Physiotherapy.jpg';
import physioServiceImage from '../assets/services_pictures/pysiotherapy.png';

const Physiotherapy: React.FC = () => {

  return (
    <div className="physiotherapy-page">
      {/* Hero Section */}
      <section className="physio-hero">
        <div className="physio-hero-image">
          <img 
            src={physioBanner} 
            alt="Physiotherapy Banner" 
            className="hero-bg-image"
            onError={(e) => {
              console.log('Image failed to load:', e.currentTarget.src);
              e.currentTarget.src = './Physiotherapy.jpg'; // Fallback
            }}
            onLoad={() => console.log('Physiotherapy image loaded successfully')}
          />
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Physiotherapy</h1>
              <p className="hero-subtitle">Professional rehabilitation services delivered to your doorstep with expert care and personalized treatment plans</p>
            </div>
          </div>
        </div>
      </section>


      {/* What is Physiotherapy Service Section */}
      <section className="physio-service-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-left">
              <h2 className="intro-title">What is Physiotherapy Service?</h2>
              <p className="intro-subtitle">Professional rehabilitation delivered right to your doorstep</p>
              
              <div className="intro-text">
                <p>
                  When you're recovering from an injury, surgery, or dealing with chronic pain, getting to a physiotherapy clinic can be challenging. Traveling to a clinic when you're in pain or have limited mobility can feel like an uphill task.
                </p>
                
                <div className="highlight-box">
                  <p>
                    If given an option, we would rather prefer a physiotherapist to give us a visit, rather than we having to visit them personally.
                  </p>
                </div>
                
                <p>
                  <strong>LUNIQ Health</strong> provides professional physiotherapy services at home at reasonable costs. Our qualified physiotherapists bring their expertise directly to you.
                </p>
                
                <div className="cta-highlight">
                  <p>The best part about in-home physiotherapy service is you will be treated in the comfort of your home, surrounded by your family members.</p>
                </div>
              </div>
            </div>
            
            <div className="intro-right">
              <div className="card-image">
                <img src={physioServiceImage} alt="LUNIQ Health Physiotherapy" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Physiotherapy Information Section */}
      <section className="physio-info-section">
        <div className="container">
          <h2 className="section-main-title">PHYSIOTHERAPY INFORMATION</h2>
          <div className="info-content">
            <div className="info-card">
              <h3>PHYSIOTHERAPY SERVICES</h3>
              <p>If you need professional physiotherapy services for rehabilitation and recovery, get it from LUNIQ Health. Check our comprehensive physiotherapy services and book your required treatment online, via email or over a phone call. Our qualified physiotherapists will visit you at your doorstep.</p>
            </div>
            
            <div className="info-card">
              <h3>BENEFITS OF PHYSIOTHERAPY</h3>
              <p>Getting physiotherapy treatment at your doorstep has never been this convenient. During recovery phases of life, you or your loved one might need to rely on professional physiotherapy to get back to normal life. LUNIQ Health offers a wide range of physiotherapy services making healthcare more accessible and affordable for you.</p>
            </div>
            
            <div className="info-card">
              <h3>HOW CAN WE HELP</h3>
              <p>If you need professional physiotherapy services for rehabilitation and recovery, get it from LUNIQ Health. Check our comprehensive physiotherapy services and book your required treatment online, via email or over a phone call. Our qualified physiotherapists will visit you at your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Post Hospital Care Plan Section */}
      <section className="post-hospital-care">
        <div className="container">
          <h2 className="section-title">Specialized Post Hospital Care Plan</h2>
          <p className="section-description">
            Life Save Home Health Care Solutions postoperative care services are aimed at managing patients at our post-operative rehab center 
            in the best possible manner so as to enable optimal recovery and return to normal life after discharge from the hospital.
          </p>
          <p className="section-description">
            Our team of skilled home care nursing staff and caretakers has over the years built strong capabilities in post-operative recovery of patients, 
            geriatric care or elderly health care and the management of bed-ridden patients. Our team is capable of managing a wide variety of patient requirements, including:
          </p>
          
          <div className="care-services-grid">
            <div className="care-service-column">
              <ul>
                <li>General nursing</li>
                <li>Wound management</li>
                <li>IV infusion therapy</li>
                <li>Fluid management</li>
              </ul>
            </div>
            
            <div className="care-service-column">
              <ul>
                <li>Administering oxygen</li>
                <li>Nebulization</li>
                <li>Bed sore care</li>
                <li>Tracheostomy care</li>
              </ul>
            </div>
            
            <div className="care-service-column">
              <ul>
                <li>BiPAP/CPAP management</li>
                <li>Stoma care</li>
                <li>Specialized Feeding (Ryle's Tube, PEG)</li>
                <li>Fluid management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Physiotherapy Services Section */}
      <section className="why-choose-physio">
        <div className="container">
          <h2 className="why-choose-title">Why Choose Our Physiotherapy Services?</h2>
          <div className="separator-line"></div>
          <div className="why-choose-content">
            <p>
              Experience the convenience and reliability of professional physiotherapy services brought directly to your doorstep. We partner with top certified physiotherapists ensuring effective and personalized treatment plans that meet international standards. Our licensed physiotherapists are trained professionals who ensure safe and comfortable rehabilitation sessions at your home. Get your treatment progress tracked within 24-48 hours through our secure online portal or mobile app for your convenience. All equipment is sterilized and maintained safely after each use to prevent contamination and ensure your safety.
            </p>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="physio-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Start Your Recovery Journey</h2>
            <p className="cta-subtitle">
              Book a consultation with our expert physiotherapists today
            </p>
            <div className="cta-buttons">
              <a href="/appointment" className="btn-primary">Make an Appointment</a>
              <a href="/contact" className="btn-outline">Contact us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Physiotherapy;





