"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import type { Project } from "../data/projects";

type ProjectArchitectureModalProps = {
  project: Project;
  onClose: () => void;
};

const fallbackHighlights = [
  "Arquitetura Frontend",
  "Integrações & APIs",
  "Performance e Cache",
];

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

  const overview =
    project.architectureOverview?.trim() ||
    "A arquitetura deste projeto ainda não foi documentada. Os destaques abaixo apresentam os pilares gerais da solução.";
  const highlights =
    project.architectureHighlights?.length
      ? project.architectureHighlights
      : fallbackHighlights;

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
          aria-labelledby="project-architecture-title"
          className="max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-secondary/40 bg-[var(--color-bg-card)] p-6 text-[var(--color-text-on-card)] shadow-2xl sm:max-h-[90vh] sm:rounded-2xl sm:p-8"
        >
          <header className="mb-7 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Arquitetura do projeto
              </p>
              <h2
                id="project-architecture-title"
                className="mt-2 font-heading text-2xl font-bold text-[var(--color-text-on-card)] sm:text-3xl"
              >
                {project.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar detalhes de arquitetura"
              className="rounded-full border border-secondary/40 p-2 text-[var(--color-text-on-card)] transition-colors hover:bg-secondary hover:text-white"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div className="space-y-6">
            <section aria-labelledby="architecture-overview-title">
              <h3
                id="architecture-overview-title"
                className="font-heading text-lg font-semibold text-primary"
              >
                Visão Geral da Solução
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-on-card)]/85">
                {overview}
              </p>
            </section>

            <section aria-labelledby="architecture-highlights-title">
              <h3
                id="architecture-highlights-title"
                className="font-heading text-lg font-semibold text-primary"
              >
                Destaques Técnicos
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-2 text-sm leading-relaxed text-[var(--color-text-on-card)]/85 marker:text-secondary">
                {highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="architecture-performance-title">
              <h3
                id="architecture-performance-title"
                className="font-heading text-lg font-semibold text-primary"
              >
                Métricas / Performance
              </h3>
              {project.architectureMetrics?.length ? (
                <ul className="mt-2 list-inside list-disc space-y-2 text-sm leading-relaxed text-[var(--color-text-on-card)]/85 marker:text-secondary">
                  {project.architectureMetrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-on-card)]/70">
                  Não há métricas medidas de Lighthouse ou latência cadastradas
                  para este projeto.
                </p>
              )}
            </section>

            {project.diagramUrl && (
              <figure className="space-y-2">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-primary/30">
                  <Image
                    src={project.diagramUrl}
                    alt={`Diagrama de arquitetura de ${project.title}`}
                    fill
                    sizes="(max-width: 672px) 100vw, 672px"
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <figcaption className="text-xs text-[var(--color-text-on-card)]/65">
                  Diagrama de arquitetura
                </figcaption>
              </figure>
            )}
          </div>
        </motion.div>
    </motion.div>
  );
}
