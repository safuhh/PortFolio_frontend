'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminLogin } from '@/lib/auth';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await adminLogin(email, password);
      router.push('/admin/dashboard');
    } catch (err) {
      console.error(err);
      setError('Invalid admin credentials. Access denied.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 relative">
      
      <div className="relative z-10 w-full max-w-md">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6B6B6B] hover:text-[#000000] mb-8 transition-colors group"
        >
          <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
          Back to Public Site
        </Link>

        {/* Login Card */}
        <div className="border border-[#EAEAEA] p-10 bg-white shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 border border-[#EAEAEA] flex items-center justify-center text-[#000000]">
              <Lock size={16} />
            </div>
            <div>
              <h1 className="font-sans font-semibold text-2xl text-[#000000] tracking-tight">Admin Access</h1>
              <p className="text-[#6B6B6B] text-[9px] uppercase font-mono tracking-widest mt-0.5">Control Panel Login</p>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-xs mb-6 border border-red-200 p-3 bg-red-50 font-dm-sans">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              suppressHydrationWarning
              className="border border-[#EAEAEA] px-4 py-2.5 font-dm-sans text-xs outline-none focus:border-[#000000] transition-colors bg-white w-full"
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              suppressHydrationWarning
              className="border border-[#EAEAEA] px-4 py-2.5 font-dm-sans text-xs outline-none focus:border-[#000000] transition-colors bg-white w-full"
            />

            <button
              type="submit"
              disabled={loading}
              suppressHydrationWarning
              className="bg-[#000000] text-white py-3 font-mono text-xs tracking-widest uppercase hover:bg-[#333333] transition-colors duration-300 disabled:opacity-50 mt-2 cursor-pointer"
            >
              {loading ? 'Authenticating...' : 'Enter Dashboard'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
