import { ExternalLink } from "lucide-react";

export default function Languages() {
  return (
    <section
      id="languages"
      aria-labelledby="languages-heading"
      className="max-w-6xl mx-auto px-6 py-24 text-center"
    >
      <h2
        id="languages-heading"
        className="mb-8 font-heading text-3xl font-extrabold text-primary"
      >
        Idiomas
      </h2>

      <article className="mx-auto max-w-3xl rounded-xl border border-primary/20 bg-bg-card p-6 text-left shadow-lg transition-colors hover:border-secondary/40 sm:p-8">
        <h2
          id="languages-heading"
          className="mb-5 font-heading text-2xl font-extrabold text-text-main"
        >
          Inglês Avançado
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed text-text-main/85 sm:text-base">
          <li>
            EF SET - C1 Advanced - 09/26{" "}
            <a
              href="https://cert.efset.org/qiXnjT"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline no-wrap"
            >
              Verificação oficial do certificado
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </li>
          <li>
            TOEIC Listening &amp; Reading - 755 - 04/24{" "}
            <a
              href="https://drive.google.com/file/d/13bgCLfYpHfBJmzJEO6EbDGKpByz9PW95/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-secondary underline-offset-4 hover:underline"
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
