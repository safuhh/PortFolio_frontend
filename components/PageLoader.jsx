'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'unset';
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 bg-[#FFFFFF] flex flex-col items-center justify-center"
        >
          {/* Faint luxury background grain */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(10,10,10,0.02)_1px,transparent_0)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="relative flex flex-col items-center">
            {/* Initials Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
              }}
              className="font-sans font-semibold text-5xl md:text-6xl tracking-widest text-[#000000]"
            >
              SAFVAN
            </motion.h1>

            {/* Decorative Black Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ 
                scaleX: 1,
                transition: { duration: 0.8, delay: 0.8, ease: "easeInOut" }
              }}
              className="w-16 h-[1px] bg-[#000000] mt-4 origin-center"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.6,
                transition: { duration: 0.6, delay: 1.3 }
              }}
              className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#6B6B6B] mt-4 font-light"
            >
              Digital Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
