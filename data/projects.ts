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
      "Painel de alta performance para gestão de estoque e produtos com suporte multilíngue.",
    killerFeature: "CRUD & Caching Performático",
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
        "Gerenciar grandes volumes de inventário exige busca e paginação instantâneas sem reloads de página, integrando um frontend SSR a uma API REST desacoplada com banco de dados em produção.",
      engineering:
        "Arquitetura full-stack desacoplada utilizando Next.js App Router e API Node.js/Express com Prisma ORM conectada ao PostgreSQL (Neon.tech). O gerenciamento de estado e cache de requisições utiliza TanStack Query e Redux Toolkit, com validações rigorosas via React Hook Form e Zod, e i18n nativo via next-intl.",
      technicalImpact:
        "Eliminação completa de latência percebida na gestão de produtos, busca e paginação em tempo real com zero reload, garantindo tipagem estática ponta a ponta e desacoplamento de infraestrutura entre Vercel e Render.",
    },
  },
  {
    id: "sofia-clickss",
    title: "Portfólio - Fotógrafa Sofia Clickss",
    shortDescription:
      "Portfólio fotográfico autoral com galeria Masonry responsiva e visual Glassmorphism.",
    killerFeature: "Galeria Masonry & Glassmorphism",
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
        "Exibir dezenas de fotografias em alta resolução em um layout dinâmico e assimétrico sem estourar o consumo de memória do navegador e garantindo fluidez mobile por gestos.",
      engineering:
        "Interface reativa desenvolvida com React, TypeScript e Tailwind CSS, otimizada via Vite. A galeria adapta múltiplos aspectos de proporção usando react-masonry-css, integrando carregamento sob demanda (lazy loading), cache de borda na CDN da Vercel e estética Glassmorphism.",
      technicalImpact:
        "Renderização fluida de acervos pesados de imagens com alta taxa de quadros em dispositivos móveis, proporcionando uma vitrine fotográfica de alto valor percebido e conversão direta via WhatsApp.",
    },
  },
  {
    id: "diario-de-classe-ang",
    title: "Diário de Classe ANG",
    shortDescription:
      "Sistema de automação para registros de frequência e gestão de assistidos para ONG.",
    killerFeature: "Gestão Digital de Presença",
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
        "Substituir o controle manual em papel da Associação Nova Geração, eliminando extravios de chamadas diárias e descentralização dos dados dos alunos atendidos.",
      engineering:
        "Sistema full-stack com frontend SPA em React e API Node.js/Express em TypeScript. Modelagem relacional completa em PostgreSQL com ORM Sequelize, autenticação baseada em JWT e conteinerização de todos os serviços usando Docker e Docker Compose.",
      technicalImpact:
        "Digitalização e automação integral das chamadas operacionais, reduzindo drasticamente o tempo dedicado à rotina administrativa da ONG, garantindo rastreabilidade e integridade dos dados cadastrais.",
    },
  },
  {
    id: "my-poll",
    title: "My Poll",
    shortDescription:
      "Plataforma interativa para criação e votação em enquetes com atualização em tempo real.",
    killerFeature: "Sincronização em Tempo Real",
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
        "Construir uma aplicação concorrente de enquetes onde múltiplos usuários votem em simultâneo e visualizem a evolução dos resultados em tempo real sem requisições manuais de polling.",
      engineering:
        "Aplicação React e TypeScript empacotada com Vite, utilizando TanStack Router para navegação tipada. Integração com Firebase Auth para autenticação anônima e social (Google), e Firebase Firestore com listeners de tempo real (`onSnapshot`) para contagem dinâmica de votos. Testada com Jest e React Testing Library.",
      technicalImpact:
        "Reatividade instantânea na contagem e distribuição de votos com baixa latência via WebSocket do Firestore, garantindo estabilidade sob acessos simultâneos e filtros flexíveis por escopo.",
    },
  },
  {
    id: "folkdex",
    title: "folkDex",
    shortDescription:
      "Explorador de perfis com sincronização bidirecional de filtros via URL e suporte i18n.",
    killerFeature: "Filtros Sincronizados à URL",
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
        "Oferecer busca e paginação sobre dados da Random User API permitindo que qualquer estado de busca (filtros, termos, idioma e página) possa ser compartilhado por URL de forma persistente.",
      engineering:
        "Desenvolvido em React com TypeScript e Vite. A arquitetura conta com uma camada de serviços isolada para consumo e sanitização dos dados da API externa, sincronização bidirecional de parâmetros com a URL via React Router DOM, internacionalização dinâmica (i18next) e alternância de temas com Context API.",
      technicalImpact:
        "Deep linking total em qualquer combinação de filtro e busca, permitindo o compartilhamento direto de estados de tela com carregamento rápido e sanitização de dados no cliente.",
    },
  },
  {
    id: "exoplanet-classifier",
    title: "Exoplanet Classifier API & Dashboard",
    shortDescription:
      "Classificação automatizada de candidatos a exoplanetas com modelos de Machine Learning.",
    killerFeature: "Predição via Machine Learning",
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
        "Processar os dados astronômicos do catálogo Kepler KOI (NASA Space Apps Challenge) para identificar e classificar automaticamente corpos celestes com modelos preditivos.",
      engineering:
        "Pipeline de dados em Python para pré-processamento e treinamento de modelos Ensemble (Random Forest e XGBoost) usando Scikit-Learn. API REST de inferência preditiva desenvolvida com FastAPI de alta performance e dashboard interativo construído em Angular com TypeScript.",
      technicalImpact:
        "Automação do processo de triagem astronômica servido por uma API REST com resposta preditiva em milissegundos e visualização analítica simplificada para pesquisadores.",
    },
  },
];

export default projects;
