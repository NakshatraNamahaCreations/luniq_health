import React from 'react';
import './NewOffers.css';
import physiotherapyImage from '../assets/services_pictures/pysiotherapy.png';
import elderCareImage from '../assets/services_pictures/eldercare.png';
import doctorConsultationImage from '../assets/services_pictures/doctor_consultation.png';

const NewOffers: React.FC = () => {
  const offers = [
    {
      id: 1,
      title: "Physiotherapy",
      description: "Professional physiotherapy services at your doorstep with expert care and personalized treatment plans.",
      offer: "₹100 Off",
      offerColor: "#20b2aa",
      backgroundColor: "linear-gradient(135deg, rgba(32, 178, 170, 0.1), rgba(44, 90, 160, 0.05))",
      image: physiotherapyImage
    },
    {
      id: 2,
      title: "Eldercare",
      description: "Comprehensive elder care services with trained professionals ensuring comfort and well-being.",
      offer: "10% OFF",
      offerColor: "#2c5aa0",
      backgroundColor: "linear-gradient(135deg, rgba(44, 90, 160, 0.1), rgba(32, 178, 170, 0.05))",
      image: elderCareImage
    },
    {
      id: 3,
      title: "Doctor Consultation",
      description: "Expert medical consultation at home with qualified doctors for comprehensive healthcare.",
      offer: "10% Off",
      offerColor: "#20b2aa",
      backgroundColor: "linear-gradient(135deg, rgba(32, 178, 170, 0.1), rgba(44, 90, 160, 0.05))",
      image: doctorConsultationImage
    }
  ];

  return (
    <section className="new-offers">
      <div className="offers-container">
        <div className="offers-header">
          <h2 className="offers-title">Featured Services</h2>
          <p className="offers-subtitle">Comprehensive healthcare services designed for your wellness journey</p>
        </div>
        
        <div className="offers-grid">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className="offer-card"
              style={{ backgroundColor: offer.backgroundColor }}
            >
              <div className="offer-content">
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
                
                <div className="offer-image-container">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="offer-image"
                  />
                </div>
                
                <button className="offer-book-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewOffers;
