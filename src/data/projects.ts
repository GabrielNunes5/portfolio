
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  challenges: string;
  solution: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "API de Gerenciamento de Tarefas",
    description: "API REST para gerenciamento completo de tarefas, usuários e categorias com autenticação JWT e validação de dados.",
    image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Jest"],
    link: "https://api-tarefas.exemplo.com",
    github: "https://github.com/seuusuario/api-tarefas",
    challenges: "Implementar um sistema de autenticação seguro e criar uma estrutura de dados eficiente para relacionamentos entre tarefas, usuários e categorias.",
    solution: "Utilizei JWT com refresh tokens para autenticação e MongoDB com indexação adequada para garantir consultas rápidas mesmo com grande volume de dados.",
    features: [
      "Autenticação completa com JWT",
      "CRUD para tarefas, usuários e categorias",
      "Sistema de paginação e filtros",
      "Testes automatizados com cobertura de 90%",
      "Documentação com Swagger"
    ]
  },
  {
    id: 2,
    title: "Sistema de Microserviços E-commerce",
    description: "Arquitetura de microserviços para plataforma de e-commerce com serviços isolados para produtos, pedidos, pagamentos e usuários.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "Kubernetes"],
    github: "https://github.com/seuusuario/ecommerce-microservices",
    challenges: "Garantir a comunicação confiável entre os serviços e manter a consistência dos dados em um sistema distribuído.",
    solution: "Implementei um padrão de Saga orquestrada com Kafka para manter a consistência eventual entre os serviços e Circuit Breaker para aumentar a resiliência.",
    features: [
      "Comunicação assíncrona com Kafka",
      "API Gateway com Spring Cloud Gateway",
      "Service Discovery com Eureka",
      "Circuit Breaker com Resilience4j",
      "Containerização com Docker e orquestração com Kubernetes"
    ]
  },
  {
    id: 3,
    title: "CLI para Automação de Deploy",
    description: "Ferramenta de linha de comando para automatizar o processo de deploy de aplicações em diferentes ambientes.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    technologies: ["Python", "Click", "Docker", "AWS SDK", "GitHub Actions"],
    github: "https://github.com/seuusuario/deploy-cli",
    challenges: "Criar uma ferramenta flexível que funcione com diferentes tipos de projetos e ambientes de deploy.",
    solution: "Desenvolvi uma arquitetura baseada em plugins que permite estender a ferramenta para suportar diferentes tecnologias e provedores de cloud.",
    features: [
      "Suporte para AWS, GCP e Azure",
      "Integração com Docker e Kubernetes",
      "Rollback automático em caso de falha",
      "Sistema de logs detalhados",
      "Configuração via arquivo YAML ou JSON"
    ]
  },
  {
    id: 4,
    title: "API de Análise de Dados em Tempo Real",
    description: "Sistema de processamento e análise de dados em tempo real com dashboards dinâmicos.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Python", "FastAPI", "Redis", "PostgreSQL", "WebSockets", "Docker"],
    link: "https://analytics-api.exemplo.com",
    github: "https://github.com/seuusuario/realtime-analytics",
    challenges: "Processar grandes volumes de dados em tempo real mantendo baixa latência e alta disponibilidade.",
    solution: "Utilizei Redis como cache e para pub/sub, combinado com WebSockets para atualizações em tempo real e um sistema de processamento em lotes para dados históricos.",
    features: [
      "API REST e WebSockets para dados em tempo real",
      "Processamento em lotes para análises complexas",
      "Sistema de cache inteligente com Redis",
      "Autenticação e autorização por escopo",
      "Documentação interativa com Swagger"
    ]
  }
];
