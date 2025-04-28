
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCurriculo = () => {
    const link = document.createElement('a');
    link.href = '/curriculo.pdf';
    link.download = 'curriculo.pdf';
    link.click();
  };


  return (
    <section id="hero" className="min-h-screen relative pt-20 px-6 sm:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[calc(100vh-5rem)]">
        <div className="order-2 lg:order-1 flex flex-col justify-center animate-fade-in">
          <div className="inline-block mb-4 rounded-full px-3 py-1 text-base font-medium border border-primary/20 bg-primary/5 text-primary animate-fade-in">
            Desenvolvedor FullStack
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            <span>Transformando ideias em</span>
            <br />
            <span className="text-gradient">Sistemas robustos e escaláveis</span>
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-xl animate-fade-in">
            Especialista em desenvolvimento FullStack, criando interfaces intuitivas e sistemas robustos para entregar soluções completas.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button className="bg-primary hover:bg-primary/90 group" size="lg" onClick={downloadCurriculo}>
              <Download size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-y-1" />
              Baixar Currículo
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="group border-primary/20 hover:bg-primary/5 text-primary hover:text-primary"
            >
              <Mail size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-y-1" />
              Entrar em Contato
            </Button>
          </div>
          
          <div className="hidden md:flex items-center text-sm text-muted-foreground mt-12 animate-fade-in">
            <span className="mr-2">Role para conhecer mais</span>
            <ArrowDown size={16} className="animate-float" />
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-blue-400/30 rounded-full blur-3xl opacity-30 animate-pulse-subtle"></div>
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden border-4 sm:border-8 border-white shadow-lg animate-blur-in">
              <img 
                src="assets/IMG-20230708-WA0048.jpg" 
                alt="Desenvolvedor Full-Stack" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-xl animate-scale-in">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                <code className="font-mono text-xs">{'{ }'}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-fade-in">
        <button 
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="p-3 rounded-full bg-white shadow-premium hover:shadow-glass-strong transition-all duration-300 hover:-translate-y-1"
          aria-label="Rolar para baixo"
        >
          <ArrowDown size={20} className="text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
