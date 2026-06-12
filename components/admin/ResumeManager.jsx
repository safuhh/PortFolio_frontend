import { useState, useEffect } from 'react';
import { getResume, updateResume } from '@/lib/api';
import { FileText, Upload, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ResumeManager() {
  const [currentResume, setCurrentResume] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const fetchResume = async () => {
    try {
      const res = await getResume();
      if (res.data) {
        setCurrentResume(res.data);
      }
    } catch (err) {
      if (err.response && err.response.status !== 404) {
        console.error('Error fetching resume:', err);
      }
    }
  };

  useEffect(() => {
    fetchResume();
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf') {
        setError('Please select a PDF file.');
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
      setError('');
      setMessage('');
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Please select a file first.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setMessage('');

      const formData = new FormData();
      formData.append('file', selectedFile);

      await updateResume(formData);
      
      setMessage('Resume uploaded successfully!');
      setSelectedFile(null);
      
      // Reset the file input
      const fileInput = document.getElementById('resume-upload');
      if (fileInput) fileInput.value = '';

      fetchResume();
    } catch (err) {
      console.error('Error uploading resume:', err);
      setError(err.response?.data?.message || 'Failed to upload resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-[#EAEAEA] p-6 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 border border-[#EAEAEA] flex items-center justify-center text-[#000000]">
          <FileText size={18} />
        </div>
        <div>
          <h2 className="font-sans font-semibold text-lg text-[#000000] tracking-tight">Resume Management</h2>
          <p className="text-[#6B6B6B] text-[10px] uppercase font-mono tracking-widest mt-0.5">Update Active CV</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Current Resume Info */}
        <div className="flex-1 bg-[#F9F9FB] border border-[#EAEAEA] p-5 rounded-sm w-full">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B] mb-3">Current Active Resume</h3>
          {currentResume ? (
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <CheckCircle2 size={16} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#111111]">{currentResume.originalName}</p>
                <p className="text-xs text-[#6B6B6B] mt-1">
                  Last updated: {new Date(currentResume.updatedAt).toLocaleDateString()}
                </p>
                <a 
                  href={`http://localhost:5000${currentResume.fileUrl}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs font-medium text-[#000000] underline underline-offset-2 hover:text-[#555555]"
                >
                  View Current CV
                </a>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-3">
              <AlertCircle size={16} className="text-[#888888] mt-0.5" />
              <p className="text-sm text-[#6B6B6B]">No resume uploaded yet.</p>
            </div>
          )}
        </div>

        {/* Upload Form */}
        <div className="flex-1 w-full">
          <form onSubmit={handleUpload} className="flex flex-col gap-4">
            
            {error && (
              <div className="text-red-600 text-xs bg-red-50 p-3 border border-red-100">
                {error}
              </div>
            )}
            
            {message && (
              <div className="text-green-700 text-xs bg-green-50 p-3 border border-green-100">
                {message}
              </div>
            )}

            <div>
              <label htmlFor="resume-upload" className="block text-[11px] font-mono uppercase tracking-wider text-[#6B6B6B] mb-2">
                Upload New PDF
              </label>
              <input
                type="file"
                id="resume-upload"
                accept=".pdf"
                onChange={handleFileChange}
                className="w-full border border-[#EAEAEA] text-sm text-[#000000] p-2 focus:outline-none focus:border-[#000000] transition-colors"
                disabled={loading}
              />
              <p className="text-[10px] text-[#888888] mt-2">Only PDF files are allowed. Max size 5MB.</p>
            </div>

            <button
              type="submit"
              disabled={loading || !selectedFile}
              className={`bg-[#000000] text-white px-5 py-3 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                loading || !selectedFile ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#333333]'
              }`}
            >
              <Upload size={14} />
              {loading ? 'Uploading...' : 'Upload & Set Active'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
