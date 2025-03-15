
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight } from '@/lib/animations';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const { toast } = useToast();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado por entrar em contato. Responderei o mais breve possível.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="text-center mb-16">
        <motion.div
          variants={fadeIn()}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <div className="inline-block mb-4 rounded-full px-3 py-1 text-sm font-medium border border-primary/20 bg-primary/5 text-primary">
            Contato
          </div>
          
          <h2 className="section-heading">Vamos trabalhar juntos?</h2>
          
          <p className="section-subheading max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e parcerias. Entre em contato para discutirmos como posso agregar valor ao seu projeto ou equipe.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          variants={slideInLeft()}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <div className="glass-card overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-blue-400/50"></div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-6">Envie uma mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="bg-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    required
                    className="bg-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como posso ajudar você?"
                    required
                    className="min-h-[120px] bg-white/50"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 group"
                  disabled={isSubmitting}
                >
                  <Send size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-y-1" />
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          variants={slideInRight()}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="lg:pl-8"
        >
          <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a 
                  href="mailto:seuemail@exemplo.com" 
                  className="font-medium hover:text-primary transition-colors duration-300"
                >
                  seuemail@exemplo.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <a 
                  href="https://linkedin.com/in/seuperfil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary transition-colors duration-300"
                >
                  linkedin.com/in/seuperfil
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Github size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                <a 
                  href="https://github.com/seuperfil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary transition-colors duration-300"
                >
                  github.com/seuperfil
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-lg font-medium mb-4">Disponibilidade</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <span className="font-medium">Freelance:</span>
                  <span className="text-muted-foreground"> Disponível para projetos</span>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <span className="font-medium">Contratação:</span>
                  <span className="text-muted-foreground"> Aberto a oportunidades</span>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <span className="font-medium">Remoto:</span>
                  <span className="text-muted-foreground"> Preferência por trabalho remoto</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
