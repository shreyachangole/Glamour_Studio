import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ServiceDetails from '../components/services/ServiceDetails';
import { servicesData } from '../data/servicesData';
import SectionTitle from '../components/common/SectionTitle';

const ServicePage = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl text-beauty-pink-300 mb-4">
            <i className="fas fa-spa"></i>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The beauty service you're looking for doesn't exist.</p>
          <Link 
            to="/services" 
            className="inline-flex items-center px-6 py-3 bg-beauty-pink-600 text-white font-semibold rounded-lg hover:bg-beauty-pink-700 transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const relatedServices = servicesData
    .filter(s => s.id !== id)
    .slice(0, 3);

  return (
    <div className="service-page">
      <ServiceDetails service={service} />
      
      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Related Services"
            subtitle="You Might Also Like"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => (
              <div 
                key={relatedService.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{relatedService.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{relatedService.title}</h3>
                <p className="text-gray-600 mb-4">{relatedService.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-beauty-pink-600">{relatedService.details.price}</span>
                  <Link 
                    to={`/services/${relatedService.id}`}
                    className="text-beauty-pink-600 hover:text-beauty-pink-700 font-semibold"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle={`About ${service.title}`}
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-2">
                How long does {service.title} take?
              </h4>
              <p className="text-gray-600">
                The duration varies depending on the specific treatment, but typically takes {service.details.duration}.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-2">
                Do I need to book in advance?
              </h4>
              <p className="text-gray-600">
                Yes, we recommend booking at least 48 hours in advance to secure your preferred time slot.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-2">
                What should I prepare before my appointment?
              </h4>
              <p className="text-gray-600">
                Please arrive 10 minutes early, come with clean hair/skin, and bring any reference images if you have specific preferences.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-2">
                Do you use organic/natural products?
              </h4>
              <p className="text-gray-600">
                We use premium professional products. Please inform us of any allergies or sensitivities during booking.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-beauty-pink-600 to-beauty-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience {service.title}?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your appointment now and get a complimentary consultation!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center px-6 py-3 bg-white text-beauty-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <i className="fas fa-phone mr-2"></i>
              Call to Book
            </a>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <i className="fas fa-calendar-alt mr-2"></i>
              Online Booking
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;