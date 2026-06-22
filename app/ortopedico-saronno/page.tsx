import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Ortopedico a Saronno – Visita Ortopedica Specialistica',
  description:
    'Ortopedico a Saronno. Visite ortopediche specialistiche per colonna vertebrale, ginocchio, spalla, anca, caviglia. Clinica S. Egidio: diagnosi accurata e percorsi condivisi.',
  keywords: [
    'ortopedico saronno',
    'ortopedia saronno',
    'visita ortopedica saronno',
    'colonna vertebrale saronno',
    'ginocchio saronno',
    'spalla saronno',
  ],
  alternates: { canonical: 'https://clinicasegidio.it/ortopedico-saronno' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quando rivolgersi all'ortopedico?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "È indicato rivolgersi all'ortopedico in caso di dolori articolari persistenti, limitazione del movimento, traumi (distorsioni, fratture), dolori alla colonna vertebrale, problemi al ginocchio, alla spalla o all'anca, sospetto di osteoporosi e per valutazioni pre-chirurgiche.",
      },
    },
    {
      '@type': 'Question',
      name: "Cosa comprende una visita ortopedica?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La visita ortopedica comprende: raccolta della storia clinica, esame obiettivo con valutazione della postura e della mobilità articolare, eventuale interpretazione di esami strumentali (radiografie, RM, ecografie) e definizione di un piano terapeutico personalizzato.",
      },
    },
    {
      '@type': 'Question',
      name: "L'ortopedico può prescrivere la fisioterapia?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sì, l'ortopedico può prescrivere fisioterapia, osteopatia, ortesi e altri trattamenti conservativi. In Clinica S. Egidio, lavoriamo in team multidisciplinare: l'ortopedico collabora con l'osteopata e gli altri professionisti per costruire il percorso più adatto.",
      },
    },
  ],
}

export default function OrtopedicoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageTemplate
        title="Ortopedico a Saronno"
        subtitle="Ortopedia"
        heroText="Valutazione specialistica e percorsi condivisi per ritrovare il movimento."
        heroImage="/images/reception-1.png"
        intro={[
          "L'ortopedico di Clinica S. Egidio offre visite specialistiche per patologie dell'apparato muscolo-scheletrico a Saronno e nell'area circostante. Una buona diagnosi ortopedica non è solo tecnica: è anche saper spiegare, coinvolgere, condividere.",
          "Ogni visita comprende un ascolto attento della storia clinica del paziente, un esame obiettivo accurato e la definizione di un piano terapeutico chiaro. Quando possibile, privilegiamo l'approccio conservativo — senza saltare direttamente alla chirurgia.",
          "I nostri pazienti arrivano da Saronno, Lomazzo, Rovello Porro, Origgio, Uboldo e dall'intera provincia di Varese e Como.",
        ]}
        benefits={[
          'Dolori alla colonna vertebrale (cervicale, dorsale, lombare)',
          'Patologie del ginocchio (menisco, legamenti, artrosi)',
          'Problemi alla spalla (cuffia dei rotatori, lussazioni)',
          'Dolori all\'anca e all\'anca artrosica',
          'Patologie del piede e della caviglia',
          'Osteoporosi e valutazione della densità ossea',
          'Traumi sportivi',
          'Valutazioni pre e post chirurgiche',
          'Tendinopatie e borsiti',
          'Scoliosi e problemi posturali',
        ]}
        approach={[
          {
            title: 'Anamnesi e storia clinica',
            text: "Prendiamo il tempo necessario per capire la tua storia: quando è comparso il dolore, come si è evoluto, cosa lo migliora o peggiora. Il contesto è fondamentale per una diagnosi corretta.",
          },
          {
            title: 'Esame obiettivo',
            text: "Valutiamo postura, mobilità, forza muscolare e segni specifici per le diverse articolazioni. Quando necessario, integriamo con la lettura degli esami strumentali già in tuo possesso.",
          },
          {
            title: 'Diagnosi condivisa',
            text: "La diagnosi viene spiegata in modo chiaro e comprensibile. Niente acronimi medici senza spiegazione: vuoi capire cosa sta succedendo al tuo corpo, ed è giusto.",
          },
          {
            title: 'Piano terapeutico',
            text: "Definiamo insieme il percorso: fisioterapia, osteopatia, ortesi, terapia infiltrativa o chirurgia. Il piano è tuo: lo costruiamo insieme, rispettando le tue priorità.",
          },
        ]}
        faqs={[
          {
            q: "Quando rivolgersi all'ortopedico?",
            a: "È indicato rivolgersi all'ortopedico in caso di dolori articolari persistenti, limitazione del movimento, traumi, dolori alla colonna vertebrale, problemi al ginocchio, alla spalla o all'anca e per valutazioni pre-chirurgiche.",
          },
          {
            q: "Cosa comprende una visita ortopedica?",
            a: "La visita ortopedica comprende: raccolta della storia clinica, esame obiettivo con valutazione della postura e della mobilità articolare, eventuale interpretazione di esami strumentali e definizione di un piano terapeutico personalizzato.",
          },
          {
            q: "L'ortopedico può prescrivere la fisioterapia?",
            a: "Sì, l'ortopedico può prescrivere fisioterapia, osteopatia, ortesi e altri trattamenti conservativi. In Clinica S. Egidio, lavoriamo in team multidisciplinare per costruire il percorso più adatto.",
          },
        ]}
        cities={['Lomazzo', 'Rovello Porro', 'Origgio', 'Uboldo', 'Ceriano Laghetto', 'Solaro']}
        relatedServices={[
          { label: 'Osteopatia', href: '/osteopata-saronno' },
          { label: 'Ecografia Muscolo-scheletrica', href: '/ecografia-muscoloscheletrica-saronno' },
        ]}
      />
    </>
  )
}
