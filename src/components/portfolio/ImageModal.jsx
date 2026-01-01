import React, { useEffect } from 'react';

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>
        
        {/* Image */}
        <img 
          src={image.image} 
          alt={image.title}
          className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
        />
        
        {/* Info Panel */}
        <div className="bg-white rounded-lg mt-4 p-6">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{image.title}</h3>
              <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mt-2 capitalize">
                {image.category}
              </span>
            </div>
            <button className="text-pink-600 hover:text-pink-700">
              <i className="fas fa-share-alt text-xl"></i>
            </button>
          </div>
          
          <p className="text-gray-600 mb-6">{image.description}</p>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-pink-600 hover:text-pink-700">
              <i className="far fa-heart"></i>
              <span>Save</span>
            </button>
            <button className="flex items-center space-x-2 text-pink-600 hover:text-pink-700">
              <i className="fas fa-download"></i>
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;