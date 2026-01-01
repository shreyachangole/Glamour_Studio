import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Gallery from '../components/portfolio/Gallery';
import { portfolioData } from '../data/portfolioData';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeView, setActiveView] = useState('grid');

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-beauty-pink-50 to-beauty-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Beauty <span className="text-beauty-pink-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our collection of stunning transformations and creative beauty work. 
            Each project showcases our dedication to excellence and attention to detail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="large">
              <Link to="/services">Book Similar Service</Link>
            </Button>
            <Button variant="outline" size="large">
              <i className="fas fa-download mr-2"></i>
              Download Portfolio PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Portfolio Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActiveView('grid')}
                className={`p-2 rounded-lg ${activeView === 'grid' ? 'bg-beauty-pink-100 text-beauty-pink-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <i className="fas fa-th-large text-xl"></i>
              </button>
              <button
                onClick={() => setActiveView('masonry')}
                className={`p-2 rounded-lg ${activeView === 'masonry' ? 'bg-beauty-pink-100 text-beauty-pink-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <i className="fas fa-th text-xl"></i>
              </button>
            </div>
            
            <div className="text-center md:text-right">
              <div className="inline-flex items-center px-4 py-2 bg-beauty-pink-100 text-beauty-pink-600 rounded-full">
                <i className="fas fa-camera mr-2"></i>
                <span className="font-semibold">{portfolioData.length}+ Beauty Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Featured Work"
            subtitle="Beauty Transformations"
          />
          
          <Gallery projects={portfolioData} />
        </div>
      </section>

      {/* Client Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Client Success Stories"
            subtitle="Real Transformations"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" 
                  alt="Bridal Makeup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-beauty-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before & After
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Sarah's Wedding Day</h4>
                <p className="text-gray-600 mb-4">
                  "The bridal makeup was absolutely perfect! I felt like a princess on my big day."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://randomuser.me/api/portraits/women/1.jpg" 
                      alt="Sarah"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">Bride</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800" 
                  alt="Hair Color"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-beauty-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Hair Transformation
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Emma's Color Journey</h4>
                <p className="text-gray-600 mb-4">
                  "After years of hair damage, Glamour Studio brought my hair back to life with stunning color!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://randomuser.me/api/portraits/women/2.jpg" 
                      alt="Emma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Emma Williams</div>
                    <div className="text-sm text-gray-500">Regular Client</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1556228578-9c360e1d458c?w=800" 
                  alt="Skincare"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Skin Rejuvenation
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-3">Jessica's Clear Skin</h4>
                <p className="text-gray-600 mb-4">
                  "After struggling with acne for years, their facial treatments transformed my skin completely."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src="https://randomuser.me/api/portraits/women/3.jpg" 
                      alt="Jessica"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Jessica Brown</div>
                    <div className="text-sm text-gray-500">Skincare Client</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-beauty-pink-600 to-beauty-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Inspired by Our Work?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create your own beauty transformation story. Book your appointment today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="large" className="bg-white text-beauty-pink-600 hover:bg-gray-100">
              <Link to="/contact">
                <i className="fas fa-calendar-check mr-2"></i>
                Book Consultation
              </Link>
            </Button>
            <Button variant="outline" size="large" className="border-white text-white hover:bg-white/10">
              <Link to="/services">
                <i className="fas fa-spa mr-2"></i>
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;