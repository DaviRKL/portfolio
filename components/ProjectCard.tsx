"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

type Project = {
  title: string;
  tagline: string;
  challenge: string;
  image?: string | null;
  technologies: string[];
  links: { repo?: string; live?: string };
  status?: "completed" | "in_progress";
};

export default function ProjectCard({
  project,
  variants,
}: {
  project: Project;
  variants?: any;
}) {
  const [loaded, setLoaded] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  // A lógica simplificou para: use o que está no JSON ou o placeholder
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
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-primary/20 bg-white shadow-[0_4px_20px_rgba(82,89,173,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_10px_24px_rgba(82,89,173,0.12)] dark:bg-bg-card dark:shadow-lg"
    >
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden border-b border-primary/20 bg-bg-main">
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
              className={`object-cover transition-all duration-700 group-hover:scale-110 ${loaded ? "blur-0 opacity-100" : "blur-sm opacity-0"}`}
              onLoad={() => setLoaded(true)}
              unoptimized
            />
          </button>
        ) : (
          /* Mantendo a lógica de ícones para projetos sem imagem no JSON */
          <div className="flex items-center justify-center w-full h-full">
            {project.title.toLowerCase().includes("reciclagem") ? (
              <i className="fa fa-recycle fa-3x text-text-main dark:text-text-on-card" />
            ) : project.title.toLowerCase().includes("financial") ? (
              <i className="fa fa-usd fa-3x text-text-main dark:text-text-on-card" />
            ) : (
              <div className="italic text-text-main dark:text-text-on-card">No preview</div>
            )}
          </div>
        )}

        {/* Badge de Status */}
        {project.status && (
          <div className="absolute top-3 right-3 z-10">
            <div
              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border shadow-sm flex items-center gap-2 ${
                project.status === "completed"
                  ? "border-primary/20 bg-primary/10 text-primary dark:bg-primary/20 dark:text-text-on-card"
                  : "border-secondary/20 bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary"
              }`}
            >
              {project.status === "in_progress" && (
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-50"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
                </span>
              )}
              {project.status === "completed" ? "Finalizado" : "Em progresso"}
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col items-center text-center">
        <h3 className="font-heading text-xl font-bold text-text-main transition-colors group-hover:text-primary dark:text-text-on-card dark:group-hover:text-secondary">
          {project.title}
        </h3>
        <p className="mt-1 text-sm italic text-text-main dark:text-text-on-card">
          {project.tagline}
        </p>

        <div className="mt-4 text-left w-full">
          <p className="text-sm text-text-main dark:text-text-on-card">
            <strong className="text-primary dark:text-secondary">Desafio:</strong>{" "}
            {project.challenge}
          </p>
        </div>

        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {project.technologies.map((t, index) => (
            <li
              key={t}
              className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
                index % 2 === 0
                  ? "border-primary/20 bg-primary/10 text-primary dark:bg-primary/20 dark:text-text-on-card"
                  : "border-secondary/20 bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary"
              }`}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      <footer className="p-6 pt-0 flex items-center gap-4 justify-center">
        {project.links.repo && (
          <a
            href={project.links.repo}
            target="_blank"
           className="rounded-lg bg-secondary px-4 py-2 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(216,72,117,0.2)]"
          >
            Visualizar Repositório
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(82,89,173,0.2)]"
          >
            Visualizar Projeto
          </a>
        )}
      </footer>
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
            className="absolute right-0 top-0 z-10 inline-flex items-center gap-2 rounded-full bg-bg-card px-4 py-2 font-semibold text-text-main shadow-lg transition-colors hover:bg-secondary hover:text-bg-main dark:text-text-on-card"
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
