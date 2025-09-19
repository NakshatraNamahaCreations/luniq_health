import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import elderCareImage from '../assets/services_pictures/trained_caretakers.png';
import elderCareBanner from '/Elder_Care.jpg';
import './ElderCare.css';

const ElderCare = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="elder-hero">
        <div className="elder-hero-image">
          <img src={elderCareBanner} alt="Elder Care Banner" className="hero-bg-image" />
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Elder Care</h1>
              <p className="hero-subtitle">Comprehensive care for senior citizens in the comfort of their homes with professional support and compassion</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Elder Care Section */}
      <section className="elder-about">
        <div className="container">
          <div className="elder-content">
            <div className="elder-left">
              <h2 className="elder-section-title">What is Elder Care?</h2>
              <p className="elder-description">
                Elder care also referred to as senior care, is a special care service designed to meet 
                the varied needs and requirements of senior citizen home care. Elder care is a vast field 
                and includes varied services like assisted living, nursing care, adult day care, and home care.
              </p>
              <p className="elder-description">
                Although old age itself is no reason to consider Eldercare, it is the varied physical 
                disabilities and diseases that lead a person to contemplate availing elder care services.
              </p>
              <p className="elder-description">
                A large number of senior citizens still live with their family and their care is jointly 
                undertaken by family members. However, in today's situation, there are cases when most 
                family members work and are unable to give proper attention and care to their ailing 
                seniors and as such seek reliable and efficient eldercare programs.
              </p>
            </div>
            <div className="elder-right">
              <img src={elderCareImage} alt="Elder Care" className="elder-image" />
            </div>
          </div>
        </div>
      </section>


      {/* Why Elder Care at Home Section */}
      <section className="why-elder-care">
        <div className="container">
          <h2 className="section-title">Why Elder Care at Home?</h2>
          <div className="why-content">
            <div className="why-text">
              <p>
                Elder care often becomes necessary when the elder starts experiencing difficulty with 
                activities of daily living, both independently and safely. Daily activities may include 
                cleaning, cooking, dressing, bathing, driving, taking medicines, etc.
              </p>
              <p>
                Elder Care is mostly needed when there is a gradual decline in an elder's health with 
                growing age, but it may also arise in emergency cases. For example, the elder one in 
                your family is recovering from a broken joint or recently had a heart stroke and is 
                still going through the cognitive and physical after effects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Reasons Section */}
      <section className="elder-reasons">
        <div className="container">
          <h2 className="section-title">Common Reasons for Elder Care</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <h3>Physical Difficulties</h3>
              <p>
                Numerous health problems may arise as people age and they are not able to perform many 
                of the daily activities they once could. Their body may become more rigid, more fragile, 
                and less resilient.
              </p>
            </div>
            <div className="reason-card">
              <h3>Cognitive Difficulties</h3>
              <p>
                Physical impairments related to particular diseases can also come in. Sometimes elders 
                don't report a physical impairment, hence it is important to get a complete physical 
                examination on a regular basis.
              </p>
            </div>
            <div className="reason-card">
              <h3>Emotional Problems</h3>
              <p>
                Emotional and mental health challenges that may arise with aging, requiring specialized 
                care and attention to maintain overall well-being and quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Post Hospital Care Plan */}
      <section className="post-hospital-care">
        <div className="container">
          <h2 className="care-title">Specialized Post Hospital Care Plan</h2>
          <p className="care-description">
            Life Save Home Health Care Solutions postoperative care services are aimed at managing 
            patients at our post-operative rehab center in the best possible manner so as to enable 
            optimal recovery and return to normal life after discharge from the hospital.
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


      {/* CTA Section */}
      <section className="elder-cta">
        <div className="container">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">
            Contact us today to learn more about our elder care services and how we can help your loved ones.
          </p>
          <div className="cta-buttons">
            <Link to="/appointment" className="btn-primary">Make an Appointment</Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ElderCare;
