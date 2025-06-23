import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mes Compétences',
  description: 'Découvrez mes compétences techniques en développement web et mobile : React, Next.js, TypeScript, Kotlin, Java, PHP, Symfony et plus encore.',
  keywords: [
    'compétences développeur',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Kotlin',
    'Java',
    'PHP',
    'Symfony',
    'Spring Boot',
    'développement web',
    'développement mobile',
    'Agile',
    'Scrum',
    'Git',
    'Docker'
  ],
  openGraph: {
    title: 'Compétences Techniques - Antonin Gourinchas',
    description: 'Mes compétences en développement web et mobile avec niveaux d\'expertise détaillés.',
    url: 'https://antonin-gourinchas.fr/skills',
  },
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 