'use client'

import { useState } from 'react'
import SkillFilter from '@/components/SkillFilter'

const allSkills = [
  'Travail en mode projet',
  'Organisation de son développement professionnel',
  'Développement de la présence en ligne de l’organisation',
  'Gestion du patrimoine informatique',
  'Réponse aux incidents et aux demandes d’assistance et d’évolution',
  'Mise à disposition des utilisateurs d’un service informatique',
]

const projects = [
  {
    title: "Conception d'un Portfolio en Next.js",
    place: 'Projet personnel',
    description: 'Création d’un portfolio moderne avec responsive design et navigation fluide.',
    skills: ['Travail en mode projet', 'Organisation de son développement professionnel'],
    link: 'https://exemple.com/portfolio',
    image: '/images/portfolio.png', // Ajoute l'image dans public/images/
  },
  {
    title: "Conception d'une API Spring Boot",
    place: 'Projet scolaire',
    description: 'Développement d’une API REST pour un système de gestion locative.',
    skills: ['Travail en mode projet'],
    link: 'https://exemple.com/api',
    image: '/images/api.png',
  },
  {
    title: 'Application mobile de gestion locative',
    place: 'Projet scolaire',
    description: 'Application Android native en Kotlin connectée à une API Spring Boot.',
    skills: ['Travail en mode projet'],
    link: 'https://exemple.com/mobile',
    image: '',
  },
  {
    title: 'Automatisation de 150 fichiers Excel',
    place: 'Projet en entreprise',
    description: 'Scripts VBA pour automatiser la production d’écritures comptables.',
    skills: ['Mise à disposition des utilisateurs d’un service informatique'],
    link: '',
    image: '',
  },
  {
    title: 'SEO & refonte du site AEC',
    place: 'Projet en entreprise',
    description: 'Audit, optimisation SEO et restructuration du site du cabinet AEC.',
    skills: ['Développement de la présence en ligne de l’organisation'],
    link: '',
    image: '',
  },
  {
    title: 'Gestion du matériel informatique',
    place: 'Projet en entreprise',
    description: 'Suivi des entrées/sorties de matériel et support technique.',
    skills: [
      'Gestion du patrimoine informatique',
      'Réponse aux incidents et aux demandes d’assistance et d’évolution',
    ],
    link: '',
    image: '',
  },
  {
    title: 'Migration de dossiers clients',
    place: 'Projet en entreprise',
    description: 'Création d’un outil pour migrer automatiquement les dossiers clients.',
    skills: [
      'Mise à disposition des utilisateurs d’un service informatique',
      'Travail en mode projet',
    ],
    link: 'https://exemple.com/migration',
    image: '',
  },
]

export default function ProjectsPage() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const filteredProjects = selectedSkill
    ? projects.filter((project) => project.skills.includes(selectedSkill))
    : projects

  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">Mes projets</h1>

      {/* Barre de filtre moderne */}
      <SkillFilter
        selectedSkill={selectedSkill}
        onChange={setSelectedSkill}
        allSkills={allSkills}
      />

      {/* Liste des projets */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-800/60 rounded-2xl p-6 text-white shadow-sm"
          >
            <h2 className="text-xl font-semibold text-cyan-300 mb-1">{project.title}</h2>
            <p className="text-sm text-gray-400 italic">{project.place}</p>
            <p className="mt-2 text-gray-200">{project.description}</p>

            <ul className="mt-4 list-disc list-inside text-gray-300 text-sm">
              {project.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>

            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="mt-4 rounded-lg w-full object-cover max-h-64 border border-gray-700"
              />
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-cyan-400 hover:underline text-sm"
              >
                Voir le projet
              </a>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}