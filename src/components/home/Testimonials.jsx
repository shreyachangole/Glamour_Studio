import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from '../common/SectionTitle';

const StatsOnly = () => {
  const [counts, setCounts] = useState({
    happyClients: 0,
    servicesDone: 0,
    expertStaff: 0,
    yearsExperience: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Animation observer logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const targetValues = {
            happyClients: 100,
            servicesDone: 200,
            expertStaff: 5,
            yearsExperience: 7
          };

          const duration = 1500; 
          const interval = 20; 
          const steps = duration / interval;
          
          Object.keys(targetValues).forEach(key => {
            const target = targetValues[key];
            const stepValue = target / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += stepValue;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounts(prev => ({
                ...prev,
                [key]: Math.floor(current)
              }));
            }, interval);
          });
        }
      },
      { threshold: 0.3 } 
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Achievements" 
          subtitle="By The Numbers" 
        />
        
        {/* Stats Section with Animation */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-pink-600">
              {formatNumber(counts.happyClients)}+
            </div>
            <div className="text-gray-600 mt-2 font-medium">Happy Clients</div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-pink-600">
              {formatNumber(counts.servicesDone)}+
            </div>
            <div className="text-gray-600 mt-2 font-medium">Services Done</div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-pink-600">
              {formatNumber(counts.expertStaff)}+
            </div>
            <div className="text-gray-600 mt-2 font-medium">Expert Staff</div>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl font-bold text-pink-600">
              {formatNumber(counts.yearsExperience)}+
            </div>
            <div className="text-gray-600 mt-2 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsOnly;