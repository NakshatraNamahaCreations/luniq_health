import React, { useState } from 'react';
import './DoctorConsultation.css';
import bannerImage from '../assets/services_pictures/banner_doctor_consultation.png';
import doctorConsultationBanner from '/doctorconsultation.jpg';

const DoctorConsultation: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  return (
    <div className="doctor-consultation-page">
      {/* Hero Section */}
      <section className="consultation-hero">
        <div className="consultation-hero-image">
          <img src={doctorConsultationBanner} alt="Doctor Consultation Banner" className="hero-bg-image" />
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Doctor Consultation</h1>
              <p className="hero-subtitle">Professional healthcare services delivered right to your doorstep</p>
            </div>
          </div>
        </div>
      </section>


      {/* What is In-Home Doctor Service Section */}
      <section className="what-is-section">
        <div className="consultation-container">
          <div className="section-header">
            <h2 className="section-title">What is an In-Home Doctor Service?</h2>
            <p className="section-subtitle">Quality healthcare delivered right to your doorstep</p>
          </div>
          <div className="content-wrapper">
            <div className="text-content">
              <p className="main-description">
                Every once in a while, you're bound to need to consult with a doctor for general health check-up, 
                seasonal fever, acute diseases, chronic illness, and more. In many situations, we are physically 
                weak and prefer to stay at home, and even a visit to a doctor seems an uphill task.
              </p>
              <p className="highlight-text">
                If given an option, we would rather prefer a doctor to give us a visit, rather than we having to visit him personally.
              </p>
              <p className="solution-text">
                To fill this void, <strong>LUNIQ Health</strong> provides doctor consultation at home at reasonable costs 
                compared to traditional hospitals and nursing homes. Our home visit doctors are qualified professionals 
                and provide consultation to treatment and help you throughout your recovery process.
              </p>
              <div className="key-benefit">
                <h3>The best part about in-home doctor service is you will be treated in the comfort of your home, surrounded by your family members.</h3>
              </div>
            </div>
            <div className="image-content">
              <img src={bannerImage} alt="Doctor at Home" className="section-image" />
            </div>
          </div>
        </div>
      </section>

      {/* When Do You Need Us Section */}
      <section className="when-need-section">
        <div className="consultation-container">
          <div className="section-header">
            <h2 className="section-title">When Do You Need Us?</h2>
            <p className="section-subtitle">Our in-home doctor service is perfect for various healthcare needs</p>
          </div>
          <div className="services-content">
            <p className="intro-text">
              The in-home doctor service is a great service for old people or people with chronic illnesses who are unable to visit a hospital or prefer to be treated at home. Some of the services that are offered by home doctors are as follows:
            </p>
            
            <div className="service-list">
              <div className="service-item">
                <h3>General Checkup</h3>
                <p>It's a good practice to keep a check on your health. Regular health check-ups are essential for children and the elderly. Call a LUNIQ doctor home and stay rest assured about your family's health.</p>
              </div>
              
              <div className="service-item">
                <h3>Diabetic Care</h3>
                <p>Regular monitoring of blood pressure and blood sugar levels with quarterly doctor consultations. Skip clinic visits and get expert guidance on diet and medication from experienced doctors at home.</p>
              </div>
              
              <div className="service-item">
                <h3>Ortho Care</h3>
                <p>Home visit services for orthopedic conditions like fractures, joint replacements, and arthritis. Perfect for patients with mobility issues who prefer treatment at home. Book through LUNIQ app for expert orthopedic care.</p>
              </div>
              
              <div className="service-item">
                <h3>Post-Hospitalization Cardiac Care</h3>
                <p>Critical post-hospitalization care for heart patients. Our doctors and health professionals provide proper medication management and monitoring at your doorstep during this crucial recovery period.</p>
              </div>
              
              <div className="service-item">
                <h3>Post-Hospitalization Neuro Care</h3>
                <p>Specialized care for nervous system disorders requiring regular medical follow-up. Our experienced doctors provide comprehensive neurological care at home, easing the burden on families during recovery.</p>
              </div>
              
              <div className="service-item">
                <h3>Home-Based Oncological Care</h3>
                <p>Compassionate oncology care for cancer patients in the comfort of home. Our experienced doctors provide specialized treatment and support to improve quality of life during this challenging time.</p>
              </div>
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

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="consultation-container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Get answers to common questions about our services</p>
          </div>
          <div className="faq-list">
            <div className={`faq-item ${openFaq === 0 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(0)}>
                <h3>How often will a LUNIQ doctor visit me?</h3>
                <div className="faq-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>The frequency of doctor visits varies depending on the patient's needs and treatment plan.</p>
              </div>
            </div>
            <div className={`faq-item ${openFaq === 1 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                <h3>Do I get a complementary doctor visit with other services?</h3>
                <div className="faq-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>Yes. Depending on the patient's need, you will get complementary doctor visits with our care packages and nursing services.</p>
              </div>
            </div>
            <div className={`faq-item ${openFaq === 2 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                <h3>Are the services supervised by someone?</h3>
                <div className="faq-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>Every doctor at LUNIQ Health is supervised by a specialist MD-level doctor.</p>
              </div>
            </div>
            <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                <h3>Are LUNIQ Health's doctors reliable?</h3>
                <div className="faq-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>Yes. Our doctors have more than 4 years of clinical experience on average.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default DoctorConsultation;
