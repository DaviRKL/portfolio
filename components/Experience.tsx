"use client";

import { motion } from "framer-motion";
import {
  experienceIntroduction,
  experiences,
  experienceTitle,
} from "../data/experiences";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full max-w-6xl mx-auto px-3 py-10 sm:px-6 sm:py-20"
    >
      <header className="mb-6 text-center sm:mb-8">
        <h2 className="font-heading text-3xl font-extrabold text-primary">
          {experienceTitle}
        </h2>
      </header>

      <motion.div
        className="grid grid-cols-1 gap-5 sm:gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.14, delayChildren: 0.06 } },
        }}
      >
        {experiences.map((experience) => (
          <motion.article
            key={experience.company}
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            whileHover={{
              y: -4,
              transition: { duration: 0.14, ease: "easeOut" },
            }}
            whileTap={{
              y: -2,
              transition: { duration: 0.08, ease: "easeOut" },
            }}
            className="relative flex h-full flex-col rounded-xl border border-primary/20 bg-bg-card p-4 shadow-lg transition-colors hover:border-secondary/40 sm:p-8 md:p-10"
          >
            <div className="flex-1">
              <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="text-sm text-text-muted">
                    {experience.role}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-text-main md:text-3xl">
                    {experience.company}
                  </h3>
                  <div className="mt-1 text-xs text-text-muted">
                    {experience.period}
                  </div>
                </div>
                <ul
                  className="mt-2 flex flex-wrap items-center gap-2 md:mt-0"
                  aria-label={`Tecnologias de ${experience.company}`}
                >
                  {experience.technologies.map((technology, index) => (
                    <li
                      key={technology}
                      className={`rounded-full border px-2 py-1 text-xs font-semibold ${
                        index % 2 === 0
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : "border-secondary/30 bg-secondary/10 text-secondary"
                      }`}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </header>

              <ul className="mt-6 space-y-3 text-text-main/85">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-accent"
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
            </div>

            <div
              className="mt-6 rounded-lg border border-primary/20 p-3 sm:mt-8 sm:p-4"
              style={{
                background: "var(--color-bg-main)",
                borderLeft: "4px solid var(--color-primary)",
              }}
            >
              <div className="text-sm font-semibold text-primary">
                {experience.resultLabel}
              </div>
              <p className="mt-1 text-text-main/85">{experience.result}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
