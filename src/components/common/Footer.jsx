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
    { label: 'TESTIMONIALS', href: '/testimonials', path: '/testimonials' },
  ];

  const serviceLinks = [
    { label: 'HAIR STYLING', href: '/services/hair-styling' },
    { label: 'MAKEUP', href: '/services/makeup' },
    { label: 'FACIALS', href: '/services/facial' },
    { label: 'BRIDAL PACKAGES', href: '/services/bridal-packages' },
    { label: 'SKIN CARE', href: '/services/skincare' },
    { label: 'NAIL ART', href: '/services/nail-art' },
    { label: 'SPA TREATMENTS', href: '/services/spa' },
    { label: 'PROFESSIONAL COURSES', href: '/academy' },
  ];

  const socialLinks = [
    { Icon: Instagram, href: 'https://instagram.com/glamourstudio', label: 'Instagram' },
    { Icon: Facebook, href: 'https://facebook.com/glamourstudio', label: 'Facebook' },
    { Icon: Twitter, href: 'https://twitter.com/glamourstudio', label: 'Twitter' },
    { Icon: Youtube, href: 'https://youtube.com/glamourstudio', label: 'YouTube' },
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
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <h2 className="text-white text-2xl font-bold tracking-wider font-sans">
                  Glamour Studio
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
                      123 Beauty Street, Glamour City,<br />
                      Sector 25, Gurugram, Haryana 122002
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center group">
                  <Phone size={20} className="text-[#D14D72] shrink-0" />
                  <div>
                    <a href="tel:+919876543210" className="text-sm group-hover:text-white transition-colors duration-300 block">
                      +91 98765 43210
                    </a>
                    <a href="tel:+911234567890" className="text-sm group-hover:text-white transition-colors duration-300 block">
                      +91 12345 67890
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center group">
                  <Mail size={20} className="text-[#D14D72] shrink-0" />
                  <a href="mailto:info@glamourstudio.com" className="text-sm group-hover:text-white transition-colors duration-300">
                    info@glamourstudio.com
                  </a>
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

        {/* Newsletter Subscription */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-white text-lg font-bold mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-6">
              Subscribe to our newsletter for beauty tips, exclusive offers, and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#D14D72]"
              />
              <button
                type="submit"
                className="bg-[#D14D72] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-black transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-gray-900 pt-8 text-center">
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">
            © {new Date().getFullYear()} Glamour Studio Beauty Parlor. All Rights Reserved.
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
      </div>
    </footer>
  );
};

export default Footer;