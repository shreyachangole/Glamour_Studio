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
    <div className="academy-page">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-beauty-pink-50 to-beauty-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Glamour <span className="text-beauty-pink-600">Academy</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your passion for beauty into a professional career. 
            Learn from industry experts and gain hands-on experience in our state-of-the-art academy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="large">
              <i className="fas fa-file-alt mr-2"></i>
              Download Brochure
            </Button>
            <Button variant="outline" size="large">
              <i className="fas fa-calendar mr-2"></i>
              Schedule Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Academy Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-beauty-pink-600 mb-2">500+</div>
              <div className="text-gray-600">Graduates</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-beauty-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-beauty-pink-500 to-beauty-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                {category === 'all' ? 'All Courses' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Courses"
            subtitle="Professional Beauty Training"
          />
          
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <i className="fas fa-graduation-cap text-4xl text-gray-300 mb-4"></i>
              <p className="text-gray-500 text-lg">No courses found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div 
                  key={course.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {course.level}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <i className="fas fa-clock mr-2"></i>
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-beauty-pink-600">{course.price}</div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <i className="fas fa-check text-beauty-pink-500 mr-2 text-xs"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-3">
                      <Button variant="primary" className="flex-1">
                        <i className="fas fa-info-circle mr-2"></i>
                        Details
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <i className="fas fa-calendar mr-2"></i>
                        Enroll
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Meet Our Instructors"
            subtitle="Industry Experts"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden text-center group"
              >
                <div className="relative h-64">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-0 right-0">
                      <div className="flex justify-center space-x-4">
                        <a href="#" className="text-white hover:text-beauty-pink-300">
                          <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="text-white hover:text-beauty-pink-300">
                          <i className="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="#" className="text-white hover:text-beauty-pink-300">
                          <i className="fab fa-twitter text-xl"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{instructor.name}</h4>
                  <p className="text-beauty-pink-600 mb-3">{instructor.specialization}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <i className="fas fa-briefcase mr-2"></i>
                    {instructor.experience} experience
                  </div>
                  <p className="text-gray-600 text-sm">
                    Passionate educator dedicated to mentoring the next generation of beauty professionals.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Academy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Choose Our Academy?"
            subtitle="Advantages of Learning With Us"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-beauty-pink-100 rounded-full flex items-center justify-center text-beauty-pink-600 text-2xl mb-4">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Hands-on Training</h4>
              <p className="text-gray-600">Practical sessions with real clients and equipment</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-beauty-purple-100 rounded-full flex items-center justify-center text-beauty-purple-600 text-2xl mb-4">
                <i className="fas fa-certificate"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Industry Certification</h4>
              <p className="text-gray-600">Globally recognized certificates upon completion</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-2xl mb-4">
                <i className="fas fa-briefcase"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Career Support</h4>
              <p className="text-gray-600">Placement assistance and job referrals</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mb-4">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Small Class Sizes</h4>
              <p className="text-gray-600">Personalized attention and mentorship</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-beauty-pink-600 to-beauty-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Beauty Career Today!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Limited seats available for our upcoming batches. Enroll now to secure your spot!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="large" className="bg-white text-beauty-pink-600 hover:bg-gray-100">
              <i className="fas fa-file-signature mr-2"></i>
              Apply Now
            </Button>
            <Button variant="outline" size="large" className="border-white text-white hover:bg-white/10">
              <i className="fas fa-phone mr-2"></i>
              Call for Inquiry
            </Button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-white mb-2">Early Bird Discount</div>
              <div className="text-white/90">20% off if you enroll before next month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-white mb-2">Flexible Payment</div>
              <div className="text-white/90">Installment plans available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-2xl font-bold text-white mb-2">Free Workshop</div>
              <div className="text-white/90">Join our free introductory workshop</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;