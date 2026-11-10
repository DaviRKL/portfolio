import { ExternalLink } from "lucide-react";

export default function Languages() {
  return (
    <section
      id="languages"
      aria-labelledby="languages-heading"
      className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 text-center md:gap-16 md:py-24"
    >
      <h2
        id="languages-heading"
        className="font-heading text-3xl font-extrabold text-text-main"
      >
        Idiomas
      </h2>

      <article className="mx-auto flex w-full max-w-2xl flex-col gap-4 rounded-xl border border-primary/20 bg-white p-6 text-left shadow-[0_4px_20px_rgba(82,89,173,0.05)] transition-colors hover:border-secondary/40 dark:bg-bg-card dark:shadow-lg md:p-8">
        <h2
          className="font-heading text-2xl font-extrabold text-text-main dark:text-text-on-card"
        >
          Inglês Avançado
        </h2>
        <ul className="flex flex-col gap-4 text-sm leading-relaxed text-text-main dark:text-text-on-card sm:text-base">
          <li className="flex flex-col items-start gap-2">
            EF SET - C1 Advanced - 09/26{" "}
            <a
              href="https://cert.efset.org/qiXnjT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline no-wrap dark:text-secondary"
            >
              Verificação oficial do certificado
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </li>
          <li className="flex flex-col items-start gap-2">
            TOEIC Listening &amp; Reading - 755 - 04/24{" "}
            <a
              href="https://drive.google.com/file/d/13bgCLfYpHfBJmzJEO6EbDGKpByz9PW95/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-secondary underline-offset-4 hover:underline"
            >
              Verificação oficial do certificado
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
