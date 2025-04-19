
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary/5 py-12 px-6 sm:px-8 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <a href="#" className="text-xl font-bold text-primary transition-colors duration-300 hover:text-primary/80">
            Gabriel Nunes
          </a>
          <p className="text-muted-foreground mt-2 text-sm">
            Desenvolvedor FullStack transformando ideias em sistemas robustos e escaláveis.
          </p>
        </div>
        
        <div className="flex space-x-5 mb-6 md:mb-0">
          <a 
            href="mailto:gabrielnunesdev01@gmail.com" 
            className="h-10 w-10 rounded-full bg-white shadow-subtle flex items-center justify-center text-primary transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/gabriel-nunes-085gn/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-10 w-10 rounded-full bg-white shadow-subtle flex items-center justify-center text-primary transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="https://github.com/GabrielNunes5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-10 w-10 rounded-full bg-white shadow-subtle flex items-center justify-center text-primary transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
        
        <div className="flex flex-col items-end">
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white shadow-subtle hover:shadow-md transition-all duration-300 hover:-translate-y-1 mb-4"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} className="text-primary" />
          </button>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
