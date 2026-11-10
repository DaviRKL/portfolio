"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { education } from "../data/education";

export default function Education() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const theme = mounted ? resolvedTheme || "dark" : "dark";

  function logoFor(institution: string) {
    const lower = institution.toLowerCase();
    if (lower.includes("fatec") || lower.includes("faculdade de tecnologia")) {
      const base = "fatec_ra_sorocaba_sorocaba";
      const variant = theme === "dark" ? "br" : "cor";
      return `/images/logos_fatec/${base}_${variant}.png`;
    }

    if (institution.toLowerCase().includes("etec")) {
      const base = "etec_ra_sorocaba_sorocaba_fernando_prestes";
      const variant = theme === "dark" ? "br" : "cor";
      return `/images/logos_etec/${base}_${variant}.png`;
    }

    return null;
  }

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="max-w-6xl mx-auto px-6 py-24 text-center"
    >
      <h2
        id="education-heading"
        className="mb-4 font-heading text-3xl font-extrabold text-text-main"
      >
        Formações
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((e) => (
          <article
            key={e.institution}
            className="rounded-xl border border-primary/20 bg-white p-6 text-center shadow-[0_4px_20px_rgba(82,89,173,0.05)] transition-colors hover:border-secondary/40 dark:bg-bg-card dark:shadow-lg"
          >
            <header className="flex flex-col items-center gap-4">
              {logoFor(e.institution) && (
                <div className="w-28 h-12 relative flex-shrink-0 mx-auto">
                  <Image
                    src={logoFor(e.institution)!}
                    alt={`${e.institution} logo`}
                    fill
                    sizes="112px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              )}

              <div>
                <h3 className="font-heading text-xl font-semibold text-text-main dark:text-text-on-card">
                  {e.degree}
                </h3>
                <p className="mt-1 text-sm text-text-main dark:text-text-on-card">
                  {e.institution}
                </p>
                <p className="mt-2 text-sm italic text-text-main dark:text-text-on-card">
                  {e.period}
                </p>
              </div>
            </header>
          </article>
        ))}
      </div>
    </section>
  );
}
