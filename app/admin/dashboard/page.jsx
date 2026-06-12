'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProjects } from '@/lib/api';
import { adminLogout } from '@/lib/auth';
import ProjectForm from '@/components/admin/ProjectForm';
import ProjectTable from '@/components/admin/ProjectTable';
import ResumeManager from '@/components/admin/ResumeManager';
import { LogOut, Plus, Sparkles, FolderKanban } from 'lucide-react';

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await getProjects();
      setProjects(res.data);
    } catch (err) {
      console.error('Error fetching projects in dashboard:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleLogout = async () => {
    try {
      await adminLogout();
      router.push('/admin/login');
    } catch (err) {
      console.error('Failed to log out:', err);
      router.push('/admin/login');
    }
  };

  const handleEditInit = (project) => {
    setEditingProject(project);
    setShowForm(true);
    // Smooth scroll to form top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditingProject(null);
    fetchProjects();
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProject(null);
  };

  return (
    <div className="min-h-screen bg-white pb-24 px-6 relative">
      
      <div className="max-w-6xl mx-auto pt-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 border-b border-[#EAEAEA] pb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border border-[#EAEAEA] flex items-center justify-center text-[#000000]">
              <FolderKanban size={20} />
            </div>
            <div>
              <h1 className="font-sans font-semibold text-3xl text-[#000000] tracking-tight">Project Dashboard</h1>
              <p className="text-[#6B6B6B] text-[9px] uppercase font-mono tracking-widest mt-0.5">Control Panel</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => {
                setEditingProject(null);
                setShowForm(!showForm);
              }}
              className="bg-[#000000] text-white px-5 py-2.5 font-mono text-[10px] uppercase tracking-wider hover:bg-[#333333] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Plus size={14} /> Add Project
            </button>
            
            <button
              onClick={handleLogout}
              className="border border-[#EAEAEA] text-[#6B6B6B] px-5 py-2.5 font-mono text-[10px] uppercase tracking-wider hover:border-[#000000] hover:text-[#000000] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <LogOut size={12} /> Logout
            </button>
          </div>
        </div>

        {/* Add/Edit Project Form (toggle-slide) */}
        {showForm && (
          <div className="animate-fade-in-down">
            <ProjectForm
              project={editingProject}
              onSuccess={handleFormSuccess}
              onCancel={handleCancel}
            />
          </div>
        )}

        {/* Resume Manager Section */}
        <ResumeManager />

        {/* Projects List Table */}
        {loading ? (
          <div className="border border-[#EAEAEA] bg-white p-12 text-center flex flex-col items-center justify-center gap-3 animate-pulse">
            <Sparkles className="text-[#000000] animate-spin" size={24} />
            <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B6B6B]">Loading repository data...</p>
          </div>
        ) : (
          <ProjectTable
            projects={projects}
            onRefresh={fetchProjects}
            onEdit={handleEditInit}
          />
        )}
        
      </div>
    </div>
  );
}
