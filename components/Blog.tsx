import Link from 'next/link'
import FadeUp from './FadeUp'

const articles = [
  {
    category: 'Osteopatia',
    title: 'Mal di schiena: quando rivolgersi all\'osteopata',
    excerpt:
      'Il mal di schiena è tra le cause più comuni di disabilità temporanea. Scopri come l\'osteopatia può aiutarti a trovare la radice del problema.',
    readTime: '5 min',
    slug: '#',
  },
  {
    category: 'Pavimento Pelvico',
    title: 'Post parto: cosa aspettarsi e come prendersi cura di sé',
    excerpt:
      'Il corpo dopo il parto cambia profondamente. La riabilitazione del pavimento pelvico è un passo essenziale per il recupero fisico e il benessere.',
    readTime: '6 min',
    slug: '#',
  },
  {
    category: 'Psicoterapia',
    title: 'Ansia e stress: la differenza che cambia tutto',
    excerpt:
      'Ansia e stress sono spesso confusi, ma richiedono approcci diversi. Capire la differenza è il primo passo per affrontarli con efficacia.',
    readTime: '4 min',
    slug: '#',
  },
  {
    category: 'Logopedia',
    title: 'Deglutizione difficoltosa: quando è il momento di chiedere aiuto',
    excerpt:
      'La disfagia può influenzare profondamente la qualità della vita. Il logopedista può intervenire con un percorso mirato e personalizzato.',
    readTime: '5 min',
    slug: '#',
  },
  {
    category: 'Cervicale',
    title: 'Cervicale: cause, sintomi e trattamento osteopatico',
    excerpt:
      'La cervicalgia è una delle condizioni più frequenti. L\'osteopatia offre un approccio globale che va oltre il sintomo per trovare la causa.',
    readTime: '7 min',
    slug: '#',
  },
  {
    category: 'Gravidanza',
    title: 'Osteopatia in gravidanza: sicura, efficace, gentile',
    excerpt:
      'Durante la gravidanza il corpo subisce cambiamenti continui. L\'osteopatia può alleviare i dolori tipici e preparare il corpo al parto.',
    readTime: '5 min',
    slug: '#',
  },
]

const categoryColors: Record<string, string> = {
  Osteopatia: 'text-smeraldo',
  'Pavimento Pelvico': 'text-smeraldo-light',
  Psicoterapia: 'text-stone-500',
  Logopedia: 'text-stone-500',
  Cervicale: 'text-smeraldo',
  Gravidanza: 'text-smeraldo-light',
}

export default function Blog() {
  return (
    <section id="approfondimenti" className="py-36 bg-travertino">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <FadeUp>
              <span className="section-label">Approfondimenti</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-serif text-heading-xl text-smeraldo">
                Conoscenza<br />
                <span className="italic text-stone-400">che cura.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="#"
              className="font-sans text-xs tracking-widest uppercase text-smeraldo border-b border-smeraldo/30 pb-1 hover:border-smeraldo transition-colors self-start md:self-auto"
            >
              Tutti gli articoli
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <FadeUp key={article.title} delay={i * 0.07}>
              <Link
                href={article.slug}
                className="group flex flex-col bg-crema p-8 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(29,61,47,0.08)] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className={`font-sans text-xs tracking-wider uppercase ${categoryColors[article.category] ?? 'text-smeraldo'}`}>
                    {article.category}
                  </span>
                  <span className="font-sans text-[10px] tracking-wider text-stone-400">{article.readTime}</span>
                </div>

                <h3 className="font-serif text-xl text-smeraldo mb-4 leading-snug group-hover:text-smeraldo-dark transition-colors flex-1">
                  {article.title}
                </h3>

                <p className="font-sans text-sm text-stone-500 leading-relaxed mb-8">
                  {article.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-smeraldo group-hover:text-oro transition-colors duration-300 mt-auto">
                  Leggi
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
