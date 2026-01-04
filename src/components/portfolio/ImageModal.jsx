import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ImageModal = ({ image, onClose, onNavigate }) => {
  const modalRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const parallaxX = useSpring(useTransform(x, [0, 1], [-30, 30]), { stiffness: 100, damping: 30 });
  const parallaxY = useSpring(useTransform(y, [0, 1], [-30, 30]), { stiffness: 100, damping: 30 });

  // Track slide direction for animation
  if (!onNavigate.lastDirection) onNavigate.lastDirection = 'next';

  // Handle ESC and arrow keys
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onNavigate.lastDirection = 'next';
        onNavigate('next');
      }
      if (e.key === 'ArrowLeft') {
        onNavigate.lastDirection = 'prev';
        onNavigate('prev');
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onClose, onNavigate]);

  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
      exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,20,40,0.98) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: `radial-gradient(circle, rgba(${Math.random() * 255}, ${
                Math.random() * 255
              }, 255, 1) 0%, transparent 70%)`,
              borderRadius: '50%',
            }}
          />
        ))}
      </div>

      <motion.div
        ref={modalRef}
        initial={{ scale: 0.8, rotateY: -30, opacity: 0 }}
        animate={{ scale: 1, rotateY: 0, opacity: 1 }}
        exit={{ scale: 0.8, rotateY: 30, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: `
            0 0 50px rgba(59, 130, 246, 0.5),
            0 0 100px rgba(59, 130, 246, 0.3),
            0 0 150px rgba(59, 130, 246, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)
          `,
          transform: `translateX(${parallaxX}px) translateY(${parallaxY}px)`,
          background: 'linear-gradient(145deg, rgba(30,30,50,0.9) 0%, rgba(20,20,40,0.95) 100%)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
        onMouseMove={(e) => {
          const rect = modalRef.current.getBoundingClientRect();
          x.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
          y.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sliding Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={image.image}
            src={image.image}
            alt={image.title}
            initial={{
              opacity: 0,
              x: onNavigate.lastDirection === 'next' ? 120 : -120,
              scale: 0.96,
            }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{
              opacity: 0,
              x: onNavigate.lastDirection === 'next' ? -120 : 120,
              scale: 1.03,
            }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '85vh',
              objectFit: 'contain',
              display: 'block',
              filter: 'brightness(1.1) contrast(1.05)',
            }}
          />
        </AnimatePresence>

        {/* Title and Description */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
            padding: '40px 30px 30px',
            color: 'white',
            backdropFilter: 'blur(10px)',
          }}
        >
          <motion.h3
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '10px',
              background: 'linear-gradient(45deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(96, 165, 250, 0.3)',
            }}
          >
            {image.title}
          </motion.h3>
          {image.description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                color: '#d1d5db',
                fontSize: '1rem',
                lineHeight: 1.6,
              }}
            >
              {image.description}
            </motion.p>
          )}
        </motion.div>

        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'white',
            fontSize: '1.8rem',
            fontWeight: '300',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'block' }}
          >
            ✕
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;
