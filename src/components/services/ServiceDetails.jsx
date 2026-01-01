import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const ServiceDetails = ({ service }) => {
  return (
    <div className="service-details">
      {/* Hero Section */}
      <div className="relative py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block text-5xl mb-4">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {service.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" size="large">
                <i className="fas fa-calendar-alt mr-2"></i>
                Book Appointment
              </Button>
              <Button variant="outline" size="large">
                <i className="fas fa-phone mr-2"></i>
                Call to Book
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Service Details
              </h2>
              
              <div className="prose max-w-none">
                <p className="text-gray-600 text-lg mb-6">
                  {service.details.longDescription}
                </p>
                
                <div className="bg-pink-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.details.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fas fa-check text-pink-600 mr-3"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-pink-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Consultation</h4>
                        <p className="text-gray-600">Discuss your requirements and preferences</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-pink-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Preparation</h4>
                        <p className="text-gray-600">Prepare the area and gather necessary materials</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-pink-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Service</h4>
                        <p className="text-gray-600">Professional execution by our experts</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-pink-600 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Aftercare</h4>
                        <p className="text-gray-600">Guidance and tips for maintenance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24">
                {/* Price Card */}
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Service Package</h3>
                  <div className="text-4xl font-bold mb-2">{service.details.price}</div>
                  <p className="text-pink-100 mb-6">Starting price</p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Duration</span>
                      <span className="font-semibold">{service.details.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Expert Level</span>
                      <span className="font-semibold">Professional</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Materials</span>
                      <span className="font-semibold">Premium</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-3 bg-white text-pink-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                    Book This Service
                  </button>
                </div>

                {/* Additional Info */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-4">Quick Info</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <i className="fas fa-clock text-pink-500 mr-3"></i>
                      <span>Duration: {service.details.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-dollar-sign text-pink-500 mr-3"></i>
                      <span>Price: {service.details.price}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-user text-pink-500 mr-3"></i>
                      <span>Expert Staff Available</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-shield-alt text-pink-500 mr-3"></i>
                      <span>Hygiene Certified</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-bold text-gray-800 mb-3">Need Help?</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Have questions about this service? Contact our beauty consultants.
                    </p>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center justify-center w-full py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <i className="fas fa-comment-alt mr-2"></i>
                      Contact Consultant
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Experience {service.title}?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment today and let our experts enhance your beauty.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="large">
              <i className="fas fa-calendar-check mr-2"></i>
              Book Now
            </Button>
            <Button variant="outline" size="large">
              <Link to="/services" className="flex items-center">
                <i className="fas fa-arrow-left mr-2"></i>
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;