import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, ChevronRight, Heart } from 'lucide-react';

const Footer = () => {
  const exploreLinks = [
    { label: 'HOME', href: '/', path: '/' },
    { label: 'ABOUT', href: '/about', path: '/about' },
    { label: 'SERVICES', href: '/services', path: '/services' },
    { label: 'PORTFOLIO', href: '/portfolio', path: '/portfolio' },
    { label: 'ACADEMY', href: '/academy', path: '/academy' },
    { label: 'CONTACT', href: '/contact', path: '/contact' },
    { label: 'BOOKING', href: '/booking', path: '/booking' },
   
  ];

  const serviceLinks = [
    { label: 'HAIR STYLING', href: '/services' },
    { label: 'MAKEUP', href: '/services' },
    { label: 'FACIALS', href: '/services' },
    { label: 'BRIDAL PACKAGES', href: '/services' },
    { label: 'SKIN CARE', href: '/services' },
    { label: 'NAIL ART', href: '/services' },
    { label: 'SPA TREATMENTS', href: '/services' },
    { label: 'PROFESSIONAL COURSES', href: '/academy' },
  ];

  const socialLinks = [
    { Icon: Instagram, href: 'https://www.instagram.com/aura_unisex_salon_amravati/?hl=en', label: 'Instagram' },

  ];

  return (
    <footer className="bg-[#0f0f0f] text-[#a0a0a0] pt-16 pb-8 px-6 md:px-20 border-t border-gray-800">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D14D72] to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <h2 className="text-white text-2xl font-bold tracking-wider font-sans">
                 
Aura Studio
                </h2>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Your premier destination for luxury beauty and wellness. We bring out your inner radiance 
                with expert care, premium products, and personalized attention in a serene environment.
              </p>
              <div className="flex gap-3 pt-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 border border-gray-800 flex items-center justify-center text-[#D14D72] hover:bg-[#D14D72] hover:text-white hover:border-[#D14D72] transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-[#D14D72] text-2xl font-serif italic">Explore</h3>
                <div className="h-[1px] bg-[#D14D72] flex-grow max-w-[80px]"></div>
              </div>
              <ul className="grid grid-cols-1 gap-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.label} className="flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-[#D14D72]" />
                    <Link 
                      to={link.path} 
                      className="text-xs font-bold text-white tracking-wider hover:text-[#D14D72] transition-colors duration-300 uppercase"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Column 3: Services */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-[#D14D72] text-2xl font-serif italic">Services</h3>
                <div className="h-[1px] bg-[#D14D72] flex-grow max-w-[80px]"></div>
              </div>
              <ul className="grid grid-cols-1 gap-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label} className="flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-[#D14D72]" />
                    <Link 
                      to={link.href} 
                      className="text-xs font-bold text-white tracking-wider hover:text-[#D14D72] transition-colors duration-300 uppercase"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-[#D14D72] text-2xl font-serif italic">Contact Us</h3>
                <div className="h-[1px] bg-[#D14D72] flex-grow max-w-[80px]"></div>
              </div>
              
              <div className="space-y-5">
                <div className="flex gap-4 group">
                  <MapPin size={20} className="text-[#D14D72] shrink-0 mt-1" />
                  <div>
                    <p className="text-sm group-hover:text-white transition-colors duration-300">
                    Shop No 4, Gajanan Fataka Bhandar,
                  Science Score Ground, Rukmini Nagar, Vivekanand Colony, Amravati, Maharashtra
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center group">
                  <Phone size={20} className="text-[#D14D72] shrink-0" />
                  <div>
                    <a href="tel:+918530375725" className="text-sm group-hover:text-white transition-colors duration-300 block">
                      +91 8530375725
                    </a>
                    {/* <a href="tel:+911234567890" className="text-sm group-hover:text-white transition-colors duration-300 block">
                      +91 12345 67890
                    </a> */}
                  </div>
                </div>
                
              
                
                <div className="flex gap-4 group">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#D14D72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <p className="group-hover:text-white transition-colors duration-300">Mon-Sat: 9:00 AM - 8:00 PM</p>
                    <p className="group-hover:text-white transition-colors duration-300">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

     

        {/* Copyright */}
        <div className="border-t border-gray-900 pt-8 text-center">
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">
            © {new Date().getFullYear()} Aura Studio. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
            Designed with <Heart size={12} className="text-[#D14D72] fill-[#D14D72]" /> for beauty enthusiasts
          </p>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 bg-[#D14D72] text-white p-3 rounded-full shadow-xl hover:bg-black transition-colors duration-300 z-40"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
         {/* WhatsApp Floating Button */}
{/* WhatsApp Floating Button (Above Arrow) */}
<motion.a
  href="https://wa.me/918530375725"   // <-- replace with your number
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -5 }}
  whileTap={{ scale: 0.95 }}
  className="fixed bottom-20 right-8 bg-green-500 text-white p-3 rounded-full shadow-xl hover:bg-green-600 transition-colors duration-300 z-40"
  aria-label="Chat on WhatsApp"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48A11.78 11.78 0 0012 .75a11.25 11.25 0 00-9.72 17.31L1 23l5.15-1.35A11.25 11.25 0 0012 23.25a11.78 11.78 0 008.52-3.48 11.62 11.62 0 000-16.29zM12 21a9.3 9.3 0 01-4.92-1.38l-.35-.21-3.06.8.82-2.99-.22-.31A9.3 9.3 0 1121.3 12 9.24 9.24 0 0112 21zm5-6.58c-.27-.14-1.61-.79-1.86-.88s-.43-.14-.61.14-.7.88-.86 1.06-.32.21-.59.07a7.52 7.52 0 01-2.23-1.37 8.38 8.38 0 01-1.55-1.93c-.16-.28 0-.43.12-.57s.28-.32.41-.48a1.9 1.9 0 00.28-.48.51.51 0 000-.48c-.07-.14-.61-1.46-.83-2-.22-.52-.44-.45-.61-.46h-.52a1 1 0 00-.73.34A3 3 0 007 9.13a5.17 5.17 0 00.21 2.2 11.71 11.71 0 003.06 4.57 13.23 13.23 0 004.83 3 5.38 5.38 0 002.48.16 2.39 2.39 0 001.56-1.09 1.93 1.93 0 00.14-1.13c-.06-.1-.24-.17-.51-.31z" />
  </svg>
</motion.a>


      </div>
    </footer>
  );
};

export default Footer;