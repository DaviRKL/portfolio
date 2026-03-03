import Image from 'next/image'

export default function Languages() {
  return (
    <section id="languages" aria-labelledby="languages-heading" className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h2 id="languages-heading" className="text-3xl font-extrabold mb-8 text-text-main">Idiomas</h2>

      <div className="backdrop-blur-xl rounded-xl p-8 transition-colors shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] bg-black/5 border border-black/5 dark:bg-white/5 dark:border-white/10 text-left grid md:grid-cols-2 gap-10 items-center">
        
        {/* Descrição Detalhada */}
        <div>
          <h3 className="text-2xl font-bold text-accent mb-4">Inglês Profissional — Score 755</h3>
          <p className="text-text-main/90 mb-6 leading-relaxed">
            Certificado pelo <strong>TOEIC Listening & Reading</strong>, atesto competência avançada para ambientes globais. Minha pontuação reflete a habilidade de navegar em fluxos de trabalho internacionais com autonomia.
          </p>
          
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-accent font-bold">Listening (380):</span>
              <span className="text-text-main/80 text-sm">Compreensão plena de comunicações faladas complexas, discussões técnicas e apresentações em contextos corporativos.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">Reading (375):</span>
              <span className="text-text-main/80 text-sm">Análise crítica de documentação técnica, relatórios e textos acadêmicos com alto nível de precisão vocabular.</span>
            </li>
          </ul>
        </div>

        {/* Certificado */}
        <div className="w-full">
          <Image
            src="/images/certificado_toeic/certificado_toeic.jpg"
            alt="Certificado TOEIC Davi Konuma - Score 755"
            width={1200}
            height={800}
            className="rounded-md border shadow-lg transition-transform hover:scale-[1.02]"
            style={{ objectFit: 'contain', borderColor: 'var(--border-color)' }}
            priority
          />
        </div>
      </div>
    </section>
  )
}