import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import img from  '../assets/Hero_section/image2.png'
const About = () => {
  const teamMembers = [
    {
      name: 'Sophia Johnson',
      role: 'Lead Stylist & Owner',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
      experience: '12 years',
      quote: 'Beauty begins the moment you decide to be yourself.'
    },
    {
      name: 'Emma Williams',
      role: 'Makeup Artist',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
      experience: '8 years',
      quote: 'The right makeup can empower and transform.'
    },
    {
      name: 'Isabella Chen',
      role: 'Hair Specialist',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      experience: '10 years',
      quote: 'Hair is the crown you never take off.'
    },
    {
      name: 'Mia Rodriguez',
      role: 'Skincare Expert',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      experience: '6 years',
      quote: 'Healthy skin is always in style.'
    }
  ];

  const values = [
    {
      icon: '',
      title: 'Excellence',
      description: 'We strive for perfection in every service we provide.',
      color: 'bg-pink-900/20 border-pink-900/30'
    },
    {
      icon: '',
      title: 'Passion',
      description: 'We love what we do and it shows in our work.',
      color: 'bg-black/20 border-black/30'
    },
    {
      icon: '',
      title: 'Trust',
      description: 'We build long-lasting relationships with our clients.',
      color: 'bg-pink-900/20 border-pink-900/30'
    },
    {
      icon: '',
      title: 'Innovation',
      description: 'We stay updated with the latest beauty trends and techniques.',
      color: 'bg-black/20 border-black/30'
    }
  ];

  return (
    <div className="about-page bg-black text-white">
      
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-br from-black via-pink-900/20 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Where Beauty Meets <span className="text-white">Perfection</span>
            </h1>
            <p className="text-xl text-pink-100 mb-10 leading-relaxed">
              At Aura Studio, we believe every individual deserves to feel beautiful and confident. 
              Our mission is to provide exceptional beauty services in a luxurious and welcoming environment.
            </p>
            <Button variant="primary" size="large" className="bg-pink-600 hover:bg-pink-700 border-pink-600">
              <Link to="/contact" className="flex items-center gap-2">
                Book Your Consultation
                <span className="text-lg">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">

          <SectionTitle 
            title="Our Story"
            subtitle="Journey of Excellence"
            titleColor="text-white"
            subtitleColor="text-pink-200"
            className="no-underline"
          />
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl border border-pink-900/50">
                <img 
                src ={img}
                  alt="
Aura Studio Interior"
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">
                Transforming Beauty Since <span className="text-pink-400">2020</span>
              </h3>
              
              <div className="space-y-6 text-pink-100">
                <p className="leading-relaxed">
                  Founded by Nikita Changole, a passionate beauty expert with over 07 years of experience, 
                  
Aura Studio began as a small salon with a big dream: to revolutionize the beauty industry.
                </p>
                
                <p className="leading-relaxed">
                  What started as a single-chair salon has now transformed into a premier beauty destination, 
                  known for its exceptional services, skilled professionals, and luxurious ambiance.
                </p>
                
                <p className="leading-relaxed">
                  Today, we're proud to serve thousands of satisfied clients and have trained numerous 
                  beauty professionals who are now making their mark in the industry.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-gradient-to-b from-pink-900/30 to-black rounded-xl border border-pink-900/30">
                  <div className="text-3xl font-bold text-pink-400">07+</div>
                  <div className="text-sm text-pink-200 mt-2">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-purple-900/30 to-black rounded-xl border border-purple-900/30">
                  <div className="text-3xl font-bold text-pink-400">100+</div>
                  <div className="text-sm text-purple-200 mt-2">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-b from-pink-800/30 to-black rounded-xl border border-pink-800/30">
                  <div className="text-3xl font-bold text-pink-300">5+</div>
                  <div className="text-sm text-pink-200 mt-2">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">

          <SectionTitle 
            title="Our Values"
            subtitle="What We Stand For"
            titleColor="text-white"
            subtitleColor="text-pink-200"
            className="no-underline"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${value.color}`}
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-pink-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Team */}
      {/* <section className="py-20 bg-black">
        <div className="container mx-auto px-4">

          <SectionTitle 
            title="Meet Our Experts"
            subtitle="Beauty Professionals"
            titleColor="text-white"
            subtitleColor="text-pink-200"
            className="no-underline"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center relative">
                <div className="relative mb-6 overflow-hidden rounded-2xl border border-pink-900/50 group-hover:border-pink-600/50 transition-all duration-500">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-0 right-0 text-white p-4">
                      <div className="text-sm text-pink-300 font-medium mb-1">{member.experience} experience</div>
                      <p className="text-sm text-pink-100 italic">"{member.quote}"</p>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-pink-400 font-medium">{member.role}</p>
                <div className="mt-4 flex justify-center gap-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-600/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Experience the <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
Aura Studio  Difference</span>
          </h2>
          <p className="text-xl text-pink-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our community of beautiful, confident individuals. Book your appointment today and transform your beauty journey!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              variant="primary" 
              size="large" 
              className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 border-pink-600 shadow-lg shadow-pink-600/25"
            >
              <Link to="/services" className="flex items-center gap-3">
                <span>View Services</span>
                <span className="text-lg"></span>
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="large" 
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Link to="/contact" className="flex items-center gap-3">
                <span>Book Appointment</span>
                <span className="text-lg">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
