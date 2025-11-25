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
import { API_URL } from '../utils/api';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

const EnquireModal: React.FC<EnquireModalProps> = ({ isOpen, onClose, serviceTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: serviceTitle || '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  const validateForm = (): { isValid: boolean; errors: Record<string, string> } => {
    const newErrors: Record<string, string> = {};

    // Validate name - REQUIRED
    if (!formData.name || !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Validate phone - REQUIRED
    if (!formData.phone || !formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }

    // Validate service - REQUIRED
    if (!formData.service || !formData.service.trim()) {
      newErrors.service = 'Please select a service';
    }

    // Message is optional, no validation needed

    setErrors(newErrors);
    return { isValid: Object.keys(newErrors).length === 0, errors: newErrors };
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form before submission
    const validation = validateForm();
    if (!validation.isValid) {
      // Scroll to first error field
      const firstErrorField = Object.keys(validation.errors)[0];
      if (firstErrorField) {
        setTimeout(() => {
          const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
          errorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          (errorElement as HTMLElement)?.focus();
        }, 100);
      }
      return;
    }

    setIsSubmitting(true);
    setErrors({}); // Clear any previous errors

    try {
      const response = await fetch(`${API_URL}/send-enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if response is ok (status 200-299)
      if (!response.ok) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          phone: '',
          service: serviceTitle || '',
          message: ''
        });
        setErrors({});
        
        // Close modal after 3 seconds
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
        }, 3000);
      } else {
        setErrors({ submit: 'Failed to send enquiry. Please try again.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'An error occurred while submitting. Please try again.' });
    } finally {
      setIsSubmitting(false);
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

            {errors.submit && (
              <div className="error-message" style={{ color: 'red', marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#fee', borderRadius: '4px' }}>
                {errors.submit}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-text" style={{ color: 'red', fontSize: '0.875rem', display: 'block', marginTop: '0.25rem' }}>{errors.name}</span>}
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
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-text" style={{ color: 'red', fontSize: '0.875rem', display: 'block', marginTop: '0.25rem' }}>{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Interested In *</label>
              <select 
                id="service" 
                name="service" 
                value={formData.service} 
                onChange={handleInputChange} 
                required
                className={errors.service ? 'error' : ''}
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
              {errors.service && <span className="error-text" style={{ color: 'red', fontSize: '0.875rem', display: 'block', marginTop: '0.25rem' }}>{errors.service}</span>}
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

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnquireModal;
