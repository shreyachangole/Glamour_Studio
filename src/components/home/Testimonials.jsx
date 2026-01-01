import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="What Our Clients Say"
          subtitle="Testimonials"
        />
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name}
                className="w-24 h-24 rounded-full object-cover border-4 border-pink-100"
              />
              
              <div className="flex-grow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fas fa-star ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    ></i>
                  ))}
                </div>
                
                <p className="text-gray-600 text-lg italic mb-6">
                  "{testimonials[activeIndex].content}"
                </p>
                
                <div>
                  <h4 className="font-bold text-xl">{testimonials[activeIndex].name}</h4>
                  <p className="text-pink-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <i className="fas fa-chevron-left text-pink-600"></i>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <i className="fas fa-chevron-right text-pink-600"></i>
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-pink-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-pink-600">500+</div>
            <div className="text-gray-600 mt-2">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-pink-600">1000+</div>
            <div className="text-gray-600 mt-2">Services Done</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-pink-600">50+</div>
            <div className="text-gray-600 mt-2">Expert Staff</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-pink-600">15+</div>
            <div className="text-gray-600 mt-2">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
