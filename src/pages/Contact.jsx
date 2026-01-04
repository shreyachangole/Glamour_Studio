import React, { useState } from 'react';
import { 
  Phone, 
  Clock, 
  Check, 
  Send, 
  Sparkles,
  Instagram,
  MapPin 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Hair Styling',
    'Makeup Services',
    'Facial Treatments',
    'Manicure & Pedicure',
    'Waxing Services',
    'Bridal Packages',
    'Other'
  ];

  // Fixed: Valid Google Maps Embed URL structure for Amravati location
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119283.43542718116!2d77.67139199320986!3d20.90803403366035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a618d96333%3A0x67a33e970a2f90a!2sAmravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setFormData({ 
        name: '', email: '', phone: '', service: '', 
        date: '', time: '', message: '' 
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const inputClasses = "w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all placeholder:text-neutral-500 outline-none";
  const labelClasses = "block text-sm font-bold text-neutral-400 mb-2 uppercase tracking-widest";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-xs font-black uppercase tracking-widest text-pink-400">Excellence Awaits</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">TOUCH</span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Ready for your transformation? Secure your spot with our master specialists 
            for a personalized beauty experience.
          </p>
        </div>
      </div>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Information & Map */}
            <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
              <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/5 rounded-[32px] p-8 space-y-8">
                <h3 className="text-2xl font-black tracking-tight">Quick Connect</h3>
                
                <div className="space-y-6">
                  {[
                    { icon: <Phone className="text-pink-500" />, label: "Call Us", val: "8530375725" },
                    { 
                      icon: <Instagram className="text-pink-500" />, 
                      label: 'Instagram', 
                      val: "@aura_unisex_salon_amravati" 
                    },
                    { icon: <Clock className="text-pink-500" />, label: "Studio Hours", val: "Mon-Sat: 9AM - 8PM" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="p-3 bg-pink-600/10 rounded-xl">{item.icon}</div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">{item.label}</p>
                        {item.label === 'Instagram' ? (
                          <a href="https://www.instagram.com/aura_unisex_salon_amravati/?hl=en" target="_blank" rel="noreferrer" className="font-bold text-neutral-200 hover:text-pink-500 transition-colors">
                            {item.val}
                          </a>
                        ) : (
                          <p className="font-bold text-neutral-200">{item.val}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-sm font-black uppercase tracking-widest text-pink-500 mb-4">Why Book With Us?</h4>
                  <ul className="space-y-3">
                    {['Certified Master Artists', 'Premium Organic Products', 'Luxury Private Suites'].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-neutral-400 font-medium">
                        <Check className="w-4 h-4 text-pink-500" /> {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/5 rounded-[32px] p-2 overflow-hidden h-[350px] group relative">
                <iframe
                  title="Aura Salon Location"
                  src={mapEmbedUrl}
                  className="w-full h-full rounded-[26px] grayscale invert opacity-50 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-6 left-6 right-6 pointer-events-none transition-opacity duration-500 group-hover:opacity-0">
                  <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3">
                    <div className="p-2 bg-pink-600 rounded-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-pink-500">Location</p>
                      <p className="text-xs font-bold text-white">Find us in Amravati</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="bg-neutral-900/30 border border-white/10 rounded-[40px] p-8 md:p-12">
                {isSubmitted ? (
                  <div className="py-20 text-center animate-pulse">
                    <div className="w-20 h-20 mx-auto bg-pink-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(219,39,119,0.4)]">
                      <Check className="w-10 h-10 text-white" strokeWidth={3} />
                    </div>
                    <h3 className="text-3xl font-black mb-4">Request Received!</h3>
                    <p className="text-neutral-400 max-w-sm mx-auto">
                      Our concierge will contact you within 24 hours to finalize your appointment.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClasses} required placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label className={labelClasses}>Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} required placeholder="jane@example.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} required placeholder="8530375725" />
                      </div>
                      <div>
                        <label className={labelClasses}>Select Service</label>
                        <select name="service" value={formData.service} onChange={handleChange} className={inputClasses} required>
                          <option value="" className="bg-neutral-900">Choose a service</option>
                          {services.map((s, i) => <option key={i} value={s} className="bg-neutral-900">{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className={labelClasses}>Preferred Date</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} className={inputClasses} required />
                      </div>
                      <div>
                        <label className={labelClasses}>Preferred Time</label>
                        <select name="time" value={formData.time} onChange={handleChange} className={inputClasses} required>
                          <option value="" className="bg-neutral-900">Select time</option>
                          {['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'].map(t => <option key={t} value={t} className="bg-neutral-900">{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>Special Requests</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className={inputClasses} placeholder="Tell us about your preferences..."></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full relative flex items-center justify-center gap-3 py-5 bg-pink-600 hover:bg-pink-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] transition-all disabled:opacity-50 shadow-[0_10px_30px_rgba(219,39,119,0.3)] active:scale-95"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Confirm Appointment
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;