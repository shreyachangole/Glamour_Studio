import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { useInView, motion } from 'framer-motion';
import image from '../../assets/About/image1.png';

const AboutPreview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [yearsCount, setYearsCount] = React.useState(0);

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } 
  };

  const itemVariants = { 
    hidden: { y: 20, opacity: 0 }, 
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } } 
  };

  const fadeInUp = { 
    hidden: { y: 30, opacity: 0 }, 
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } } 
  };

  const slideFromLeft = { 
    hidden: { x: -100, opacity: 0, scale: 0.95 }, 
    visible: { 
      x: 0, 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 }
    }
  };

  useEffect(() => {
    // Only start counting if the section is in view and we haven't counted yet
    if (isInView && yearsCount === 0) {
      const duration = 1500; // Total time for animation (1.5s)
      const steps = 50;
      const interval = duration / steps;
      const targetYears = 7; // ✔ UPDATED TO 7 YEARS
      let currentYear = 0;

      const timer = setInterval(() => {
        currentYear = Math.min(currentYear + targetYears / steps, targetYears);
        setYearsCount(Math.floor(currentYear));
        
        if (currentYear >= targetYears) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]); // Removed yearsCount from dependency to prevent unnecessary re-runs

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <motion.div 
            initial="hidden" 
            animate={isInView ? 'visible' : 'hidden'} 
            variants={fadeInUp} 
            className="mb-16"
          >
            <SectionTitle
              title="Professional Makeup Artist"
              subtitle="Transforming beauty through art"
              align="center"
              titleColor="text-gray-900"
              subtitleColor="text-pink-600"
            />
          </motion.div>

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-10">

            {/* LEFT IMAGE FRAME */}
            <motion.div 
              initial="hidden" 
              animate={isInView ? 'visible' : 'hidden'} 
              variants={slideFromLeft} 
              className="relative group"
            >
              <div className="bg-gray-100 p-3 shadow-lg rounded-lg">
                <motion.img
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  src={image}
                  alt="Professional makeup artistry"
                  className="object-cover h-[550px] w-full block rounded-md"
                />
              </div>

              {/* EXPERIENCE BADGE */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 1, duration: 0.5, type: 'spring' }}
                className="absolute -bottom-6 -right-6 bg-white border border-gray-200 shadow-md p-5 rounded-xl z-20"
              >
                <div className="text-3xl font-bold text-gray-900">{yearsCount}+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </motion.div>
            </motion.div>

            {/* RIGHT BLOCK */}
            <motion.div 
              initial="hidden" 
              animate={isInView ? 'visible' : 'hidden'} 
              variants={containerVariants} 
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-3xl font-light text-gray-900 leading-tight">
                  Creating flawless beauty for every occasion
                  <span className="block font-medium text-pink-600 mt-3">
                    bridal • editorial • glam • fashion
                  </span>
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 my-6"></div>
              </motion.div>

              <motion.p variants={itemVariants} className="text-gray-700 text-lg leading-relaxed">
                With an artistic eye and a passion for enhancing natural beauty, I create stunning makeup looks that highlight confidence and elegance.
                From soft glam to bold editorial transformations, each look is crafted with precision and creativity.
              </motion.p>

              {/* FEATURES */}
              <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: 'palette', title: 'Creative Artistry', desc: 'Unique makeup styles' },
                  { icon: 'award', title: 'Top Rated', desc: 'Loved by clients' },
                  { icon: 'heart', title: 'Client Focused', desc: 'Personalized looks' },
                  { icon: 'star', title: 'Expert Techniques', desc: 'Flawless finish' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white border border-gray-100 rounded-xl p-5 hover:border-pink-200 hover:shadow-lg transition duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center">
                        <i className={`fas fa-${item.icon} text-pink-600 text-lg`}></i>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* BUTTONS */}
              <motion.div variants={itemVariants} className="pt-8">
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" className="bg-pink-600 hover:bg-pink-700 border-0">
                    <Link to="/about" className="flex items-center">
                      READ MORE <i className="fas fa-arrow-right ml-3"></i>
                    </Link>
                  </Button>

                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:border-pink-300 hover:text-pink-700">
                    <Link to="/portfolio" className="flex items-center">
                      <i className="fas fa-images mr-3"></i>Portfolio
                    </Link>
                  </Button>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;