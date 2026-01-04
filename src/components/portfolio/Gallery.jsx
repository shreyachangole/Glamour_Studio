import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform, useScroll } from 'framer-motion';

const Gallery = ({ projects = [] }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', padding: '8rem 2rem' }}>
      {/* Dynamic Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #ff0055, #00dfd8)',
          transformOrigin: '0%',
          zIndex: 1000
        }}
      />

      <style>
        {`
          .masonry-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            grid-auto-rows: 20px;
            gap: 30px;
            max-width: 1400px;
            margin: 0 auto;
          }
          .shine-layer {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.2) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.4s ease;
            pointer-events: none;
          }
          .gallery-item:hover .shine-layer { opacity: 1; }
        `}
      </style>

      <motion.div 
        className="masonry-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
      >
        {projects.map((project, i) => (
          <GalleryItem key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

const GalleryItem = ({ project }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const onMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    cardRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="gallery-item"
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
      }}
      style={{
        gridRowEnd: `span ${Math.floor(Math.random() * 5) + 22}`,
        position: 'relative',
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1200px"
      }}
    >
      <motion.div 
        style={{ width: '100%', height: '100%', borderRadius: '30px', overflow: 'hidden', position: 'relative', background: '#111' }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.img 
          src={project.image} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] }}
        />
        <div className="shine-layer" />

        <motion.div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem',
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
          transform: 'translateZ(50px)',
        }}>
          <motion.span style={{ color: '#00dfd8', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', display: 'block', marginBottom: '0.5rem' }}>
            {project.category || 'SHOWCASE'}
          </motion.span>
          <h3 style={{ color: 'white', fontSize: '1.5rem', margin: 0, fontWeight: '600' }}>{project.title}</h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
