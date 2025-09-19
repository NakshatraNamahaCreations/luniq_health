import React, { useState, useEffect } from 'react';
import './CaseStudies.css';
import case1 from '../assets/case_studies/case1.avif';
import case2 from '../assets/case_studies/case2.avif';
import case3 from '../assets/case_studies/case3.avif';
import case4 from '../assets/case_studies/case4.avif';
import case5 from '../assets/case_studies/case5.avif';
import case6 from '../assets/case_studies/case6.avif';
import case7 from '../assets/case_studies/case7.avif';
import case8 from '../assets/case_studies/case8.avif';
import case9 from '../assets/case_studies/case9.avif';
import case10 from '../assets/case_studies/case10.avif';

const CaseStudies: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Diagnosis with Covid-19",
      description: "This 75 year old, female patient was diagnosed with Covid-19, and admitted in this multi-specialty hospital for comprehensive care and treatment.",
      date: "21 July",
      image: case1
    },
    {
      id: 2,
      title: "Diagnosed with Acute Demyelinating Encephalopathy",
      description: "This 32 year old, female patient diagnosed with acute demyelinating encephalopathy and seizure disorders requiring specialized neurological care.",
      date: "07 June",
      image: case2
    },
    {
      id: 3,
      title: "Case of Lung Cancer",
      description: "This 63 year old, male patient, hailing from Bangladesh, a case of lung cancer with metastases, was admitted for comprehensive oncology treatment.",
      date: "10 Apr",
      image: case3
    },
    {
      id: 4,
      title: "ICU Setup At Home With Efficient Nursing",
      description: "This 77 year old, female patient was diagnosed of having pneumonia with recurrent urosepsis requiring intensive home care setup.",
      date: "16 June",
      image: case4
    },
    {
      id: 5,
      title: "Having Viral Pneumonia with Severe ARDS, CKD",
      description: "This 63 year old, male patient was diagnosed of having viral pneumonia with severe ARDS (Acute Respiratory Distress Syndrome) and CKD.",
      date: "13 May",
      image: case5
    },
    {
      id: 6,
      title: "Seizures Leading to Neurological Issues",
      description: "This 85 year old, male patient had a fall, followed by seizures leading to neurological issues requiring specialized neurological intervention.",
      date: "17 Jan",
      image: case6
    },
    {
      id: 7,
      title: "Diagnosed case of Post covid Lung fibrosis",
      description: "This 33 year old, female patient, which is a diagnosed case of Post covid Lung fibrosis and Respiratory sepsis with shock requiring critical care.",
      date: "29 Aug",
      image: case7
    },
    {
      id: 8,
      title: "Post covid Lung fibrosis and Respiratory sepsis",
      description: "This 33 year old, male patient was diagnosed with Post covid Lung fibrosis and Respiratory sepsis requiring comprehensive respiratory care.",
      date: "20 Sept",
      image: case8
    },
    {
      id: 9,
      title: "How Continuous & Timely Medical Assessments Help",
      description: "This 40 year old, male patient was diagnosed with Post Covid Lung fibrosis. With OSA (Obstructive Sleep Apnea) requiring continuous monitoring.",
      date: "19 July",
      image: case9
    },
    {
      id: 10,
      title: "A Tracheostomy Patient's Journey From Critical Care",
      description: "This 67 year old, female patient admitted in this multi-specialty hospital in Bengaluru was diagnosed with caustic injury requiring specialized care.",
      date: "28 Dec",
      image: case10
    }
  ];

  const slidesToShow = 3;
  const totalSlides = caseStudies.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (totalSlides - slidesToShow + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (totalSlides - slidesToShow + 1)) % (totalSlides - slidesToShow + 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (totalSlides - slidesToShow + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="case-studies">
      <div className="case-studies-container">
        <div className="case-studies-header">
          <h2 className="case-studies-title">Case Studies</h2>
        </div>
        
        <div className="case-studies-slider">
          <button 
            className="slider-arrow slider-arrow-left" 
            onClick={prevSlide}
            aria-label="Previous case studies"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="slider-wrapper">
            <div 
              className="slider-track"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`
              }}
            >
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="case-card">
                  <a href="#" className="case-card-link">
                    <div className="case-image-container">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title}
                        className="case-image"
                      />
                      <div className="case-date-label">
                        <span className="date-number">{caseStudy.date.split(' ')[0]}</span>
                        <span className="date-month">{caseStudy.date.split(' ')[1]}</span>
                      </div>
                    </div>
                    <h3 className="case-title">{caseStudy.title}</h3>
                    <p className="case-description">{caseStudy.description}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="slider-arrow slider-arrow-right" 
            onClick={nextSlide}
            aria-label="Next case studies"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;













