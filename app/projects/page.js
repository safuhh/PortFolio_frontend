'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getProjects } from '@/lib/api';
import ProjectCard from '@/components/ProjectCard';
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectsPage() {
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
        setError('Could not fetch projects. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 relative">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6B6B6B] hover:text-[#000000] mb-8 transition-colors group"
        >
          <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="border-b border-[#EAEAEA] pb-8 mb-12">
          <h1 className="font-sans font-semibold text-4xl sm:text-5xl text-[#000000] tracking-tight">
            All Projects
          </h1>
          <p className="font-dm-sans text-sm text-[#6B6B6B] mt-2">
            A comprehensive catalog of digital products, systems, and engineering modules.
          </p>
        </div>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
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
          <div className="text-center py-16 bg-red-50/50 border border-red-200 max-w-lg mx-auto">
            <p className="font-dm-sans text-sm text-red-500">{error}</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-24 border border-dashed border-[#EAEAEA]">
            <p className="font-dm-sans text-sm text-[#6B6B6B]">
              No projects available yet.
            </p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && projects.length > 0 && (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {projects.map((project) => (
                <motion.div
                  key={project._id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </div>
  );
}
