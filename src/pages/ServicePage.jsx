import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const LuxeCard = ({ service }) => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-[500px] w-full bg-neutral-900 rounded-[2.5rem] overflow-hidden border border-white/5"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
      </div>

      {/* Top Badge + Price */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
        
        {/* Signature Badge (NOW CLICKABLE) */}
        <Link
          to={`/services/${service.id}/signature`}
          className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2 hover:bg-white/20 transition"
        >
          <Sparkles className="w-3 h-3 text-pink-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white">
            Signature
          </span>
        </Link>

        <div className="text-right text-white">
          <span className="block text-[10px] font-black uppercase opacity-50">Starting</span>
          <span className="text-xl font-black">{service.details.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
        <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-1">
          {service.title}
        </h3>

        <p className="text-neutral-400 text-sm font-medium mb-6 max-w-[80%]">
          {service.description}
        </p>

        {/* On Hover Details */}
        <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-6">
          <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
            <Clock className="w-4 h-4 text-pink-500" /> {service.details.duration}
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-pink-500" /> Premium
          </div>
        </div>

        {/* Button */}
        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-pink-600 hover:text-white transition-all"
        >
          Explore Service
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-neutral-950 py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h4 className="text-pink-500 font-black text-xs uppercase tracking-[0.4em] mb-4">
            Elite Menu
          </h4>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            Tailored <br />
            <span className="text-neutral-800 outline-text">Excellence</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <LuxeCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Outline text CSS */}
      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px #333;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
