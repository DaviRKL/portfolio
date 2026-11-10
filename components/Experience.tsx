"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  experiences,
  experienceTitle,
  type ExperienceItem,
} from "../data/experiences";

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = `experience-details-${index}`;

  return (
    <article className="flex flex-col gap-6 rounded-2xl bg-[var(--color-bg-card)] p-6 text-[var(--color-text-on-card)] shadow-[0_4px_20px_rgba(82,89,173,0.08)] md:p-8">
      <header className="flex flex-col gap-2">
        <h3 className="font-heading text-2xl font-bold text-[var(--color-primary)] md:text-3xl">
          {experience.role}
        </h3>
        <p className="text-lg font-semibold">{experience.company}</p>
        <p className="text-sm text-[var(--color-text-muted)]">
          {experience.period} <span aria-hidden="true">·</span> {experience.location}
        </p>
      </header>

      <div className="flex flex-col gap-2 rounded-r-lg border-l-4 border-[var(--color-primary)] bg-[var(--color-primary)]/10 p-4 sm:p-5">
        <p className="text-sm font-semibold text-[var(--color-primary)]">
          {experience.resultLabel}
        </p>
        <p className="leading-relaxed">{experience.result}</p>
      </div>

      <ul
        className="flex flex-wrap gap-2"
        aria-label={`Tecnologias principais de ${experience.company}`}
      >
        {experience.technologies.slice(0, 4).map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-primary)]"
          >
            {technology}
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={detailsId}
        onClick={() => setIsExpanded((expanded) => !expanded)}
        className="text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-secondary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
      >
        {isExpanded ? "- Ocultar entregas técnicas" : "+ Exibir entregas técnicas"}
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={detailsId}
            key="technical-deliveries"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="space-y-3 border-t border-[var(--color-primary)]/15 pt-4">
              {experience.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-[var(--color-primary)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12l4 4L19 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % experiences.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + experiences.length) % experiences.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = experiences.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveTab(nextIndex);
    document.getElementById(`experience-tab-${nextIndex}`)?.focus();
  }

  return (
    <section
      id="experience"
      className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-3 py-16 sm:px-6 md:gap-16 md:py-24"
    >
      <header className="text-center">
        <h2 className="font-heading text-3xl font-extrabold text-text-main">
          {experienceTitle}
        </h2>
      </header>

      <div className="flex flex-col gap-5">
        <div
          role="tablist"
          aria-label="Empresas"
          className="flex gap-4 overflow-x-auto border-b border-[var(--color-primary)]/20"
        >
          {experiences.map((experience, index) => {
            const isActive = activeTab === index;

            return (
              <button
                key={experience.company}
                id={`experience-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`experience-panel-${index}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={`relative shrink-0 px-1 pb-3 text-sm font-semibold transition-opacity ${
                  isActive
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text-on-bg)] opacity-60 hover:opacity-100"
                }`}
              >
                {experience.company}
                {isActive && (
                  <motion.span
                    layoutId="experience-tab-indicator"
                    className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[var(--color-primary)]"
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {experiences.map((experience, index) => (
          <div
            key={experience.company}
            id={`experience-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`experience-tab-${index}`}
            hidden={activeTab !== index}
            tabIndex={0}
          >
            <ExperienceCard experience={experience} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
