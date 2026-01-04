import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const Academy = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Professional Makeup Artistry',
      category: 'makeup',
      duration: '8 weeks',
      level: 'Advanced',
      price: '$999',
      features: ['Airbrush Techniques', 'Bridal Makeup', 'Special Effects', 'Portfolio Development'],
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800'
    },
    {
      id: 2,
      title: 'Hair Styling Masterclass',
      category: 'hair',
      duration: '6 weeks',
      level: 'Intermediate',
      price: '$799',
      features: ['Cutting Techniques', 'Coloring & Bleaching', 'Extensions', 'Business Management'],
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800'
    },
    {
      id: 3,
      title: 'Skincare Specialist',
      category: 'skincare',
      duration: '10 weeks',
      level: 'Professional',
      price: '$1,299',
      features: ['Facial Treatments', 'Chemical Peels', 'Skin Analysis', 'Product Knowledge'],
      image: 'https://images.unsplash.com/photo-1540555700478-403beaf8b4b4?w=800'
    },
    {
      id: 4,
      title: 'Nail Art & Technology',
      category: 'nails',
      duration: '4 weeks',
      level: 'Beginner',
      price: '$599',
      features: ['Gel Application', 'Nail Art Design', 'Spa Treatments', 'Sanitation Protocols'],
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800'
    },
    {
      id: 5,
      title: 'Bridal Beauty Expert',
      category: 'bridal',
      duration: '12 weeks',
      level: 'Advanced',
      price: '$1,499',
      features: ['Bridal Makeup', 'Hair Styling', 'Mehndi Art', 'Client Management'],
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800'
    },
    {
      id: 6,
      title: 'Beauty Business Management',
      category: 'business',
      duration: '8 weeks',
      level: 'All Levels',
      price: '$899',
      features: ['Salon Management', 'Marketing', 'Client Relations', 'Financial Planning'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800'
    }
  ];

  const categories = ['all', 'makeup', 'hair', 'skincare', 'nails', 'bridal', 'business'];
  
  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const instructors = [
    {
      name: 'Sophia Rodriguez',
      specialization: 'Master Makeup Artist',
      experience: '15 years',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400'
    },
    {
      name: 'Michael Chen',
      specialization: 'Celebrity Hair Stylist',
      experience: '12 years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    },
    {
      name: 'Isabella Martinez',
      specialization: 'Skincare Expert',
      experience: '10 years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400'
    }
  ];

  return (
    <div className="academy-page bg-neutral-950 text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 bg-neutral-900 overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -ml-40 -mb-40"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          Aura <span className="text-pink-500">Academy</span>
          </h1>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transform your passion into a high-end career. Master the art of beauty in our premium, luxury-grade studio environment.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(219,39,119,0.4)]">
              <i className="fas fa-file-alt mr-2"></i> Download Brochure
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-pink-500 text-white font-bold rounded-full transition-all">
              <i className="fas fa-calendar mr-2"></i> Schedule Tour
            </button>
          </div>
        </div>
      </div>

      {/* Stats - Dark Contrast */}
      <section className="py-12 bg-neutral-950 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Graduates', val: '500+', color: 'text-pink-500' },
              { label: 'Experience', val: '15+ Yrs', color: 'text-white' },
              { label: 'Placement', val: '98%', color: 'text-pink-500' },
              { label: 'Certifications', val: '10+', color: 'text-white' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-1`}>{stat.val}</div>
                <div className="text-neutral-500 uppercase tracking-widest text-xs font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section - Minimalist Black */}
      <section className="py-10 bg-neutral-950 sticky top-0 z-40 backdrop-blur-md bg-neutral-950/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === category
                    ? 'bg-pink-600 text-white shadow-[0_0_15px_rgba(219,39,119,0.5)]'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid - Cards with Glass Effect */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
             <h2 className="text-3xl font-bold mb-2">Signature Courses</h2>
             <div className="h-1 w-20 bg-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                className="group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-pink-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                    {course.level}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-pink-500 transition-colors">{course.title}</h3>
                    <span className="text-xl font-light text-pink-500">{course.price}</span>
                  </div>
                  
                  <div className="flex items-center text-neutral-500 text-sm mb-6">
                    <i className="far fa-clock mr-2 text-pink-500"></i> {course.duration}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {course.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center text-sm text-neutral-400">
                        <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-3"></span> {f}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4">
                    <button className="flex-1 py-3 bg-white text-black font-bold rounded-lg hover:bg-pink-500 hover:text-white transition-all text-sm uppercase">
                      Enroll Now
                    </button>
                    <button className="p-3 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                      <i className="fas fa-share-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors - Grayscale to Color */}
      <section className="py-20 bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">The Masters</h2>
            <p className="text-neutral-500 mt-2">Learn from world-class industry icons</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {instructors.map((ins, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-neutral-800 group-hover:border-pink-600 transition-all duration-500">
                  <img src={ins.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={ins.name} />
                </div>
                <h4 className="text-xl font-bold mb-1">{ins.name}</h4>
                <p className="text-pink-500 text-sm font-medium mb-2 uppercase tracking-widest">{ins.specialization}</p>
                <p className="text-neutral-500 text-sm">{ins.experience} Experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA - Neon Pink */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pink-600"></div>
        <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            Ready to Build Your <span className="text-pink-500 underline decoration-white/20">Empire?</span>
          </h2>
          <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
            Applications for the Spring 2026 intake are now open. 
            Limited scholarship opportunities available for early applicants.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="w-full sm:w-auto px-12 py-4 bg-white text-black font-black rounded-full hover:bg-pink-500 hover:text-white transition-all transform hover:-translate-y-1">
              APPLY FOR ADMISSION
            </button>
            <button className="text-white font-bold flex items-center gap-2 group">
              Speak with an advisor <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;