'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Github } from '@/components/Icons';
import Link from 'next/link';

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, techStack, imageUrl, githubUrl, liveUrl } = project;

  const getFullImageUrl = (url) => {
    if (!url) {
      return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop';
    }
    if (url.startsWith('/uploads/')) {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const rootBase = apiBase.replace('/api', '');
      return `${rootBase}${url}`;
    }
    return url;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="project-card group relative flex flex-col h-full rounded-xl overflow-hidden
                 bg-white border border-[#E8E8E8]
                 hover:border-[#D0D0D0]
                 transition-all duration-500 ease-out"
    >

      {/* ── Image Section ── */}
      <div className="relative overflow-hidden aspect-[16/10] bg-[#F2F2F2]">

        {/* Image — subtle zoom on card hover */}
        <img
          src={getFullImageUrl(imageUrl)}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out
                     group-hover:scale-[1.04]"
        />

        {/* Soft bottom fade — just enough to separate image from content */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
      </div>

      {/* ── Content Section ── */}
      <div className="flex flex-col flex-1 px-5 pt-5 pb-5 sm:px-6 sm:pt-5 sm:pb-6">

        {/* ─ Title ─ */}
        <h3 className="font-sans font-semibold text-[17px] sm:text-lg text-[#111111] tracking-[-0.01em]
                       leading-snug mb-2">
          {title}
        </h3>

        {/* ─ Description ─ */}
        <p className="font-dm-sans text-[13px] text-[#777777] leading-[1.65] mb-5 line-clamp-2">
          {description}
        </p>

        {/* ─ Bottom zone — pinned to card bottom ─ */}
        <div className="mt-auto flex flex-col gap-4">

          {/* Tech Stack Pills */}
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {techStack.slice(0, 5).map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[9px] uppercase tracking-wider text-[#666666]
                             bg-[#F5F5F5] border border-[#EBEBEB] px-2.5 py-[4px] rounded-md
                             transition-colors duration-200
                             hover:text-[#333333] hover:border-[#D5D5D5] hover:bg-[#EFEFEF]
                             cursor-default select-none"
                >
                  {tech}
                </span>
              ))}
              {techStack.length > 5 && (
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#AAAAAA]
                                 bg-[#F8F8F8] border border-[#EBEBEB] px-2.5 py-[4px] rounded-md select-none">
                  +{techStack.length - 5}
                </span>
              )}
            </div>
          )}

          {/* Divider */}
          <div className="h-px bg-[#EEEEEE]" />

          {/* Action row */}
          <div className="flex items-center justify-between">

            {/* GitHub link */}
            {githubUrl ? (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/gh inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider
                           text-[#999999] hover:text-[#111111] transition-colors duration-300"
              >
                <Github
                  size={13}
                  className="transition-transform duration-300 group-hover/gh:scale-110"
                />
                <span>Source</span>
              </Link>
            ) : (
              <span />
            )}

            {/* Live demo link */}
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/live inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider
                           text-[#111111] hover:text-[#555555] transition-colors duration-300"
              >
                <span>View Live</span>
                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
                />
              </Link>
            )}
          </div>

        </div>
      </div>
    </motion.article>
  );
}
