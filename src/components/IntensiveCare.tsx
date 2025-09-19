import React from 'react';
import './IntensiveCare.css';
import intensiveCareImage from '../assets/services_pictures/intensive_care.png';
import intensiveCareBanner from '/intensive_care.jpg';

const IntensiveCare: React.FC = () => {
  return (
    <div className="intensive-care-page">
      {/* Hero Section */}
      <section className="intensive-care-hero">
        <div className="intensive-care-hero-image">
          <img src={intensiveCareBanner} alt="Intensive Care Banner" className="hero-bg-image" />
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Intensive Care</h1>
              <p className="hero-subtitle">Critical care services delivered to your doorstep with 24/7 intensive care for patients requiring constant medical monitoring and support</p>
            </div>
          </div>
        </div>
      </section>
     

      {/* What is Intensive Care Section */}
      <section className="what-is-intensive-care">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">What is Intensive Care at Home?</h2>
              <p className="about-description">
                Intensive care at home provides critical medical care for patients who require constant monitoring 
                and specialized medical attention but prefer to receive treatment in the comfort of their own home. 
                Our experienced team of critical care specialists brings hospital-level care directly to your doorstep.
              </p>
              <p className="about-description">
                This service is ideal for patients recovering from major surgeries, managing chronic conditions, 
                or requiring ongoing medical supervision. We provide round-the-clock care with advanced medical 
                equipment and highly trained professionals.
              </p>
              <div className="highlight-box">
                <h3>When Do You Need Intensive Care at Home?</h3>
                <p>
                  Our intensive care services are essential for patients who need continuous medical monitoring, 
                  ventilator support, or specialized treatments that typically require hospital admission.
                </p>
              </div>
            </div>
            <div className="about-image">
              <img src={intensiveCareImage} alt="Intensive care at home" />
            </div>
          </div>
        </div>
      </section>

      {/* Intensive Care Information Section */}
      <section className="intensive-care-info-section">
        <div className="container">
          <h2 className="section-main-title">INTENSIVE CARE INFORMATION</h2>
          <div className="info-content">
            <div className="info-card">
              <h3>INTENSIVE CARE SERVICES</h3>
              <p>If you need professional intensive care services for critical medical conditions and recovery, get it from LUNIQ Health. Check our comprehensive intensive care services and book your required treatment online, via email or over a phone call. Our qualified critical care specialists will visit you at your doorstep.</p>
            </div>
            
            <div className="info-card">
              <h3>BENEFITS OF INTENSIVE CARE AT HOME</h3>
              <p>Getting intensive care treatment at your doorstep has never been this convenient. During critical phases of life, you or your loved one might need to rely on professional intensive care to get back to normal life. LUNIQ Health offers a wide range of intensive care services making healthcare more accessible and affordable for you.</p>
            </div>
            
            <div className="info-card">
              <h3>HOW CAN WE HELP</h3>
              <p>If you need professional intensive care services for critical medical conditions and recovery, get it from LUNIQ Health. Check our comprehensive intensive care services and book your required treatment online, via email or over a phone call. Our qualified critical care specialists will visit you at your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-overview">
        <div className="container">
          <div className="services-header">
            <h2 className="section-title">Services</h2>
            <p className="section-description">
              We offer 24×7 home care nursing and care taker services for patients of all ages who 
              require constant monitoring and intensive care at home.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-symbol" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3>Nursing</h3>
              <p>Home Nursing Service encompasses a wide range of healthcare services that can be easily administered at your home.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-symbol" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10.5 13.01 8.99A2.5 2.5 0 0 0 11 8H9.46c-.8 0-1.54.37-2.01.99L5 10.5 4.01 8.99A2.5 2.5 0 0 0 2 8v10h2v-8h2v8h2v-8h2v8h2v-8h2v8h2v-8h2v8h2z"/>
                </svg>
              </div>
              <h3>Care Takers</h3>
              <p>An in-home trained attendant service provides holistic support at home. Trained attendants take care of daily activities.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-symbol" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
                </svg>
              </div>
              <h3>Doctor Video Consultations</h3>
              <p>This unique medical initiative India is not only gaining ground but is also known for their value of money services.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-symbol" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3.5v15C3 19.33 3.67 20 4.5 20h15c.83 0 1.5-.67 1.5-1.5v-15C21 2.67 20.33 2 19.5 2zM19 18H5V8h14v10z"/>
                </svg>
              </div>
              <h3>Lab Test</h3>
              <p>Life Save Home Health Care Solutions is partnered with the top NABL certified labs in the country.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-symbol" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Elder Care</h3>
              <p>Elder care also referred to as senior care, is a special care service designed to meet the varied needs of senior citizens.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-symbol" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3>Medical Equipment</h3>
              <p>If you need any medical equipment for rent or purchase, get it from Life Save Home Health Care Solutions.</p>
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

      {/* CTA Section */}
      <section className="intensive-care-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Critical Care When You Need It</h2>
            <p className="cta-description">
              Don't compromise on critical care. Our specialized intensive care team provides 
              hospital-level care in the comfort of your home.
            </p>
            <div className="cta-buttons">
              <a href="/appointment" className="cta-btn primary">Make an Appointment</a>
              <a href="/contact" className="cta-btn secondary">Contact us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntensiveCare;

