import React from 'react';
import './Partners.css';
import logo1 from '../assets/partners/logo1.avif';
import logo2 from '../assets/partners/logo2.avif';
import logo3 from '../assets/partners/logo3.avif';
import logo4 from '../assets/partners/logo4.avif';
import logo5 from '../assets/partners/logo5.avif';
import logo6 from '../assets/partners/logo6.avif';
import logo7 from '../assets/partners/logo7.avif';

const Partners: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: "Partner 1",
      logo: logo1
    },
    {
      id: 2,
      name: "Partner 2",
      logo: logo2
    },
    {
      id: 3,
      name: "Partner 3",
      logo: logo3
    },
    {
      id: 4,
      name: "Partner 4",
      logo: logo4
    },
    {
      id: 5,
      name: "Partner 5",
      logo: logo5
    },
    {
      id: 6,
      name: "Partner 6",
      logo: logo6
    },
    {
      id: 7,
      name: "Partner 7",
      logo: logo7
    },
    
  ];

  return (
    <section className="partners">
      <div className="partners-container">
        <div className="partners-header">
          <h2 className="partners-title">Our Trusted Partners</h2>
          <p className="partners-subtitle">
            We work with leading healthcare organizations to provide the best care
          </p>
        </div>
        
        <div className="partners-marquee">
          <div className="partners-track">
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="partner-item">
                <div className="partner-logo-container">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="partner-logo"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;













