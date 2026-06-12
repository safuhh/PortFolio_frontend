'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getResume } from '@/lib/api';

export default function Hero() {
  const [cvUrl, setCvUrl] = useState('#');

  useEffect(() => {
    const fetchCv = async () => {
      try {
        const res = await getResume();
        if (res.data && res.data.fileUrl) {
          const baseUrl = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL.replace('/api', '') : 'https://portfolio-backend-4y2o.onrender.com';
          setCvUrl(`${baseUrl}${res.data.fileUrl}`);
        }
      } catch (err) {
        console.error('Failed to fetch CV', err);
      }
    };
    fetchCv();
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-5 sm:px-6 overflow-hidden bg-white">
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center relative z-10">
        
        {/* Left Side: Typography & CTAs */}
        <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-3 sm:mb-4"
          >
            Full Stack Developer
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-[#000000] leading-[1.2] mb-4 sm:mb-5"
          >
            I build clean, modern web applications and craft seamless user experiences that make an impact
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-dm-sans text-[#6B6B6B] text-xs sm:text-sm max-w-md leading-relaxed mb-7 sm:mb-8 mx-auto md:mx-0"
          >
            Entry-level developer with hands-on internship experience. Focused on writing clean, maintainable code, solving real-world challenges, and growing within a collaborative team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
          >
            <Link
              href="/#projects"
              className="bg-[#000000] text-white px-7 py-3.5 text-xs font-mono uppercase tracking-[0.1em] hover:bg-[#333333] transition-colors duration-300 border border-transparent shadow-sm text-center"
            >
              View Projects
            </Link>
            
            <a
              href={cvUrl}
              target={cvUrl !== '#' ? "_blank" : undefined}
              rel={cvUrl !== '#' ? "noopener noreferrer" : undefined}
              onClick={(e) => { if (cvUrl === '#') e.preventDefault(); }}
              className="border border-[#E8E8E8] text-[#000000] px-7 py-3.5 text-xs font-mono uppercase tracking-[0.1em] hover:border-[#000000] hover:bg-[#F5F5F7] transition-all duration-300 text-center"
            >
              Download CV
            </a>
          </motion.div>
        </div>


        {/* Right Side: Premium Profile Image Animation */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          {/* Entrance wrapper — y lift + fade + scale on load */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >

            {/* Ring 1 — slow outer breath, very low opacity */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.18, 0.07, 0.18] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute w-[340px] sm:w-[400px] md:w-[420px] lg:w-[450px] aspect-square rounded-full border border-[#D8D8D8] pointer-events-none"
            />

            {/* Ring 2 — slightly faster, tighter radius */}
            <motion.div
              animate={{ scale: [1, 1.035, 1], opacity: [0.25, 0.1, 0.25] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
              className="absolute w-[300px] sm:w-[360px] md:w-[380px] lg:w-[408px] aspect-square rounded-full border border-[#ECECED] pointer-events-none"
            />

            {/* Image container with hover micro-interaction */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[270px] sm:w-[320px] md:w-[345px] lg:w-[370px] aspect-square rounded-full overflow-hidden cursor-pointer"
              style={{
                boxShadow: '0 8px 48px rgba(0,0,0,0.07), 0 2px 12px rgba(0,0,0,0.04)'
              }}
            >
              {/* Clean border ring directly on image container */}
              <div className="absolute inset-0 rounded-full border-2 border-[#E4E4E4] z-10 pointer-events-none" />

              {/* Profile image */}
              <img
                src="/photo.png"
                alt="Safvan P Headshot"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 48%' }}
              />

              {/* Inner vignette — depth & realism */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none z-20"
                style={{
                  boxShadow: 'inset 0 0 28px rgba(0,0,0,0.05), inset 0 -8px 20px rgba(0,0,0,0.03)'
                }}
              />
            </motion.div>

          </motion.div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 cursor-pointer pointer-events-none"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6B6B6B]">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-[#000000]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
