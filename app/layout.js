import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';


const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['300', '400', '500'],
});

export const metadata = {
  title: 'Safvan P | MERN Stack Developer Portfolio',
  description: 'Aspiring Full-Stack MERN Developer portfolio highlighting hands-on projects, skills, and internship exposure. Engineered with Next.js, Express, and MongoDB.',
  openGraph: {
    title: 'Safvan P | MERN Stack Developer Portfolio',
    description: 'Aspiring Full-Stack MERN Developer portfolio highlighting hands-on projects, skills, and internship exposure. Engineered with Next.js, Express, and MongoDB.',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased bg-white selection:bg-[#000000] selection:text-white">

        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
