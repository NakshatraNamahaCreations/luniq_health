// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import backgroundImage from '../assets/background.png';
// import './Footer.css';
// import LegalModal from './LegalModal';

// const Footer: React.FC = () => {
//   const [modalState, setModalState] = useState({
//     isOpen: false,
//     title: '',
//     content: ''
//   });

//   const openModal = (title: string, content: string) => {
//     setModalState({ isOpen: true, title, content });
//   };

//   const closeModal = () => {
//     setModalState({ isOpen: false, title: '', content: '' });
//   };

//   const privacyPolicyContent = `
//     <h3>LUNIQ Health Privacy Policy</h3>
//     <p>At LUNIQ Health, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our healthcare services.</p>
    
//     <h3>Information We Collect:</h3>
//     <ul>
//       <li>Personal details (name, phone number, address)</li>
//       <li>Medical information relevant to your care</li>
//       <li>Appointment scheduling data</li>
//       <li>Service preferences and history</li>
//     </ul>
    
//     <h3>How We Use Your Information:</h3>
//     <ul>
//       <li>To provide quality healthcare services</li>
//       <li>To schedule and manage appointments</li>
//       <li>To communicate about your care</li>
//       <li>To improve our services across 5+ cities in India</li>
//     </ul>
    
//     <h3>Data Protection:</h3>
//     <ul>
//       <li>We comply with applicable healthcare data protection laws</li>
//       <li>Information is shared only with authorized healthcare providers</li>
//     </ul>
    
//     <h3>Your Rights:</h3>
//     <ul>
//       <li>Access to your personal data</li>
//       <li>Request corrections or updates</li>
//       <li>Withdraw consent for data processing</li>
//       <li>Contact us at <strong>info@luniqhealth.com</strong> for any privacy concerns</li>
//     </ul>
    
//     <p><strong>Updates:</strong> This policy may be updated periodically. Continued use of our services constitutes acceptance of any changes.</p>
//   `;

//   const termsOfServiceContent = `
//     <h3>LUNIQ Health Terms of Service</h3>
//     <p>By using LUNIQ Health services, you agree to these terms and conditions.</p>
    
//     <h3>Service Description:</h3>
//     <p>LUNIQ Health provides comprehensive healthcare services including nursing care, lab tests, medical equipment, physiotherapy, elder care, baby care, intensive care, corporate health programs, and trained caretaker services across multiple cities in India.</p>
    
//     <h3>User Responsibilities:</h3>
//     <ul>
//       <li>Provide accurate personal and medical information</li>
//       <li>Follow healthcare provider instructions</li>
//       <li>Respect our staff and maintain professional conduct</li>
//       <li>Pay for services as agreed upon</li>
//     </ul>
    
//     <h3>Service Availability:</h3>
//     <ul>
//       <li>Services are subject to availability in your area</li>
//       <li>Emergency services may have different terms</li>
//       <li>We reserve the right to modify or discontinue services</li>
//     </ul>
    
//     <h3>Payment Terms:</h3>
//     <ul>
//       <li>Payment is due as per agreed terms</li>
//       <li>Refunds are subject to our cancellation policy</li>
//       <li>Additional charges may apply for extended services</li>
//     </ul>
    
//     <h3>Limitation of Liability:</h3>
//     <p>LUNIQ Health's liability is limited to the cost of services provided. We are not liable for indirect or consequential damages.</p>
    
//     <h3>Governing Law:</h3>
//     <p>These terms are governed by Indian law. Any disputes will be resolved in Indian courts.</p>
    
//     <p><strong>Contact:</strong> For questions about these terms, contact us at <strong>info@luniqhealth.com</strong> or <strong>+91 6366996697</strong>.</p>
//   `;

//   const medicalDisclaimerContent = `
//     <h3>LUNIQ Health Medical Disclaimer</h3>
//     <p><strong>Important Notice:</strong> The information provided by LUNIQ Health is for general healthcare purposes only and should not be considered as medical advice, diagnosis, or treatment.</p>
    
//     <h3>Service Limitations:</h3>
//     <ul>
//       <li>Our services are provided by qualified healthcare professionals</li>
//       <li>Individual results may vary based on patient condition</li>
//       <li>Emergency situations require immediate hospital care</li>
//     </ul>
    
//     <h3>Professional Standards:</h3>
//     <ul>
//       <li>Services are provided according to medical best practices</li>
//       <li>We maintain professional standards across all our service areas</li>
//       <li>Regular training and certification updates are mandatory</li>
//     </ul>
    
//     <h3>Patient Responsibility:</h3>
//     <ul>
//       <li>Patients must provide accurate medical history</li>
//       <li>Follow prescribed treatment plans</li>
//       <li>Report any adverse reactions immediately</li>
//       <li>Maintain regular communication with healthcare providers</li>
//     </ul>
    
//     <h3>Emergency Situations:</h3>
//     <p>For medical emergencies, contact emergency services (108) immediately. LUNIQ Health services are not intended for emergency medical situations.</p>
    
//     <h3>Service Areas:</h3>
//     <p>Our services are available in select cities across India. Service availability may vary by location and specific healthcare needs.</p>
    
//     <h3>Contact Information:</h3>
//     <p>For medical concerns or service questions:</p>
//     <ul>
//       <li>Phone: <strong>+91 6366996697</strong></li>
//       <li>Email: <strong>info@luniqhealth.com</strong></li>
//     </ul>
    
//     <p><strong>Updates:</strong> This disclaimer may be updated to reflect changes in our services or regulatory requirements.</p>
//   `;

//   return (
//     <footer className="footer">
//       <div className="footer-background">
//         <img src={backgroundImage} alt="Background" className="footer-bg-image" />
//         <div className="footer-overlay"></div>
//       </div>
      
//       <div className="footer-content">
//         <div className="footer-container">
//           <div className="footer-grid">
//             {/* Company Info */}
//             <div className="footer-section">
//               <h3 className="footer-title">LUNIQ HEALTH</h3>
//               <p className="footer-description">
//                 Delivering quality healthcare services across 5+ cities in India. 
//                 Your trusted partner for comprehensive medical care at home and beyond.
//               </p>
//               <div className="footer-contact">
//                 <div className="contact-item-inline">
//                   <div className="icon-container-small">
//                     <svg className="contact-icon-svg-small" viewBox="0 0 24 24" fill="none">
//                       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
//                     </svg>
//                   </div>
//                   <span>+91 6366996697 / +91 6366334510</span>
//                 </div>
//                 <div className="contact-item-inline">
//                   <div className="icon-container-small">
//                     <svg className="contact-icon-svg-small" viewBox="0 0 24 24" fill="none">
//                       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
//                       <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
//                     </svg>
//                   </div>
//                   <span>info@luniqhealth.com</span>
//                 </div>
//                 <div className="contact-item-inline">
//                   <div className="icon-container-small">
//                     <svg className="contact-icon-svg-small" viewBox="0 0 24 24" fill="none">
//                       <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
//                       <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
//                     </svg>
//                   </div>
//                   <span>Techno Park Building, 34 building number, 2nd Floor, 80 Feet Road, AVS Compound, Koramangala Bangalore, 560034</span>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div className="footer-section">
//               <h4 className="footer-subtitle">Quick Links</h4>
//               <ul className="footer-links">
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About Us</Link></li>
                
//                 <li><Link to="/contact">Contact</Link></li>
//                 <li><Link to="/appointment">Book Appointment</Link></li>
//               </ul>
//             </div>

//             {/* Services */}
//             <div className="footer-section">
//               <h4 className="footer-subtitle">Services</h4>
//               <ul className="footer-links">
//                 <li><Link to="/nursing-care">Nursing Care</Link></li>
                
//                 <li><Link to="/lab-tests">Lab Tests</Link></li>
//                 <li><Link to="/medical-equipment">Medical Equipment</Link></li>
//                 <li><Link to="/physiotherapy">Physiotherapy</Link></li>
//                 <li><Link to="/elder-care">Elder Care</Link></li>
//                 <li><Link to="/baby-care">Baby Care</Link></li>
//                 <li><Link to="/intensive-care">Intensive Care</Link></li>
//                 <li><Link to="/corporate-health">Corporate Health</Link></li>
//                 <li><Link to="/trained-caretakers">Trained Caretakers</Link></li>
//               </ul>
//             </div>


//             {/* Contact Info */}
//             <div className="footer-section">
//               <h4 className="footer-subtitle">Get In Touch</h4>
//               <div className="footer-contact-info">
//                 <div className="contact-item">
//                   <div className="icon-container">
//                     <svg className="contact-icon-svg" viewBox="0 0 24 24" fill="none">
//                       <path d="M3 21h18l-9-18-9 18z" fill="currentColor"/>
//                       <path d="M12 3l9 18H3l9-18z" stroke="currentColor" strokeWidth="1"/>
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="contact-label">Head Office</p>
//                     <p className="contact-detail">Banglore, Karnataka</p>
//                   </div>
//                 </div>
//                 <div className="contact-item">
//                   <div className="icon-container">
//                     <svg className="contact-icon-svg" viewBox="0 0 24 24" fill="none">
//                       <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
//                       <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2"/>
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="contact-label">Working Hours</p>
//                     <p className="contact-detail">24/7 Emergency Care</p>
//                   </div>
//                 </div>
//                 <div className="contact-item">
//                   <div className="icon-container">
//                     <svg className="contact-icon-svg" viewBox="0 0 24 24" fill="none">
//                       <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
//                       <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="contact-label">Service Areas</p>
//                     <p className="contact-detail">5+ Cities Nationwide</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Bar */}
//           <div className="footer-bottom">
//             <div className="footer-bottom-content">
//               <p className="footer-copyright">
//                 © 2025 LUNIQ HEALTH Pvt Ltd. All rights reserved.
//               </p>
//               <div className="footer-legal">
//                 <a href="#" onClick={(e) => { e.preventDefault(); openModal('Privacy Policy', privacyPolicyContent); }}>Privacy Policy</a>
//                 <a href="#" onClick={(e) => { e.preventDefault(); openModal('Terms of Service', termsOfServiceContent); }}>Terms of Service</a>
//                 <a href="#" onClick={(e) => { e.preventDefault(); openModal('Medical Disclaimer', medicalDisclaimerContent); }}>Medical Disclaimer</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <LegalModal
//         isOpen={modalState.isOpen}
//         onClose={closeModal}
//         title={modalState.title}
//         content={modalState.content}
//       />
//     </footer>
//   );
// };

// export default Footer;


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
 ` ;

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