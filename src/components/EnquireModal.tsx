// import React, { useState, useEffect } from 'react';
// import './EnquireModal.css';

// interface EnquireModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   serviceTitle?: string;
// }

// const EnquireModal: React.FC<EnquireModalProps> = ({ isOpen, onClose, serviceTitle }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: serviceTitle || '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//       setFormData(prev => ({
//         ...prev,
//         service: serviceTitle || prev.service
//       }));
//     } else {
//       document.body.style.overflow = 'unset';
//       setIsSubmitted(false);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         service: serviceTitle || '',
//         message: ''
//       });
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen, serviceTitle]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Enquiry form submitted:', formData);
//     setIsSubmitted(true);
//     setTimeout(() => {
//       onClose();
//     }, 3000);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <button className="modal-close-btn" onClick={onClose}>&times;</button>
//         {isSubmitted ? (
//           <div className="success-message">
//             <div className="success-icon">
//               <svg viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
//               </svg>
//             </div>
//             <h3>Thank You!</h3>
//             <p>Your enquiry has been sent successfully. We'll get back to you soon.</p>
//           </div>
//         ) : (
//           <form className="enquire-form" onSubmit={handleSubmit}>
//             <h2>Enquire About Our Services</h2>
//             <p>Fill out the form below to get more information about our healthcare services.</p>

//             <div className="form-group">
//               <label htmlFor="name">Full Name *</label>
//               <input 
//                 type="text" 
//                 id="name" 
//                 name="name" 
//                 value={formData.name} 
//                 onChange={handleInputChange} 
//                 required 
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email Address *</label>
//               <input 
//                 type="email" 
//                 id="email" 
//                 name="email" 
//                 value={formData.email} 
//                 onChange={handleInputChange} 
//                 required 
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone">Phone Number *</label>
//               <input 
//                 type="tel" 
//                 id="phone" 
//                 name="phone" 
//                 value={formData.phone} 
//                 onChange={handleInputChange} 
//                 required 
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="service">Service Interested In *</label>
//               <select 
//                 id="service" 
//                 name="service" 
//                 value={formData.service} 
//                 onChange={handleInputChange} 
//                 required
//               >
//                 <option value="">Select a Service</option>
//                 <option value="Trained Attendants">Trained Attendants</option>
//                 <option value="Nursing Care">Nursing Care</option>
//                 <option value="Physiotherapy">Physiotherapy</option>
//                 <option value="Medical Equipment">Medical Equipment</option>
//                 <option value="Critical Care">Critical Care</option>
//                 <option value="Baby Care">Baby Care</option>
//                 <option value="Elder Care">Elder Care</option>
//                 <option value="Lab Testing">Lab Testing</option>
//                 <option value="Corporate Health">Corporate Health</option>
//                 <option value="General Inquiry">General Inquiry</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea 
//                 id="message" 
//                 name="message" 
//                 value={formData.message} 
//                 onChange={handleInputChange} 
//                 rows={4}
//                 placeholder="Tell us more about your requirements..."
//               ></textarea>
//             </div>

//             <button type="submit" className="submit-btn">Send Enquiry</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EnquireModal;



import React, { useState, useEffect } from 'react';
import './EnquireModal.css';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

const EnquireModal: React.FC<EnquireModalProps> = ({ isOpen, onClose, serviceTitle }) => {
  const api_key=import.meta.env.VITE_BRAVO_API_KEY;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: serviceTitle || '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setFormData(prev => ({
        ...prev,
        service: serviceTitle || prev.service
      }));
    } else {
      document.body.style.overflow = 'unset';
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        service: serviceTitle || '',
        message: ''
      });
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, serviceTitle]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
            "api-key": api_key, // ⚠️ replace with real API key
          },
        body: JSON.stringify({
          sender: {
            name: "LUNIQ Health Website",
            email: "info@luniqhealth.com" // ✅ must be verified sender in Brevo
          },
          to: [
            { email: "info@luniqhealth.com", name: "LUNIQ HEALTH" } // ✅ receiver
          ],
          subject: `New Enquiry: ${formData.service}`,
          htmlContent: `
            <h3>New Service Enquiry</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Service Interested In:</strong> ${formData.service}</p>
            <p><strong>Message:</strong><br/>${formData.message}</p>
          `,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error("Brevo error:", errorData);
        alert("Failed to send enquiry: " + (errorData.message || "Check console"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending enquiry. Check console.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <h3>Thank You!</h3>
            <p>Your enquiry has been sent successfully. We'll get back to you soon.</p>
          </div>
        ) : (
          <form className="enquire-form" onSubmit={handleSubmit}>
            <h2>Enquire About Our Services</h2>
            <p>Fill out the form below to get more information about our healthcare services.</p>

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
            </div>


            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Interested In *</label>
              <select 
                id="service" 
                name="service" 
                value={formData.service} 
                onChange={handleInputChange} 
                required
              >
                <option value="">Select a Service</option>
                <option value="Trained Attendants">Trained Attendants</option>
                <option value="Nursing Care">Nursing Care</option>
                <option value="Physiotherapy">Physiotherapy</option>
                <option value="Medical Equipment">Medical Equipment</option>
                <option value="Critical Care">Critical Care</option>
                <option value="Baby Care">Baby Care</option>
                <option value="Elder Care">Elder Care</option>
                <option value="Lab Testing">Lab Testing</option>
                <option value="Corporate Health">Corporate Health</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleInputChange} 
                rows={4}
                placeholder="Tell us more about your requirements..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Enquiry</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnquireModal;
