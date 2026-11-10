export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  killerFeature: string;
  image: string | null;
  demoUrl: string | null;
  githubUrl: string | null;
  coreTechnologies: string[];
  fullTechnologies: string[];
  caseStudy: {
    problem: string;
    engineering: string;
    technicalImpact: string;
  };
};

const projects: Project[] = [
  {
    id: "e-manager",
    title: "e-manager",
    shortDescription:
      "Painel moderno e internacionalizado para gestão de estoque e produtos.",
    killerFeature: "CRUD & busca otimizada",
    image: "/images/projects/e-manager.png",
    demoUrl: "https://e-manager-tau.vercel.app",
    githubUrl: "https://github.com/DaviRKL/e-manager",
    coreTechnologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS v4",
      "PostgreSQL",
    ],
    fullTechnologies: [
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
    caseStudy: {
      problem:
        "Desenvolver um sistema de gestão com CRUD de produtos, dashboard configurável e busca/paginação performáticas, integrando uma aplicação Next.js a uma API própria e banco PostgreSQL em produção.",
      engineering:
        "Aplicação full-stack com interface Next.js e TypeScript integrada a uma API Node.js/Express e banco PostgreSQL via Prisma. TanStack Query e Redux Toolkit organizam dados e estado da interface; React Hook Form e Zod cuidam dos formulários e validação.",
      technicalImpact:
        "Centraliza o gerenciamento de produtos com busca, paginação e dashboard configurável em uma aplicação responsiva e internacionalizada. Não há métricas quantitativas cadastradas.",
    },
  },
  {
    id: "sofia-clickss",
    title: "Portfólio - Fotografa Sofia Clickss",
    shortDescription:
      "Portfólio fotográfico com galeria Masonry e otimização de desempenho.",
    killerFeature: "Galeria Masonry imersiva",
    image: "/images/projects/portfolio-sofia-clickss.png",
    demoUrl: "https://sofiaclickss.vercel.app/",
    githubUrl: null,
    coreTechnologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    fullTechnologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Vercel",
      "react-masonry-css",
    ],
    caseStudy: {
      problem:
        "Exibir dezenas de imagens em alta qualidade em um layout complexo sem comprometer a memória do navegador, garantindo navegação mobile intuitiva e carregamento otimizado.",
      engineering:
        "Portfólio em React e TypeScript com galeria Masonry responsiva usando react-masonry-css e publicação na Vercel.",
      technicalImpact:
        "Organiza imagens de diferentes proporções em uma galeria adaptável a telas móveis e desktop. Não há métricas quantitativas cadastradas.",
    },
  },
  {
    id: "diario-de-classe-ang",
    title: "Diário de Classe ANG",
    shortDescription:
      "Sistema centralizado para registros de assistidos e presença.",
    killerFeature: "Gestão digital de presença",
    image: "/images/projects/diario_de_classe.png",
    demoUrl: null,
    githubUrl: "https://github.com/DaviRKL/PI",
    coreTechnologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    fullTechnologies: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Sequelize",
      "Docker",
      "JWT",
    ],
    caseStudy: {
      problem:
        "Substituir registros manuais em papel por um sistema centralizado, garantindo a integridade dos dados e agilizando a rotina administrativa da Associação Nova Geração.",
      engineering:
        "Sistema web full-stack com frontend React, serviços em Node.js, dados relacionais em PostgreSQL gerenciados com Sequelize e autenticação baseada em JWT.",
      technicalImpact:
        "Digitaliza e centraliza registros de assistidos e presença para a rotina administrativa. Não há métricas quantitativas cadastradas.",
    },
  },
  {
    id: "my-poll",
    title: "My Poll",
    shortDescription:
      "Plataforma responsiva de enquetes com votos em tempo real.",
    killerFeature: "Votos em tempo real",
    image: "/images/projects/mypoll.png",
    demoUrl: "https://my-poll-b9694.web.app/",
    githubUrl: "https://github.com/DaviRKL/my-poll",
    coreTechnologies: [
      "React",
      "TypeScript",
      "Firebase Firestore",
      "Firebase Auth",
    ],
    fullTechnologies: [
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
    caseStudy: {
      problem:
        "Criar uma experiência de enquetes compartilhadas com atualização instantânea de votos, autenticação e ferramentas para encontrar enquetes por filtros, busca, ordenação e paginação.",
      engineering:
        "Aplicação React e TypeScript com Firebase Authentication (Google e anônimo) e Firestore para dados e atualização de votos. TanStack Router organiza a navegação; Jest e React Testing Library apoiam os testes.",
      technicalImpact:
        "Permite acompanhar a atualização dos votos e descobrir enquetes usando filtros e busca. Não há métricas quantitativas cadastradas.",
    },
  },
  {
    id: "folkdex",
    title: "folkDex",
    shortDescription:
      "Descoberta de perfis com filtros sincronizados à URL e suporte multilíngue.",
    killerFeature: "Filtros compartilháveis por URL",
    image: "/images/projects/folkDex.png",
    demoUrl: "https://folkdex-davikonuma.vercel.app/",
    githubUrl: "https://github.com/DaviRKL/folkDex",
    coreTechnologies: ["React", "TypeScript", "Vite", "i18next"],
    fullTechnologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router DOM",
      "Context API",
      "i18next",
      "Lucide React",
    ],
    caseStudy: {
      problem:
        "Criar uma experiência de busca rápida e compartilhável sobre perfis da Random User API, com paginação e filtros no cliente, sanitização de dados e suporte a Português/Inglês e temas claro/escuro.",
      engineering:
        "Aplicação React com estado de busca sincronizado à URL, camada de serviço para consumo e sanitização dos dados da Random User API, navegação com React Router DOM e internacionalização com i18next.",
      technicalImpact:
        "Permite compartilhar buscas por URL e navegar por perfis com filtros, idiomas e temas. Não há métricas quantitativas cadastradas.",
    },
  },
  {
    id: "exoplanet-classifier",
    title: "Exoplanet Classifier API & Dashboard",
    shortDescription:
      "Classificação de exoplanetas com modelos de Machine Learning e dashboard.",
    killerFeature: "Classificação com ML",
    image: "/images/projects/exo-classifier.jpg",
    demoUrl: null,
    githubUrl: "https://github.com/DaviRKL/exoplanet-classifier",
    coreTechnologies: ["Python", "FastAPI", "Angular", "XGBoost"],
    fullTechnologies: [
      "Python",
      "FastAPI",
      "Angular",
      "Scikit-Learn",
      "XGBoost",
      "TypeScript",
      "Machine Learning",
    ],
    caseStudy: {
      problem:
        "Processar o catálogo Kepler KOI para treinar classificadores Random Forest e XGBoost e disponibilizar predições por API.",
      engineering:
        "Pipeline de Machine Learning para treinamento dos classificadores, API de predição construída com FastAPI e dashboard Angular para visualização de dados e resultados.",
      technicalImpact:
        "Expõe classificações geradas pelos modelos por meio de uma API e as apresenta no dashboard. Não há métricas quantitativas cadastradas.",
    },
  },
];

export default projects;
