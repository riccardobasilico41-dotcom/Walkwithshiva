import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Psicoterapeuta a Saronno – Psicoterapia Individuale e di Coppia',
  description:
    'Psicoterapeuta a Saronno. Percorsi di psicoterapia individuale e di coppia per ansia, stress, burnout, depressione e difficoltà relazionali. Clinica S. Egidio: ascolto professionale in uno spazio sicuro.',
  keywords: [
    'psicoterapeuta saronno',
    'psicoterapia saronno',
    'psicologo saronno',
    'ansia saronno',
    'stress saronno',
    'burnout saronno',
    'depressione saronno',
  ],
  alternates: { canonical: 'https://clinicasegidio.it/psicoterapeuta-saronno' },
  openGraph: {
    title: 'Psicoterapeuta a Saronno | Clinica S. Egidio',
    description: 'Psicoterapia individuale e di coppia. Un percorso di cura che parte dall\'ascolto.',
    url: 'https://clinicasegidio.it/psicoterapeuta-saronno',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Cos'è la psicoterapia?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La psicoterapia è un percorso di cura psicologica condotto da un professionista abilitato. Attraverso colloqui regolari, aiuta a comprendere e modificare pensieri, emozioni e comportamenti che causano sofferenza, migliorando il benessere e la qualità della vita.",
      },
    },
    {
      '@type': 'Question',
      name: "Quando rivolgersi a uno psicoterapeuta?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "È utile rivolgersi a uno psicoterapeuta quando si vive un disagio persistente che influisce sulla qualità della vita: ansia, depressione, stress cronico, burnout, difficoltà nelle relazioni, lutti, traumi, crisi di coppia, difficoltà lavorative o momenti di cambiamento importanti.",
      },
    },
    {
      '@type': 'Question',
      name: "Quante sedute di psicoterapia sono necessarie?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La durata di un percorso psicoterapeutico varia significativamente da persona a persona e dipende dalla natura e dalla complessità della situazione. Alcuni percorsi brevi si concludono in pochi mesi; altri richiedono un lavoro più lungo. Il ritmo e la durata vengono definiti insieme.",
      },
    },
    {
      '@type': 'Question',
      name: "Qual è la differenza tra psicologo e psicoterapeuta?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Il psicologo è laureato in psicologia. Lo psicoterapeuta è uno psicologo (o medico) che ha conseguito una specializzazione post-lauream in psicoterapia, abilitandolo a condurre percorsi terapeutici strutturati. I nostri professionisti sono psicoterapeuti abilitati.",
      },
    },
  ],
}

export default function PsicoterapeutaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageTemplate
        title="Psicoterapeuta a Saronno"
        subtitle="Psicoterapia"
        heroText="Quando la mente non riesce a fermarsi, uno spazio sicuro fa la differenza."
        heroImage="/images/reception-2.png"
        intro={[
          "La psicoterapia non è risolvere problemi. È imparare a stare con sé stessi in modo diverso. È trovare nuovi strumenti per affrontare ciò che pesa, capire da dove viene la sofferenza e costruire un modo più libero di vivere.",
          "Nella nostra clinica a Saronno offriamo percorsi di psicoterapia individuale e di coppia, in un ambiente riservato, confortevole e completamente privo di giudizi. Il primo passo — chiedere aiuto — è spesso il più difficile. Siamo qui per accoglierti.",
          "I nostri psicoterapeuti seguono pazienti da Saronno e dall'intera area circostante: Solaro, Caronno Pertusella, Origgio, Ceriano Laghetto, Lomazzo e Rovello Porro.",
        ]}
        benefits={[
          'Ansia e attacchi di panico',
          'Stress cronico e burnout',
          'Depressione e umore basso persistente',
          'Difficoltà nelle relazioni interpersonali',
          'Crisi di coppia',
          'Lutto e perdita',
          'Traumi e disturbo post-traumatico (PTSD)',
          'Bassa autostima e senso di inadeguatezza',
          'Fasi di transizione e cambiamento',
          'Disturbi del sonno di origine psicologica',
        ]}
        approach={[
          {
            title: 'Il primo colloquio',
            text: "Il primo incontro è conoscitivo: uno spazio senza obblighi in cui raccontare cosa ti ha portato qui. Non c'è un formato rigido — c'è ascolto.",
          },
          {
            title: 'Definire il percorso',
            text: "Insieme al terapeuta esploriamo la situazione e definiamo gli obiettivi del percorso. La durata, la frequenza e l'approccio vengono scelti in modo condiviso.",
          },
          {
            title: 'Sedute regolari',
            text: "Le sedute si svolgono di solito con cadenza settimanale o bisettimanale. Il ritmo può variare nel corso del percorso, in base alle tue esigenze.",
          },
          {
            title: 'Integrazione nella vita quotidiana',
            text: "Il lavoro terapeutico non si ferma alla seduta. Il terapeuta ti supporta nell'applicare nuove consapevolezze e strumenti nella vita di tutti i giorni.",
          },
        ]}
        faqs={[
          {
            q: "Cos'è la psicoterapia?",
            a: "La psicoterapia è un percorso di cura psicologica condotto da un professionista abilitato. Attraverso colloqui regolari, aiuta a comprendere e modificare pensieri, emozioni e comportamenti che causano sofferenza, migliorando il benessere e la qualità della vita.",
          },
          {
            q: "Quando rivolgersi a uno psicoterapeuta?",
            a: "È utile rivolgersi a uno psicoterapeuta quando si vive un disagio persistente che influisce sulla qualità della vita: ansia, depressione, stress cronico, burnout, difficoltà nelle relazioni, lutti, traumi, crisi di coppia o momenti di cambiamento importanti.",
          },
          {
            q: "Quante sedute di psicoterapia sono necessarie?",
            a: "La durata varia significativamente da persona a persona. Alcuni percorsi brevi si concludono in pochi mesi; altri richiedono un lavoro più lungo. Il ritmo e la durata vengono definiti insieme.",
          },
          {
            q: "Qual è la differenza tra psicologo e psicoterapeuta?",
            a: "Il psicologo è laureato in psicologia. Lo psicoterapeuta è uno psicologo (o medico) che ha conseguito una specializzazione post-lauream in psicoterapia, abilitandolo a condurre percorsi terapeutici strutturati.",
          },
        ]}
        cities={['Solaro', 'Caronno Pertusella', 'Origgio', 'Ceriano Laghetto', 'Lomazzo', 'Rovello Porro']}
        relatedServices={[
          { label: 'Osteopatia', href: '/osteopata-saronno' },
          { label: 'Logopedia', href: '/logopedista-saronno' },
        ]}
      />
    </>
  )
}
