import FadeUp from './FadeUp'

export default function Philosophy() {
  return (
    <section id="clinica" className="py-36 bg-smeraldo relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 30% 50%, #B8965A 0%, transparent 60%), radial-gradient(circle at 70% 50%, #B8965A 0%, transparent 60%)',
      }} />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
        <FadeUp>
          <span className="block text-center font-sans text-xs tracking-ultra uppercase text-oro/70 mb-12">
            La nostra filosofia
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-serif text-display-sm text-crema text-center leading-[1.08] mb-16">
            Ascoltiamo.{' '}
            <span className="italic text-crema/60">Comprendiamo.</span>{' '}
            Accompagniamo.
          </h2>
        </FadeUp>

        <div className="w-12 h-px bg-oro mx-auto mb-16" />

        <FadeUp delay={0.2}>
          <div className="max-w-3xl mx-auto space-y-5 text-center">
            <p className="font-serif text-xl md:text-2xl text-crema/80 leading-relaxed">
              La salute non riguarda solo il corpo.
            </p>
            <p className="font-serif text-xl md:text-2xl text-crema/80 leading-relaxed">
              Non riguarda solo la mente.
            </p>
            <p className="font-serif text-xl md:text-2xl text-crema/80 leading-relaxed">
              Non riguarda un singolo sintomo.
            </p>
          </div>
        </FadeUp>

        <div className="w-px h-16 bg-oro/30 mx-auto my-12" />

        <FadeUp delay={0.3}>
          <div className="max-w-2xl mx-auto space-y-4 text-center">
            <p className="font-sans text-base text-crema/60 leading-relaxed">
              Per questo dedichiamo tempo all&apos;ascolto, alla comprensione e alla costruzione di
              percorsi personalizzati.
            </p>
            <p className="font-sans text-base text-crema/60 leading-relaxed">
              Ogni persona è unica. Ogni percorso è su misura.
            </p>
          </div>
        </FadeUp>

        {/* Three pillars */}
        <FadeUp delay={0.4}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-crema/10">
            {[
              { num: '01', title: 'Ascoltiamo', text: 'Prendiamo il tempo necessario per capire la tua storia.' },
              { num: '02', title: 'Comprendiamo', text: 'Osserviamo la persona nel suo insieme, non il sintomo isolato.' },
              { num: '03', title: 'Accompagniamo', text: 'Costruiamo un percorso e ti seguiamo nel tempo.' },
            ].map((p) => (
              <div key={p.num} className="bg-smeraldo-dark p-10 md:p-12">
                <span className="font-sans text-xs tracking-ultra text-oro/50 mb-6 block">{p.num}</span>
                <h3 className="font-serif text-2xl text-crema mb-4">{p.title}</h3>
                <p className="font-sans text-sm text-crema/50 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
