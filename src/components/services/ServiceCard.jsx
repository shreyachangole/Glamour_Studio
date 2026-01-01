import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, link, details }) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      <div className="p-6">
        {/* Icon */}
        <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-2xl transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        {/* Details if provided */}
        {details && (
          <div className="mb-4 p-3 bg-pink-50 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-gray-700">Duration:</span>
              <span className="text-pink-600">{details.duration}</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="font-semibold text-gray-700">Price:</span>
              <span className="text-pink-600 font-bold">{details.price}</span>
            </div>
          </div>
        )}
        
        {/* Features List */}
        {details?.features && (
          <ul className="space-y-2 mb-6">
            {details.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <i className="fas fa-check text-pink-500 mr-2 text-xs"></i>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        {/* Action Button */}
        <Link 
          to={link}
          className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform group-hover:-translate-y-1 transition-all duration-300"
        >
          <span>Book Now</span>
          <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
        </Link>
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-400 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;