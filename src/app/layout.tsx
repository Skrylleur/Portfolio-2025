import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Antonin Gourinchas - Développeur Web & Mobile | Portfolio',
    template: '%s | Antonin Gourinchas'
  },
  description: 'Développeur web et mobile passionné, spécialisé en BTS SIO SLAM. Découvrez mes projets, compétences et expériences en développement d\'applications web et mobiles.',
  keywords: [
    'développeur web',
    'développeur mobile',
    'BTS SIO',
    'SLAM',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Kotlin',
    'Java',
    'PHP',
    'Symfony',
    'Spring Boot',
    'portfolio',
    'développement web',
    'développement mobile',
    'alternance',
    'Caen'
  ],
  authors: [{ name: 'Antonin Gourinchas' }],
  creator: 'Antonin Gourinchas',
  publisher: 'Antonin Gourinchas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://antonin-gourinchas.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://antonin-gourinchas.fr',
    title: 'Antonin Gourinchas - Développeur Web & Mobile | Portfolio',
    description: 'Développeur web et mobile passionné, spécialisé en BTS SIO SLAM. Découvrez mes projets, compétences et expériences.',
    siteName: 'Portfolio Antonin Gourinchas',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Antonin Gourinchas - Développeur Web & Mobile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antonin Gourinchas - Développeur Web & Mobile | Portfolio',
    description: 'Développeur web et mobile passionné, spécialisé en BTS SIO SLAM.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="google06887dcd4fb48a16" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Antonin Gourinchas",
              "jobTitle": "Développeur Web & Mobile",
              "description": "Développeur web et mobile passionné, spécialisé en BTS SIO SLAM",
              "url": "https://antonin-gourinchas.fr",
              "sameAs": [
                "https://github.com/Skrylleur",
                "https://www.linkedin.com/in/antonin-gourinchas/"
              ],
              "knowsAbout": [
                "Développement Web",
                "Développement Mobile",
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Kotlin",
                "Java",
                "PHP",
                "Symfony",
                "Spring Boot"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "CaenSup Sainte Ursule"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Cabinets Tacher Acogex"
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}