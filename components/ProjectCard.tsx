"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Network, X } from "lucide-react";
import type { Project } from "../data/projects";

const actionTransition = { type: "spring" as const, stiffness: 400, damping: 17 };
const actionVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.03, y: -2 },
};
const linkIconVariants = {
  rest: { rotate: 0 },
  hover: { rotate: 360 },
};

export default function ProjectCard({
  project,
  variants,
  className = "",
  featured = false,
  onViewArchitecture,
}: {
  project: Project;
  variants?: Variants;
  className?: string;
  featured?: boolean;
  onViewArchitecture: (project: Project) => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  const imageSrc = project.image || "/images/projects/placeholder.png";

  useEffect(() => {
    if (!imageOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setImageOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageOpen]);

  return (
    <>
    <motion.article
      variants={variants}
      whileHover={{ y: -4 }}
      className={`group relative isolate h-full overflow-hidden rounded-2xl p-[2px] shadow-lg transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(216,72,117,0.12)] ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_var(--spin-angle),#6FBFEC,#F3D361,#D84875,#6FBFEC)] opacity-0 transition-opacity duration-500 group-hover:animate-golden-spin group-hover:opacity-100 group-focus-within:animate-golden-spin group-focus-within:opacity-100"
      />
      <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[calc(1rem-2px)] bg-[var(--color-bg-card)] text-[var(--color-text-on-card)]">
        <div className={`group/image relative h-52 w-full overflow-hidden rounded-t-[calc(1rem-2px)] border border-white/10 bg-bg-main shadow-[0_4px_20px_rgba(111,191,236,0.12)] after:pointer-events-none after:absolute after:inset-0 after:z-10 after:bg-gradient-to-b after:from-white/[0.04] after:to-black/10 dark:border-white/15 md:h-60 ${featured ? "lg:h-64" : ""}`}>
          {project.image ? (
            <button
              type="button"
              onClick={() => setImageOpen(true)}
              aria-label={`Ampliar imagem do projeto ${project.title}`}
              className="absolute inset-0 z-0 cursor-zoom-in"
            >
              <Image
                src={imageSrc}
                alt={project.title}
                fill
                className={`object-cover object-top transition-[object-position,opacity,filter] duration-[3000ms] ease-in-out group-hover/image:object-bottom ${loaded ? "blur-0 opacity-100" : "blur-sm opacity-0"}`}
                onLoad={() => setLoaded(true)}
                unoptimized
              />
            </button>
          ) : (
            <div className="flex h-full items-center justify-center">
              {project.title.toLowerCase().includes("reciclagem") ? (
                <i className="fa fa-recycle fa-3x text-[var(--color-text-on-card)]" />
              ) : project.title.toLowerCase().includes("financial") ? (
                <i className="fa fa-usd fa-3x text-[var(--color-text-on-card)]" />
              ) : (
                <div className="italic text-[var(--color-text-on-card)]">No preview</div>
              )}
            </div>
          )}

          {project.killerFeature && (
            <span className="absolute right-3 top-3 z-20 max-w-[75%] truncate rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
              {project.killerFeature}
            </span>
          )}
        </div>

      <div className={`flex flex-grow flex-col p-6 text-left ${featured ? "sm:p-8" : ""}`}>
        <h3 className={`font-heading font-bold text-[var(--color-text-on-card)] transition-colors group-hover:text-secondary ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className="mt-2 text-sm italic text-[var(--color-text-on-card)]/75">
          {project.tagline}
        </p>

        <div className={`mt-6 grid gap-4 text-sm leading-relaxed ${featured ? "sm:grid-cols-2" : ""}`}>
          <p>
            <strong className="mr-1 text-secondary">Problema:</strong>
            {project.challenge}
          </p>
          <p>
            <strong className="mr-1 text-primary">Engenharia:</strong>
            Solução construída com {project.technologies.slice(0, 4).join(", ")}.
          </p>
          <p className={featured ? "sm:col-span-2" : ""}>
            <strong className="mr-1 text-secondary">Impacto técnico:</strong>
            {project.impact ?? `Solução desenvolvida com ${project.technologies.slice(0, 3).join(", ")}.`}
          </p>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Principais tecnologias de ${project.title}`}>
          {project.technologies.slice(0, 4).map((t, index) => (
            <li
              key={t}
              className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
                index % 2 === 0
                  ? "border-primary/40 bg-primary/20 text-[var(--color-text-on-card)]"
                  : "border-secondary/40 bg-secondary/20 text-[var(--color-text-on-card)]"
              }`}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      <footer className="flex flex-wrap items-center gap-3 p-6 pt-0">
        {project.links.repo && (
          <motion.a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            variants={actionVariants}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
            transition={actionTransition}
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-xs font-semibold text-white shadow-md"
          >
            Visualizar Repositório
            <motion.span
              variants={linkIconVariants}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="inline-flex"
            >
              <ExternalLink size={14} aria-hidden="true" />
            </motion.span>
          </motion.a>
        )}
        {project.links.live && (
          <motion.a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            variants={actionVariants}
            initial="rest"
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
            transition={actionTransition}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white shadow-md"
          >
            Visualizar Projeto
            <motion.span
              variants={linkIconVariants}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="inline-flex"
            >
              <ExternalLink size={14} aria-hidden="true" />
            </motion.span>
          </motion.a>
        )}
        <motion.button
          type="button"
          onClick={() => onViewArchitecture(project)}
          variants={actionVariants}
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.97 }}
          transition={actionTransition}
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-[var(--color-primary)] transition-colors hover:bg-primary/10"
        >
          Ver Arquitetura
          <motion.span
            variants={linkIconVariants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="inline-flex"
          >
            <Network size={14} aria-hidden="true" />
          </motion.span>
        </motion.button>
      </footer>
      </div>
    </motion.article>
    {imageOpen && project.image && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        onClick={() => setImageOpen(false)}
        role="presentation"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem do projeto ${project.title}`}
          className="relative h-full max-h-[900px] w-full max-w-6xl"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setImageOpen(false)}
            aria-label="Fechar imagem"
            className="absolute right-0 top-0 z-10 inline-flex items-center gap-2 rounded-full bg-[var(--color-bg-card)] px-4 py-2 font-semibold text-[var(--color-text-on-card)] shadow-lg transition-colors hover:bg-secondary hover:text-bg-main"
          >
            Fechar <X size={18} aria-hidden="true" />
          </button>
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    )}
    </>
  );
}
