'use client';
import Ferrofluid from './Ferrofluid';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 600], [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const darkOverlayOpacity = useTransform(scrollY, [0, 600], [0, 0.8]);

  return (
    <section className="sticky top-0 z-0 w-full h-[100vh] bg-[#050505] m-0 p-0 overflow-hidden flex items-center justify-center">
      
      {/* Dynamic Ferrofluid Background */}
      <div className="absolute inset-0 z-0">
        <Ferrofluid
          colors={["#df0000", "#0028ff", "#ea0000"]}
          speed={0.5}
          scale={1}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={3}
          shimmer={1}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction={true}
          mouseStrength={1.4}
          mouseRadius={0.3}
        />
      </div>

      {/* Scroll-Linked Dark Overlay to smoothly dim the fluid during transition */}
      <motion.div 
        style={{ opacity: darkOverlayOpacity }}
        className="absolute inset-0 z-1 bg-[#050505] pointer-events-none" 
      />

      {/* Deep Vignette Overlay for Text Legibility */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />

      {/* Foreground Content Container with Parallax */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center justify-center px-6 w-full max-w-4xl mx-auto text-center mt-12"
      >
         

        {/* Name and Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <h2 className="text-xl sm:text-2xl font-mono text-[#A1A1AA] mb-4 tracking-tight">
            Hi, I'm Safvan P.
          </h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
className="font-sans text-5xl sm:text-7xl md:text-[5.5rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 leading-[1.05] pb-2 text-center drop-shadow-[0_8px_30px_rgba(255,255,255,0.15)]"           >
            Building digital <br className="hidden sm:block" />
            experiences.
          </motion.h1>
        </motion.div>

        {/* Short Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl font-sans leading-relaxed"
        >
          MERN Stack Developer focused on creating elegant, scalable, and high-performance web applications that bridge design and engineering.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
        >
          <a href="#projects" className="group relative flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto text-sm tracking-wide font-bold text-black bg-white rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="#contact" className="px-8 py-4 w-full sm:w-auto text-sm tracking-wide font-medium text-white bg-white/5 border border-white/20 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md">
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-800 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-gray-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
