import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, DollarSign } from 'lucide-react';

const ServicesPreview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const servicesData = [
    {
      id: 1,
      title: "Hair Styling & Coloring",
      description: "Transform your look with our expert hair styling, cutting, and professional coloring services. Our master stylists create customized looks.",
    //   icon: "💇‍♀️",
      imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&h=900&fit=crop&q=80",
      duration: "1-3 hours",
      price: "From $85"
    },
    {
      id: 2,
      title: "Makeup Artistry",
      description: "Professional makeup services for any occasion. Our certified makeup artists specialize in creating flawless looks from natural to glam.",
    //   icon: "💄",
      imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&h=900&fit=crop&q=80",
      duration: "45 min - 2h",
      price: "From $65"
    },
    {
      id: 3,
      title: "Skincare Treatments",
      description: "Rejuvenate your skin with our advanced facial treatments and personalized regimens by licensed estheticians.",
    //   icon: "✨",
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&h=900&fit=crop&q=80",
      duration: "60-90 min",
      price: "From $95"
    },
    {
      id: 4,
      title: "Nail Care & Artistry",
      description: "Express your style with our premium nail services. From classic manicures to intricate nail art designs in a hygienic environment.",
    //   icon: "💅",
      imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600&h=900&fit=crop&q=80",
      duration: "45 min - 2h",
      price: "From $45"
    },
    {
      id: 5,
      title: "Bridal Beauty Package",
      description: "Complete bridal beauty package for your special day. Includes hair styling, makeup, and nail services for a breathtaking look.",
    //   icon: "👰",
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=900&fit=crop&q=80",
      duration: "3-5 hours",
      price: "From $350"
    }
  ];

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % servicesData.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, servicesData.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + servicesData.length) % servicesData.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, servicesData.length]);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isVisible, nextSlide]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 px-4 md:px-8 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        
        {/* Compact Rectangle Hero Card */}
        <div className="relative h-[480px] md:h-[520px] w-full bg-gray-900 overflow-hidden shadow-xl">
          
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Full Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex items-center p-8 md:p-16">
                <div className="max-w-md text-white space-y-4">
                  
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="text-rose-400 font-bold tracking-widest uppercase text-[10px]">
                      Service 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-300 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="flex gap-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-rose-500" />
                      <span className="text-xs font-medium tracking-wide">{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-rose-500" />
                      <span className="text-xs font-medium tracking-wide">{service.price}</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      to={`/services`}
                      className="inline-block px-8 py-4 bg-rose-600 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-rose-700 transition-all"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation - Locked to Bottom Right */}
          <div className="absolute bottom-0 right-0 flex z-20">
            <button
              onClick={prevSlide}
              className="p-6 bg-black/40 backdrop-blur-md text-white hover:bg-rose-600 transition-all border-t border-r border-white/10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-6 bg-black/60 backdrop-blur-md text-white hover:bg-rose-600 transition-all border-t border-white/10"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer Navigation Info */}
        <div className="mt-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <div className="flex gap-5">
            {servicesData.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentSlide(idx)}
                className={`transition-colors duration-300 ${idx === currentSlide ? 'text-rose-600 scale-110' : 'text-gray-300 hover:text-gray-500'}`}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
          <Link to="/services" className="hover:text-rose-600 transition-colors border-b border-transparent hover:border-rose-600 pb-1">
            Explore All Services —&gt;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;