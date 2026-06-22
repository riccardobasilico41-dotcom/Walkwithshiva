import FadeUp from './FadeUp'

const steps = [
  {
    num: '01',
    title: 'Ascolto',
    text: 'Comprendiamo la tua storia. Il tuo corpo, le tue abitudini, i tuoi obiettivi. La visita non inizia con la diagnosi — inizia con te.',
  },
  {
    num: '02',
    title: 'Valutazione',
    text: 'Osserviamo la persona nel suo insieme. Non il sintomo isolato, ma il contesto in cui si è manifestato.',
  },
  {
    num: '03',
    title: 'Percorso',
    text: 'Costruiamo una strategia personalizzata. Un piano che ha senso per te, non un protocollo standard.',
  },
  {
    num: '04',
    title: 'Accompagnamento',
    text: 'Ti seguiamo nel tempo. Monitorare i progressi, adattare il percorso, essere presenti: questo è prendersi cura.',
  },
]

export default function Process() {
  return (
    <section className="py-36 bg-crema">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-32">
            <FadeUp>
              <span className="section-label">Come lavoriamo</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-heading-xl text-smeraldo mb-8">
                Un metodo nato<br />
                <span className="italic text-stone-400">per la persona.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-sans text-base text-stone-500 leading-relaxed max-w-sm">
                Non esiste un protocollo uguale per tutti. Ogni percorso nasce dall&apos;incontro tra
                la competenza clinica e la storia personale di chi si affida a noi.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="mt-10">
                <a href="#prenota" className="btn-primary">
                  Prenota una visita
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right: steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.1}>
                <div className="flex gap-8 py-10 border-b border-sabbia/40 last:border-0 group">
                  <div className="flex-shrink-0 pt-1">
                    <span className="font-sans text-xs tracking-ultra text-oro/60 group-hover:text-oro transition-colors">
                      {step.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-heading-md text-smeraldo mb-3 group-hover:text-smeraldo-light transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-stone-500 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
