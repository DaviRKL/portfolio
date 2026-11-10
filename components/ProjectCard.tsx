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
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-primary/20 bg-bg-card shadow-lg transition-all duration-500 hover:border-secondary/40"
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
              <i className="fa fa-recycle fa-3x text-white-smoke/90" />
            ) : project.title.toLowerCase().includes("financial") ? (
              <i className="fa fa-usd fa-3x text-white-smoke/90" />
            ) : (
              <div className="italic text-text-muted">No preview</div>
            )}
          </div>
        )}

        {/* Badge de Status */}
        {project.status && (
          <div className="absolute top-3 right-3 z-10">
            <div
              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border shadow-sm flex items-center gap-2 ${
                project.status === "completed"
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-accent-gold/30 bg-accent-gold/10 text-accent-gold"
              }`}
            >
              {project.status === "in_progress" && (
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-gold opacity-50"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-gold"></span>
                </span>
              )}
              {project.status === "completed" ? "Finalizado" : "Em progresso"}
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col items-center text-center">
        <h3 className="font-heading text-xl font-bold text-text-main transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-text-main/70 italic">
          {project.tagline}
        </p>

        <div className="mt-4 text-left w-full">
          <p className="text-sm text-text-main/90">
            <strong className="text-primary">Desafio:</strong>{" "}
            {project.challenge}
          </p>
        </div>

        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {project.technologies.map((t, index) => (
            <li
              key={t}
              className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
                index % 2 === 0
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-secondary/30 bg-secondary/10 text-secondary"
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
           className="rounded-lg bg-secondary px-4 py-2 text-xs font-semibold text-bg-main shadow-md transition-all hover:brightness-110"
          >
            Visualizar Repositório
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-bg-main shadow-md transition-all hover:brightness-110"
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
            className="absolute right-0 top-0 z-10 inline-flex items-center gap-2 rounded-full bg-bg-card px-4 py-2 font-semibold text-text-main shadow-lg transition-colors hover:bg-secondary hover:text-bg-main"
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
