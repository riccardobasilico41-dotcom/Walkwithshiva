import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Riabilitazione Pavimento Pelvico a Saronno – Fisioterapia Pelvica',
  description:
    'Riabilitazione del pavimento pelvico a Saronno. Incontinenza, post parto, prolasso, gravidanza, menopausa. Clinica S. Egidio: cura specializzata e personalizzata per ogni fase della vita.',
  keywords: [
    'pavimento pelvico saronno',
    'riabilitazione pavimento pelvico saronno',
    'fisioterapia pelvica saronno',
    'incontinenza saronno',
    'post parto saronno',
    'prolasso saronno',
  ],
  alternates: { canonical: 'https://clinicasegidio.it/riabilitazione-pavimento-pelvico-saronno' },
  openGraph: {
    title: 'Riabilitazione Pavimento Pelvico a Saronno | Clinica S. Egidio',
    description: 'Percorsi specializzati per il pavimento pelvico in ogni fase della vita.',
    url: 'https://clinicasegidio.it/riabilitazione-pavimento-pelvico-saronno',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Cos'è il pavimento pelvico?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Il pavimento pelvico è un insieme di muscoli, legamenti e fasce che formano il 'fondo' della pelvi. Sostiene gli organi pelvici (vescica, utero, retto) e ha un ruolo fondamentale nel controllo della minzione, della defecazione e nella funzione sessuale.",
      },
    },
    {
      '@type': 'Question',
      name: "Quando è indicata la riabilitazione del pavimento pelvico?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La riabilitazione del pavimento pelvico è indicata in caso di incontinenza urinaria o fecale, prolasso degli organi pelvici, dolori pelvici cronici, preparazione al parto, recupero post-partum, disfunzioni sessuali e in menopausa.",
      },
    },
    {
      '@type': 'Question',
      name: "Dopo il parto, quando posso iniziare la riabilitazione?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In generale si consiglia di iniziare la riabilitazione del pavimento pelvico dopo le prime 6-8 settimane dal parto vaginale, quando i tessuti hanno avuto il tempo di cicatrizzare. In alcuni casi si può iniziare prima, con esercizi specifici e non invasivi. La fisioterapista valuterà il momento più adatto per te.",
      },
    },
    {
      '@type': 'Question',
      name: "La riabilitazione del pavimento pelvico è dolorosa?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, la riabilitazione del pavimento pelvico non è dolorosa. Il trattamento è delicato e rispettoso. La nostra professionista lavora in un ambiente privato e confortevole, ponendo sempre la tua comodità e il tuo benessere al primo posto.",
      },
    },
  ],
}

export default function PavimentoPelvicoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageTemplate
        title="Riabilitazione del Pavimento Pelvico a Saronno"
        subtitle="Pavimento Pelvico"
        heroText="Ogni fase della vita merita attenzione e cura specializzata."
        heroImage="/images/pavimento-pelvico-room.png"
        intro={[
          "Il pavimento pelvico è una struttura fondamentale che spesso non riceve la cura che merita. Nella nostra clinica a Saronno offriamo percorsi specializzati di riabilitazione pelvica per donne in ogni fase della vita.",
          "Dalle tensioni in gravidanza al recupero post-parto, dall'incontinenza alla menopausa: ogni situazione è diversa e richiede un approccio personalizzato, sempre condotto in un ambiente privato, accogliente e senza giudizi.",
          "Le nostre pazienti provengono da Saronno e da tutta l'area circostante: Turate, Gerenzano, Ceriano Laghetto, Caronno Pertusella, Origgio e Uboldo. La nostra fisioterapista pelvica ti accoglierà con ascolto e competenza.",
        ]}
        benefits={[
          'Incontinenza urinaria da sforzo o urgenza',
          'Recupero post-parto (vaginale o cesareo)',
          'Preparazione al parto',
          'Prolasso degli organi pelvici',
          'Dolori pelvici cronici',
          'Disfunzioni sessuali femminili',
          'Sintomi da menopausa',
          'Dolore durante i rapporti sessuali (dispareunia)',
          'Perdite urinarie durante sport o attività fisica',
          'Post chirurgia ginecologica o urologica',
        ]}
        approach={[
          {
            title: 'Prima visita e valutazione',
            text: "La valutazione inizia con un colloquio approfondito sulla tua storia clinica e ginecologica, sui sintomi e sulla qualità della vita. Non si inizia a trattare senza capire prima.",
          },
          {
            title: 'Valutazione funzionale',
            text: "Valutiamo la forza, il tono e la coordinazione del pavimento pelvico attraverso tecniche specifiche, in un ambiente completamente privato e rispettoso.",
          },
          {
            title: 'Trattamento personalizzato',
            text: "Il percorso di riabilitazione comprende esercizi specifici, tecniche manuali, biofeedback e indicazioni comportamentali. Tutto è calibrato sulle tue esigenze.",
          },
          {
            title: 'Educazione e autonomia',
            text: "Ti insegniamo esercizi da fare a casa e strategie per la vita quotidiana. L'obiettivo è che tu acquisisca autonomia e consapevolezza del tuo corpo.",
          },
        ]}
        faqs={[
          {
            q: "Cos'è il pavimento pelvico?",
            a: "Il pavimento pelvico è un insieme di muscoli, legamenti e fasce che formano il 'fondo' della pelvi. Sostiene gli organi pelvici (vescica, utero, retto) e ha un ruolo fondamentale nel controllo della minzione, della defecazione e nella funzione sessuale.",
          },
          {
            q: "Quando è indicata la riabilitazione del pavimento pelvico?",
            a: "La riabilitazione del pavimento pelvico è indicata in caso di incontinenza urinaria o fecale, prolasso degli organi pelvici, dolori pelvici cronici, preparazione al parto, recupero post-partum, disfunzioni sessuali e in menopausa.",
          },
          {
            q: "Dopo il parto, quando posso iniziare la riabilitazione?",
            a: "In generale si consiglia di iniziare la riabilitazione del pavimento pelvico dopo le prime 6-8 settimane dal parto vaginale, quando i tessuti hanno avuto il tempo di cicatrizzare. In alcuni casi si può iniziare prima, con esercizi specifici e non invasivi. La fisioterapista valuterà il momento più adatto per te.",
          },
          {
            q: "La riabilitazione del pavimento pelvico è dolorosa?",
            a: "No, la riabilitazione del pavimento pelvico non è dolorosa. Il trattamento è delicato e rispettoso. La nostra professionista lavora in un ambiente privato e confortevole, ponendo sempre la tua comodità e il tuo benessere al primo posto.",
          },
        ]}
        cities={['Turate', 'Gerenzano', 'Ceriano Laghetto', 'Caronno Pertusella', 'Origgio', 'Uboldo']}
        relatedServices={[
          { label: 'Osteopatia', href: '/osteopata-saronno' },
          { label: 'Ecografia', href: '/ecografia-saronno' },
        ]}
      />
    </>
  )
}
