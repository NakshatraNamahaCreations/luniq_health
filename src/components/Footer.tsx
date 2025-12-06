import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.png';
import './Footer.css';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    content: ''
  });

  const openModal = (title: string, content: string) => {
    setModalState({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, title: '', content: '' });
  };

  const privacyPolicyContent = `
    <h3>LUNIQ Health Privacy Policy</h3>
    <p>At LUNIQ Health, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our healthcare services.</p>
    
    <h3>Information We Collect:</h3>
    <ul>
      <li>Personal details (name, phone number, address)</li>
      <li>Medical information relevant to your care</li>
      <li>Appointment scheduling data</li>
      <li>Service preferences and history</li>
    </ul>
    
    <h3>How We Use Your Information:</h3>
    <ul>
      <li>To provide quality healthcare services</li>
      <li>To schedule and manage appointments</li>
      <li>To communicate about your care</li>
      <li>To improve our services across 5+ cities in India</li>
    </ul>
    
    <h3>Data Protection:</h3>
    <ul>
      <li>We comply with applicable healthcare data protection laws</li>
      <li>Information is shared only with authorized healthcare providers</li>
    </ul>
    
    <h3>Your Rights:</h3>
    <ul>
      <li>Access to your personal data</li>
      <li>Request corrections or updates</li>
      <li>Withdraw consent for data processing</li>
      <li>Contact us at <strong>info@luniqhealth.com</strong> for any privacy concerns</li>
    </ul>
    
    <p><strong>Updates:</strong> This policy may be updated periodically. Continued use of our services constitutes acceptance of any changes.</p>
  `;

  const termsOfServiceContent = `
    <h3>LUNIQ Health Terms of Service</h3>
    <p>By using LUNIQ Health services, you agree to these terms and conditions.</p>
    
    <h3>Service Description:</h3>
    <p>LUNIQ Health provides comprehensive healthcare services including nursing care, lab tests, medical equipment, physiotherapy, elder care, baby care, intensive care, corporate health programs, and trained caretaker services across multiple cities in India.</p>
    
    <h3>User Responsibilities:</h3>
    <ul>
      <li>Provide accurate personal and medical information</li>
      <li>Follow healthcare provider instructions</li>
      <li>Respect our staff and maintain professional conduct</li>
      <li>Pay for services as agreed upon</li>
    </ul>
    
    <h3>Service Availability:</h3>
    <ul>
      <li>Services are subject to availability in your area</li>
      <li>Emergency services may have different terms</li>
      <li>We reserve the right to modify or discontinue services</li>
    </ul>
    
    <h3>Payment Terms:</h3>
    <ul>
      <li>Payment is due as per agreed terms</li>
      <li>Refunds are subject to our cancellation policy</li>
      <li>Additional charges may apply for extended services</li>
    </ul>
    
    <h3>Limitation of Liability:</h3>
    <p>LUNIQ Health's liability is limited to the cost of services provided. We are not liable for indirect or consequential damages.</p>
    
    <h3>Governing Law:</h3>
    <p>These terms are governed by Indian law. Any disputes will be resolved in Indian courts.</p>
    
    <p><strong>Contact:</strong> For questions about these terms, contact us at <strong>info@luniqhealth.com</strong> or <strong>+91 6366996697</strong>.</p>
  `;

  const medicalDisclaimerContent = `
    <h3>LUNIQ Health Medical Disclaimer</h3>
    <p><strong>Important Notice:</strong> The information provided by LUNIQ Health is for general healthcare purposes only and should not be considered as medical advice, diagnosis, or treatment.</p>
    
    <h3>Service Limitations:</h3>
    <ul>
      <li>Our services are provided by qualified healthcare professionals</li>
      <li>Individual results may vary based on patient condition</li>
      <li>Emergency situations require immediate hospital care</li>
    </ul>
    
    <h3>Professional Standards:</h3>
    <ul>
      <li>Services are provided according to medical best practices</li>
      <li>We maintain professional standards across all our service areas</li>
      <li>Regular training and certification updates are mandatory</li>
    </ul>
    
    <h3>Patient Responsibility:</h3>
    <ul>
      <li>Patients must provide accurate medical history</li>
      <li>Follow prescribed treatment plans</li>
      <li>Report any adverse reactions immediately</li>
      <li>Maintain regular communication with healthcare providers</li>
    </ul>
    
    <h3>Emergency Situations:</h3>
    <p>For medical emergencies, contact emergency services (108) immediately. LUNIQ Health services are not intended for emergency medical situations.</p>
    
    <h3>Service Areas:</h3>
    <p>Our services are available in select cities across India. Service availability may vary by location and specific healthcare needs.</p>
    
    <h3>Contact Information:</h3>
    <p>For medical concerns or service questions:</p>
    <ul>
      <li>Phone: <strong>+91 6366996697</strong></li>
      <li>Email: <strong>info@luniqhealth.com</strong></li>
    </ul>
    
    <p><strong>Updates:</strong> This disclaimer may be updated to reflect changes in our services or regulatory requirements.</p>
  `;

  return (
    <footer className="footer">
      <div className="footer-background">
        <img src={backgroundImage} alt="Background" className="footer-bg-image" />
        <div className="footer-overlay"></div>
      </div>
      
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <h3 className="footer-title">LUNIQ HEALTH</h3>
              <p className="footer-description">
                Delivering quality healthcare services across 5+ cities in India. 
                Your trusted partner for comprehensive medical care at home and beyond.
              </p>
              <div className="footer-contact">
                <div className="contact-item-inline">
                  <div className="icon-container-small">
                    <svg className="contact-icon-svg-small" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>+91 6366996697 / +91 6366334510</span>
                </div>
                <div className="contact-item-inline">
                  <div className="icon-container-small">
                    <svg className="contact-icon-svg-small" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>info@luniqhealth.com</span>
                </div>
                <div className="contact-item-inline">
                  <div className="icon-container-small">
                    <svg className="contact-icon-svg-small" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Techno Park Building, 34 building number, 2nd Floor, 80 Feet Road, AVS Compound, Koramangala Bangalore, 560034</span>
                </div>
              </div>
              <div className="social-media">
                <h4 className="social-media-title">Follow Us</h4>
                <div className="social-icons">
                  <a 
                    href="https://www.instagram.com/luniqhealthpvtltd/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61581274310550" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/luniq-health/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.youtube.com/@LuniqHealthcare" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="YouTube"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-subtitle">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/appointment">Book Appointment</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="footer-subtitle">Services</h4>
              <ul className="footer-links">
                <li><Link to="/nursing-care">Nursing Care</Link></li>
                
                <li><Link to="/lab-tests">Lab Tests</Link></li>
                <li><Link to="/medical-equipment">Medical Equipment</Link></li>
                <li><Link to="/physiotherapy">Physiotherapy</Link></li>
                <li><Link to="/elder-care">Elder Care</Link></li>
                <li><Link to="/baby-care">Baby Care</Link></li>
                <li><Link to="/intensive-care">Intensive Care</Link></li>
                <li><Link to="/corporate-health">Corporate Health</Link></li>
                <li><Link to="/trained-caretakers">Trained Caretakers</Link></li>
              </ul>
            </div>


            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-subtitle">Get In Touch</h4>
              <div className="footer-contact-info">
                <div className="contact-item">
                  <div className="icon-container">
                    <svg className="contact-icon-svg" viewBox="0 0 24 24" fill="none">
                      <path d="M3 21h18l-9-18-9 18z" fill="currentColor"/>
                      <path d="M12 3l9 18H3l9-18z" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-label">Head Office</p>
                    <p className="contact-detail">Banglore, Karnataka</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-container">
                    <svg className="contact-icon-svg" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-label">Working Hours</p>
                    <p className="contact-detail">24/7 Emergency Care</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-container">
                    <svg className="contact-icon-svg" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-label">Service Areas</p>
                    <p className="contact-detail">5+ Cities Nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Keywords Section */}
          <div className="footer-keywords-section">
            {/* Nursing Care Keywords */}
            <div className="PopularSearches_row__PdGBf">
              <span className="PopularSearches_label__upxCb">NURSING CARE{/* */}:</span>
              <div className="PopularSearches_links__qyEc9" aria-label="NURSING CARE">
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">nursing care at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">home care services</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">nurse at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">nursing care</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">home health nurse</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">home health</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">home nurse</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">home care nursing services</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">at home care</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">private nurse</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">home care services bangalore</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">home nursing services near me</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">at-home nurse</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">health care at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">home health agency</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">at-home medical</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">care at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">health at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">private nursing care at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">home nursing services bangalore</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">medical home care services</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">home nurse bangalore</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">home health care provider</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">home care providers near me</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">nursing help at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">nursing services</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">hospital at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">home health care nurse</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">private nursing care</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">home health care services</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">24hrs registered nurses at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/nursing-care">Registered nurses</Link>
              </div>
            </div>

            {/* Trained Caretakers Keywords */}
            <div className="PopularSearches_row__PdGBf">
              <span className="PopularSearches_label__upxCb">TRAINED CARETAKERS{/* */}:</span>
              <div className="PopularSearches_links__qyEc9" aria-label="TRAINED CARETAKERS">
                <Link className="PopularSearches_link__ShEiG" to="/trained-caretakers">24hrs caretaker service at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/trained-caretakers">24hrs service</Link>
                <Link className="PopularSearches_link__ShEiG" to="/baby-care">Baby caretaker</Link>
                <Link className="PopularSearches_link__ShEiG" to="/trained-caretakers">Attendant</Link>
                <Link className="PopularSearches_link__ShEiG" to="/trained-caretakers">Caretaker</Link>
                <Link className="PopularSearches_link__ShEiG" to="/trained-caretakers">24/7 caretaker services at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/trained-caretakers">24hrs Attendant service at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/trained-caretakers">Caretaker services in Bangalore</Link>
                <Link className="PopularSearches_link__ShEiG" to="/trained-caretakers">The caretaker is near me</Link>
                <Link className="PopularSearches_link__ShEiG" to="/trained-caretakers">24-hour caretaker service at home</Link>
              </div>
            </div>

            {/* Intensive Care Keywords */}
            <div className="PopularSearches_row__PdGBf">
              <span className="PopularSearches_label__upxCb">INTENSIVE CARE{/* */}:</span>
              <div className="PopularSearches_links__qyEc9" aria-label="INTENSIVE CARE">
                <Link className="PopularSearches_link__ShEiG" to="/intensive-care">Critical care</Link>
                <Link className="PopularSearches_link__ShEiG" to="/intensive-care">ICU support</Link>
                <Link className="PopularSearches_link__ShEiG" to="/intensive-care">Ventilator support at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/intensive-care">Tracheostomy care</Link>
                <Link className="PopularSearches_link__ShEiG" to="/intensive-care">Tracheostomy care at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/intensive-care">Stroke care</Link>
                <Link className="PopularSearches_link__ShEiG" to="/intensive-care">Stroke Patients care at home</Link>
                <Link className="PopularSearches_link__ShEiG" to="/intensive-care">ICU care at home</Link>
              </div>
            </div>

            {/* Elder Care Keywords */}
            <div className="PopularSearches_row__PdGBf">
              <span className="PopularSearches_label__upxCb">ELDER CARE{/* */}:</span>
              <div className="PopularSearches_links__qyEc9" aria-label="ELDER CARE">
                <Link className="PopularSearches_link__ShEiG" to="/elder-care">Elderly care</Link>
                <Link className="PopularSearches_link__ShEiG" to="/elder-care">Elderly support</Link>
                <Link className="PopularSearches_link__ShEiG" to="/elder-care">Companionship</Link>
                <Link className="PopularSearches_link__ShEiG" to="/elder-care">Companionship for elderly</Link>
                <Link className="PopularSearches_link__ShEiG" to="/elder-care">Elder care at home</Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                © 2025 LUNIQ HEALTH Pvt Ltd. All rights reserved.
              </p>
              <div className="footer-legal">
                <a href="#" onClick={(e) => { e.preventDefault(); openModal('Privacy Policy', privacyPolicyContent); }}>Privacy Policy</a>
                <a href="#" onClick={(e) => { e.preventDefault(); openModal('Terms of Service', termsOfServiceContent); }}>Terms of Service</a>
                <a href="#" onClick={(e) => { e.preventDefault(); openModal('Medical Disclaimer', medicalDisclaimerContent); }}>Medical Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <LegalModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        content={modalState.content}
      />
    </footer>
  );
};

export default Footer;
