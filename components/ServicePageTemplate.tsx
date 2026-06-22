import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'
import Footer from './Footer'
import BookingCTA from './BookingCTA'
import FadeUp from './FadeUp'

interface FAQ {
  q: string
  a: string
}

interface ServicePageTemplateProps {
  title: string
  subtitle: string
  heroText: string
  intro: string[]
  benefits: string[]
  approach: { title: string; text: string }[]
  faqs: FAQ[]
  heroImage?: string
  relatedServices?: { label: string; href: string }[]
  cities?: string[]
}

export default function ServicePageTemplate({
  title,
  subtitle,
  heroText,
  intro,
  benefits,
  approach,
  faqs,
  heroImage = '/images/reception-1.png',
  relatedServices = [],
  cities = [],
}: ServicePageTemplateProps) {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-smeraldo/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-smeraldo via-smeraldo/40 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-48">
            <FadeUp>
              <div className="flex items-center gap-3 mb-6">
                <Link href="/" className="font-sans text-xs tracking-wider text-crema/50 hover:text-crema transition-colors">
                  Home
                </Link>
                <span className="text-crema/30">/</span>
                <span className="font-sans text-xs tracking-wider text-crema/50">{subtitle}</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-serif text-display-sm text-crema mb-6 max-w-3xl">
                {title}
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-serif italic text-xl text-crema/60 max-w-xl">{heroText}</p>
            </FadeUp>
          </div>
        </section>

        {/* Intro */}
        <section className="py-28 bg-crema">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <FadeUp>
                  <span className="section-label">{subtitle}</span>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <div className="space-y-5">
                    {intro.map((para, i) => (
                      <p key={i} className="font-sans text-base text-stone-600 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </FadeUp>
              </div>
              <div>
                <FadeUp delay={0.15}>
                  <div className="bg-travertino p-10">
                    <h2 className="font-serif text-heading-md text-smeraldo mb-8">
                      Quando può aiutarti
                    </h2>
                    <ul className="space-y-4">
                      {benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-4 h-px bg-oro flex-shrink-0 mt-3" />
                          <span className="font-sans text-sm text-stone-600 leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-28 bg-travertino">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <FadeUp>
              <span className="section-label">Il nostro approccio</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-heading-xl text-smeraldo mb-16 max-w-lg">
                Come lavoriamo<br />
                <span className="italic text-stone-400">con te.</span>
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sabbia/30">
              {approach.map((step, i) => (
                <FadeUp key={step.title} delay={i * 0.08}>
                  <div className="bg-travertino p-10 group hover:bg-crema transition-colors duration-300">
                    <span className="font-sans text-xs tracking-ultra text-oro/50 mb-4 block">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-heading-sm text-smeraldo mb-4">{step.title}</h3>
                    <p className="font-sans text-sm text-stone-500 leading-relaxed">{step.text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 bg-crema">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <FadeUp>
              <span className="section-label">Domande frequenti</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-heading-lg text-smeraldo mb-16">
                Quello che<br />
                <span className="italic text-stone-400">vorresti sapere.</span>
              </h2>
            </FadeUp>
            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <FadeUp key={i} delay={i * 0.05}>
                  <div className="py-8 border-b border-sabbia/40">
                    <h3 className="font-serif text-lg text-smeraldo mb-4">{faq.q}</h3>
                    <p className="font-sans text-sm text-stone-500 leading-relaxed">{faq.a}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Cities */}
        {cities.length > 0 && (
          <section className="py-16 bg-travertino">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <FadeUp>
                <p className="font-sans text-sm text-stone-400 leading-relaxed max-w-2xl">
                  Clinica S. Egidio si trova a Saronno ed è facilmente raggiungibile da{' '}
                  {cities.join(', ')} e dalle zone limitrofe della provincia di Varese e Como.
                </p>
              </FadeUp>
            </div>
          </section>
        )}

        {/* Related services */}
        {relatedServices.length > 0 && (
          <section className="py-20 bg-crema border-t border-sabbia/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <FadeUp>
                <span className="section-label">Esplora anche</span>
              </FadeUp>
              <div className="flex flex-wrap gap-4 mt-4">
                {relatedServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="font-sans text-sm text-stone-500 border border-sabbia/60 px-6 py-3 hover:border-smeraldo hover:text-smeraldo transition-colors duration-300"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}
