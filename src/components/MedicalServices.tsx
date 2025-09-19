import React from 'react';
import './MedicalServices.css';
import { useEnquire } from '../contexts/EnquireContext';
import babyCare from '../assets/services_pictures/babycare.png';
import corporateHealth from '../assets/services_pictures/copporate_health.png';
import elderCare from '../assets/services_pictures/eldercare.png';
import intensiveCare from '../assets/services_pictures/intensive_care.png';
import labTest from '../assets/services_pictures/lab_test.png';
import medicalEquipment from '../assets/services_pictures/medical_equipment.png';
import nursing from '../assets/services_pictures/nursing.png';
import physiotherapy from '../assets/services_pictures/pysiotherapy.png';
import trainedCaretakers from '../assets/services_pictures/trained_caretakers.png';

const MedicalServices: React.FC = () => {
  const { openModal } = useEnquire();
  const services = [
    {
      id: 1,
      title: "Trained Attendants",
      image: trainedCaretakers,
      description: "Professional trained attendants for continuous patient support"
    },
    {
      id: 2,
      title: "Nursing Care",
      image: nursing,
      description: "Professional nursing care and medical assistance at your doorstep"
    },
    {
      id: 3,
      title: "Physiotherapy",
      image: physiotherapy,
      description: "Rehabilitation and physiotherapy services for recovery and wellness"
    },
    {
      id: 4,
      title: "Medical Equipment",
      image: medicalEquipment,
      description: "Advanced medical equipment rental and support services"
    },
    {
      id: 5,
      title: "Critical Care",
      image: intensiveCare,
      description: "Critical care and intensive medical support at home"
    },
    {
      id: 6,
      title: "Baby Care",
      image: babyCare,
      description: "Specialized care for mothers and newborns with expert guidance"
    },
    {
      id: 7,
      title: "Elder Care",
      image: elderCare,
      description: "Comprehensive healthcare services tailored for elderly patients"
    },
    {
      id: 8,
      title: "Lab Testing",
      image: labTest,
      description: "Comprehensive laboratory testing and diagnostic services"
    },
    {
      id: 9,
      title: "Corporate Health",
      image: corporateHealth,
      description: "Workplace health programs and corporate wellness services"
    }
  ];

  return (
    <section className="medical-services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Medical Services Offered At LUNIQ</h2>
          <p className="services-description">
            LUNIQ Health offers a variety of healthcare services in the comfort of our patient's homes including:
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-image"
                />
                <div className="image-overlay">
                  <h3 className="service-title">{service.title}</h3>
                  <button 
                    className="enquire-now-btn"
                    onClick={() => openModal(service.title)}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default MedicalServices;
