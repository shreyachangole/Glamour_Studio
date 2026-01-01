import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/services/ServiceCard';
import { servicesData } from '../data/servicesData';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair-styling', label: 'Hair Services' },
    { id: 'makeup', label: 'Makeup' },
    { id: 'facial', label: 'Skin Care' },
    { id: 'manicure-pedicure', label: 'Nail Care' },
    { id: 'waxing', label: 'Hair Removal' },
    { id: 'bridal-packages', label: 'Bridal' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.id === selectedCategory);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-beauty-pink-50 to-beauty-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Premium Beauty <span className="text-beauty-pink-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our wide range of professional beauty services designed to enhance your 
              natural beauty and boost your confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="large">
                <i className="fas fa-calendar-alt mr-2"></i>
                Book Appointment
              </Button>
              <Button variant="outline" size="large">
                <i className="fas fa-phone mr-2"></i>
                Call: (123) 456-7890
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-beauty-pink-500 to-beauty-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Services"
            subtitle="Professional Beauty Solutions"
          />
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <i className="fas fa-spa text-4xl text-gray-300 mb-4"></i>
              <p className="text-gray-500 text-lg">No services found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard 
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  details={service.details}
                  link={`/services/${service.id}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Special Packages"
            subtitle="Best Value Deals"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-beauty-pink-600 text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Silver Package</h3>
              <div className="text-3xl font-bold text-gray-800 mb-6">$199<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>2 Hair Styling Sessions</span>
                </li>
                <li className="flex items-center justify-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>1 Facial Treatment</span>
                </li>
                <li className="flex items-center justify-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Manicure & Pedicure</span>
                </li>
              </ul>
              <Button variant="primary" className="w-full">
                Choose Package
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-beauty-pink-500 to-beauty-purple-600 rounded-2xl shadow-xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-white text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-white mb-4">Gold Package</h3>
              <div className="text-3xl font-bold text-white mb-6">$399<span className="text-lg text-white/80">/month</span></div>
              <ul className="space-y-3 mb-8 text-white/90">
                <li className="flex items-center justify-center">
                  <i className="fas fa-check text-white mr-2"></i>
                  <span>Unlimited Hair Services</span>
                </li>
                <li className="flex items-center justify-center">
                  <i className="fas fa-check text-white mr-2"></i>
                  <span>4 Facial Treatments</span>
                </li>
                <li className="flex items-center justify-center">
                  <i className="fas fa-check text-white mr-2"></i>
                  <span>Full Body Waxing</span>
                </li>
                <li className="flex items-center justify-center">
                  <i className="fas fa-check text-white mr-2"></i>
                  <span>Free Products</span>
                </li>
              </ul>
              <Button variant="secondary" className="w-full bg-white text-beauty-pink-600 hover:bg-gray-100">
                Choose Package
              </Button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-beauty-purple-600 text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Platinum Package</h3>
              <div className="text-3xl font-bold text-gray-800 mb-6">$699<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>All Services Unlimited</span>
                </li>
                <li className="flex items-center justify-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Personal Beauty Consultant</span>
                </li>
                <li className="flex items-center justify-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Priority Booking</span>
                </li>
                <li className="flex items-center justify-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>Free Home Service</span>
                </li>
              </ul>
              <Button variant="primary" className="w-full">
                Choose Package
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Choose Glamour Studio?"
            subtitle="The Beauty Difference"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-beauty-pink-100 rounded-full flex items-center justify-center text-beauty-pink-600 text-2xl mb-4">
                <i className="fas fa-award"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Certified Experts</h4>
              <p className="text-gray-600">All our beauty professionals are certified and continuously trained.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-beauty-purple-100 rounded-full flex items-center justify-center text-beauty-purple-600 text-2xl mb-4">
                <i className="fas fa-star"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Premium Products</h4>
              <p className="text-gray-600">We use only top-quality, professional-grade beauty products.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-2xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Hygiene First</h4>
              <p className="text-gray-600">Sterilized equipment and strict hygiene protocols for your safety.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Personalized Care</h4>
              <p className="text-gray-600">Customized treatments tailored to your unique beauty needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-beauty-pink-600 to-beauty-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Your Beauty Transformation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the Glamour Studio difference!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="large" className="bg-white text-beauty-pink-600 hover:bg-gray-100">
              <Link to="/contact">
                <i className="fas fa-calendar-check mr-2"></i>
                Book Appointment
              </Link>
            </Button>
            <Button variant="outline" size="large" className="border-white text-white hover:bg-white/10">
              <Link to="/portfolio">
                <i className="fas fa-images mr-2"></i>
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;