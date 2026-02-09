import React, { useState } from 'react';
import './BookAppointment.css';
import { API_URL } from '../utils/api';
import DepartmentSelect from './DepartmentSelect';

const BookAppointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appointmentDate: '',
    department: '',
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

    // Validate phone - REQUIRED
    if (!formData.phone || !formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }

    // Validate appointment date - REQUIRED
    if (!formData.appointmentDate || !formData.appointmentDate.trim()) {
      newErrors.appointmentDate = 'Appointment date is required';
    } else {
      const selectedDate = new Date(formData.appointmentDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.appointmentDate = 'Appointment date cannot be in the past';
      }
    }

    // Validate department - REQUIRED
    if (!formData.department || !formData.department.trim()) {
      newErrors.department = 'Please select a department';
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

    // Validate required fields before submission
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
        // Reset form with correct field names
        setFormData({
          name: '',
          phone: '',
          appointmentDate: '',
          department: '',
          message: ''
        });
        setErrors({});
      } else {
        const errorMessage = result?.message || result?.error || 'Failed to submit appointment. Please try again.';
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
            {errors.submit && (
              <div className="error-message" style={{ color: 'red', marginBottom: '1rem' }}>
                {errors.submit}
              </div>
            )}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Your Name <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  Your Phone <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone"
                  required
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="appointmentDate">
                  Appointment Date <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  placeholder="Appointment Date"
                  required
                  className={errors.appointmentDate ? 'error' : ''}
                />
                {errors.appointmentDate && <span className="error-text">{errors.appointmentDate}</span>}
              </div>
              <DepartmentSelect
                value={formData.department}
                onChange={handleInputChange}
                error={errors.department}
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">
                Message <span style={{ color: 'red' }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                required
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={4}
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Make an Appointment'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;