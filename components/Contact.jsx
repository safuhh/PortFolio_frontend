'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { Whatsapp } from '@/components/Icons';

export default function Contact() {
  const emailAddress = 'safvann000@gmail.com';
  const phoneNumber = '+91 8590872362';
  const whatsappNumber = '918590872362'; // Standard format: country code + number (no spaces or signs)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Safvan,%20I%20visited%20your%20portfolio...`;

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white border-t border-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#6B6B6B] block mb-3">
            Get In Touch
          </span>
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-[#000000] tracking-tight">
            Let's Connect
          </h2>
          <div className="w-12 h-[1px] bg-[#000000] mt-5" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 w-full">
            <h3 className="font-sans font-semibold text-2xl sm:text-3xl text-[#000000] tracking-tight leading-snug mb-5">
              Ready to start a new project or explore opportunities?
            </h3>
            <p className="font-dm-sans text-sm sm:text-[15px] text-[#6B6B6B] leading-relaxed mb-10 max-w-xl">
              I am currently open to internship and entry-level developer roles. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 lg:mb-0">
              
              {/* Email */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5 text-[#000000]">
                  <Mail size={16} />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#6B6B6B]">Email</span>
                </div>
                <a href={`mailto:${emailAddress}`} className="font-dm-sans text-sm sm:text-[15px] text-[#000000] hover:text-[#555555] transition-colors break-words">
                  {emailAddress}
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5 text-[#000000]">
                  <Phone size={16} />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#6B6B6B]">Phone</span>
                </div>
                <a href={`tel:${whatsappNumber}`} className="font-dm-sans text-sm sm:text-[15px] text-[#000000] hover:text-[#555555] transition-colors">
                  {phoneNumber}
                </a>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-2 sm:col-span-2">
                <div className="flex items-center gap-2.5 text-[#000000]">
                  <MapPin size={16} />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#6B6B6B]">Location</span>
                </div>
                <span className="font-dm-sans text-sm sm:text-[15px] text-[#000000]">
                  Palakkad, Kerala, India
                </span>
              </div>

            </div>
          </div>

          {/* Right Content - CTA Buttons */}
          <div className="w-full lg:w-[380px] flex flex-col gap-4 shrink-0">
            <motion.a
              whileHover={{ y: -2 }}
              href={`mailto:${emailAddress}`}
              className="group flex items-center justify-between bg-[#000000] text-white
                         px-6 py-4.5 sm:py-5 rounded-xl hover:bg-[#222222] transition-colors duration-300 w-full"
            >
              <div className="flex items-center gap-3.5">
                <Mail size={18} />
                <span className="font-sans font-medium text-sm sm:text-[15px]">Send me an email</span>
              </div>
              <ArrowUpRight size={18} className="text-white/50 group-hover:text-white transition-colors" />
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-[#F5F5F7] text-[#000000] border border-[#EAEAEA]
                         px-6 py-4.5 sm:py-5 rounded-xl hover:bg-[#EEEEEE] hover:border-[#D0D0D0] transition-colors duration-300 w-full"
            >
              <div className="flex items-center gap-3.5">
                <Whatsapp size={18} />
                <span className="font-sans font-medium text-sm sm:text-[15px]">Chat on WhatsApp</span>
              </div>
              <ArrowUpRight size={18} className="text-[#000000]/50 group-hover:text-[#000000] transition-colors" />
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
