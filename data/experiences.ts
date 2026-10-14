export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
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
    period: "mar de 2026 — Jun de 2026 · Sorocaba (Presencial)",
    technologies: [
      "React.js",
      "TypeScript",
      "Redux",
      "Styled Components",
      "APIs REST",
      "Git",
    ],
    responsibilities: [
      "Implementei sincronização bidirecional entre Redux e query params, permitindo persistir, restaurar e compartilhar filtros pela URL sem recarregar a aplicação, mantendo o estado da interface consistente.",
      "Desenvolvi fluxos de navegação contextual entre Produto, Auto-contratação (AC) e Propostas, contemplando diferentes status operacionais e permitindo acessar registros relacionados mesmo entre módulos com estados isolados.",
      "Desacoplei fluxos de configuração de produtos no CRM da dependência direta de rotas, reutilizando interfaces legadas e preservando a compatibilidade com funcionalidades existentes, sem necessidade de novos endpoints.",
      "Implementei recursos de acessibilidade com Web Speech API e IntersectionObserver, incluindo navegação por voz, leitura de termos obrigatórios e tratamento de incompatibilidades com recursos do navegador e VLibras.",
    ],
    resultLabel: "Resultado",
    result:
      "Contribuí para a evolução de uma aplicação SaaS B2B, aprimorando a consistência de estado, a navegação entre módulos, a reutilização de componentes legados e a acessibilidade em fluxos operacionais com regras de negócio complexas.",
  },
  {
    role: "Estagiário de Tecnologia",
    company: "Climbz Consultoria",
    period: "nov de 2024 — nov de 2025 · Sorocaba (Híbrido)",
    technologies: [
      "React.js",
      "Node.js",
      "Webhooks",
      "APIs REST",
      "n8n",
      "Google Apps Script",
    ],
    responsibilities: [
      "Desenvolvi uma integração entre a API do sistema de gestão EVO e o Google Apps Script para a Meta Studio, combinando webhooks e consultas automatizadas para centralizar dados operacionais no Google Sheets e viabilizar dashboards no Looker Studio.",
      "Automatizei a consolidação de estoque da RR Inox por meio da integração com APIs de dois sistemas de inventário, comparando quantidades no Google Sheets para fornecer uma visão unificada e mais confiável dos saldos disponíveis.",
      "Implementei automações e integrações de dados com Google Apps Script, n8n e APIs REST, reduzindo etapas manuais e transformando fluxos operacionais em processos reutilizáveis, mantidos em uso após a implementação.",
      "Conduzi levantamentos de requisitos e alinhamentos técnicos com clientes, investigando necessidades operacionais, apoiando a manutenção de aplicações web e desenvolvendo soluções alinhadas aos processos reais de cada negócio.",
    ],
    resultLabel: "Resultado",
    result:
      "Implementei soluções de integração e automação utilizadas continuamente pelos clientes, melhorando a centralização e a confiabilidade dos dados, ampliando a visibilidade operacional e reduzindo a dependência de tarefas manuais.",
  },
];
