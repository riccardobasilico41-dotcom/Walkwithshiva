import Link from 'next/link'
import FadeUp from './FadeUp'

const services = [
  {
    num: '01',
    title: 'Osteopatia',
    tagline: 'Ascoltiamo il corpo.\nRistabiliamo l\'equilibrio.',
    description:
      'L\'approccio osteopatico lavora sull\'intero sistema muscolo-scheletrico per ridurre il dolore, migliorare la mobilità e restituire benessere.',
    href: '/osteopata-saronno',
    keywords: 'Mal di schiena · Cervicale · Sciatica · Cefalea',
  },
  {
    num: '02',
    title: 'Pavimento Pelvico',
    tagline: 'Ogni fase della vita\nmerita attenzione.',
    description:
      'Riabilitazione specializzata per disfunzioni del pavimento pelvico in tutte le fasi della vita: gravidanza, post-parto, menopausa e oltre.',
    href: '/riabilitazione-pavimento-pelvico-saronno',
    keywords: 'Incontinenza · Post parto · Prolasso · Gravidanza',
  },
  {
    num: '03',
    title: 'Psicoterapia',
    tagline: 'Quando la mente\nnon riesce a fermarsi.',
    description:
      'Percorsi psicoterapeutici individuali e di coppia per affrontare ansia, stress, burnout, relazioni e momenti di difficoltà con una guida esperta.',
    href: '/psicoterapeuta-saronno',
    keywords: 'Ansia · Stress · Burnout · Relazioni',
  },
  {
    num: '04',
    title: 'Logopedia',
    tagline: 'Comunicare meglio.\nVivere meglio.',
    description:
      'Valutazione e trattamento dei disturbi della comunicazione, del linguaggio, della voce e della deglutizione in età evolutiva e adulta.',
    href: '/logopedista-saronno',
    keywords: 'Linguaggio · Voce · Deglutizione · Balbuzie',
  },
  {
    num: '05',
    title: 'Ortopedia',
    tagline: 'Valutazione specialistica\ne percorsi condivisi.',
    description:
      'Visite ortopediche specialistiche per patologie di colonna, articolazioni e apparato muscolo-scheletrico. Diagnosi precisa e percorso personalizzato.',
    href: '/ortopedico-saronno',
    keywords: 'Colonna · Ginocchio · Spalla · Caviglia',
  },
  {
    num: '06',
    title: 'Ecografia',
    tagline: 'Diagnostica rapida\ne approfondita.',
    description:
      'Ecografia muscolo-scheletrica e dei tessuti molli eseguita da specialisti. Referto immediato. Strumento di supporto alla diagnosi e al trattamento.',
    href: '/ecografia-saronno',
    keywords: 'Muscolo-scheletrica · Tessuti molli · Tendini',
  },
]

export default function Services() {
  return (
    <section id="servizi" className="py-36 bg-travertino">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-20">
          <FadeUp>
            <span className="section-label">I nostri servizi</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-heading-xl text-smeraldo max-w-xl">
              Cura specialistica,<br />
              <span className="italic text-stone-500">senza compromessi.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sabbia/30">
          {services.map((service, i) => (
            <FadeUp key={service.num} delay={i * 0.07}>
              <Link href={service.href} className="card-service flex flex-col h-full min-h-[320px] block">
                <div className="flex items-start justify-between mb-8">
                  <span className="font-sans text-xs tracking-ultra text-sabbia">{service.num}</span>
                  <div className="w-6 h-px bg-oro mt-2 transition-all duration-500 group-hover:w-10" />
                </div>

                <h3 className="font-serif text-heading-md text-smeraldo mb-4 group-hover:text-smeraldo-dark transition-colors">
                  {service.title}
                </h3>

                <p className="font-serif italic text-stone-500 text-lg whitespace-pre-line mb-5 leading-snug">
                  {service.tagline}
                </p>

                <p className="font-sans text-sm text-stone-500 leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <span className="font-sans text-[10px] tracking-wider text-sabbia block mb-3">
                    {service.keywords}
                  </span>
                  <span className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-smeraldo group-hover:text-oro transition-colors duration-300">
                    Scopri
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
