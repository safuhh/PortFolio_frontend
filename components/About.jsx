'use client';
import { motion } from 'framer-motion';

export default function About() {

  const competencies = [
    { title: 'Full Stack MERN', desc: 'Building end-to-end applications using React, Next.js, Node.js, Express, and MongoDB.' },
    { title: 'Clean Code Mindset', desc: 'Writing maintainable, readable, and well-structured code with a focus on best practices.' },
    { title: 'Continuous Learning', desc: 'Actively improving through real projects, internship experience, and modern tooling.' },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section id="about" className="relative z-20 py-24 sm:py-32 bg-white rounded-t-[2.5rem] sm:rounded-t-[3.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        {/* Section Header */}
        <motion.div {...fadeUp} className="mb-14 sm:mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#6B6B6B]">
            Profile
          </span>
          <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-[#000000] tracking-tight mt-2">
            About Me
          </h2>
          <div className="w-12 h-[1px] bg-[#000000] mt-4" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column — Core Competencies */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <h3 className="font-sans font-semibold text-base text-[#000000] tracking-tight">
              Core Competencies
            </h3>
            <div className="space-y-5">
              {competencies.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="border-l-2 border-[#ECECED] pl-4 hover:border-[#000000] transition-colors duration-300"
                >
                  <h4 className="font-sans font-medium text-sm text-[#171717]">{item.title}</h4>
                  <p className="font-dm-sans text-xs text-[#6B6B6B] mt-1 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>


          </motion.div>

          {/* Right Column — Full Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            {/* Intro headline */}
            <h3 className="font-sans font-semibold text-xl sm:text-2xl text-[#000000] tracking-tight leading-snug mb-6">
              Aspiring Full Stack MERN Developer, passionate about building modern and responsive web applications.
            </h3>

            {/* Bio paragraphs */}
            <div className="space-y-4 mb-8">
              <p className="font-dm-sans text-sm text-[#4B4B4B] leading-[1.8]">
                Hi, I'm <span className="font-medium text-[#000000]">Muhammed Safvan</span> — I enjoy turning ideas into real, functional products using technologies like{' '}
                <span className="font-medium text-[#000000]">React, Next.js, Node.js, Express, and MongoDB</span>. My focus is on writing clean, maintainable code and continuously improving my problem-solving skills through hands-on development.
              </p>

              <p className="font-dm-sans text-sm text-[#4B4B4B] leading-[1.8]">
                I completed an internship as a{' '}
                <span className="font-medium text-[#000000]">MERN Stack Developer at Bridgeon Private Limited</span>, where I gained practical experience working on real-world projects, understanding development workflows, and collaborating in a team environment.
              </p>

              <p className="font-dm-sans text-sm text-[#4B4B4B] leading-[1.8]">
                I am currently focused on strengthening my skills in full-stack development and building impactful projects that solve real problems.
              </p>
            </div>

            {/* Career Goal callout */}
            <div className="border-l-2 border-[#000000] pl-5 py-3 bg-[#F9F9FB] pr-5 mb-8">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#737373] block mb-2">
                Career Goal
              </span>
              <p className="font-dm-sans text-sm text-[#171717] leading-relaxed">
                My goal is to grow as a developer, contribute to meaningful projects, and secure opportunities as an{' '}
                <span className="font-medium">entry-level Full Stack Developer</span> where I can add real value.
              </p>
            </div>

            {/* Focus area tags */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#6B6B6B] block mb-3">
                Focus Areas
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Responsive Web Apps',
                  'REST APIs',
                  'MERN Stack',
                  'Clean Code',
                  'Problem Solving',
                  'Team Collaboration',
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10px] uppercase tracking-wider text-[#525252] bg-[#F5F5F7] border border-[#ECECED] px-3 py-1.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
