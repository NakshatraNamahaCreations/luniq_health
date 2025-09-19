import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Statistics.css';

const Statistics: React.FC = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    cities: 0,
    lives: 0
  });

  const targetCounts = {
    experience: 7,
    cities: 5,
    lives: 50
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const animateCount = (key: keyof typeof targetCounts) => {
      const target = targetCounts[key];
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    };

    // Start all animations
    Object.keys(targetCounts).forEach(key => {
      animateCount(key as keyof typeof targetCounts);
    });
  }, []);

  return (
    <section className="human-care-experts">
      <div className="experts-container">
        <div className="content-left">
          <h2 className="experts-title">Human Care Experts</h2>
          <div className="content-text">
            <p>
              LUNIQ Health was founded with a vision to provide exceptional healthcare services 
              across India. Starting with our flagship facility, we have grown to become one of 
              India's leading healthcare groups, committed to delivering world-class medical care 
              to millions of patients.
            </p>
            <p>
              Our core values center around a "patient-first" approach, where every  registered nurse ,doctor, trained attendant at 
              LUNIQ Health is a "human care expert." We believe in going above and beyond the 
              call of duty, treating every single life as priceless. Our stories are filled with 
              grit, determination, and never giving up. Join us on a journey to discover stories 
              that reinforce your belief in 'Life's On'.
            </p>
            <div className="read-more-container">
              <Link to="/about" className="read-more-btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
        
        <div className="stats-right">
          <div className="expert-number-layout">
            <div className="stat-item">
              <div className="montserrat-Bold">
                <span className="increment-count-anim count-plus montserrat-Bold">
                  {counts.experience}+
                </span>
              </div>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr className="stat-line" />
            <div className="stat-item">
              <div className="montserrat-Bold">
                <span className="increment-count-anim montserrat-Bold">
                  {counts.cities}+
                </span>
              </div>
              <p>SERVING CITIES</p>
            </div>
            <hr className="stat-line" />
            <div className="stat-item">
              <div className="montserrat-Bold">
                <span className="increment-count-anim count-plus montserrat-Bold">
                  {counts.lives}
                </span>
              </div>
              <p>THOUSAND LIVES TOUCHED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
