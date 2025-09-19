import React from 'react';
import './NursingCare.css';
import nursingBanner from '/nursing_banner.jpg';

const NursingCare: React.FC = () => {
  return (
    <div className="nursing-care-page">
      {/* Hero Section */}
      <section className="nursing-hero">
        <div className="nursing-hero-image">
          <img src={nursingBanner} alt="Nursing Care Banner" className="hero-bg-image" />
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Nursing Care</h1>
              <p className="hero-subtitle">Professional nursing care delivered to your doorstep with compassion and expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="nursing-main-content">
        <div className="container">
          {/* Home Nursing Services */}
          <div className="nursing-intro">
            <h2>Home Nursing Services.</h2>
            <p>
              Home Nursing Service encompasses a wide range of healthcare services that can be easily administered at your home. 
              nurse for home care service are usually cheaper than hospitals and nursing homes, while being just as effective as 
              the medical care offered in a hospital or nursing home.
            </p>
            <p>
              An in-home nursing service offers personalized nursing care at home as offered in a typical hospital while being 
              more compassionate towards the patient and gets integrated into the patient's family and develops an emotional 
              bond with the patient and their family.
            </p>
          </div>

          {/* Terms of Nursing Care */}
          <div className="nursing-terms">
            <h2>Terms Of Nursing Care</h2>
            
            <div className="terms-list">
              <div className="term-item">
                <h3>Short Term Nursing Care</h3>
                <p>
                  Short term nurses provide nursing services for 1-4 hours or a specific period. Short term nursing care is 
                  temporary medical aftercare following surgery, injury or other medical condition that is expected to improve. 
                  Specialties: Vaccination at home, Injection at home, ECG at home, Dressing or wound care at home.
                </p>
              </div>

              <div className="term-item">
                <h3>Long Term Nursing Care</h3>
                <p>
                  Long term nurses provide nursing services for 12-24 hours. Long term nursing care is a comprehensive range 
                  of medical, physical and surgical care to meet the physical, social and emotional needs of people who are 
                  chronically ill or disabled Specialties: Ventilator care at home, Tracheostomy care at home, Bedsore care, 
                  catheter care, Infusion care, Ryle's tube care, Care of IV Lines
                </p>
              </div>

              <div className="term-item">
                <h3>Nursing Attendants At Home</h3>
                <p>
                  Nursing attendants take care of the daily activities of patients in need. They provide supportive care. 
                  However, they are not allowed to carry out any medical procedures. Specialties: caregivers, support care, 
                  old patient care, caretaker, assisting in daily activities
                </p>
              </div>
            </div>
          </div>

          {/* What does home nursing care means */}
          <div className="nursing-meaning">
            <h2>What does home nursing care means?</h2>
            <p>
              The services offered by home care nursing are provided by registered nurses, physiotherapists and occupational 
              therapists among others. And as such you need not worry on the quality of service offered by the home nurse.
            </p>
            
            <div className="nursing-info-grid">
              <div className="info-card">
                <h3>When do you need us?</h3>
                <p>The main goal of Home Nursing service is to treat an illness or injury.</p>
              </div>
              
              <div className="info-card">
                <h3>What to expect from nursing care services at home?</h3>
                <p>The Home care nursing starts only after the recommendation of a doctor.</p>
              </div>
            </div>
          </div>


          {/* 24x7 Services */}
          <div className="round-clock-services">
            <h2>24×7 Home Care Services</h2>
            <p>
              We offer 24×7 home care nursing and care taker services for patients of all ages who require constant 
              monitoring and intensive care at home.
            </p>
          </div>

          {/* CTA Section */}
          <div className="nursing-cta">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to discuss your nursing care needs and get a personalized care plan.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Make an Appointment</button>
              <button className="btn-secondary">Call Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NursingCare;