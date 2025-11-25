import React from 'react';
import HeroSection from './HeroSection';
import MedicalServices from './MedicalServices';
// import NewOffers from './NewOffers';
import Statistics from './Statistics';
import Testimonials from './Testimonials';
import CaseStudies from './CaseStudies';
import Partners from './Partners';
import OperationalCities from './OperationalCities';
import { Helmet } from "react-helmet"; 

const Home: React.FC = () => {
  return (
    <div className="home">
       {/* ✅ SEO Meta Tags */}
       <Helmet>
        <title>Home Healthcare Services in Bengaluru | LUNIQ Health
        </title>
        <meta
          name="description"
          content="Get 24×7 home healthcare in Bengaluru with expert nurses, caretakers, and physiotherapists. Compassionate care at your doorstep from LUNIQ Health."
        />
      </Helmet>
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
