import React from 'react';
import './StandaloneNursingCare.css';
import nursingImage from '../assets/services_pictures/nursing.png';

const StandaloneNursingCare: React.FC = () => {
  return (
    <div className="nursing-care-page">
      {/* Hero Section */}
      <section className="nursing-hero">
        <img src="/nursing_banner.jpg" alt="Nursing Care Banner" className="hero-bg-image" />
         <div className="hero-content-nursing">
            <div className='' style={{textAlign:"left", maxWidth:"500px"}} >
              <h1 className='hero-title'>Nursing Services</h1>
              <p className='hero-subtitle'>Professional nursing care delivered to your doorstep with compassion and expertise</p>
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


          {/* Specialized Post Hospital Care Plan */}
          <div className="post-hospital-care">
            <h2>Specialized Post Hospital Care Plan</h2>
            <p>
              LUNIQ Health postoperative care services are aimed at managing patients at our post-operative rehab center in 
              the best possible manner so as to enable optimal recovery and return to normal life after discharge from the hospital. 
              Our team of skilled home care nursing staff and caretakers has over the years built strong capabilities in 
              post-operative recovery of patients, geriatric care or elderly health care and the management of bed-ridden patients.
            </p>
            
            <div className="care-services-grid">
              <div className="service-category">
                <h3>General Care Services</h3>
                <ul>
                  <li>General nursing</li>
                  <li>Wound management</li>
                  <li>IV infusion therapy</li>
                  <li>Fluid management</li>
                </ul>
              </div>
              
              <div className="service-category">
                <h3>Respiratory Care</h3>
                <ul>
                  <li>Administering oxygen</li>
                  <li>Nebulization</li>
                  <li>Bed sore care</li>
                  <li>Tracheostomy care</li>
                </ul>
              </div>
              
              <div className="service-category">
                <h3>Specialized Care</h3>
                <ul>
                  <li>BiPAP/CPAP management</li>
                  <li>Stoma care</li>
                  <li>Specialized Feeding (Ryle's Tube, PEG)</li>
                  <li>Fluid management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 24x7 Services */}
          <div className="round-clock-services">
            <div className="round-clock-content">
              <div className="round-clock-text">
                <h2>24×7 Home Care Services</h2>
                <p>
                  We offer 24×7 home care nursing and care taker services for patients of all ages who require constant 
                  monitoring and intensive care at home.
                </p>
              </div>
              <div className="round-clock-image">
                <img src={nursingImage} alt="Professional Nursing Care" className="nursing-professional-img" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default StandaloneNursingCare;