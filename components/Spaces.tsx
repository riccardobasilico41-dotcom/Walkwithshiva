import Image from 'next/image'
import FadeUp from './FadeUp'

const spaces = [
  {
    src: '/images/reception-1.png',
    alt: 'Reception Clinica S. Egidio',
    label: 'Reception',
    size: 'large',
  },
  {
    src: '/images/reception-2.png',
    alt: 'Sala d\'attesa Clinica S. Egidio',
    label: 'Sala d\'attesa',
    size: 'small',
  },
  {
    src: '/images/ecografia-room.png',
    alt: 'Stanza ecografia Clinica S. Egidio',
    label: 'Stanza ecografia',
    size: 'small',
  },
  {
    src: '/images/pavimento-pelvico-room.png',
    alt: 'Stanza pavimento pelvico Clinica S. Egidio',
    label: 'Stanza pavimento pelvico',
    size: 'large',
  },
]

export default function Spaces() {
  return (
    <section className="py-36 bg-travertino overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <FadeUp>
              <span className="section-label">Gli ambienti</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-heading-xl text-smeraldo">
                Uno spazio pensato<br />
                <span className="italic text-stone-400">per il tuo benessere.</span>
              </h2>
            </FadeUp>
          </div>
          <div className="flex items-end">
            <FadeUp delay={0.2}>
              <div className="space-y-4 max-w-sm">
                <p className="font-sans text-base text-stone-500 leading-relaxed">
                  Abbiamo progettato ogni ambiente per farti sentire accolto.
                </p>
                <div className="flex flex-col gap-2">
                  {['Materiali naturali', 'Luce calda', 'Privacy', 'Comfort'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-4 h-px bg-oro flex-shrink-0" />
                      <span className="font-sans text-sm text-stone-500">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="font-sans text-sm text-stone-400 leading-relaxed pt-2">
                  Perché il modo in cui ci sentiamo influenza il modo in cui affrontiamo il percorso di cura.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Row 1 */}
          <FadeUp delay={0.1}>
            <div className="relative h-72 md:h-96 overflow-hidden group">
              <Image
                src="/images/reception-1.png"
                alt="Reception Clinica S. Egidio"
                fill
                className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                quality={85}
              />
              <div className="absolute inset-0 bg-smeraldo/0 group-hover:bg-smeraldo/10 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-smeraldo/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-sans text-xs tracking-ultra uppercase text-crema">Reception</span>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="relative h-72 md:h-96 overflow-hidden group">
              <Image
                src="/images/reception-2.png"
                alt="Sala d'attesa Clinica S. Egidio"
                fill
                className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                quality={85}
              />
              <div className="absolute inset-0 bg-smeraldo/0 group-hover:bg-smeraldo/10 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-smeraldo/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-sans text-xs tracking-ultra uppercase text-crema">Sala d&apos;attesa</span>
              </div>
            </div>
          </FadeUp>

          {/* Row 2 */}
          <FadeUp delay={0.2}>
            <div className="relative h-72 md:h-80 overflow-hidden group">
              <Image
                src="/images/ecografia-room.png"
                alt="Stanza ecografia Clinica S. Egidio"
                fill
                className="object-cover object-top transition-transform duration-700 ease-luxury group-hover:scale-105"
                quality={85}
              />
              <div className="absolute inset-0 bg-smeraldo/0 group-hover:bg-smeraldo/10 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-smeraldo/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-sans text-xs tracking-ultra uppercase text-crema">Stanza Ecografia</span>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="relative h-72 md:h-80 overflow-hidden group">
              <Image
                src="/images/pavimento-pelvico-room.png"
                alt="Stanza pavimento pelvico Clinica S. Egidio"
                fill
                className="object-cover object-top transition-transform duration-700 ease-luxury group-hover:scale-105"
                quality={85}
              />
              <div className="absolute inset-0 bg-smeraldo/0 group-hover:bg-smeraldo/10 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-smeraldo/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-sans text-xs tracking-ultra uppercase text-crema">Stanza Pavimento Pelvico</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
