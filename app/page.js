import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="relative z-20 bg-white">
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
