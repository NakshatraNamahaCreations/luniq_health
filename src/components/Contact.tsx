import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import { Helmet } from "react-helmet";
import { API_URL } from '../utils/api';
import SubjectSelect from './SubjectSelect';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

    // Validate phone - OPTIONAL but validate format if provided
    if (formData.phone && formData.phone.trim()) {
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }

    // Validate subject - REQUIRED
    if (!formData.subject || !formData.subject.trim()) {
      newErrors.subject = 'Please select a subject';
    }

    // Validate message - REQUIRED
    if (!formData.message || !formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

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

      // Try to parse response even if status is not ok
      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        // If response is not JSON, use status text
        if (!response.ok) {
          throw new Error(`Server error: ${response.status} ${response.statusText}. Please try again later or contact us directly.`);
        }
        throw new Error('Invalid response from server. Please try again.');
      }

      // Check if response is ok (status 200-299)
      if (!response.ok) {
        // Try to get error message from response
        const errorMessage = result?.message || result?.error || `Server error: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      if (result.success) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        const errorMessage = result?.message || result?.error || 'Failed to send message. Please try again.';
        setErrors({ submit: errorMessage });
      }
    } catch (error) {
      console.error('Submission error:', error);
      // Extract error message from error object
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'An error occurred while submitting. Please try again or contact us directly at info@luniqhealth.com';
      setErrors({ submit: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  
  return (
    <div className={styles.contactPage}>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Contact LUNIQ Health – Home Healthcare in Bengaluru.</title>
        <meta
          name="description"
          content="Get in touch with LUNIQ Health for 24×7 home healthcare services in Bengaluru. Reach us for nursing care, physiotherapy, elder care, or post-operative assistance at your doorstep."
        />
      </Helmet>
      {/* Hero Section */}
      <section className={styles.contactHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            Get in touch with us for any inquiries, support, or to book our healthcare services
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className={styles.mainContactSection}>
        <div className={styles.container}>
          <div className={styles.contactLayout}>
            {/* Left Side - Contact Form */}
            <div className={styles.contactFormSide}>
              <h2 className={styles.sectionTitle}>Send us a message</h2>

              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  {errors.submit && (
                    <div className="error-message" style={{ color: 'red', marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#fee', borderRadius: '4px' }}>
                      {errors.submit}
                    </div>
                  )}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        className={errors.name ? 'error' : ''}
                      />
                      {errors.name && <span className="error-text" style={{ color: 'red', fontSize: '0.875rem', display: 'block', marginTop: '0.25rem' }}>{errors.name}</span>}
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className={errors.phone ? 'error' : ''}
                      />
                      {errors.phone && <span className="error-text" style={{ color: 'red', fontSize: '0.875rem', display: 'block', marginTop: '0.25rem' }}>{errors.phone}</span>}
                    </div>
                    <SubjectSelect
                      value={formData.subject}
                      onChange={handleInputChange}
                      error={errors.subject}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className={errors.message ? 'error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-text" style={{ color: 'red', fontSize: '0.875rem', display: 'block', marginTop: '0.25rem' }}>{errors.message}</span>}
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Right Side - Contact Information */}
            <div className={styles.contactInfoSide}>
              <h3 className={styles.infoTitle}>Contact Information</h3>

              <div className={styles.companyInfo}>
                <h4 className={styles.companyName}>LUNIQ HEALTH PVT LTD</h4>
                <p className={styles.address}>
                  Registered Address: Techno Park Building<br/>
                  34 building number, 2nd Floor, 80 Feet Road<br/>
                  AVS Compound, Koramangala Bangalore-560034
                </p>
              </div>


              <div className={styles.contactUsSection}>
                <h4 className={styles.sectionSubtitle}>Contact Us</h4>
                <ul className={styles.contactList}>
                  <li>Mobile: +91 6366996697 / +91 6366334510</li>
                  {/* <li>Phone: +91 6366996697 / +91 6366334510</li> */}
                  <li>info@luniqhealth.com</li>
                </ul>
              </div>

              <div className={styles.locateUsSection}>
                <h4 className={styles.sectionSubtitle}>Locate Us</h4>
                <ul className={styles.locationList}>
                  <li>Corporate Address: LUNIQ HEALTH PVT LTD, Techno Park Building, 34 building number, 2nd Floor, 80 Feet Road, AVS Compound, Koramangala Bangalore-560034</li>
                  {/* <li>Registered Address: Techno Park Building, 34 building number, 2nd Floor, 80 Feet Road, AVS Compound, Koramangala Bangalore-560034</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890!2d77.6282196!3d12.9368639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzEyLjciTiA3N8KwMzcnNDEuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LUNIQ HEALTH PVT LTD Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
