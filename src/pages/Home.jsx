import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import PortfolioPreview from '../components/home/PortfolioPreview';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },);
  return (
    <div className="home-page fade-in">
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      
      
    </div>
  );
};

export default Home;