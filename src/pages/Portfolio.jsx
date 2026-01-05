import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import { portfolioData } from '../data/portfolioData';

const Portfolio = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [Portfolio]);
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const heroRef = useRef(null);
  
  // Animation directions for each card
  const animationDirections = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'rotateIn', 'scaleUp', 'slideLeft', 'slideRight'];
  
  // Get animation variant for each card
  const getAnimationVariant = (index) => {
    const direction = animationDirections[index % animationDirections.length];
    
    const variants = {
      topLeft: {
        hidden: { x: -100, y: -100, opacity: 0, rotate: -10, scale: 0.8 },
        visible: { 
          x: 0, 
          y: 0, 
          opacity: 1, 
          rotate: 0, 
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: (index % 4) * 0.15
          }
        }
      },
      topRight: {
        hidden: { x: 100, y: -100, opacity: 0, rotate: 10, scale: 0.8 },
        visible: { 
          x: 0, 
          y: 0, 
          opacity: 1, 
          rotate: 0, 
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: (index % 4) * 0.15
          }
        }
      },
      bottomLeft: {
        hidden: { x: -100, y: 100, opacity: 0, rotate: -10, scale: 0.8 },
        visible: { 
          x: 0, 
          y: 0, 
          opacity: 1, 
          rotate: 0, 
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: (index % 4) * 0.15
          }
        }
      },
      bottomRight: {
        hidden: { x: 100, y: 100, opacity: 0, rotate: 10, scale: 0.8 },
        visible: { 
          x: 0, 
          y: 0, 
          opacity: 1, 
          rotate: 0, 
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: (index % 4) * 0.15
          }
        }
      },
      rotateIn: {
        hidden: { opacity: 0, rotateY: 90, scale: 0.7 },
        visible: { 
          opacity: 1, 
          rotateY: 0, 
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: (index % 4) * 0.15
          }
        }
      },
      scaleUp: {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 15,
            delay: (index % 4) * 0.15
          }
        }
      },
      slideLeft: {
        hidden: { x: -200, opacity: 0, scale: 0.9 },
        visible: { 
          x: 0, 
          opacity: 1, 
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: (index % 4) * 0.15
          }
        }
      },
      slideRight: {
        hidden: { x: 200, opacity: 0, scale: 0.9 },
        visible: { 
          x: 0, 
          opacity: 1, 
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: (index % 4) * 0.15
          }
        }
      }
    };

    return {
      hidden: variants[direction].hidden,
      visible: variants[direction].visible,
      hover: {
        scale: 1.08,
        y: -15,
        rotateZ: hoveredIndex === index ? 0 : 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15
        }
      }
    };
  };

  // Hover effects with particle animation
  const particleEffects = [
    "star", "sparkle", "circle", "heart", "diamond"
  ];

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Modal for enlarged view
  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="portfolio-page bg-neutral-950 text-white min-h-screen overflow-hidden">

      {/* Hero Section with enhanced animations */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-40 bg-gradient-to-br from-neutral-900 via-neutral-950 to-pink-900/30 overflow-hidden"
      >
        {/* Enhanced animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating circles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute ${i % 2 === 0 ? 'bg-pink-500/10' : 'bg-purple-500/5'} rounded-full blur-3xl`}
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                top: `${20 + i * 10}%`,
                left: `${i * 15}%`
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, i % 2 === 0 ? 50 : -50, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 20 + i * 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}

          {/* Particle effects */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-pink-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ y: 100, opacity: 0, scale: 0.5 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 1 
            }}
          >
            <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-tight">
              Our <motion.span 
                className="text-pink-500 inline-block"
                animate={{ 
                  scale: [1, 1.1, 1],
                  textShadow: [
                    "0 0 20px rgba(219,39,119,0.5)",
                    "0 0 40px rgba(219,39,119,0.8)",
                    "0 0 20px rgba(219,39,119,0.5)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Portfolio
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl text-neutral-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Experience the art of transformation through our gallery of beauty masterpieces
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 30px rgba(219,39,119,0.4)",
                  "0 0 50px rgba(219,39,119,0.6)",
                  "0 0 30px rgba(219,39,119,0.4)"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Link to="/services">
                <button className="px-14 py-6 bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white font-bold rounded-full text-lg transition-all hover:shadow-2xl">
                  Explore Services
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Grid with larger images and more animations */}
      <section className="py-24 bg-neutral-950 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/10"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-20 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl font-black mb-6 bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent"
            >
              Gallery of Artistry
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-neutral-400 max-w-3xl mx-auto"
            >
              Each image tells a unique story of beauty, confidence, and transformation
            </motion.p>
          </div>

          {/* Enhanced Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={getAnimationVariant(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => openModal(project)}
                className="group relative cursor-pointer"
                style={{
                  gridRow: index % 5 === 0 ? 'span 2' : 'span 1',
                  height: index % 5 === 0 ? '600px' : '450px'
                }}
              >
                {/* Main Image Container */}
                <div className="relative w-full h-full overflow-hidden rounded-3xl border-2 border-white/10 group-hover:border-pink-500/50 transition-all duration-500">
                  {/* Image with multiple animations */}
                  <motion.div
                    className="absolute inset-0"
                    animate={hoveredIndex === index ? {
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    } : {
                      scale: 1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Animated Overlays */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0.5 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute top-6 left-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="px-4 py-2 bg-black/80 backdrop-blur-sm text-sm font-medium rounded-full text-white border border-white/20">
                      {project.category}
                    </span>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">{project.title}</h3>
                    <p className="text-neutral-200 text-sm line-clamp-2">{project.description}</p>
                  </motion.div>

                  {/* Animated Particles on Hover */}
                  {hoveredIndex === index && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={`particle-${index}-${i}`}
                          className="absolute w-2 h-2 bg-pink-400/60 rounded-full"
                          initial={{ 
                            x: '50%', 
                            y: '50%', 
                            scale: 0,
                            opacity: 1 
                          }}
                          animate={{
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            scale: [0, 1, 0],
                            opacity: [1, 0.5, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Click to zoom indicator */}
                  <motion.div 
                    className="absolute top-6 right-6"
                    animate={hoveredIndex === index ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    } : {}}
                    transition={{ 
                      duration: 2,
                      repeat: hoveredIndex === index ? Infinity : 0
                    }}
                  >
                    <div className="p-3 bg-black/60 backdrop-blur-sm rounded-full border border-white/20">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <motion.div 
                  className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-pink-500/20 via-purple-500/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 -z-10"
                  animate={hoveredIndex === index ? {
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  } : {}}
                  transition={{ 
                    duration: 2,
                    repeat: hoveredIndex === index ? Infinity : 0
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(219,39,119,0.3)",
                  "0 0 40px rgba(219,39,119,0.5)",
                  "0 0 20px rgba(219,39,119,0.3)"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
              className="px-12 py-4 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full text-lg font-bold hover:shadow-xl transition-all"
            >
            
            </motion.button>
          </motion.div> */}
        </div>
      </section>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
              <motion.button
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 p-3 bg-black/70 backdrop-blur-sm rounded-full hover:bg-black"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-40 relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black mb-10 tracking-tighter"
          >
            Your <motion.span 
              className="text-pink-500 inline-block"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [-2, 2, -2]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Masterpiece
            </motion.span> Awaits
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-neutral-300 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to become the next beautiful story in our portfolio?
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-8"
          >
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 0 40px rgba(219,39,119,0.4)",
                    "0 0 60px rgba(219,39,119,0.6)",
                    "0 0 40px rgba(219,39,119,0.4)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
                className="px-16 py-6 bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 text-white font-black text-xl rounded-full transition-all"
              >
                BOOK NOW
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
};

export default Portfolio;