export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  technologies: string[];
  responsibilities: string[];
  resultLabel: string;
  result: string;
};

export const experienceTitle = "Experiência Profissional";

export const experienceIntroduction = [
  { text: "Estrategista em " },
  { text: "Engenharia de Software Front-End", emphasis: true },
  {
    text: ", graduado pela FATEC — desenvolvendo arquiteturas web e integrações escaláveis com foco em performance, SEO e resultados de alto impacto.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Desenvolvedor Front-End Junior",
    company: "AGX Software",
    period: "mar de 2026 — Jun de 2026",
    location: "Sorocaba (Presencial)",
    technologies: [
      "React.js",
      "TypeScript",
      "Redux",
      "Styled Components",
      "APIs REST",
      "Antigravity",
      "Gemini Code Assistant",
      "Github Copilot",
      "Git",
    ],
    responsibilities: [
      "Atuação no desenvolvimento do SaaS Indiky, plataforma financeira utilizada por grandes instituições (como Banco Santander, Caixa e BMG), utilizando React, TypeScript e Redux.",

      "Estruturação de sincronização bidirecional entre o estado global da aplicação e parâmetros de URL, garantindo a persistência e o compartilhamento de filtros complexos.",

      "Desacoplamento de interfaces legadas do CRM, eliminando dependências de rotas para permitir a reutilização segura de componentes em múltiplos módulos sem duplicar regras de negócio.",

      "Implementação de recursos avançados de acessibilidade utilizando Web Speech API e IntersectionObserver para navegação por voz, além da refatoração contínua de fluxos apoiada por ferramentas de IA (Copilot e Gemini).",
    ],
    resultLabel: "Resultado",
    result:
      "Evolução de aplicação SaaS B2B de alta complexidade, garantindo maior consistência de estado, reaproveitamento inteligente de código legado e acessibilidade em fluxos operacionais financeiros.",
  },
  {
    role: "Estagiário de Tecnologia",
    company: "Climbz Consultoria",
    period: "nov de 2024 — nov de 2025",
    location: "Sorocaba (Híbrido)",
    technologies: [
      "React.js",
      "Node.js",
      "Webhooks",
      "APIs REST",
      "CrewAI",
      "n8n",
      "Google Apps Script",
      "Git"
    ],
    responsibilities: [
      "Criação de integrações e automações de processos utilizando APIs REST, webhooks, n8n e Google Apps Script, centralizando dados operacionais para viabilizar dashboards no Looker Studio.",

      "Desenvolvimento de soluções baseadas em Inteligência Artificial, incluindo chatbots integrados a LLMs e agentes autônomos com CrewAI para processamento e transformação de documentos empresariais.",

      "Levantamento de requisitos diretamente com clientes e desenvolvimento de rotinas de consolidação de dados (ex: sincronização e comparação de múltiplos sistemas de estoque).",
    ],
    resultLabel: "Resultado",
    result:
      "Otimização de processos operacionais por meio de automações e soluções em IA, assegurando a centralização de dados, alta confiabilidade para tomada de decisão e redução da dependência de tarefas manuais.",
  },
];
