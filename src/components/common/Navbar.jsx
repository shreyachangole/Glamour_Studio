import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import Logo from '../../assets/logo.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/academy', label: 'Academy' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-white/80 backdrop-blur-sm py-3'
        }`}
      >
        {/* Adjusted padding: px-4 for mobile, px-8 for tablets, px-20 for large screens */}
        <div className="container mx-auto px-4 sm:px-8 lg:px-20">
          <div className="flex justify-between items-center">

            {/* LOGO SECTION - Responsive Sizing */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 sm:space-x-3"
            >
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f2d6d9] via-white to-[#f7bcd0] shadow-sm"></div>
                <div className="absolute inset-0.5 rounded-full bg-white/90 backdrop-blur-sm"></div>
                <img
                  src={Logo}
                  alt="Aura Logo"
                  className="relative w-7 h-7 sm:w-10 sm:h-10 object-contain"
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-base sm:text-xl font-serif font-bold text-gray-800 leading-none">
                  Aura Unisex Salon
                </h1>
                {/* Text hidden on very small mobile to prevent layout shift */}
                <p className="hidden xs:block text-[8px] sm:text-xs text-gray-500 uppercase tracking-widest mt-1">
                  Professional Makeup
                </p>
              </div>
            </motion.div>

            {/* DESKTOP MENU - Visible from md (768px) upwards */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {navLinks.map((link) => (
                <div key={link.path} className="relative group">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-xs lg:text-sm font-medium tracking-wider transition-colors duration-300 ${
                        isActive ? 'text-[#D14D72]' : 'text-gray-700 hover:text-[#D14D72]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D14D72] transition-all duration-300 group-hover:w-full"></span>
                </div>
              ))}

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="primary" size="small" className="shadow-md py-1.5 px-4 text-xs">
                  <Link to="/contact">Book Appointment</Link>
                </Button>
              </motion.div>
            </div>

            {/* MOBILE MENU BUTTON - Higher Z-index to stay above overlay */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-72 bg-white z-40 shadow-2xl p-8 pt-24"
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors duration-300 ${
                        isActive ? 'text-[#D14D72]' : 'text-gray-800'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <Button variant="primary" className="w-full">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;