
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-primary">
        <div className="w-16 h-16 relative animate-spin-slow">
          <div className="absolute inset-0 rounded-full border-t-2 border-primary"></div>
        </div>
        <span className="mt-4 text-sm font-medium animate-pulse-subtle">Carregando...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background bg-gradient-to-br from-[#6c8cb4b9] to-[#e6edf5b7] text-foreground overflow-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
