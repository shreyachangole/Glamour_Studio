import React from 'react';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  const alignmentClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  };

  return (
    <div className={`${alignmentClasses[align]} mb-12`}>
      <div className="inline-block mb-3">
        <span className="text-pink-500 font-semibold text-sm uppercase tracking-wider">
          {subtitle}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionTitle;