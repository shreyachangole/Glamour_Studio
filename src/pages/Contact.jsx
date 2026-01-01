import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Hair Styling',
    'Makeup Services',
    'Facial Treatments',
    'Manicure & Pedicure',
    'Waxing Services',
    'Bridal Packages',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        service: '', 
        date: '', 
        time: '', 
        message: '' 
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-beauty-pink-50 to-beauty-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get in <span className="text-beauty-pink-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to transform your beauty routine? Contact us today to book your 
            appointment or schedule a free consultation with our beauty experts.
          </p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Book Your Appointment"
            subtitle="Schedule a Visit"
          />
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mb-4">
                    <i className="fas fa-check"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Appointment Request Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting Glamour Studio. We've received your appointment request 
                    and will contact you within 24 hours to confirm your booking.
                  </p>
                  <p className="text-sm text-gray-500">
                    For immediate assistance, call us at (123) 456-7890
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-pink-500 focus:border-transparent"
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-pink-500 focus:border-transparent"
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-pink-500 focus:border-transparent"
                        required
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-pink-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-pink-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-pink-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-pink-500 focus:border-transparent"
                      placeholder="Any specific requests or concerns..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="w-4 h-4 text-beauty-pink-600 border-gray-300 rounded focus:ring-beauty-pink-500"
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                      I agree to the terms and conditions and privacy policy
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Book Appointment
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-gradient-to-br from-beauty-pink-500 to-beauty-purple-600 rounded-2xl p-8 text-white mb-6">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-4 text-xl"></i>
                    <div>
                      <h4 className="font-bold mb-1">Visit Us</h4>
                      <p className="text-white/90">
                        123 Beauty Street<br />
                        Glamour City, GC 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-phone mt-1 mr-4 text-xl"></i>
                    <div>
                      <h4 className="font-bold mb-1">Call Us</h4>
                      <p className="text-white/90">
                        (123) 456-7890<br />
                        (987) 654-3210
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-envelope mt-1 mr-4 text-xl"></i>
                    <div>
                      <h4 className="font-bold mb-1">Email Us</h4>
                      <p className="text-white/90">
                        info@glamourstudio.com<br />
                        booking@glamourstudio.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="fas fa-clock mt-1 mr-4 text-xl"></i>
                    <div>
                      <h4 className="font-bold mb-1">Hours</h4>
                      <p className="text-white/90">
                        Mon-Fri: 9:00 AM - 8:00 PM<br />
                        Sat: 9:00 AM - 6:00 PM<br />
                        Sun: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Emergency Contact</h4>
                <p className="text-gray-600 mb-4">
                  Need to reschedule or cancel your appointment? Contact us at least 24 hours in advance.
                </p>
                <a 
                  href="tel:+1234567890" 
                  className="inline-flex items-center justify-center w-full py-3 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition-colors"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Emergency: (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Location"
            subtitle="Find Us Easily"
          />
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 md:h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-map-marker-alt text-4xl text-beauty-pink-500 mb-4"></i>
                  <p className="text-gray-600">Interactive Map Here</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Getting Here</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">By Subway</h5>
                    <p className="text-gray-600 text-sm">Take Line 1 to Beauty Station, Exit 4</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">By Bus</h5>
                    <p className="text-gray-600 text-sm">Buses 101, 202, 303 stop nearby</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Parking</h5>
                    <p className="text-gray-600 text-sm">Free parking available in the rear</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">Accessibility</h5>
                    <p className="text-gray-600 text-sm">Wheelchair accessible entrance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our Location?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-beauty-pink-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">Centrally located in the heart of the city</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-beauty-pink-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">Ample parking space available</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-beauty-pink-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">Easy access via public transportation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-beauty-pink-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">Luxurious and comfortable waiting area</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-beauty-pink-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">Free Wi-Fi for our clients</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-beauty-pink-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">Complimentary refreshments</span>
                </li>
              </ul>
              
              <div className="mt-8 p-6 bg-beauty-pink-50 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-3">First Time Visitor?</h4>
                <p className="text-gray-600 mb-4">
                  Get 15% off on your first visit! Mention this offer when booking your appointment.
                </p>
                <Button variant="primary" className="w-full">
                  <i className="fas fa-gift mr-2"></i>
                  Claim Your Discount
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;