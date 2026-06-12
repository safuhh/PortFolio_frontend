export const metadata = {
  title: 'Admin Access | Safvan P Portfolio',
  description: 'Portfolio administration dashboard',
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans selection:bg-[#C9A84C] selection:text-white">
      {children}
    </div>
  );
}
