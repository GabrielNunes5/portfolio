import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { Project, projects } from '@/data/projects';
import ProjectModal from './ProjectModal';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="section relative bg-primary/5" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="w-fit mx-auto mb-4 rounded-full px-3 py-1 font-medium border border-primary/20 bg-primary/5 text-primary">
        Projetos
      </div>
      <div className="text-center mb-16">
        <motion.div
          variants={fadeIn()}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
            <h2 className="section-heading">Projetos que unem <span className="text-gradient">criatividade</span>  e <span className="text-gradient">tecnologia</span></h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Conheça alguns dos meus projetos de destaque. Cada um deles representa desafios únicos que foram superados com soluções técnicas robustas.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-glass-strong transition-all duration-500 ease-out hover:-translate-y-2"
            variants={fadeIn(0.1 * index)}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            onClick={() => openProjectModal(project)}
          >
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full z-20 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex justify-between items-center">
                <div className="flex space-x-2">
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white/90 p-2 rounded-full text-primary hover:bg-white transition-colors duration-300"
                      aria-label="Visitar projeto"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white/90 p-2 rounded-full text-primary hover:bg-white transition-colors duration-300"
                      aria-label="Ver código no GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
                
                <span className="text-white text-sm font-medium">Ver detalhes</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-medium py-1 px-2 bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs font-medium py-1 px-2 bg-muted text-muted-foreground rounded-full">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeProjectModal} 
      />
    </section>
  );
};

export default Projects;
