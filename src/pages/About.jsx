import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'Sophia Johnson',
      role: 'Lead Stylist & Owner',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
      experience: '12 years'
    },
    {
      name: 'Emma Williams',
      role: 'Makeup Artist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
      experience: '8 years'
    },
    {
      name: 'Isabella Chen',
      role: 'Hair Specialist',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      experience: '10 years'
    },
    {
      name: 'Mia Rodriguez',
      role: 'Skincare Expert',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      experience: '6 years'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for perfection in every service we provide.'
    },
    {
      icon: '❤️',
      title: 'Passion',
      description: 'We love what we do and it shows in our work.'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'We build long-lasting relationships with our clients.'
    },
    {
      icon: '✨',
      title: 'Innovation',
      description: 'We stay updated with the latest beauty trends and techniques.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-beauty-pink-50 to-beauty-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Where Beauty Meets <span className="text-beauty-pink-600">Perfection</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              At Glamour Studio, we believe every individual deserves to feel beautiful and confident. 
              Our mission is to provide exceptional beauty services in a luxurious and welcoming environment.
            </p>
            <Button variant="primary" size="large">
              <Link to="/contact">Book Your Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Story"
            subtitle="Journey of Excellence"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800" 
                alt="Glamour Studio Interior"
                className="rounded-xl shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Transforming Beauty Since 2008
              </h3>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded by Sophia Johnson, a passionate beauty expert with over 15 years of experience, 
                  Glamour Studio began as a small salon with a big dream: to revolutionize the beauty industry.
                </p>
                
                <p>
                  What started as a single-chair salon has now transformed into a premier beauty destination, 
                  known for its exceptional services, skilled professionals, and luxurious ambiance.
                </p>
                
                <p>
                  Today, we're proud to serve thousands of satisfied clients and have trained numerous 
                  beauty professionals who are now making their mark in the industry.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-beauty-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-beauty-pink-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-beauty-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-beauty-purple-600">5000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">50+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Values"
            subtitle="What We Stand For"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Meet Our Experts"
            subtitle="Beauty Professionals"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-0 right-0 text-white">
                      <div className="text-sm opacity-90">{member.experience} experience</div>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                <p className="text-beauty-pink-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-beauty-pink-600 to-beauty-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Glamour Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our community of beautiful, confident individuals. Book your appointment today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="large" className="bg-white text-beauty-pink-600 hover:bg-gray-100">
              <Link to="/services">View Services</Link>
            </Button>
            <Button variant="outline" size="large" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;