import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import First from '../../assets/Hero_section/image1.png'

import sec from '../../assets/Hero_section/image2.png'
import forth from '../../assets/Hero_section/image4.png'
import third from '../../assets/Hero_section/image3.png'
const slides = [
  {
    id: '01',
    title: "Discover Your",
    name: "Radiance Within",
    description:
      "Experience premium beauty services in a serene environment. Our expert stylists are dedicated to enhancing your natural beauty.",
    image: sec,       // ✔ correct
    bgColor: "#E8D1C5",
    theme: "luxury",
    cta: "Explore Services",
    stats: [
      { value: "100+", label: "Happy Clients" },
      { value: "200+", label: "Expert Stylists" },
      { value: "07+", label: "Years Experience" }
    ]
  },

  { 
    id: '02',
    title: "Premium",
    name: "BEAUTY SERVICES",
    description:
      "From hair styling to skincare treatments, indulge in our comprehensive range of beauty services using premium products and the latest techniques for stunning results.",
    image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3",         // ✔ use imported image2
    bgColor: "#F4E9E1",
    theme: "services",
    cta: "View All Services",
    highlights: ["Hair Styling", "Skincare", "Spa Treatments", "Nail Art"]
  },

  {
    id: '03',
    title: "Luxury Bridal",
    name: "MAKEUP STUDIO",
    description:
      "Our bridal makeup studio offers custom bridal packages, pre-wedding skincare, and trial sessions to ensure you look absolutely flawless on your special day.",
    image: third,       // ✔ use imported image3
    bgColor: "#F5F0EB",
    theme: "bridal",
    cta: "Bridal Packages"
  },

  {
    id: '04',
    title: "Professional",
    name: "MAKEUP ACADEMY",
    description:
      "Join our professional makeup courses taught by industry experts. Learn bridal, fashion, SFX makeup, and build a successful career in the beauty industry.",
    image: First,       // ✔ put correct imported image
    bgColor: "#F3E7DD",
    theme: "academy",
    cta: "Enroll Now"
  }
];


const AnimatedHero = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-pink-50">
      
      {/* Left Sidebar Text */}
      <div className="hidden md:flex absolute left-8 h-full items-center z-20">
        <p className="transform -rotate-90 origin-left text-gray-400 text-xs tracking-[0.3em] uppercase whitespace-nowrap">
          Nikita changole makeover
        </p>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-10 z-20 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 active:scale-95"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-10 z-20 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110 active:scale-95"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Auto-play Toggle */}
      <button 
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 md:top-10 md:right-20 z-20 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-all"
        title={isAutoPlaying ? "Pause auto-play" : "Play auto-play"}
      >
        <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
          {isAutoPlaying ? (
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          ) : (
            <path d="M8 5v14l11-7z"/>
          )}
        </svg>
      </button>

      {/* Main Slider Content */}
      <div className="container mx-auto px-6 md:px-20 z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Text Side */}
            <div className="max-w-xl space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-widest uppercase rounded-full bg-[#D14D72]/10 text-[#D14D72]">
                  {slides[current].theme === 'luxury' && 'Luxury Beauty Parlor'}
                  {slides[current].theme === 'services' && 'Premium Services'}
                  {slides[current].theme === 'bridal' && 'Bridal Special'}
                  {slides[current].theme === 'academy' && 'Professional Academy'}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                  {slides[current].title} <br />
                  <span className="text-[#D14D72]">{slides[current].name}</span>
                </h1>
                <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-md">
                  {slides[current].description}
                </p>
              </motion.div>

              {/* Stats for first slide */}
              {slides[current].theme === 'luxury' && slides[current].stats && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-3 gap-8 pt-6 border-t border-gray-200"
                >
                  {slides[current].stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-[#D14D72]">{stat.value}</div>
                      <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Service highlights for services slide */}
              {slides[current].theme === 'services' && slides[current].highlights && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="pt-6 border-t border-gray-200"
                >
                  <div className="flex flex-wrap gap-3">
                    {slides[current].highlights.map((service, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 bg-gradient-to-r from-pink-50 to-purple-50 text-gray-700 text-sm font-medium rounded-full border border-pink-100"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5 }}
                className="pt-6 flex flex-wrap gap-4"
              >
                <Link 
                  to={slides[current].theme === 'services' ? "/services" : 
                       slides[current].theme === 'bridal' ? "/services" : 
                       slides[current].theme === 'academy' ? "/academy" : "/services"}
                  className="bg-[#D14D72] text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2"
                >
                  {slides[current].cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link 
                  to="/contact"
                  className="border-2 border-[#D14D72] text-[#D14D72] px-8 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg hover:bg-[#D14D72] hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </div>

            {/* Image Side */}
            <div className="relative flex justify-center">
              {/* Animated Background Block */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{ backgroundColor: slides[current].bgColor }}
                className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-full h-full z-0 origin-left rounded-2xl"
              />
              
              {/* Main Image Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 shadow-2xl overflow-hidden group rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                
                <img 
                  src={slides[current].image}
                  alt={slides[current].name}
                  className="w-full max-w-[500px] h-[500px] md:h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
                  onError={(e) => { 
                    e.target.src = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop'; 
                  }}
                />
                
                {/* Floating Opening Hours */}
                {slides[current].theme === 'luxury' && (
                  <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-800">Open Now</div>
                      <div className="text-xs text-gray-600 mt-1">9:00 AM - 8:00 PM</div>
                    </div>
                  </div>
                )}
                
                {/* Image Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg z-20 shadow-md">
                  <span className="text-sm font-medium text-gray-800 flex items-center gap-2">
                    {slides[current].theme === 'luxury' && '✨ Luxury Experience'}
                    {slides[current].theme === 'services' && '💅 Premium Care'}
                    {slides[current].theme === 'bridal' && '👰 Bridal Special'}
                    {slides[current].theme === 'academy' && '🎓 Certified Courses'}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrent(index)}
              className="relative"
            >
              <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ 
                    width: current === index ? '100%' : '0%',
                    transition: { 
                      duration: current === index ? 5 : 0,
                      ease: "linear" 
                    }
                  }}
                  className={`h-full ${current === index ? 'bg-[#D14D72]' : ''}`}
                />
              </div>
            </button>
            
          ))}
          
        </div>
      </div>

      {/* Right Side Slider Indicators */}
      <div className="absolute right-8 hidden lg:flex flex-col space-y-8 items-center text-sm font-medium z-20">
        {slides.map((slide, index) => (
          <button 
            key={slide.id}
            onClick={() => setCurrent(index)}
            className="flex flex-col items-center group relative"
          >
            <span className={`transition-all duration-300 text-lg ${
              current === index ? 'text-[#D14D72] font-bold' : 'text-gray-400 group-hover:text-gray-600'
            }`}>
              {slide.id}
            </span>
            <div className={`w-[2px] h-8 mt-2 transition-all duration-500 ${
              current === index ? 'bg-[#D14D72]' : 'bg-gray-200 group-hover:bg-gray-400'
            }`} />
            
            <div className="absolute right-full mr-4 top-0 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {slide.theme.charAt(0).toUpperCase() + slide.theme.slice(1)}
            </div>
          </button>
        ))}
      </div>

    

    </section>
  );
};

export default AnimatedHero;