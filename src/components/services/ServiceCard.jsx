import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Clock, ShieldCheck } from 'lucide-react';

// 1. Modern Service Data
const LUXE_SERVICES = [
  {
    id: 'h1',
    title: "Editorial Hair",
    tagline: "High-fashion cuts & organic color",
    price: "120",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430863?w=800&q=80",
    color: "#db2777" // Pink-600
  },
  {
    id: 'm1',
    title: "Glass Skin Makeup",
    tagline: "HD finish for red carpet events",
    price: "95",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80",
    color: "#e11d48" // Rose-600
  },
  {
    id: 's1',
    title: "Hydra-Luxe Facial",
    tagline: "Deep cellular rejuvenation",
    price: "150",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    color: "#7c3aed" // Violet-600
  }
];

// 2. The Reusable Service Card Component
const LuxeCard = ({ service }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-[500px] w-full bg-neutral-900 rounded-[2.5rem] overflow-hidden border border-white/5"
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
      </div>

      {/* Floating Header */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
        <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2">
          <Sparkles className="w-3 h-3 text-pink-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white">Signature</span>
        </div>
        <div className="text-right text-white">
          <span className="block text-[10px] font-black uppercase opacity-50">Starting</span>
          <span className="text-2xl font-black">${service.price}</span>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
        <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-2">
          {service.title}
        </h3>
        <p className="text-neutral-400 text-sm font-medium mb-6 max-w-[80%]">
          {service.tagline}
        </p>

        {/* Hover-only Info */}
        <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-6">
          <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
            <Clock className="w-4 h-4 text-pink-500" /> 60-90m
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-pink-500" /> Certified
          </div>
        </div>

        {/* Action Button */}
        <Link 
          to={`/services/${service.id}`}
          className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-pink-600 hover:text-white transition-all"
        >
          Explore Treatment
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

// 3. The Page Section
const ServicesSection = () => {
  return (
    <section className="bg-neutral-950 py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h4 className="text-pink-500 font-black text-xs uppercase tracking-[0.4em] mb-4">Elite Menu</h4>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            Tailored <br /> <span className="text-neutral-800 outline-text">Excellence</span>
          </h2>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LUXE_SERVICES.map((item) => (
            <LuxeCard key={item.id} service={item} />
          ))}
        </div>
      </div>

      {/* CSS for the "Outline" text effect */}
      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px #262626;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;