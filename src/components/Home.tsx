import React from 'react';
import HeroSection from './HeroSection';
import MedicalServices from './MedicalServices';
// import NewOffers from './NewOffers';
import Statistics from './Statistics';
import Testimonials from './Testimonials';
import CaseStudies from './CaseStudies';
import Partners from './Partners';
import OperationalCities from './OperationalCities';

const Home: React.FC = () => {
  return (
    <div className="home">
      <HeroSection />
      <MedicalServices />
      {/* <NewOffers /> */}
      <Statistics />
      <Testimonials />
      <CaseStudies />
      <Partners />
      <OperationalCities />
    </div>
  );
};

export default Home;
