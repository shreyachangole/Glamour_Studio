import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFound = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },);
  return (
    <div className="not-found-page min-h-screen flex items-center justify-center bg-gradient-to-br from-beauty-pink-50 to-beauty-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Animated Beauty Icon */}
          <div className="relative mb-8">
            <div className="text-9xl text-beauty-pink-300 mb-4">
              <i className="fas fa-spa"></i>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl text-beauty-pink-600 animate-pulse">
                <i className="fas fa-exclamation-circle"></i>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            <span className="text-beauty-pink-600">404</span> - Page Not Found
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Oops! The beauty page you're looking for seems to have wandered off. 
            Maybe it's getting a makeover?
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-12">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-2xl text-beauty-pink-600 mb-2">
                <i className="fas fa-home"></i>
              </div>
              <div className="font-semibold text-gray-800">Return Home</div>
              <div className="text-sm text-gray-500">Back to our beautiful homepage</div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <div className="text-2xl text-beauty-pink-600 mb-2">
                <i className="fas fa-search"></i>
              </div>
              <div className="font-semibold text-gray-800">Search Services</div>
              <div className="text-sm text-gray-500">Find what you're looking for</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="large">
              <Link to="/" className="flex items-center">
                <i className="fas fa-home mr-2"></i>
                Back to Home
              </Link>
            </Button>
            
            <Button variant="outline" size="large">
              <Link to="/services" className="flex items-center">
                <i className="fas fa-spa mr-2"></i>
                Explore Services
              </Link>
            </Button>
            
            <Button variant="ghost" size="large">
              <Link to="/contact" className="flex items-center">
                <i className="fas fa-headset mr-2"></i>
                Need Help?
              </Link>
            </Button>
          </div>
          
          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-4">You might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                to="/services/hair-styling" 
                className="px-4 py-2 bg-beauty-pink-100 text-beauty-pink-700 rounded-full hover:bg-beauty-pink-200 transition-colors"
              >
                Hair Services
              </Link>
              <Link 
                to="/services/makeup" 
                className="px-4 py-2 bg-beauty-purple-100 text-beauty-purple-700 rounded-full hover:bg-beauty-purple-200 transition-colors"
              >
                Makeup
              </Link>
              <Link 
                to="/services/facial" 
                className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full hover:bg-pink-200 transition-colors"
              >
                Facials
              </Link>
              <Link 
                to="/portfolio" 
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
              >
                Portfolio
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="fixed top-10 left-10 text-beauty-pink-300 text-4xl opacity-20 animate-float">
        <i className="fas fa-heart"></i>
      </div>
      <div className="fixed top-20 right-20 text-beauty-purple-300 text-3xl opacity-20 animate-float" style={{animationDelay: '0.5s'}}>
        <i className="fas fa-star"></i>
      </div>
      <div className="fixed bottom-20 left-20 text-pink-300 text-5xl opacity-20 animate-float" style={{animationDelay: '1s'}}>
        <i className="fas fa-sparkles"></i>
      </div>
      <div className="fixed bottom-10 right-10 text-purple-300 text-2xl opacity-20 animate-float" style={{animationDelay: '1.5s'}}>
        <i className="fas fa-circle"></i>
      </div>
    </div>
  );
};

export default NotFound;