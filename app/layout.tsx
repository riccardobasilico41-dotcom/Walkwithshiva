import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://clinicasegidio.it'),
  title: {
    default: 'Clinica S. Egidio – Saronno | Centro Medico Privato',
    template: '%s | Clinica S. Egidio – Saronno',
  },
  description:
    'Clinica S. Egidio è il centro medico privato di riferimento a Saronno. Osteopatia, pavimento pelvico, psicoterapia, logopedia, ortopedia ed ecografia. Ascoltiamo. Comprendiamo. Accompagniamo.',
  keywords: [
    'clinica saronno',
    'centro medico saronno',
    'osteopata saronno',
    'fisioterapia saronno',
    'psicoterapia saronno',
    'logopedista saronno',
    'ortopedico saronno',
    'ecografia saronno',
    'pavimento pelvico saronno',
    'mal di schiena saronno',
    'cervicale saronno',
  ],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://clinicasegidio.it',
    siteName: 'Clinica S. Egidio',
    title: 'Clinica S. Egidio – A cura della salute.',
    description:
      'Centro medico privato a Saronno. Ascoltiamo, comprendiamo, accompagniamo ogni persona con cura e competenza.',
    images: [
      {
        url: '/images/reception-1.png',
        width: 1200,
        height: 630,
        alt: 'Clinica S. Egidio – Saronno',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinica S. Egidio – Saronno',
    description: 'Centro medico privato. Osteopatia, psicoterapia, logopedia, ortopedia, ecografia.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://clinicasegidio.it' },
}

const clinicSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalClinic',
      '@id': 'https://clinicasegidio.it/#clinic',
      name: 'Clinica S. Egidio',
      alternateName: 'Clinica San Egidio Saronno',
      description:
        'Centro medico privato a Saronno specializzato in osteopatia, riabilitazione del pavimento pelvico, psicoterapia, logopedia, ortopedia ed ecografia.',
      url: 'https://clinicasegidio.it',
      telephone: '+39-0331-000000',
      email: 'info@clinicasegidio.it',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Gaudenzio Ferrari 19',
        addressLocality: 'Saronno',
        addressRegion: 'VA',
        postalCode: '21047',
        addressCountry: 'IT',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 45.6246,
        longitude: 9.0375,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      medicalSpecialty: [
        'Osteopathic',
        'PhysicalTherapy',
        'Psychology',
        'Orthopedics',
        'Diagnostic Imaging',
      ],
      hasMap: 'https://maps.google.com/?q=Via+Gaudenzio+Ferrari+19+Saronno',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Cash, Credit Card',
      priceRange: '€€',
      areaServed: [
        'Saronno',
        'Caronno Pertusella',
        'Origgio',
        'Uboldo',
        'Gerenzano',
        'Turate',
        'Ceriano Laghetto',
        'Solaro',
        'Rovello Porro',
        'Lomazzo',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://clinicasegidio.it/#website',
      url: 'https://clinicasegidio.it',
      name: 'Clinica S. Egidio',
      publisher: { '@id': 'https://clinicasegidio.it/#clinic' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </head>
      <body className="font-sans bg-crema text-stone-800 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
