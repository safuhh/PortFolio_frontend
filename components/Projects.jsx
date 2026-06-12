'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getProjects } from '@/lib/api';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

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
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[#6B6B6B] mb-2">
              Portfolio
            </p>
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-[#000000] tracking-tight">
              Selected Projects
            </h2>
            <div className="w-12 h-[1px] bg-[#000000] mt-4" />
          </div>
          
          <Link
            href="/projects"
            className="font-mono text-xs uppercase tracking-wider text-[#6B6B6B] hover:text-[#000000] relative py-2 group transition-colors self-start md:self-auto"
          >
            All Works
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#000000] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
        </div>

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
