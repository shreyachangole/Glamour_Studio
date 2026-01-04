import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';
import Logo from '../../assets/logo.jpeg';   // <-- your logo image

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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}>
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex justify-between items-center">

            {/* Logo Replaced with Image */}
    <motion.div 
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  className="flex items-center space-x-3"
>
  <div className="relative w-16 h-16 flex items-center justify-center">
    <div className="
        absolute inset-0 rounded-full 
        bg-gradient-to-br from-[#f2d6d9] via-white to-[#f7bcd0]
        shadow-[0_4px_20px_rgba(209,77,114,0.15)]
      ">
    </div>

    <div className="
        absolute inset-1 rounded-full 
        bg-white/90 backdrop-blur-sm
        shadow-inner
      ">
    </div>

    <img 
      src={Logo}
      alt="Aura Logo"
      className="relative w-14 h-14 object-contain"
    />
  </div>

  <div>
    <h1 className="text-xl font-serif font-bold tracking-tight text-gray-800">
      Aura Studio
    </h1>
    <p className="text-xs text-gray-500 tracking-widest uppercase">
      Professional Makeup
    </p>
  </div>
</motion.div>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <div key={link.path} className="relative group">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-medium tracking-wider transition-colors duration-300 ${
                        isActive 
                          ? 'text-[#D14D72]' 
                          : 'text-gray-700 hover:text-[#D14D72]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D14D72] transition-all duration-300 group-hover:w-full`}></span>
                </div>
              ))}
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" size="small" className="shadow-md">
                  <Link to="/contact">Book Appointment</Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-8 h-8 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className={`block absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                  isOpen ? 'rotate-45' : '-translate-y-2'
                }`}></span>
                <span className={`block absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                  isOpen ? '-rotate-45' : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {/* <motion.div 
        initial={false}
        animate={isOpen ? { opacity: 1 } : { opacity: 0, pointerEvents: 'none' }}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      >
        <motion.div 
          initial={{ x: '100%' }}
          animate={isOpen ? { x: 0 } : { x: '100%' }}
          transition={{ type: 'spring', damping: 25 }}
          className="absolute right-0 top-0 h-full w-64 bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 pt-20">
            <div className="space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg font-medium transition-colors duration-300 ${
                      isActive 
                        ? 'text-[#D14D72]' 
                        : 'text-gray-800 hover:text-[#D14D72]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              
              <div className="pt-8">
                <Button variant="primary" className="w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
              </div>

              {/* Extra Info */}
              {/* <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">Contact Info:</p>
                <a href="tel:+919999999999" className="text-gray-700 hover:text-[#D14D72] block mb-2 text-sm">
                  +91 99999 99999
                </a>
                <a href="mailto:info@glamourstudio.com" className="text-gray-700 hover:text-[#D14D72] block text-sm">
                  info@glamourstudio.com
                </a>
              </div> */}

              {/* Social Icons */}
              {/* <div className="pt-6 flex space-x-4">
                {/* Instagram */}
                {/* <a href="https://instagram.com" className="text-gray-500 hover:text-[#D14D72] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a> */} */

                {/* Facebook */}
                {/* <a href="https://facebook.com" className="text-gray-500 hover:text-[#D14D72] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a> */}

                {/* YouTube */}
                {/* <a href="https://youtube.com" className="text-gray-500 hover:text-[#D14D72] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div> */} */
    </>
  );
};

export default Navbar;
