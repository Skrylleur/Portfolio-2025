import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mes Expériences',
  description: 'Découvrez mon parcours professionnel : expériences scolaires, professionnelles et associatives en développement informatique.',
  keywords: [
    'expériences professionnelles',
    'alternance',
    'BTS SIO',
    'technicien informatique',
    'Cabinets Tacher Acogex',
    'Urgo Healthcare',
    'développement',
    'support informatique',
    'automatisation',
    'CaenSup Sainte Ursule'
  ],
  openGraph: {
    title: 'Expériences Professionnelles - Antonin Gourinchas',
    description: 'Mon parcours en alternance et mes expériences professionnelles en développement informatique.',
    url: 'https://antonin-gourinchas.fr/experiences',
  },
}

export default function ExperiencesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 