import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "../components/services/ServiceCard";
import { servicesData } from "../data/servicesData";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const serviceCategories = [
    { id: "all", label: "All Services" },
    // { id: 'hair-styling', label: 'Hair Services' },
    // { id: 'makeup', label: 'Makeup' },
    // { id: 'facial', label: 'Skin Care' },
    // { id: 'manicure-pedicure', label: 'Nail Care' },
    // { id: 'waxing', label: 'Hair Removal' },
    // { id: 'bridal-packages', label: 'Bridal' }
  ];

  const filteredServices =
    selectedCategory === "all"
      ? servicesData
      : servicesData.filter(
          (service) => service.category === selectedCategory
        );

  return (
    <div className="services-page bg-neutral-950 text-white min-h-screen selection:bg-pink-500/30">
      {/* Hero Section */}
      <div className="relative py-32 bg-neutral-950 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px]"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none tracking-tighter">
              ELITE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
                SERVICES
              </span>
            </h1>
            <p className="text-xl text-neutral-400 mb-10 leading-relaxed max-w-xl">
              Where high-fashion meets holistic wellness. Our master artisans
              curate treatments designed for the modern icon.
            </p>

            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-4 bg-pink-600 hover:bg-pink-500 text-white font-black rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(219,39,119,0.5)]">
                BOOK EXPERIENCE
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-6 bg-neutral-950/80 sticky top-0 z-50 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-white text-black"
                    : "bg-neutral-900 text-neutral-500 hover:bg-neutral-800 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-neutral-900/50 border border-white/5 p-8 rounded-[2rem] hover:bg-neutral-900 transition-all duration-500 hover:border-pink-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />

                  <div className="relative z-10">
                    <div className="text-4xl mb-6 text-pink-500 group-hover:scale-110 transition-transform duration-500 inline-block">
                      <i className={`fas ${service.icon}`}></i>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-neutral-500 mb-8 line-clamp-2 group-hover:text-neutral-300 transition-colors">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <span className="text-pink-500 font-black tracking-widest text-sm uppercase">
                        Signature
                      </span>
                      {/* <Link
                        to={`/services/${service.id}`}
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-pink-600 transition-all"
                      >
                        <i className="fas fa-arrow-right text-sm"></i>
                      </Link> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Membership Section */}
<section className="py-28 bg-neutral-900/40">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-10">
      {[
        { type: "Silver", price: "499", icon: "" },
        { type: "Gold", price: "899", icon: "", popular: true },
        { type: "Platinum", price: "1599", icon: "" },
      ].map((plan) => (
        <motion.div
          key={plan.type}
          whileHover={{ y: -10, scale: 1.02 }}
          className={`p-12 rounded-[3rem] border backdrop-blur-xl ${
            plan.popular
              ? "border-pink-600 bg-neutral-950 shadow-2xl shadow-pink-500/20 scale-105"
              : "border-white/10 bg-neutral-900/60"
          }`}
        >
          <div className="text-center">
            <span className="text-5xl mb-6 block">{plan.icon}</span>

            <h3 className="text-sm font-black uppercase tracking-[0.35em] text-neutral-400 mb-3">
              {plan.type} Membership
            </h3>

            <div className="text-6xl font-black mb-10 text-white">
              ${plan.price}
            </div>

            <ul className="text-neutral-300 space-y-5 mb-12 text-sm">
              <li>Luxury One-on-One Consultation</li>
              <li>Priority Scheduling (Front of the Queue)</li>
              <li>Complimentary Premium Beverages</li>
              <li>Exclusive Access to Elite Events</li>
              <li>VIP Lounge Access</li>
              {plan.type === "Platinum" && (
                <li className="text-pink-400">Personal Stylist Concierge</li>
              )}
            </ul>

           <Link
  to="/contact"
  className={`block text-center w-full py-5 rounded-2xl text-lg font-black transition-all ${
    plan.popular
      ? "bg-pink-600 text-white hover:bg-pink-500"
      : "bg-white text-black hover:bg-pink-500 hover:text-white"
  }`}
>
  JOIN THE ELITE
</Link>

          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-32 bg-pink-600 text-center relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase">
            Ready for your <br /> transformation?
          </h2>

          <Link
            to="/contact"
            className="inline-block px-12 py-5 bg-black text-white font-black rounded-full hover:scale-110 transition-transform"
          >
            SECURE YOUR SLOT
          </Link>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full" />
      </motion.section>
    </div>
  );
};

export default Services;
