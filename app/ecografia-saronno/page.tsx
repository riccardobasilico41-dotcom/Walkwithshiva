import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata: Metadata = {
  title: 'Ecografia a Saronno – Esami Ecografici Specialistici',
  description:
    'Ecografia a Saronno. Ecografia muscolo-scheletrica, dei tessuti molli, addominale e tiroidea. Referto immediato. Clinica S. Egidio: diagnostica rapida e approfondita.',
  keywords: [
    'ecografia saronno',
    'ecografia muscolo-scheletrica saronno',
    'ecografia tessuti molli saronno',
    'ecografia addominale saronno',
    'ecografia tiroidea saronno',
  ],
  alternates: { canonical: 'https://clinicasegidio.it/ecografia-saronno' },
}

export default function EcografiaSaronnoPage() {
  return (
    <ServicePageTemplate
      title="Ecografia a Saronno"
      subtitle="Ecografia"
      heroText="Diagnostica rapida e approfondita. Referto immediato."
      heroImage="/images/ecografia-room.png"
      intro={[
        "L'ecografia è uno degli strumenti diagnostici più versatili e sicuri disponibili in medicina. Nella nostra clinica a Saronno offriamo esami ecografici specialistici eseguiti da medici esperti, con referto immediato.",
        "L'assenza di radiazioni ionizzanti rende l'ecografia sicura per tutti, incluse donne in gravidanza e bambini. È uno strumento prezioso sia per la diagnosi che per il monitoraggio nel tempo.",
        "I nostri pazienti per ecografia arrivano da Saronno, Caronno Pertusella, Origgio, Uboldo, Gerenzano, Turate e da tutta la zona nord della provincia di Varese.",
      ]}
      benefits={[
        'Ecografia muscolo-scheletrica (tendini, muscoli, articolazioni)',
        'Ecografia dei tessuti molli (cisti, noduli, lipomi)',
        'Ecografia addominale completa',
        'Ecografia tiroidea',
        'Guida ecografica per infiltrazioni',
        'Follow-up di patologie già diagnosticate',
        'Valutazione post-traumatica',
        'Screening preventivo',
      ]}
      approach={[
        {
          title: 'Accoglienza e anamnesi',
          text: "Prima dell'esame, il medico raccoglie le informazioni cliniche rilevanti e le indicazioni del medico inviante. L'esame viene personalizzato in base al quadro clinico.",
        },
        {
          title: 'Esecuzione dell\'esame',
          text: "L'ecografia viene eseguita con apparecchiature di ultima generazione. Il medico analizza in tempo reale le strutture di interesse, con attenzione e precisione.",
        },
        {
          title: 'Referto immediato',
          text: "Il referto viene redatto e consegnato immediatamente al termine dell'esame. In caso di riscontri significativi, il medico si prende il tempo per spiegarti cosa ha trovato.",
        },
        {
          title: 'Coordinamento con il team',
          text: "Se necessario, il referto ecografico viene condiviso con gli altri professionisti della clinica per integrare le informazioni nel percorso di cura complessivo.",
        },
      ]}
      faqs={[
        {
          q: "L'ecografia fa male?",
          a: "No, l'ecografia è un esame completamente indolore e non invasivo. Utilizza ultrasuoni, non radiazioni ionizzanti, ed è sicura per tutti.",
        },
        {
          q: "È necessario il digiuno per l'ecografia?",
          a: "Dipende dal tipo di ecografia. Per l'ecografia addominale è richiesto il digiuno di almeno 6 ore. Per l'ecografia muscolo-scheletrica o dei tessuti molli non è necessario alcun digiuno.",
        },
        {
          q: "Quanto tempo dura un'ecografia?",
          a: "La durata varia in base all'esame: un'ecografia muscolo-scheletrica dura circa 20-30 minuti; un'ecografia addominale 30-45 minuti. Il referto viene consegnato immediatamente.",
        },
        {
          q: "Serve la prescrizione del medico?",
          a: "Non è obbligatoria per una visita privata, ma è utile avere la prescrizione del medico curante o dello specialista che ha richiesto l'esame, in modo da orientare al meglio l'indagine ecografica.",
        },
      ]}
      cities={['Caronno Pertusella', 'Origgio', 'Uboldo', 'Gerenzano', 'Turate', 'Ceriano Laghetto']}
      relatedServices={[
        { label: 'Ecografia Muscolo-scheletrica', href: '/ecografia-muscoloscheletrica-saronno' },
        { label: 'Ortopedia', href: '/ortopedico-saronno' },
        { label: 'Osteopatia', href: '/osteopata-saronno' },
      ]}
    />
  )
}
