import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Heart, ChevronRight, Sparkles, Instagram, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioPreview = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  // Themed Data with Professional Image Links
  const portfolioData = [
    {
      id: 1,
      category: 'bridal',
      title: 'The Royal Nikah',
      description: 'Traditional heavy gold glam with a focus on HD skin finish and bold crimson lips.',
      rating: 5,
      // Matches: Traditional South Asian Bride with heavy jewelry and red tones
      image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1200&q=80',
      featured: true,
      client: 'Zara Ahmed'
    },
    {
      id: 2,
      category: 'party',
      title: 'Vogue After-Dark',
      description: 'A sultry, smoked-out wing paired with a velvet matte nude palette for gala events.',
      rating: 5,
      // Matches: High-end evening makeup/gala style
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=80',
      client: 'Serena Williams'
    },
    {
      id: 3,
      category: 'makeup',
      title: 'Glass Skin Editorial',
      description: 'Hyper-minimalist makeup focusing on light reflection and dewy textures for fashion print.',
      rating: 5,
      // Matches: Editorial "no-makeup" high-fashion dewy look
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
      featured: true,
      client: 'Luxe Magazine'
    },
    {
      id: 4,
      category: 'bridal',
      title: 'Modern Minimalist',
      description: 'The "no-makeup" bridal look: Soft peach tones and individual lash enhancement.',
      rating: 5,
      // Matches: Soft, minimalist, western-style bridal glow
      image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1200&q=80',
      client: 'Elena Rossi'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'bridal', label: 'Bridal Couture' },
    { id: 'party', label: 'Evening Glam' },
    { id: 'makeup', label: 'Editorial' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? portfolioData
    : portfolioData.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-rose-500"></span>
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-rose-500">Curated Portfolio</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-4">
              ICONIC <br />
              <span className="text-rose-500 italic font-light">MOMENTS.</span>
            </h2>
            <p className="text-gray-400 font-light tracking-wide max-w-sm">
              Exploring the intersection of tradition and avant-garde beauty through precision artistry.
            </p>
          </motion.div>

          {/* Luxury Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-all duration-500 border relative overflow-hidden group ${
                  activeCategory === category.id
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-gray-500 border-white/10 hover:border-white/40 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-[4/5] md:aspect-[16/11] overflow-hidden bg-zinc-900 cursor-pointer border border-white/5"
                onClick={() => navigate(`/portfolio/${project.id}`)}
              >
                {/* Full-bleed Image with high-end scale effect */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out group-hover:scale-110"
                />

                {/* Glass Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8 md:p-12">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-rose-500 text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                        <div className="h-[1px] w-8 bg-white/20"></div>
                        <span className="text-white/40 text-[10px] uppercase tracking-widest">{project.client}</span>
                    </div>
                    <h3 className="text-4xl font-bold tracking-tight mb-3">{project.title}</h3>
                    <p className="text-gray-300 text-sm max-w-sm mb-8 font-light leading-relaxed">{project.description}</p>
                    
                    <div className="flex items-center gap-3 text-white font-bold text-[10px] tracking-[0.3em] uppercase">
                      Discover Details <ChevronRight className="w-4 h-4 text-rose-500" />
                    </div>
                  </div>
                </div>

                {/* Static Featured Badge */}
                {project.featured && (
                  <div className="absolute top-8 left-8 z-20">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/10">
                        <Sparkles className="w-3 h-3 text-rose-500" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em]">Signature</span>
                    </div>
                  </div>
                )}
                
                <button className="absolute top-8 right-8 p-3 bg-white/5 backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-rose-600 hover:border-rose-600">
                  <Heart className="w-4 h-4 text-white" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 flex flex-col items-center"
        >
          <button
            onClick={() => navigate('/portfolio')}
            className="group relative px-16 py-6 bg-transparent border border-white/10 overflow-hidden transition-all duration-700 hover:border-rose-500/50"
          >
            <div className="absolute inset-0 bg-rose-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]" />
            <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4">
              View Master Archive <Camera className="w-4 h-4" />
            </span>
          </button>
          
          <div className="mt-12 flex items-center gap-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <Instagram className="w-5 h-5 cursor-pointer" />
            <span className="h-4 w-[1px] bg-white/20"></span>
            <p className="text-gray-500 text-[9px] uppercase tracking-[0.3em]">Follow the journey @artistry_studio</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;