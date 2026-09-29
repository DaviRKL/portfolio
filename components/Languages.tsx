import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

export default function Languages() {
  return (
    <section id="languages" aria-labelledby="languages-heading" className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h2 id="languages-heading" className="text-3xl font-extrabold mb-8 text-text-main">Idiomas</h2>

      <article className="mb-8 overflow-hidden rounded-xl border border-black/5 bg-black/5 text-left shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <div className="grid items-start gap-8 p-6 md:grid-cols-[1fr_1.1fr] md:p-8">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-accent/15 px-3 py-1 text-sm font-bold text-accent">EF SET · Setembro de 2026</span>
              <span className="text-sm text-text-main/70">Certificação internacional · CEFR</span>
            </div>

            <div className="mb-5 flex flex-wrap items-end gap-x-4 gap-y-1">
              <h3 className="text-3xl font-extrabold text-text-main">C1 Advanced</h3>
              <span className="text-lg font-semibold text-accent">62/100</span>
            </div>
            <p className="mb-6 leading-relaxed text-text-main/85">
              Proficiência avançada para consumir conteúdo técnico de alta complexidade, com domínio pleno de materiais especializados e comunicações internacionais.
            </p>

            <ul className="grid gap-3 sm:grid-cols-2" aria-label="Pontuações por habilidade no EF SET">
              <li className="rounded-lg border border-white/10 bg-black/10 p-4 dark:bg-white/5">
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-2">
                  <span className="font-bold text-text-main">Reading</span>
                  <span className="text-sm font-semibold text-accent">71/100 · C2</span>
                </div>
                <p className="text-sm leading-relaxed text-text-main/75">Leitura fluente de documentação técnica complexa, artigos avançados e especificações.</p>
              </li>
              <li className="rounded-lg border border-white/10 bg-black/10 p-4 dark:bg-white/5">
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-2">
                  <span className="font-bold text-text-main">Listening</span>
                  <span className="text-sm font-semibold text-accent">75/100 · C2</span>
                </div>
                <p className="text-sm leading-relaxed text-text-main/75">Compreensão de discussões técnicas nativas e apresentações corporativas complexas.</p>
              </li>
              <li className="rounded-lg border border-white/10 bg-black/10 p-4 dark:bg-white/5">
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-2">
                  <span className="font-bold text-text-main">Writing</span>
                  <span className="text-sm font-semibold text-accent">52/100 · B2</span>
                </div>
                <p className="text-sm leading-relaxed text-text-main/75">Comunicação escrita clara e estruturada em e-mails, pull requests e documentação.</p>
              </li>
              <li className="rounded-lg border border-white/10 bg-black/10 p-4 dark:bg-white/5">
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-2">
                  <span className="font-bold text-text-main">Speaking</span>
                  <span className="text-sm font-semibold text-accent">48/100 · B1</span>
                </div>
                <p className="text-sm leading-relaxed text-text-main/75">Articulação em reuniões, alinhamentos de equipe e rotinas de desenvolvimento.</p>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <div className="overflow-hidden rounded-lg border bg-white" style={{ borderColor: 'var(--border-color)' }}>
              <iframe
                src="/images/certificado_EF_SET/EF%20SET%20Certificate.pdf"
                title="Certificado EF SET de Davi Konuma"
                className="h-[320px] w-full sm:h-[420px]"
              />
            </div>
            <a
              href="https://cert.efset.org/qiXnjT"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline"
            >
              Verificação oficial do certificado <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>

      <article className="grid items-center gap-8 rounded-xl border border-black/5 bg-black/5 p-6 text-left shadow-[0_8px_32px_0_rgba(0,0,0,0.24)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:grid-cols-[1fr_0.9fr] md:p-8">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-white/10 px-3 py-1 text-sm font-semibold text-text-main/75">Certificação complementar</span>
            <span className="text-sm text-text-main/65">ETS · Abril de 2024</span>
          </div>
          <h3 className="mb-3 text-2xl font-bold text-text-main">TOEIC Listening &amp; Reading</h3>
          <p className="mb-5 leading-relaxed text-text-main/80">
            Validação oficial ETS de proficiência voltada ao ambiente corporativo, com autonomia para acompanhar fluxos de trabalho globais.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-md bg-accent/15 px-3 py-2 text-sm font-semibold text-accent">Score total: 755</span>
            <span className="rounded-md border border-white/10 px-3 py-2 text-sm text-text-main/85">Listening: 380</span>
            <span className="rounded-md border border-white/10 px-3 py-2 text-sm text-text-main/85">Reading: 375</span>
          </div>
        </div>
        <Image
          src="/images/certificado_toeic/certificado_toeic.jpg"
          alt="Certificado TOEIC Listening & Reading de Davi Konuma, score 755"
          width={1200}
          height={800}
          className="h-auto w-full rounded-md border shadow-lg"
          style={{ objectFit: 'contain', borderColor: 'var(--border-color)' }}
        />
      </article>
    </section>
  )
}