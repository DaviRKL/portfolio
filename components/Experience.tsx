"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-text-main">
          Experiência Profissional
        </h2>
        <p className="text-text-main/80 mt-4 max-w-3xl mx-auto">
          Estrategista em <strong>Engenharia de Software Full-Stack</strong>,
          graduado pela FATEC — desenvolvendo arquiteturas web e integrações
          escaláveis com foco em performance, SEO e resultados de alto impacto.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.14, delayChildren: 0.06 } },
        }}
      >
        {/* Card: Tech Experience */}
        <motion.article
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          whileHover={{
            y: -4,
            transition: { duration: 0.14, ease: "easeOut" },
          }}
          whileTap={{ y: -2, transition: { duration: 0.08, ease: "easeOut" } }}
          className="relative backdrop-blur-xl rounded-xl p-6 flex flex-col h-full transition-colors shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] bg-black/5 border border-black/5 hover:bg-black/10 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10"
        >
          <div className="flex-1">
            <header className="flex items-start justify-between">
              <div>
                <div className="text-sm text-text-main/70">
                  Estagiário de TI
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-text-main">
                  Climbz Consultoria
                </h3>
                <div className="text-xs text-text-main/60 mt-1">
                  nov de 2024 — nov de 2025 · Sorocaba (Híbrida)
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs bg-[var(--accent)] text-white font-semibold px-2 py-1 rounded-full">
                  React.js
                </span>
                <span className="text-xs bg-[var(--accent)] text-white font-semibold px-2 py-1 rounded-full">
                  Next.js
                </span>
                <span className="text-xs bg-[var(--accent)] text-white font-semibold px-2 py-1 rounded-full">
                  Node.js
                </span>
                <span className="text-xs bg-[var(--accent)] text-white font-semibold px-2 py-1 rounded-full">
                  n8n
                </span>
                <span className="text-xs bg-[var(--accent)] text-white font-semibold px-2 py-1 rounded-full">
                  Google Apps Script
                </span>
                <span className="text-xs bg-[var(--accent)] text-white font-semibold px-2 py-1 rounded-full">
                  REST APIs
                </span>
              </div>
            </header>

            <div className="mt-4 text-text-main/85 space-y-3">
              <p className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 shrink-0 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12l4 4L19 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  <strong>Liderei</strong> a implementação de interfaces e
                  landing pages com <strong>React.js</strong> e{" "}
                  <strong>Next.js</strong>, otimizando performance e conversão.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 shrink-0 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12l4 4L19 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  <strong>Implementei</strong> integrações robustas via{" "}
                  <strong>Node.js</strong> e <strong>Google Apps Script</strong>{" "}
                  para sincronização entre sistemas críticos.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 shrink-0 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12l4 4L19 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  <strong>Orquestrei</strong> automações com{" "}
                  <strong>n8n</strong>, reduzindo tarefas manuais e acelerando
                  homologação.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 shrink-0 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12l4 4L19 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  <strong>Desenvolvi</strong> agentes conversacionais integrados
                  a <strong>WhatsApp</strong> e <strong>Instagram</strong>,
                  melhorando automação de atendimento.
                </span>
              </p>
            </div>
          </div>

          <div
            className="mt-6 p-4 rounded-lg"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,169,224,0.06), rgba(0,169,224,0.02))",
              borderLeft: "4px solid var(--accent)",
            }}
          >
            <div className="text-sm font-semibold text-[var(--badge-legend-color)]">
              Resultado
            </div>
            <div className="mt-1 text-text-main/85">
              Entregas com foco em velocidade, SEO on‑page e aumento de
              conversão/adoção pelo cliente — redução média de retrabalho e
              tempo de deploy.
            </div>
          </div>
        </motion.article>

        {/* Card: Soft Skills */}
        <motion.article
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          whileHover={{
            y: -4,
            transition: { duration: 0.14, ease: "easeOut" },
          }}
          whileTap={{ y: -2, transition: { duration: 0.08, ease: "easeOut" } }}
          className="relative backdrop-blur-xl rounded-xl p-6 flex flex-col h-full transition-colors shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] bg-black/5 border border-black/5 hover:bg-black/10 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10"
        >
          <div className="flex-1">
            <header className="flex items-start justify-between">
              <div>
                <div className="text-sm text-text-main/70">Freelance</div>
                <h3 className="text-xl md:text-2xl font-bold text-text-main">
                  Staff em Eventos
                </h3>
                <div className="text-xs text-text-main/60 mt-1">
                  nov de 2023 — nov de 2025 · Sorocaba (Presencial)
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs bg-[var(--accent)] text-white font-semibold px-2 py-1 rounded-full">
                  Operações
                </span>
                <span className="text-xs bg-[var(--accent)] text-white font-semibold px-2 py-1 rounded-full">
                  Gestão de Crises
                </span>
                <span className="text-xs bg-[var(--accent)] text-white font-semibold px-2 py-1 rounded-full">
                  Comunicação
                </span>
              </div>
            </header>

            <div className="mt-4 text-text-main/85 space-y-3">
              <p className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 shrink-0 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12l4 4L19 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  <strong>Orquestrei</strong> suporte operacional e logístico em
                  eventos de escala, garantindo infraestrutura e fluxo.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 shrink-0 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12l4 4L19 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  <strong>Gerenciei</strong> crises e incidentes em tempo real,
                  aplicando resolução ágil.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 shrink-0 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12l4 4L19 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  <strong>Comuniquei</strong> de forma assertiva com equipes
                  multidisciplinares, facilitando decisões sob pressão.
                </span>
              </p>
            </div>
          </div>

          <div
            className="mt-6 p-4 rounded-lg"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,169,224,0.04), rgba(0,169,224,0.01))",
              borderLeft: "4px solid var(--accent)",
            }}
          >
            <div className="text-sm font-semibold text-[var(--badge-legend-color)]">
              Resultado
            </div>
            <div className="mt-1 text-text-main/85">
              Desempenho operacional consistente com redução no tempo de
              resposta a incidentes e melhoria na coordenação entre
              stakeholders.
            </div>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}
