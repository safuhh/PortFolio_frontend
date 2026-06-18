'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getProjects } from '@/lib/api';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        setProjects(res.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Could not fetch projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 bg-white overflow-hidden border-t border-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Cinematic Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
          className="relative mb-24 flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Subtle Background Glow behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.02)_0%,transparent_70%)] pointer-events-none -z-10" />

       

          {/* Headline */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30, filter: "blur(15px)", scale: 0.95 },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] tracking-[-0.04em] leading-[1.05] text-black mb-6"
          >
            Ideas Engineered <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400 drop-shadow-sm">
              Into Reality
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-gray-500 text-base sm:text-lg max-w-2xl font-sans leading-[1.7] mx-auto"
          >
            A collection of carefully crafted products, scalable applications, and full-stack solutions built with a focus on performance, user experience, and real-world impact.
          </motion.p>
          
          {/* Animated Accent Line */}
          <motion.div 
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: { width: "100px", opacity: 1, transition: { duration: 1, delay: 0.6, ease: "easeInOut" } }
            }}
            className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-12"
          />
        </motion.div>
        
        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="border border-[#ECECED] bg-white h-[400px] flex flex-col justify-between p-6 animate-pulse"
              >
                <div className="bg-gray-100 aspect-[16/10] w-full mb-4" />
                <div className="h-6 bg-gray-100 w-2/3 mb-4" />
                <div className="h-4 bg-gray-100 w-5/6 mb-2" />
                <div className="h-4 bg-gray-100 w-4/6 mb-6" />
                <div className="h-8 bg-gray-100 w-1/3" />
              </div>
            ))}
          </div>
        )}

        {/* Error message */}
        {!loading && error && (
          <div className="text-center py-12 border border-red-100 bg-red-50/50 max-w-lg mx-auto">
            <p className="font-dm-sans text-sm text-red-500">{error}</p>
          </div>
        )}

        {/* No Projects available */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-[#EAEAEA]">
            <p className="font-dm-sans text-sm text-[#6B6B6B]">No projects loaded. Add some in the dashboard.</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && projects.length > 0 && (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {projects
                .slice(0, 3)
                .map((project, index) => (
                  <motion.div
                    key={project._id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProjectCard project={project} index={index} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
}
