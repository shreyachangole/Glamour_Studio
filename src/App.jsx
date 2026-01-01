import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServicePage from './pages/ServicePage';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Academy from './pages/Academy';
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServicePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        {/* <a 
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <i className="bg-[#25D366] p-4 block rounded-full shadow-xl cursor-pointer hover:scale-110 transition-transform active:scale-95 group relative"></i>
        </a> */}
        
        {/* Back to Top Button */}
        {/* <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="back-to-top"
        >
          <i className="fas fa-arrow-up"></i>
        </button> */}
      </div>
    </BrowserRouter>
  );
}

export default App;