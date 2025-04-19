
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#hero" 
          className="text-xl md:text-2xl font-bold text-primary transition-colors duration-300 hover:text-primary/80"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          Gabriel Nunes
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Início', id: 'hero' },
            { name: 'Sobre', id: 'about' },
            { name: 'Projetos', id: 'projects' },
            { name: 'Contato', id: 'contact' }
          ].map((item) => (
            <a
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="md:text-lg text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground p-2 rounded-md hover:bg-muted transition-colors duration-300"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in border-t border-t-border">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {[
              { name: 'Início', id: 'hero' },
              { name: 'Sobre', id: 'about' },
              { name: 'Projetos', id: 'projects' },
              { name: 'Contato', id: 'contact' }
            ].map((item) => (
              <a
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer py-2 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
