import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos de moi',
  description: 'Découvrez qui je suis, mon parcours en BTS SIO SLAM, mes centres d\'intérêt et téléchargez mes documents professionnels.',
  keywords: [
    'Antonin Gourinchas',
    'BTS SIO',
    'SLAM',
    'développeur',
    'alternance',
    'CaenSup Sainte Ursule',
    'CV',
    'veille technologique',
    'veille juridique'
  ],
  openGraph: {
    title: 'À propos d\'Antonin Gourinchas - Développeur Web & Mobile',
    description: 'Découvrez mon parcours, mes centres d\'intérêt et téléchargez mes documents professionnels.',
    url: 'https://antonin-gourinchas.fr/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 