import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Logopedista a Saronno – Logopedia per Adulti e Bambini',
  description:
    'Logopedista a Saronno per adulti e bambini. Disturbi del linguaggio, voce, deglutizione, balbuzie, afasia. Clinica S. Egidio: valutazione e trattamento logopedico personalizzato.',
  keywords: [
    'logopedista saronno',
    'logopedia saronno',
    'disturbi linguaggio saronno',
    'deglutizione saronno',
    'balbuzie saronno',
    'disfagia saronno',
  ],
  alternates: { canonical: 'https://clinicasegidio.it/logopedista-saronno' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Cos'è la logopedia?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La logopedia è la disciplina che si occupa della prevenzione, valutazione e trattamento dei disturbi della comunicazione, del linguaggio, della voce, della deglutizione e dell'udito. Il logopedista lavora sia con i bambini che con gli adulti.",
      },
    },
    {
      '@type': 'Question',
      name: "Quali disturbi tratta il logopedista?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Il logopedista tratta: ritardi del linguaggio nei bambini, disturbi specifici del linguaggio (DSL), balbuzie, disfonia (disturbi della voce), disfagia (difficoltà di deglutizione), afasia post-ictus, disartria, disturbi della fluenza e molto altro.",
      },
    },
    {
      '@type': 'Question',
      name: "Quando portare un bambino dal logopedista?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "È utile consultare un logopedista se il bambino non produce le prime parole entro i 12-18 mesi, non unisce due parole entro i 2 anni, ha difficoltà di pronuncia dopo i 4 anni, fatica a farsi capire, presenta balbuzie o difficoltà di comprensione.",
      },
    },
    {
      '@type': 'Question',
      name: "La logopedia è utile anche per gli adulti?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Assolutamente sì. Gli adulti si rivolgono al logopedista per disturbi della voce (raucedine, disfonia), difficoltà di deglutizione (disfagia), recupero del linguaggio dopo un ictus (afasia), per la balbuzie e per i disturbi della comunicazione in patologie neurologiche.",
      },
    },
  ],
}

export default function LogopedistaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageTemplate
        title="Logopedista a Saronno"
        subtitle="Logopedia"
        heroText="Comunicare meglio. Vivere meglio."
        heroImage="/images/reception-1.png"
        intro={[
          "La comunicazione è il primo ponte che costruiamo con il mondo. Quando questo ponte mostra delle crepe — nella pronuncia, nella voce, nella deglutizione o nel linguaggio — il logopedista è il professionista a cui rivolgersi.",
          "Nella nostra clinica a Saronno offriamo valutazione e trattamento logopedico per bambini e adulti. Ogni percorso inizia da una valutazione approfondita e viene costruito in modo personalizzato, coinvolgendo attivamente la persona e, nei casi dei più piccoli, la famiglia.",
          "I nostri pazienti provengono da Saronno, Uboldo, Ceriano Laghetto, Gerenzano, Caronno Pertusella e da tutta la provincia di Varese.",
        ]}
        benefits={[
          'Ritardo del linguaggio nei bambini',
          'Disturbi specifici del linguaggio (DSL)',
          'Balbuzie (in bambini e adulti)',
          'Disturbi della voce e disfonia',
          'Difficoltà di deglutizione (disfagia)',
          'Afasia post-ictus',
          'Disartria in patologie neurologiche',
          'Disturbi della comunicazione in autismo',
          'Raucedine cronica e noduli alle corde vocali',
          'Disturbi della fluenza',
        ]}
        approach={[
          {
            title: 'Valutazione logopedica',
            text: "La valutazione logopedica comprende test standardizzati e osservazione clinica per identificare con precisione la natura e l'entità del disturbo. Per i bambini, coinvolgiamo attivamente i genitori.",
          },
          {
            title: 'Definizione degli obiettivi',
            text: "Sulla base della valutazione, il logopedista definisce gli obiettivi terapeutici e il piano di intervento. Gli obiettivi vengono condivisi e discussi con il paziente e, quando necessario, con la famiglia.",
          },
          {
            title: 'Trattamento individuale',
            text: "Le sedute di logopedia sono individuali e si svolgono con frequenza settimanale o bisettimanale. Il trattamento combina esercizi specifici, tecniche di facilitazione e lavoro sulla consapevolezza.",
          },
          {
            title: 'Supporto e continuità',
            text: "Il percorso logopedico prevede indicazioni pratiche da seguire a casa e momenti di verifica periodica. Il logopedista è disponibile anche per coordinamento con altri professionisti (pediatra, neurologo, foniatra).",
          },
        ]}
        faqs={[
          {
            q: "Cos'è la logopedia?",
            a: "La logopedia è la disciplina che si occupa della prevenzione, valutazione e trattamento dei disturbi della comunicazione, del linguaggio, della voce, della deglutizione e dell'udito. Il logopedista lavora sia con i bambini che con gli adulti.",
          },
          {
            q: "Quali disturbi tratta il logopedista?",
            a: "Il logopedista tratta: ritardi del linguaggio nei bambini, disturbi specifici del linguaggio, balbuzie, disfonia, disfagia, afasia post-ictus, disartria e disturbi della fluenza.",
          },
          {
            q: "Quando portare un bambino dal logopedista?",
            a: "È utile consultare un logopedista se il bambino non produce le prime parole entro i 12-18 mesi, non unisce due parole entro i 2 anni, ha difficoltà di pronuncia dopo i 4 anni, o fatica a farsi capire.",
          },
          {
            q: "La logopedia è utile anche per gli adulti?",
            a: "Assolutamente sì. Gli adulti si rivolgono al logopedista per disturbi della voce, difficoltà di deglutizione, recupero del linguaggio dopo un ictus e per la balbuzie.",
          },
        ]}
        cities={['Uboldo', 'Ceriano Laghetto', 'Gerenzano', 'Caronno Pertusella', 'Origgio', 'Solaro']}
        relatedServices={[
          { label: 'Psicoterapia', href: '/psicoterapeuta-saronno' },
          { label: 'Osteopatia', href: '/osteopata-saronno' },
        ]}
      />
    </>
  )
}
