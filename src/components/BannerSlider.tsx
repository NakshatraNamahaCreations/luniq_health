import React, { useState, useEffect } from 'react';
import doctorKidImage from '../assets/doctor_kid.png';
import secondImage from '../assets/2.png';
import './BannerSlider.css';

const BannerSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: doctorKidImage,
      title: "LUNIQ HEALTH",
      subtitle: "FROM 3 CITIES TO 19 SERVING CITIES",
      brandText: "Is now",
      brandName: "LUNIQ HEALTH",
      tagline: "Life's on +"
    },
    {
      id: 2,
      image: secondImage,
      title: "REGULAR HEALTH",
      subtitle: "MONITORING",
      brandText: "complete health assessment",
      brandName: "LUNIQ HEALTH",
      tagline: "Life's on +"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="banner-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="slide-background">
              <div className="slide-overlay"></div>
            </div>
            
            <div className="slide-content">
              {/* Left side - Image with decorative braces */}
              <div className="slide-left">
                <div className="decorative-brace left-brace">{`{`}</div>
                <div className="slide-image-container">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="slide-image"
                  />
                </div>
                <div className="decorative-brace right-brace">{`}`}</div>
              </div>

              {/* Right side - Content */}
              <div className="slide-content-right">
                <div className="slide-text">
                  <h2 className="slide-title">
                    <span className="title-line">{slide.title}</span>
                    {slide.subtitle && (
                      <span className="title-line">{slide.subtitle}</span>
                    )}
                  </h2>
                  
                  <div className="brand-transition">
                    <p className="transition-text">{slide.brandText}</p>
                    <h1 className="brand-name">
                      <span className="brand-light">LUNIQ</span>
                      <span className="brand-bold">Health</span>
                    </h1>
                    <p className="tagline">
                      {slide.tagline} <span className="cross-symbol">+</span>
                    </p>
                  </div>
                </div>

                {/* Call to Action Button */}
                <div className="slide-cta">
                  <button className="cta-button">
                    <span>Book</span>
                    <span className="arrow">↑</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="slider-nav">
          <button className="nav-arrow left-arrow" onClick={goToPrevious}>‹</button>
          <button className="nav-arrow right-arrow" onClick={goToNext}>›</button>
        </div>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Small Icons */}
        <div className="slider-icons">
          <button className="icon-btn play-icon">▶</button>
          <button className="icon-btn expand-icon">⛶</button>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;



