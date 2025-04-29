
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
    technologies: ["React", "Tailwind CSS"],
    link: "https://projeto-melhor-amigo-infinity.vercel.app",
    github: "https://github.com/GabrielNunes5/PetShop-Melhor-Amigo",
    challenges: "Criar uma interface responsiva e otimizada seguindo um briefing especificado pelo desafio do curso. O projeto deveria ser simples, mas com um design atraente. Por ser a primeira vez utilizando Tailwind CSS, o desafio foi aprender a utilizar a biblioteca de forma eficiente.",
    solution: "Utilizei React para criar componentes reutilizáveis e Tailwind CSS para estilização rápida e responsiva, garantindo uma boa experiência em dispositivos móveis. Utilizei bastante da documentação do Tailwind para aprender a biblioteca e suas classes utilitárias.",
    features: [
      "Design responsivo",
      "Componentes reutilizáveis",
    ],

  }
];
