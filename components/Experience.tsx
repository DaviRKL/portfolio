"use client";

import { motion } from "framer-motion";
import { experienceIntroduction, experiences, experienceTitle } from "../data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-6xl mx-auto px-3 py-10 sm:px-6 sm:py-20">
      <header className="mb-6 text-center sm:mb-8">
        <h2 className="text-3xl font-extrabold text-text-main">{experienceTitle}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-text-main/80">
          {experienceIntroduction.map((part, index) =>
            part.emphasis ? (
              <strong key={index}>{part.text}</strong>
            ) : (
              <span key={index}>{part.text}</span>
            ),
          )}
        </p>
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
            whileHover={{ y: -4, transition: { duration: 0.14, ease: "easeOut" } }}
            whileTap={{ y: -2, transition: { duration: 0.08, ease: "easeOut" } }}
            className="relative flex h-full flex-col rounded-xl border border-black/5 bg-black/5 p-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl transition-colors hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 sm:p-8 md:p-10"
          >
            <div className="flex-1">
              <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="text-sm text-text-main/70">{experience.role}</div>
                  <h3 className="text-2xl font-bold text-text-main md:text-3xl">{experience.company}</h3>
                  <div className="mt-1 text-xs text-text-main/60">{experience.period}</div>
                </div>
                <ul className="mt-2 flex flex-wrap items-center gap-2 md:mt-0" aria-label={`Tecnologias de ${experience.company}`}>
                  {experience.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full bg-[var(--accent)] px-2 py-1 text-xs font-semibold text-white"
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
              className="mt-6 rounded-lg p-3 sm:mt-8 sm:p-4"
              style={{
                background: "linear-gradient(90deg, rgba(0,169,224,0.08), rgba(0,169,224,0.03))",
                borderLeft: "4px solid var(--accent)",
              }}
            >
              <div className="text-sm font-semibold text-[var(--badge-legend-color)]">{experience.resultLabel}</div>
              <p className="mt-1 text-text-main/85">{experience.result}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
