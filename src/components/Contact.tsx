import React, { useState } from 'react';
import styles from './ContactPage.module.css';

const Contact: React.FC = () => {
  const apiKey = import.meta.env.VITE_BRAVO_API_KEY;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   setIsSubmitted(true);

  //   setTimeout(() => {
  //     setIsSubmitted(false);
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       subject: '',
  //       message: ''
  //     });
  //   }, 3000);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey, // ⚠️ replace with your real key
        },
        body: JSON.stringify({
          sender: { name: "LUNIQ Health Website", email: "info@luniqhealth.com" }, // ✅ must be verified sender
          to: [{ email: "info@luniqhealth.com", name: "LUNIQ HEALTH" }],
          subject: `New Contact Form: ${formData.subject}`,
          htmlContent: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Message:</strong><br/>${formData.message}</p>
          `,
        }),
      });
  
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            phone: "",
            subject: "",
            message: "",
          });
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error("Brevo error:", errorData);
        alert("Failed to send message: " + (errorData.message || "Check console"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message. Check console.");
    }
  };
  

  
  return (
    <div className={styles.contactPage}>
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
                      />
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
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="subject">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="nursing">Nursing Services</option>
                        <option value="caretaker">Care Taker Services</option>
                        {/* <option value="doctor">Doctor Consultation</option> */}
                        <option value="lab">Lab Tests</option>
                        <option value="equipment">Medical Equipment</option>
                        <option value="elder">Elder Care</option>
                        <option value="baby">Baby Care</option>
                        <option value="physiotherapy">Physiotherapy</option>
                        <option value="corporate">Corporate Health</option>
                        <option value="appointment">Book Appointment</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
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
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Send Message
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
                  <li>Phone: +91 6366996697 / +91 6366334510</li>
                  <li>info@luniqhealth.com</li>
                </ul>
              </div>

              <div className={styles.locateUsSection}>
                <h4 className={styles.sectionSubtitle}>Locate Us</h4>
                <ul className={styles.locationList}>
                  <li>Corporate Address: LUNIQ HEALTH PVT LTD, Techno Park Building, 34 building number, 2nd Floor, 80 Feet Road, AVS Compound, Koramangala Bangalore-560034</li>
                  <li>Registered Address: Techno Park Building, 34 building number, 2nd Floor, 80 Feet Road, AVS Compound, Koramangala Bangalore-560034</li>
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
