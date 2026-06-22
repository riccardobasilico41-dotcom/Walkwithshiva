import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Ecografia Muscolo-scheletrica a Saronno – Tendini, Muscoli, Articolazioni',
  description:
    'Ecografia muscolo-scheletrica a Saronno. Diagnosi di patologie tendinee, muscolari e articolari con referto immediato. Clinica S. Egidio: precisione diagnostica al servizio della cura.',
  keywords: [
    'ecografia muscoloscheletrica saronno',
    'ecografia muscolo-scheletrica saronno',
    'ecografia tendine saronno',
    'ecografia spalla saronno',
    'ecografia ginocchio saronno',
    'ecografia anca saronno',
  ],
  alternates: { canonical: 'https://clinicasegidio.it/ecografia-muscoloscheletrica-saronno' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Cos'è l'ecografia muscolo-scheletrica?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'ecografia muscolo-scheletrica è un esame diagnostico non invasivo che utilizza gli ultrasuoni per visualizzare in tempo reale muscoli, tendini, legamenti, borse, articolazioni e nervi superficiali. È particolarmente preziosa per diagnosticare tendinopatie, rotture, cisti e infiammazioni.",
      },
    },
    {
      '@type': 'Question',
      name: "Quando fare un'ecografia muscolo-scheletrica?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'ecografia muscolo-scheletrica è indicata in caso di dolori a tendini o muscoli, sospetta lesione tendinea o muscolare, gonfiore articolare, cisti, valutazione post-traumatica, monitoraggio di una tendinopatia in trattamento e come guida per infiltrazioni.",
      },
    },
    {
      '@type': 'Question',
      name: "L'ecografia muscolo-scheletrica è migliore della risonanza magnetica?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "I due esami sono complementari. L'ecografia muscolo-scheletrica è più economica, rapida e permette una valutazione dinamica (in movimento). La RM offre una visione più completa di strutture profonde. Spesso l'ecografia è il primo esame di scelta, da integrare con RM se necessario.",
      },
    },
  ],
}

export default function EcografiaMSKPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageTemplate
        title="Ecografia Muscolo-scheletrica a Saronno"
        subtitle="Ecografia Muscolo-scheletrica"
        heroText="Vedere per capire. Diagnosi precisa, trattamento mirato."
        heroImage="/images/ecografia-room.png"
        intro={[
          "L'ecografia muscolo-scheletrica è uno degli esami diagnostici più precisi per valutare tendini, muscoli, legamenti e articolazioni. A differenza della radiografia, permette di vedere i tessuti molli in tempo reale — anche mentre si muovono.",
          "Nella nostra clinica a Saronno, l'ecografia muscolo-scheletrica viene eseguita da medici esperti con apparecchiature di ultima generazione. Il referto viene consegnato subito, al termine dell'esame.",
          "Serviamo pazienti da Saronno, Caronno Pertusella, Origgio, Uboldo, Gerenzano, Lomazzo e Rovello Porro. Spesso lavoriamo in sinergia con il nostro ortopedico e l'osteopata per un percorso di cura integrato.",
        ]}
        benefits={[
          'Tendinopatie (tendine d\'Achille, rotula, sovraspinoso)',
          'Sospette rotture muscolari o tendinee',
          'Valutazione della cuffia dei rotatori',
          'Dolore alla spalla, al ginocchio o all\'anca',
          'Cisti sinoviali e borse infiammate',
          'Valutazione post-traumatica (distorsioni, contusioni)',
          'Monitoraggio nel corso del trattamento',
          'Guida per infiltrazioni ecoguidate',
          'Neuropatie da intrappolamento (tunnel carpale)',
          'Valutazione dei tessuti molli superficiali',
        ]}
        approach={[
          {
            title: 'Indicazione clinica',
            text: "Il medico esamina la documentazione clinica disponibile e le indicazioni del professionista inviante. L'esame viene orientato in base al quadro sintomatologico.",
          },
          {
            title: 'Esame dinamico',
            text: "A differenza della RM, l'ecografia permette di valutare le strutture anche in movimento. Questo è particolarmente utile per identificare conflitti tendinei o instabilità articolari.",
          },
          {
            title: 'Referto immediato',
            text: "Al termine dell'esame, il medico redige il referto e lo commenta direttamente con il paziente. Trasparenza e chiarezza: vuoi capire cosa abbiamo trovato.",
          },
          {
            title: 'Integrazione nel percorso',
            text: "L'ecografia muscolo-scheletrica si integra naturalmente nel percorso di cura: i risultati vengono condivisi con ortopedico, osteopata o fisioterapista per ottimizzare il trattamento.",
          },
        ]}
        faqs={[
          {
            q: "Cos'è l'ecografia muscolo-scheletrica?",
            a: "L'ecografia muscolo-scheletrica è un esame diagnostico non invasivo che utilizza gli ultrasuoni per visualizzare in tempo reale muscoli, tendini, legamenti, borse e articolazioni. È particolarmente preziosa per diagnosticare tendinopatie, rotture, cisti e infiammazioni.",
          },
          {
            q: "Quando fare un'ecografia muscolo-scheletrica?",
            a: "È indicata in caso di dolori a tendini o muscoli, sospetta lesione tendinea o muscolare, gonfiore articolare, cisti, valutazione post-traumatica e come guida per infiltrazioni.",
          },
          {
            q: "L'ecografia muscolo-scheletrica è migliore della risonanza magnetica?",
            a: "I due esami sono complementari. L'ecografia è più rapida e permette una valutazione dinamica. La RM offre una visione più completa di strutture profonde. Spesso l'ecografia è il primo esame di scelta.",
          },
        ]}
        cities={['Caronno Pertusella', 'Origgio', 'Uboldo', 'Gerenzano', 'Lomazzo', 'Rovello Porro']}
        relatedServices={[
          { label: 'Ecografia', href: '/ecografia-saronno' },
          { label: 'Ortopedia', href: '/ortopedico-saronno' },
          { label: 'Osteopatia', href: '/osteopata-saronno' },
        ]}
      />
    </>
  )
}
