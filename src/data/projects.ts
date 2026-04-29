
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
    title: "Landing Page para PetShop",
    description: "Landing page responsiva para um petshop com informações sobre serviços, produtos e contato. O projeto se trata de um desafio de codigo do curso de progamação FullStack da Infinity School.",
    image: "https://i.imgur.com/rEkGXky.png",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Vite", "Framer Motion"],
    link: "https://projeto-melhor-amigo-infinity.vercel.app",
    github: "https://github.com/GabrielNunes5/PetShop-Melhor-Amigo",
    challenges: "Criar uma interface responsiva e otimizada seguindo um briefing especificado pelo desafio do curso. O projeto deveria ser simples, mas com um design atraente. Por ser a primeira vez utilizando Tailwind CSS, o desafio foi aprender a utilizar a biblioteca de forma eficiente.",
    solution: "Utilizei React para criar componentes reutilizáveis e Tailwind CSS para estilização rápida e responsiva, garantindo uma boa experiência em dispositivos móveis. Utilizei bastante da documentação do Tailwind para aprender a biblioteca e suas classes utilitárias.",
    features: [
      "Design responsivo",
      "Componentes reutilizáveis",
    ],
  },
  {
    id: 2,
    title:"Site para ONG de adoção de animais",
    description: "Site responsivo para uma ONG de adoção de animais, com informações sobre os animais disponíveis para adoção, formulario de adoção, possibilidade de doação e cadastro de voluntários.",
    image: "https://i.ibb.co/6cZ2PrG6/imagem-2026-04-28-212851441.png",
    technologies: ["Angular", "Tailwind CSS", "TypeScript", "Cloudinary", "Stripe"],
    link: "https://gabrielnunes5.github.io/Amigo-de-Patas-Front/",
    github: "https://github.com/GabrielNunes5/Amigo-de-Patas-Front",
    challenges: "Foi o primeiro projeto utilizando Angular, tambem aprendi muitas coisas novas com esse projeto. Como adicionar possibilidade de fazer upload de imagens e tambem integrar a um gateway de pagamentos para aceitar doações online.",
    solution: "Utilizei Angular para criar uma aplicação estruturada e modular, facilitando a manutenção e escalabilidade do projeto. Para o upload de imagens, utilizei o serviço de armazenamento em nuvem da Cloudinary que simplificou o processo de envio de arquivos para o servidor. Para integrar um gateway de pagamentos, optei por utilizar o Stripe, que oferece uma API robusta e uma boa documentação para processar pagamentos online.",
    features: [
      "Design responsivo",
      "Componentes reutilizáveis",
      "Upload de imagens",
      "Integração com gateway de pagamentos",
      "Autenticação completa para usuários e administradores",
      "Sistema de gerenciamento de animais para adoção",
      "Upload de imagens para os animais disponíveis para adoção",
      "Rescrição de acesso para administradores"
    ],
  }
];
