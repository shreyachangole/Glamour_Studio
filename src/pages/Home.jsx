import React from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import PortfolioPreview from '../components/home/PortfolioPreview';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div className="home-page fade-in">
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      
      {/* Quick Appointment Section */}
      <section className="py-16 bg-gradient-to-r from-beauty-pink-50 to-beauty-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready for Your Beauty Transformation?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment now and get 15% off on your first visit!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center px-6 py-3 bg-beauty-pink-600 text-white font-semibold rounded-lg hover:bg-beauty-pink-700 transition-colors"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Now: (123) 456-7890
            </a>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;