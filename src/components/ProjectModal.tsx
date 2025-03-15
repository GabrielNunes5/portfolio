
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, Link as LinkIcon, Github, Code, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Project } from '@/data/projects';
import { Button } from '@/components/ui/button';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoaded(false);
      const timer = setTimeout(() => setIsLoaded(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, project]);

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl bg-white/95 backdrop-blur-sm border-none shadow-premium p-0 overflow-hidden">
        <div className="relative w-full aspect-video overflow-hidden">
          <div className={cn(
            "absolute inset-0 bg-black/40 z-10 flex items-center justify-center",
            isLoaded ? "opacity-0" : "opacity-100"
          )} />
          <img
            src={project.image}
            alt={project.title}
            className={cn(
              "w-full h-full object-cover transition-all duration-500 ease-out",
              isLoaded ? "scale-100 blur-0" : "scale-110 blur-md"
            )}
            onLoad={() => setIsLoaded(true)}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <DialogHeader>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block text-xs font-medium py-1 px-2 bg-primary/10 text-primary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <DialogTitle className="text-2xl font-bold mb-2">{project.title}</DialogTitle>
            <DialogDescription className="text-base text-foreground/80 mb-6">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <Code size={18} className="mr-2 text-primary" />
                Desafios do Projeto
              </h3>
              <p className="text-muted-foreground">{project.challenges}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <Code size={18} className="mr-2 text-primary" />
                Solução Implementada
              </h3>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <Code size={18} className="mr-2 text-primary" />
                Principais Funcionalidades
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight size={16} className="mr-2 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {project.github && (
                <Button
                  variant="outline"
                  className="group border-primary/30 hover:bg-primary/5 text-primary hover:text-primary"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-y-1" />
                    Código no GitHub
                  </a>
                </Button>
              )}
              
              {project.link && (
                <Button 
                  className="bg-primary hover:bg-primary/90 group"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <LinkIcon size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-y-1" />
                    Visitar Projeto
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
