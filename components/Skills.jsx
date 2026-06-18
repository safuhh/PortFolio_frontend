'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import DomeGallery from './DomeGallery';
import MobileSkills from './MobileSkills';

export default function Skills() {
  const sectionRef = useRef(null);
  
  // Track scroll for the outro effect when moving to the next section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Outro effects: as we scroll past this section, it fades out and scales down slightly
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.95]);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative pt-24 sm:pt-32 bg-transparent overflow-hidden flex flex-col border-t border-black/5"
    >
      {/* Wrapping the content in the scroll-linked motion.div for the outro effect */}
      <motion.div style={{ opacity, scale }} className="w-full relative z-10 flex flex-col items-center pb-10">
        
        <div className="max-w-6xl mx-auto px-5 sm:px-6 w-full relative z-10">
          
          {/* Section Header */}
          <div className="mb-10 text-center flex flex-col items-center">
            
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.4em] text-zinc-500 mb-6 block"
            >
              What I Bring To The Table
            </motion.span>
            
          <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="font-sans text-5xl sm:text-7xl md:text-8xl font-black tracking-[-0.04em] leading-[1.05]"
>
  <span className="block text-black">
    The Stack Behind
  </span>
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-700 to-zinc-400">
    Every Build
  </span>
</motion.h2>
            
          
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent mt-12"
            />

          </div>
        </div>

        {/* Desktop Layout: Dome Gallery (Hidden on mobile) */}
        <div className="hidden md:flex relative w-full h-[60vh] sm:h-[70vh] items-center justify-center mt-10">
          <DomeGallery 
            overlayBlurColor="transparent" 
            grayscale={false}
            minRadius={100}
            fit={0.4}
            autoRotate={true}
            autoRotateSpeed={0.2}
          />
        </div>

        {/* Mobile Layout: Separate Mobile Component (Hidden on desktop) */}
        <div className="flex md:hidden w-full relative z-10 mt-4">
          <MobileSkills />
        </div>

      </motion.div>
    </section>
  );
}
