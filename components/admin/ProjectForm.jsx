'use client';
import { useState, useEffect } from 'react';
import { createProject, updateProject } from '@/lib/api';

export default function ProjectForm({ project, onSuccess, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [featured, setFeatured] = useState(false);
  const [order, setOrder] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isEditMode = !!project;

  useEffect(() => {
    if (project) {
      setTitle(project.title || '');
      setDescription(project.description || '');
      setTechStack(project.techStack?.join(', ') || '');
      setImageUrl(project.imageUrl || '');
      setGithubUrl(project.githubUrl || '');
      setLiveUrl(project.liveUrl || '');
      setFeatured(project.featured || false);
      setOrder(project.order || 0);
    } else {
      setTitle('');
      setDescription('');
      setTechStack('');
      setImageUrl('');
      setImageFile(null);
      setGithubUrl('');
      setLiveUrl('');
      setFeatured(false);
      setOrder(0);
    }
    setError('');
  }, [project]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('techStack', techStack);
      formData.append('githubUrl', githubUrl);
      formData.append('liveUrl', liveUrl);
      formData.append('featured', featured);
      formData.append('order', order);

      if (imageFile) {
        formData.append('image', imageFile); // Multer maps this to req.file
      } else {
        formData.append('imageUrl', imageUrl);
      }

      if (isEditMode) {
        await updateProject(project._id, formData);
      } else {
        await createProject(formData);
      }

      onSuccess();
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
        'Failed to save project. Ensure credentials are valid and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-[#000000] bg-white p-6 sm:p-8 mb-10 shadow-sm relative">
      <h3 className="font-sans font-semibold text-lg text-[#000000] mb-6 border-b border-[#EAEAEA] pb-3">
        {isEditMode ? 'Edit Project Specifications' : 'Register New Project'}
      </h3>

      {error && (
        <p className="text-red-500 text-xs mb-6 border border-red-200 p-3 bg-red-50 font-dm-sans">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Side fields */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] block mb-1.5">Project Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border border-[#EAEAEA] px-4 py-2.5 font-dm-sans text-xs outline-none focus:border-[#000000] transition-colors w-full"
            />
          </div>

          <div>
            <label className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] block mb-1.5">Tech Stack (comma-separated)</label>
            <input
              type="text"
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
              placeholder="e.g. Next.js, Tailwind CSS, MongoDB"
              required
              className="border border-[#EAEAEA] px-4 py-2.5 font-dm-sans text-xs outline-none focus:border-[#000000] transition-colors w-full"
            />
          </div>

          <div>
            <label className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] block mb-1.5">GitHub Repository URL</label>
            <input
              type="url"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              className="border border-[#EAEAEA] px-4 py-2.5 font-dm-sans text-xs outline-none focus:border-[#000000] transition-colors w-full"
            />
          </div>

          <div>
            <label className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] block mb-1.5">Live Demo URL</label>
            <input
              type="url"
              value={liveUrl}
              onChange={(e) => setLiveUrl(e.target.value)}
              className="border border-[#EAEAEA] px-4 py-2.5 font-dm-sans text-xs outline-none focus:border-[#000000] transition-colors w-full"
            />
          </div>
        </div>

        {/* Right Side fields */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] block mb-1.5">Image Upload</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-[#EAEAEA] px-4 py-2.5 font-dm-sans text-xs outline-none focus:border-[#000000] transition-colors w-full bg-white file:mr-4 file:py-1 file:px-3 file:border file:border-[#EAEAEA] file:bg-[#F5F5F7] file:text-[10px] file:font-mono file:uppercase file:tracking-wider file:text-[#6B6B6B] cursor-pointer"
            />
          </div>

          <div>
            <label className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] block mb-1.5">Or Image URL</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              disabled={!!imageFile}
              placeholder="e.g. https://images.unsplash.com/..."
              className="border border-[#EAEAEA] px-4 py-2.5 font-dm-sans text-xs outline-none focus:border-[#000000] transition-colors w-full disabled:opacity-50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] block mb-1.5">Display Order</label>
              <input
                type="number"
                value={order}
                onChange={(e) => setOrder(parseInt(e.target.value) || 0)}
                required
                className="border border-[#EAEAEA] px-4 py-2.5 font-dm-sans text-xs outline-none focus:border-[#000000] transition-colors w-full"
              />
            </div>

            <div className="flex items-center gap-2 pt-6 pl-2">
              <input
                type="checkbox"
                id="featured"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="w-4 h-4 accent-black cursor-pointer"
              />
              <label htmlFor="featured" className="font-mono text-[9px] uppercase tracking-wider text-[#000000] select-none cursor-pointer">
                Featured Work
              </label>
            </div>
          </div>

          <div>
            <label className="font-mono text-[9px] uppercase tracking-wider text-[#6B6B6B] block mb-1.5">Project Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={3}
              className="border border-[#EAEAEA] px-4 py-2.5 font-dm-sans text-xs outline-none focus:border-[#000000] transition-colors w-full resize-none"
            />
          </div>
        </div>

        {/* Buttons footer */}
        <div className="col-span-1 md:col-span-2 flex justify-end gap-3 pt-4 border-t border-[#EAEAEA]">
          <button
            type="button"
            onClick={onCancel}
            className="border border-[#EAEAEA] text-[#6B6B6B] px-5 py-2.5 font-mono text-[10px] uppercase tracking-wider hover:border-[#000000] hover:text-[#000000] transition-colors bg-white cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#000000] text-white px-5 py-2.5 font-mono text-[10px] uppercase tracking-wider hover:bg-[#333333] transition-colors disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Saving...' : 'Save Project'}
          </button>
        </div>

      </form>
    </div>
  );
}
