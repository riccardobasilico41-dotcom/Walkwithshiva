import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Osteopata a Saronno – Mal di Schiena, Cervicale, Osteopatia',
  description:
    'Osteopata a Saronno. Trattamenti osteopatici per mal di schiena, cervicale, sciatica, cefalea, lombalgia. Clinica S. Egidio: ascolto, competenza, percorsi personalizzati.',
  keywords: ['osteopata saronno', 'osteopatia saronno', 'mal di schiena saronno', 'cervicale saronno', 'sciatica saronno', 'lombalgia saronno', 'cefalea osteopatica saronno'],
  alternates: { canonical: 'https://clinicasegidio.it/osteopata-saronno' },
  openGraph: {
    title: 'Osteopata a Saronno | Clinica S. Egidio',
    description: 'Osteopatia per mal di schiena, cervicale, sciatica. Approccio personalizzato e ascolto della persona.',
    url: 'https://clinicasegidio.it/osteopata-saronno',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Cos'è l'osteopatia?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'osteopatia è una disciplina sanitaria manuale che considera il corpo come un'unità inscindibile. L'osteopata lavora su muscoli, articolazioni, fasce e organi per ristabilire l'equilibrio e favorire la guarigione naturale.",
      },
    },
    {
      '@type': 'Question',
      name: "Quando rivolgersi a un osteopata a Saronno?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'osteopatia è indicata per mal di schiena, cervicale, sciatica, lombalgia, cefalea, vertigini, dolori articolari, tensioni muscolari ricorrenti, problemi posturali e come supporto in gravidanza o nel post-parto.",
      },
    },
    {
      '@type': 'Question',
      name: "Quante sedute di osteopatia sono necessarie?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Il numero di sedute varia in base alla condizione e alla storia del paziente. In molti casi si ottengono risultati significativi in 3-6 sedute. Il nostro osteopata definirà un percorso personalizzato durante la prima visita.",
      },
    },
    {
      '@type': 'Question',
      name: "L'osteopatia è sicura in gravidanza?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sì, l'osteopatia in gravidanza è sicura se eseguita da un professionista qualificato. È utile per alleviare lombalgia, dolori pelvici, tensioni posturali tipiche della gravidanza e per preparare il corpo al parto.",
      },
    },
    {
      '@type': 'Question',
      name: "Qual è la differenza tra osteopata e fisioterapista?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'osteopata ha un approccio globale: considera tutto il corpo come un sistema interconnesso e cerca le cause profonde dei sintomi. Il fisioterapista lavora principalmente sul recupero funzionale di specifiche strutture. I due approcci sono spesso complementari.",
      },
    },
  ],
}

export default function OsteopataPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageTemplate
        title="Osteopata a Saronno"
        subtitle="Osteopatia"
        heroText="Ascoltiamo il corpo. Ristabiliamo l'equilibrio."
        heroImage="/images/reception-2.png"
        intro={[
          "L'osteopatia è un approccio manuale alla salute che considera il corpo come un sistema integrato. Non trattiamo solo il sintomo, ma cerchiamo la causa profonda del disagio, lavorando su muscoli, articolazioni, fasce e strutture viscerali.",
          "Nella nostra clinica a Saronno, il percorso osteopatico inizia sempre da un ascolto approfondito. La tua storia, le tue abitudini, il tuo stile di vita: tutto contribuisce a capire cosa sta succedendo nel tuo corpo.",
          "Lavoriamo con pazienti di tutte le età, da Saronno e dai comuni limitrofi come Caronno Pertusella, Origgio, Uboldo, Gerenzano e Ceriano Laghetto. Ogni trattamento è personalizzato, ogni percorso è unico.",
        ]}
        benefits={[
          'Mal di schiena acuto o cronico',
          'Cervicalgia e tensioni cervicali',
          'Sciatica e lombalgia',
          'Cefalea tensiva e emicrania',
          'Dolori articolari (spalle, ginocchia, anche)',
          'Problemi posturali',
          'Dolori in gravidanza',
          'Recupero post-traumatico',
          'Vertigini e disturbi vestibolari',
          'Tensioni da stress e burnout corporeo',
        ]}
        approach={[
          {
            title: 'Anamnesi approfondita',
            text: 'La prima visita osteopatica inizia con una raccolta dettagliata della tua storia clinica, delle tue abitudini e del contesto in cui è apparso il problema.',
          },
          {
            title: 'Valutazione globale',
            text: "Analizziamo postura, mobilità articolare, tensioni muscolari e fasciali. Guardiamo il corpo nel suo insieme, non il singolo distretto dolorante.",
          },
          {
            title: 'Trattamento manuale',
            text: "Tecniche manuali dolci e sicure per liberare le tensioni, migliorare la mobilità e stimolare la capacità di autoguarigione del tuo corpo.",
          },
          {
            title: 'Piano di follow-up',
            text: "Definiamo insieme il numero di sedute e la frequenza ottimale. Ti diamo indicazioni pratiche da seguire a casa per consolidare i benefici del trattamento.",
          },
        ]}
        faqs={[
          {
            q: "Cos'è l'osteopatia?",
            a: "L'osteopatia è una disciplina sanitaria manuale che considera il corpo come un'unità inscindibile. L'osteopata lavora su muscoli, articolazioni, fasce e organi per ristabilire l'equilibrio e favorire la guarigione naturale.",
          },
          {
            q: 'Quando rivolgersi a un osteopata a Saronno?',
            a: "L'osteopatia è indicata per mal di schiena, cervicale, sciatica, lombalgia, cefalea, vertigini, dolori articolari, tensioni muscolari ricorrenti, problemi posturali e come supporto in gravidanza o nel post-parto.",
          },
          {
            q: 'Quante sedute di osteopatia sono necessarie?',
            a: 'Il numero di sedute varia in base alla condizione e alla storia del paziente. In molti casi si ottengono risultati significativi in 3-6 sedute. Il nostro osteopata definirà un percorso personalizzato durante la prima visita.',
          },
          {
            q: "L'osteopatia è sicura in gravidanza?",
            a: "Sì, l'osteopatia in gravidanza è sicura se eseguita da un professionista qualificato. È utile per alleviare lombalgia, dolori pelvici, tensioni posturali tipiche della gravidanza e per preparare il corpo al parto.",
          },
          {
            q: 'Qual è la differenza tra osteopata e fisioterapista?',
            a: "L'osteopata ha un approccio globale: considera tutto il corpo come un sistema interconnesso e cerca le cause profonde dei sintomi. Il fisioterapista lavora principalmente sul recupero funzionale di specifiche strutture. I due approcci sono spesso complementari.",
          },
        ]}
        cities={['Caronno Pertusella', 'Origgio', 'Uboldo', 'Gerenzano', 'Ceriano Laghetto', 'Solaro']}
        relatedServices={[
          { label: 'Pavimento Pelvico', href: '/riabilitazione-pavimento-pelvico-saronno' },
          { label: 'Ortopedia', href: '/ortopedico-saronno' },
          { label: 'Ecografia Muscolo-scheletrica', href: '/ecografia-muscoloscheletrica-saronno' },
        ]}
      />
    </>
  )
}
