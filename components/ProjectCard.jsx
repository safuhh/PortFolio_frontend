'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Github } from '@/components/Icons'; // Ensure this path matches your setup
import Link from 'next/link';

// Framer Motion variants for staggered children rendering
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98],
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, techStack, imageUrl, githubUrl, liveUrl } = project;

  const getFullImageUrl = (url) => {
    if (!url) {
      return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop';
    }
    if (url.startsWith('/uploads/')) {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || 'https://portfolio-backend-4y2o.onrender.com/api';
      const rootBase = apiBase.replace('/api', '');
      return `${rootBase}${url}`;
    }
    return url;
  };

  return (
    <motion.article
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={cardVariants}
      className="project-card group relative flex flex-col h-full rounded-2xl overflow-hidden
                 bg-white border border-gray-200/80
                 hover:border-gray-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]
                 hover:-translate-y-1.5
                 transition-all duration-500 ease-out will-change-transform"
    >
      {/* ── Image Section ── */}
      <div className="relative overflow-hidden aspect-[16/10] bg-gray-100 cursor-pointer">
        {/* Image — smoother, slightly deeper zoom */}
        <img
          src={getFullImageUrl(imageUrl)}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-[0.33,1,0.68,1]
                     group-hover:scale-[1.08]"
        />

        {/* Premium Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 ease-out z-10" />

        {/* Floating "Explore" badge on hover */}
        {liveUrl && (
          <div className="absolute top-4 right-4 z-20 -translate-y-4 opacity-0 transition-all duration-500 ease-[0.33,1,0.68,1]
                          group-hover:translate-y-0 group-hover:opacity-100">
            <span className="flex items-center gap-1 bg-white/95 backdrop-blur-md text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
              Explore <ArrowUpRight size={12} strokeWidth={2.5} />
            </span>
          </div>
        )}

        {/* Soft bottom fade to blend seamlessly into the white card base */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none z-10" />
      </div>

      {/* ── Content Section ── */}
      <div className="flex flex-col flex-1 px-5 pt-6 pb-6 sm:px-7 sm:pt-7 sm:pb-7 relative bg-white z-20">
        
        {/* ─ Title ─ */}
        <motion.h3 
          variants={itemVariants} 
          className="font-sans font-bold text-[18px] sm:text-[20px] text-gray-900 tracking-tight leading-snug mb-2.5
                     group-hover:text-blue-600 transition-colors duration-300"
        >
          {title}
        </motion.h3>

        {/* ─ Description ─ */}
        <motion.p 
          variants={itemVariants} 
          className="font-dm-sans text-[14px] text-gray-500 leading-[1.7] mb-6 line-clamp-2"
        >
          {description}
        </motion.p>

        {/* ─ Bottom zone — pinned to card bottom ─ */}
        <motion.div variants={itemVariants} className="mt-auto flex flex-col gap-5">
          
          {/* Tech Stack Pills - staggered background fill on card hover */}
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 5).map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[10px] uppercase tracking-wider text-gray-500
                             bg-gray-50 border border-gray-200/70 px-2.5 py-[5px] rounded-md
                             transition-all duration-300 ease-out
                             group-hover:bg-gray-100 group-hover:border-gray-300 group-hover:text-gray-800
                             cursor-default select-none"
                  style={{ transitionDelay: `${idx * 40}ms` }}
                >
                  {tech}
                </span>
              ))}
              {techStack.length > 5 && (
                <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400
                                 bg-gray-50/50 border border-gray-100 px-2.5 py-[5px] rounded-md select-none">
                  +{techStack.length - 5}
                </span>
              )}
            </div>
          )}

          {/* Animated Divider line */}
          <div className="relative h-px w-full bg-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gray-300 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
          </div>

          {/* Action row */}
          <div className="flex items-center justify-between pt-1">
            
            {/* GitHub link with rolling text effect */}
            {githubUrl ? (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/gh inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest
                           text-gray-500 hover:text-black transition-colors duration-300 overflow-hidden"
              >
                <Github
                  size={14}
                  className="transition-transform duration-300 group-hover/gh:rotate-12 group-hover/gh:scale-110"
                />
                <div className="relative h-[1em] overflow-hidden">
                  <span className="block transition-transform duration-300 group-hover/gh:-translate-y-full">Source</span>
                  <span className="absolute inset-0 block translate-y-full transition-transform duration-300 group-hover/gh:translate-y-0">Source</span>
                </div>
              </Link>
            ) : (
              <span />
            )}

            {/* Live demo link with growing underline */}
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/live inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest
                           text-black hover:text-blue-600 transition-colors duration-300"
              >
                <span className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-blue-600 after:scale-x-0 after:origin-right group-hover/live:after:scale-x-100 group-hover/live:after:origin-left after:transition-transform after:duration-300">
                  View Live
                </span>
                <ArrowUpRight
                  size={14}
                  className="transition-all duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 group-hover/live:rotate-[15deg]"
                />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}