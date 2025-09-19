import React, { useState , useEffect} from 'react';
import homepage1 from '/homepage1.jpg';
import homepage2 from '/homepage2.webp';
import homepage3 from '/homepage3.webp';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: homepage2,
      title: "",
      subtitle: "",
      brandText: "",
      brandName: "Quality Healthcare Services",
      brandBold: "LUNIQ HEALTH",
      tagline: "Care at The Comfort of Your Home"
    },
    {
      id: 2,
      image: homepage1,
      title: "",
      subtitle: "",
      brandText: "",
      brandName: "",
      brandBold: "EXPERT MEDICAL PROFESSIONALS",
      tagline: "24/7 Healthcare Support"
    },
    {
      id: 3,
      image: homepage3,
      title: "",
      subtitle: "",
      brandText: "",
      brandName: "",
      brandBold: "COMPREHENSIVE HOME CARE",
      tagline: "Your Health, Our Priority"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

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
    <section className="hero-section">
      <div className="hero-slider-container">
        <div 
          className="hero-slider-track"
          style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="hero-slide">
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-background-image"
              />
              <div className="hero-content">
                <div className="hero-text">
              
                  <div className="hero-brand">
                    <div className="brand-text">{slide.brandText}</div>
                    <div className="brand-name">
                      <span className="brand-light">{slide.brandName}</span>
                    </div>
                    <div className="brand-bold">{slide.brandBold}</div>
                    <div className="hero-tagline">
                      {slide.tagline}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="hero-nav">
          <button 
            className="hero-nav-arrow" 
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button 
            className="hero-nav-arrow" 
            onClick={goToNext}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
