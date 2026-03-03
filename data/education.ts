export type EducationItem = {
  institution: string
  degree: string
  period: string
  description: string
  highlights?: string[]
  skills?: string[]
}

export const education: EducationItem[] = [
  {
    institution: 'Faculdade de Tecnologia de Sorocaba',
    degree: 'Análise e Desenvolvimento de Sistemas — Tecnologia da Informação',
    period: 'fev de 2024 - dez de 2025',
    description:
      'Na FATEC Sorocaba, consolidei minha base em Engenharia de Software, Estruturas de Dados, DevOps e IA. Desenvolvi uma solução Full-Stack para a ONG Associação Nova Geração, digitalizando o controle de presença e cadastros para otimizar a rotina administrativa da instituição.',
    highlights: ['Destaque: Projeto Diário de Classe ANG.'],
    skills: [
      'React.js',
      'Next.js',
      'Frontend: React, Vite, Vitest, ESLint/Prettier',
      'Backend: Node.js, JWT, Swagger',
      'PostgreSQL, Sequelize',
      'Docker, Git',
    ],
  },
  {
    institution: 'ETEC - Escola Técnica Estadual de São Paulo',
    degree: 'Ensino Técnico — Tecnologia da Informação',
    period: 'fev de 2021 - dez de 2023',
    description:
      'Articulação dos Ensinos Médio - Técnico e Superior (AMS). Nos três primeiros anos, o aluno cursa o Ensino Médio integrado ao Técnico e desenvolve 200 horas de formação profissional em uma empresa parceira.',
    highlights: [],
    skills: ['Comunicação', 'HTML', 'Fundamentos de TI'],
  },
]
