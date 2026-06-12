import Link from 'next/link';
import { Github, Linkedin, Instagram } from '@/components/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/safuhh', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/safvan-p-/', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white border-t border-[#EAEAEA] py-12 md:py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
        
        {/* Designer Signature */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start order-1">
          <h4 className="font-cormorant text-2xl font-medium text-[#000000] tracking-wider">
            Safvan P.
          </h4>
          <p className="font-mono text-[10px] text-[#6B6B6B] uppercase tracking-widest mt-1.5">
            MERN Stack Developer
          </p>
        </div>

        {/* Copywrite - Shown at bottom on mobile, middle on desktop */}
        <p className="font-dm-sans text-[13px] text-[#888888] text-center order-3 md:order-2">
          &copy; {currentYear} Safvan P. All rights reserved.
        </p>

        {/* Social Links - Shown in middle on mobile, right on desktop */}
        <div className="flex items-center justify-center gap-4 order-2 md:order-3">
          {socialLinks.map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-full border border-[#EAEAEA] flex items-center justify-center text-[#6B6B6B] hover:text-[#000000] hover:bg-[#F5F5F7] hover:border-[#D0D0D0] transition-all duration-300 hover:-translate-y-1"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        
      </div>
    </footer>
  );
}
