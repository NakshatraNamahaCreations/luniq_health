import React, { useState } from 'react';
import './BookAppointment.css';

const BookAppointment: React.FC = () => {
  const apiKey = import.meta.env.VITE_BRAVO_API_KEY;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appointmentDate: '',
    department: '',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "api-key": apiKey, // ⚠️ replace with real API key
        },
        body: JSON.stringify({
          sender: {
            name: "LUNIQ Health Website",
            email: "info@luniqhealth.com" // ✅ must be verified sender in Brevo
          },
          to: [
            { email: "info@luniqhealth.com", name: "LUNIQ HEALTH" }
          ],
          subject: `New Appointment Request - ${formData.department}`,
          htmlContent: `
            <h2>New Appointment Request</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Appointment Date:</strong> ${formData.appointmentDate}</p>
            <p><strong>Department:</strong> ${formData.department}</p>
            <p><strong>Message:</strong> ${formData.message || "N/A"}</p>
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
            appointmentDate: "",
            department: "",
            message: ""
          });
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error("Brevo error:", errorData);
        alert("Failed to send appointment request: " + (errorData.message || "Check console"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending appointment request. Check console.");
    }
  };
  

  const departments = [
    
    'Nursing Care',
    'Lab Tests',
    'Medical Equipment',
    'Physiotherapy',
    'Elder Care',
    'Baby Care',
    'Intensive Care',
    'Corporate Health',
    'Trained Caretakers'
  ];

  return (
    <div className="book-appointment-page">
      <div className="appointment-container">
        <div className="appointment-header">
          <h1 className="appointment-title">Make an Appointment</h1>
          <div className="title-underline"></div>
          <p className="appointment-subtitle">
            You should make an appointment by calling or by email.
          </p>
        </div>

        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <h3>Appointment Requested!</h3>
            <p>Your appointment request has been submitted successfully. We'll contact you soon to confirm.</p>
          </div>
        ) : (
          <form className="appointment-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  placeholder="Appointment Date"
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message (Optional)"
                rows={4}
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button">
                Make an Appointment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;