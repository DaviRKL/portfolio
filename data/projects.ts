export type Project = {
  title: string;
  tagline: string;
  challenge: string;
  image?: string | null;
  technologies: string[];
  links: { repo?: string; live?: string };
  status?: "completed" | "in_progress";
  architectureOverview?: string;
  architectureHighlights?: string[];
  architectureMetrics?: string[];
  diagramUrl?: string;
};

const projects: Project[] = [
  {
    title: "e-manager",
    tagline:
      "Painel moderno, responsivo e internacionalizado para gestão de estoque e produtos.",
    challenge:
      "Desenvolver um sistema de gestão com CRUD de produtos, dashboard configurável e busca/paginação performáticas, integrando uma aplicação Next.js a uma API própria e banco PostgreSQL em produção.",
    architectureOverview:
      "Aplicação de gestão full-stack com interface Next.js e TypeScript integrada a uma API Node.js/Express e banco PostgreSQL.",
    architectureHighlights: [
      "Frontend Next.js com internacionalização via next-intl",
      "API Node.js e Express com persistência PostgreSQL via Prisma",
      "TanStack Query e Redux Toolkit para dados e estado da interface",
      "Formulários tipados com React Hook Form e Zod",
    ],
    image: "/images/projects/e-manager.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS v4",
      "Redux Toolkit",
      "TanStack Query",
      "Axios",
      "React Hook Form",
      "Zod",
      "next-intl",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Vercel",
      "Render",
      "Neon",
    ],
    links: {
      live: "https://e-manager-tau.vercel.app",
      repo: "https://github.com/DaviRKL/e-manager",
    },
    status: "completed",
  },
  {
    title: "Portfólio - Fotografa Sofia Clickss",
    tagline:
      "Portfólio fotográfico com design em Glassmorphism e galeria Masonry imersiva.",
    challenge:
      "Exibir dezenas de imagens em alta qualidade em um layout complexo sem comprometer a memória do navegador, garantindo navegação mobile intuitiva via gestos (swipe) e cache otimizado na CDN para carregamento instantâneo.",
    architectureOverview:
      "Portfólio fotográfico em React e TypeScript, com galeria Masonry pensada para apresentar imagens em alta qualidade em diferentes tamanhos de tela.",
    architectureHighlights: [
      "Interface React construída e empacotada com Vite",
      "Galeria responsiva com react-masonry-css",
      "Experiência mobile planejada para navegação por gestos",
      "Imagens entregues com apoio de CDN",
    ],
    image: "/images/projects/portfolio-sofia-clickss.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Vercel",
      "react-masonry-css",
    ],
    links: {
      live: "https://sofiaclickss.vercel.app/",
    },
    status: "completed",
  },
  {
    title: "Diário de Classe ANG",
    tagline:
      "Digitalização do gerenciamento de informações de assistidos e registros de presença para a Associação Nova Geração.",
    challenge:
      "Substituir registros manuais em papel por um sistema centralizado, garantindo a integridade dos dados e agilizando a rotina administrativa.",
    architectureOverview:
      "Sistema web full-stack para centralizar informações de assistidos e registros de presença da Associação Nova Geração.",
    architectureHighlights: [
      "Frontend React integrado a serviços em Node.js",
      "API com dados relacionais armazenados em PostgreSQL",
      "Persistência organizada com Sequelize",
      "Autenticação baseada em JWT",
    ],
    image: "/images/projects/diario_de_classe.png",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Sequelize",
      "Docker",
      "JWT",
    ],
    links: {
      repo: "https://github.com/DaviRKL/PI",
    },
    status: "completed",
  },
  {
    title: "My Poll",
    tagline:
      "Plataforma responsiva de enquetes em tempo real, com criação, votação e filtros personalizados.",
    challenge:
      "Construir uma experiência de enquetes compartilhadas com atualização instantânea de votos via Firestore, autenticação Google e anônima, filtros por escopo/status, busca, ordenação e paginação.",
    architectureOverview:
      "Aplicação React e TypeScript que combina autenticação Firebase com atualização de enquetes e votos usando Firestore.",
    architectureHighlights: [
      "Firestore para dados de enquetes e atualização em tempo real",
      "Firebase Authentication com acesso Google e anônimo",
      "TanStack Router para navegação",
      "Testes de interface com Jest e React Testing Library",
    ],
    image: "/images/projects/mypoll.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "TanStack Router",
      "Firebase Firestore",
      "Firebase Auth",
      "Firebase Hosting",
      "react-i18next",
      "Storybook",
      "Jest",
      "React Testing Library",
      "Lucide React",
    ],
    links: {
      live: "https://my-poll-b9694.web.app/",
      repo: "https://github.com/DaviRKL/my-poll",
    },
    status: "completed",
  },
  {
    title: "folkDex",
    tagline:
      "Aplicação de descoberta de pessoas com filtros avançados, sincronização de estado via URL e suporte a múltiplos idiomas e temas.",
    challenge:
      "Criar uma experiência de busca rápida e compartilhável sobre perfis da Random User API, com paginação e filtros client-side, dados sensíveis sanitizados na camada de serviço e interface adaptável a Português/Inglês e aos temas claro/escuro.",
    architectureOverview:
      "Aplicação React para explorar perfis da Random User API, com filtros e estado de busca sincronizado à URL.",
    architectureHighlights: [
      "Camada de serviço para consumo e sanitização dos dados da API",
      "Filtros e paginação no cliente com estado compartilhável pela URL",
      "Internacionalização com i18next",
      "Interface com suporte a temas claro e escuro",
    ],
    image: "images/projects/folkDex.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router DOM",
      "Context API",
      "i18next",
      "Lucide React",
    ],
    links: {
      live: "https://folkdex-davikonuma.vercel.app/",
      repo: "https://github.com/DaviRKL/folkDex",
    },
    status: "completed",
  },
  {
    title: "Exoplanet Classifier API & Dashboard",
    tagline:
      "Classificador de exoplanetas utilizando modelos de Machine Learning (Ensemble) e visualização de dados em tempo real.",
    challenge:
      "Processar o catálogo Kepler KOI para treinar classificadores Random Forest e XGBoost, servindo predições via API de baixa latência.",
    architectureOverview:
      "Pipeline de classificação de exoplanetas com modelos de Machine Learning expostos por uma API FastAPI e uma interface de dashboard.",
    architectureHighlights: [
      "Modelos Random Forest e XGBoost para classificação",
      "API de predição construída com FastAPI",
      "Dashboard Angular para visualizar dados e resultados",
      "Catálogo Kepler KOI como origem dos dados de treinamento",
    ],
    image: "/images/projects/exo-classifier.jpg",
    technologies: [
      "Python",
      "FastAPI",
      "Angular",
      "Scikit-Learn",
      "XGBoost",
      "TypeScript",
      "Machine Learning",
    ],
    links: {
      repo: "https://github.com/DaviRKL/exoplanet-classifier",
    },
    status: "completed",
  },

  /*
  {
    title: 'Todo List — MERN Stack',
    tagline: 'Ecossistema Fullstack completo para gestão de tarefas, integrando banco NoSQL e interface responsiva sob a stack MERN.',
    challenge: 'Consolidar a integração entre frontend e backend em uma arquitetura MERN (MongoDB, Express, React, Node), implementando operações CRUD eficientes e uma UI moderna com Material UI e feedbacks dinâmicos via React Toastify.',
    image: '/images/projects/todo-list-mern.png',
    technologies: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Material UI',
      'React Toastify',
    ],
    links: {
      repo: 'https://github.com/DaviRKL/ToDoList',
    },
    status: 'completed',
  },
  {
    title: 'Pokémon Unite Clone',
    tagline: 'Interface inspirada no site oficial do Pokémon Unite na época de desenvolvimento, com consumo de Mock API e design responsivo.',
    challenge: 'Desenvolver uma arquitetura de frontend escalável utilizando React Hooks (useState/useEffect) e roteamento dinâmico para simular a experiência do site oficial em parceria com a Eduzz.',
    image: '/images/projects/pokemon-unite.png',
    technologies: [
      'React',
      'React Router',
      'Vite',
      'Mock API',
      'Hooks',
      'CSS',
    ],
    links: {
      repo: 'https://github.com/DaviRKL/PokemonsReact',
    },
    status: 'completed',
  },
  {
    title: 'Financial Copilot',
    tagline: 'Planejador financeiro inteligente com análise preditiva via IA (Llama-3) e dashboard interativo.',
    challenge: 'Implementar uma arquitetura híbrida (SSR/SSG/ISR) para performance e garantir a segurança de chaves sensíveis via API Routes na integração com Groq Cloud.',
    image: null,
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Groq API',
      'Llama-3',
      'Recharts',
      'Vitest',
    ],
    links: {
      repo: 'https://github.com/DaviRKL/financial-copilot',
    },
    status: 'in_progress',
  },
  */
  // {
  //   title: "Sistema de Reciclagem e Descarte",
  //   tagline:
  //     "Otimização de rotas de coleta e gestão de materiais utilizando estruturas de dados avançadas.",
  //   challenge:
  //     "Implementar grafos para o cálculo de rotas mais curtas e árvores Tries para busca eficiente e classificação de materiais recicláveis.",
  //   image: null,
  //   technologies: [
  //     "Java",
  //     "GraphStream",
  //     "Data Structures",
  //     "Algorithms",
  //     "Graphs",
  //     "Trie Tree",
  //   ],
  //   links: {
  //     repo: "https://github.com/DaviRKL/sistema-reciclagem-descarte",
  //   },
  //   status: "completed",
  // },
];

export default projects;
