"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "../data/projects";

type ProjectArchitectureModalProps = {
  project: Project;
  onClose: () => void;
};

const caseStudySections = [
  { key: "problem", title: "O Problema de Negócio" },
  { key: "engineering", title: "Solução de Engenharia & Arquitetura" },
  { key: "technicalImpact", title: "Impacto Técnico & Resultados" },
] as const;

export default function ProjectArchitectureModal({
  project,
  onClose,
}: ProjectArchitectureModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      role="presentation"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-case-title"
        className="max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-secondary/40 bg-[var(--color-bg-card)] p-6 text-[var(--color-text-on-card)] shadow-2xl sm:max-h-[90vh] sm:rounded-2xl sm:p-8"
      >
        <header className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Estudo de caso
            </p>
            <h2
              id="project-case-title"
              className="mt-2 font-heading text-2xl font-bold text-[var(--color-text-on-card)] sm:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-on-card)]/75">
              {project.shortDescription}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes técnicos"
            className="shrink-0 rounded-full border border-secondary/40 p-2 text-[var(--color-text-on-card)] transition-colors hover:bg-secondary hover:text-white"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </header>

        <div className="space-y-6">
          {caseStudySections.map(({ key, title }) => (
            <section key={key} aria-labelledby={`case-${key}-title`}>
              <h3
                id={`case-${key}-title`}
                className="font-heading text-lg font-semibold text-primary"
              >
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-on-card)]/85">
                {project.caseStudy[key]}
              </p>
            </section>
          ))}

          <section aria-labelledby="case-technologies-title">
            <h3
              id="case-technologies-title"
              className="font-heading text-lg font-semibold text-primary"
            >
              Stack de Tecnologias Completa
            </h3>
            <ul
              className="mt-3 flex flex-wrap gap-2"
              aria-label={`Stack completa de ${project.title}`}
            >
              {project.fullTechnologies.map((technology, index) => (
                <li
                  key={technology}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                    index % 2 === 0
                      ? "border-primary/40 bg-primary/20 text-[var(--color-text-on-card)]"
                      : "border-secondary/40 bg-secondary/20 text-[var(--color-text-on-card)]"
                  }`}
                >
                  {technology}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {(project.demoUrl || project.githubUrl) && (
          <footer className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/85"
              >
                Visualizar Projeto
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary/85"
              >
                Repositório
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            )}
          </footer>
        )}
      </motion.div>
    </motion.div>
  );
}
