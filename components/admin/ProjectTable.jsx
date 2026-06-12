'use client';
import { deleteProject } from '@/lib/api';
import { Edit, Trash2, Check, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function ProjectTable({ projects, onRefresh, onEdit }) {
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      onRefresh();
    } catch (err) {
      console.error(err);
      alert('Failed to delete project. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  const getFullImageUrl = (url) => {
    if (!url) {
      return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop';
    }
    if (url.startsWith('/uploads/')) {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || 'https://portfolio-backend-4y2o.onrender.com/api';
      const rootBase = apiBase.replace('/api', '');
      return `${rootBase}${url}`;
    }
    return url;
  };

  return (
    <div className="border border-[#EAEAEA] bg-white overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#EAEAEA] bg-[#F5F5F7]">
              <th className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] px-6 py-4 w-20">Image</th>
              <th className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] px-6 py-4">Title</th>
              <th className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] px-6 py-4 hidden md:table-cell">Tech Stack</th>
              <th className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] px-6 py-4 text-center w-24">Order</th>
              <th className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] px-6 py-4 text-center w-24">Featured</th>
              <th className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] px-6 py-4 text-right w-36">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EAEAEA]">
            {projects.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-12 font-dm-sans text-xs text-[#6B6B6B]">
                  No projects found. Click "+ Add Project" to populate your portfolio.
                </td>
              </tr>
            ) : (
              projects.map((project) => (
                <tr key={project._id} className="hover:bg-[#F5F5F7]/30 transition-colors">
                  {/* Image Column */}
                  <td className="px-6 py-4">
                    <img
                      src={getFullImageUrl(project.imageUrl)}
                      alt={project.title}
                      className="w-12 h-12 object-cover border border-[#EAEAEA] bg-gray-50"
                    />
                  </td>

                  {/* Title and Links */}
                  <td className="px-6 py-4">
                    <div className="font-sans font-semibold text-sm text-[#000000]">
                      {project.title}
                    </div>
                    <div className="flex gap-3 mt-1">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[9px] text-[#6B6B6B] hover:text-[#000000] flex items-center gap-1"
                        >
                          GitHub <ExternalLink size={8} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[9px] text-[#6B6B6B] hover:text-[#000000] flex items-center gap-1"
                        >
                          Live <ExternalLink size={8} />
                        </a>
                      )}
                    </div>
                  </td>

                  {/* Tech Stack Column */}
                  <td className="px-6 py-4 hidden md:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack?.map((tech, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[8px] text-[#6B6B6B] border border-[#EAEAEA] px-1.5 py-0.5 bg-[#F5F5F7]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Order Column */}
                  <td className="px-6 py-4 text-center font-mono text-xs text-[#000000]">
                    {project.order}
                  </td>

                  {/* Featured Column */}
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center text-[#6B6B6B]">
                      {project.featured ? (
                        <Check size={14} className="text-[#000000]" />
                      ) : (
                        <X size={14} className="text-gray-300" />
                      )}
                    </div>
                  </td>

                  {/* Actions Column */}
                  <td className="px-6 py-4 text-right">
                    {deletingId === project._id ? (
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleDelete(project._id)}
                          className="text-red-500 font-mono text-[9px] uppercase tracking-wider hover:underline cursor-pointer"
                        >
                          Confirm
                        </button>
                        <span className="text-[#EAEAEA]">|</span>
                        <button
                          onClick={() => setDeletingId(null)}
                          className="text-[#6B6B6B] font-mono text-[9px] uppercase tracking-wider hover:underline cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-end gap-3 text-[#6B6B6B]">
                        <button
                          onClick={() => onEdit(project)}
                          className="hover:text-[#000000] transition-colors p-1 cursor-pointer"
                          aria-label="Edit project"
                        >
                          <Edit size={14} />
                        </button>
                        <button
                          onClick={() => setDeletingId(project._id)}
                          className="hover:text-red-500 transition-colors p-1 cursor-pointer"
                          aria-label="Delete project"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
