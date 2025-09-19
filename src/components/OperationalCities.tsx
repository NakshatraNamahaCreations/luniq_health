import React from 'react';
import indiaMap from '../assets/india_map.avif';
import './OperationalCities.css';

const OperationalCities: React.FC = () => {
  return (
    <section className="operational-cities">
      <div className="cities-container">
        <div className="cities-content">
          <div className="cities-left">
            <img 
              src={indiaMap} 
              alt="India Map showing operational cities" 
              className="india-map"
            />
          </div>
          
          <div className="cities-right">
            <h2 className="cities-title">
              We Are Operational In<br />
              <span className="cities-number">5+ Cities</span>
            </h2>
            
            <p className="cities-description">
              Explore the footprint map of LUNIQ's presence in India. 
              With a nation-wide footprint, covering 5+ cities in India, 
              LUNIQ HEALTH continues to aspire to deliver our quality 
              medical care to more customers and support them locally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalCities;














