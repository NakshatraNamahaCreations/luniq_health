import babyCareImage from '../assets/services_pictures/babycare.png';
import babyCareBanner from '../../public/Baby_Care.jpg';
// import { useAppointment } from '../contexts/AppointmentContext';
import './BabyCare.css';

const BabyCare = () => {
  return (
    <div className="baby-care-page">
      {/* Hero Section */}
      <section className="baby-care-hero">
        <div className="baby-care-hero-image">
          <img src={babyCareBanner} alt="Baby Care Banner" className="hero-bg-image" />

          <div className="hero-content">
            <div className='' style={{textAlign:"right", maxWidth:"500px"}} >
              <h1 className='hero-title'>Baby Care</h1>
              <p className='hero-subtitle'>Comprehensive postnatal care program that takes the workload and worries away from new parents with expert support for both mother and baby</p>
            </div>
          </div>
        </div>
      </section>

      {/* About New Born Baby Care Section */}
      <section className="about-baby-care">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About New Born Baby Care</h2>
              <p className="about-description">
                A new born baby is very delicate and needs special attention and care. Our care givers are specifically trained to provide
                new born baby care and help with lactation, massages and postnatal exercises.
              </p>
              <p className="about-description">
                Life Save Home Health Care Solutions assigns a medically trained care giver to help the mother with newborn baby care
                and also offers after delivery care for mother.
              </p>

              <div className="highlight-box">
                <h3>When Do You Need Us?</h3>
                <p>
                  Through our newborn baby care service you can rely on us to offer comprehensive neonatal care and after pregnancy care
                  by highly trained caregivers who have themselves been mothers.
                </p>
              </div>

              <div className="new-mother-care">
                <h3>New Mother Care</h3>
                <p>
                  After the birthing process, several new mothers fall into postpartum depression. Emotional support and massage help
                  the mother recover and enjoy her motherhood. Post operative and after delivery care is very important for full recovery.
                </p>
              </div>

              <div className="coming-home-service">
                <h3>The Coming Home Service</h3>
                <p>
                  After leaving the nursing home or hospital, you can avail of our coming home services that includes doctor visit during the first month,
                  telephonic consultations and advisory support on lactation, nutrition and postnatal recovery.
                </p>
              </div>
            </div>
            <div className="about-image">
              <img src={babyCareImage} alt="Professional baby care" />
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
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <h3>Nursing</h3>
              <p>Home Nursing Service encompasses a wide range of healthcare services that can be easily administered at your home.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-symbol" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10.5 13.01 8.99A2.5 2.5 0 0 0 11 8H9.46c-.8 0-1.54.37-2.01.99L5 10.5 4.01 8.99A2.5 2.5 0 0 0 2 8v10h2v-8h2v8h2v-8h2v8h2v-8h2v8h2v-8h2v8h2z" />
                </svg>
              </div>
              <h3>Care Takers</h3>
              <p>An in-home trained attendant service provides holistic support at home. Trained attendants take care of daily activities.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-symbol" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" />
                </svg>
              </div>
              <h3>Doctor Video Consultations</h3>
              <p>This unique medical initiative India is not only gaining ground but is also known for their value of money services.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-symbol" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3.5v15C3 19.33 3.67 20 4.5 20h15c.83 0 1.5-.67 1.5-1.5v-15C21 2.67 20.33 2 19.5 2zM19 18H5V8h14v10z" />
                </svg>
              </div>
              <h3>Lab Test</h3>
              <p>Life Save Home Health Care Solutions is partnered with the top NABL certified labs in the country.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-symbol" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3>Elder Care</h3>
              <p>Elder care also referred to as senior care, is a special care service designed to meet the varied needs of senior citizens.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg className="icon-symbol" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3>Medical Equipment</h3>
              <p>If you need any medical equipment for rent or purchase, get it from Life Save Home Health Care Solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="baby-care-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Start Your Baby Care Journey</h2>
            <p className="cta-description">
              Give your newborn and yourself the best care possible. Our expert caregivers are ready to support you
              through this beautiful journey of motherhood.
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

export default BabyCare;