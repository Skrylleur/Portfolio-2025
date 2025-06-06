'use client'

import { useState } from 'react'

type Experience = {
  titre: string
  structure: string
  date: string
  description: string | string[]
}

const experiencesScolaires: Experience[] = [
  {
    titre: 'BTS SIO en alternance (option SLAM)',
    structure: 'CaenSup Sainte Ursule, Caen',
    date: '2023 - 2025',
    description:
      "Formation spécialisée en développement d'applications web et mobiles, avec des projets réalisés en PHP, Java, Kotlin et Next.js."
  },
  {
    titre: 'Participation aux WorldSkills régionales',
    structure: 'Caen',
    date: 'Novembre 2024',
    description:
      "Finis deuxième en binôme sur 8 équipes."
  },
  {
    titre: 'BTS Comptabilité et gestion en alternance',
    structure: 'Dijon Formation, Quetigny',
    date: '2021 - 2023',
    description: "Formation spécialisée dans la comptabilité et la gestion."
  },
  {
    titre: 'Licence Sciences et Techniques',
    structure: 'Université de Bourgogne, Dijon',
    date: '2020 - 2021',
    description: "Initiation aux mathématiques, à la physique ainsi que la chimie."
  },
  {
    titre: "BAC S Spécialité Sciences de l'ingénieur",
    structure: "Lycée Chevalier d'Éon, Tonnerre",
    date: '2020 - 2023',
    description: "Diplôme obtenu avec mention bien."
  }
]

const experiencesPro: Experience[] = [
  {
    titre: 'Technicien informatique',
    structure: 'Cabinets Tacher Acogex, Caen',
    date: 'Septembre 2023 - Août 2025',
    description: [
      "Conception et développement d'outils automatisés visant à optimiser les processus de l’entreprise.",
      "Prise en charge des incidents, du support téléphonique et physique auprès des utilisateurs.",
      "Gestion et maintenance du parc informatique, rédaction de documentation technique et fonctionnelle dans le cadre des projets menés.",
      "Restructuration du site internet de l'entreprise et amélioration de son référencement naturel (SEO)."
    ]
  },
  {
    titre: 'Assistant contrôleur de gestion',
    structure: 'Laboratoires Urgo Healthcare, Chenôve',
    date: 'Septembre 2021 - Août 2023',
    description: [
      "Gestion et surveillance des notes de frais des forces de vente.",
      "Gestion du parc de cartes affaires.",
      "Création de reportings réguliers automatisés sous Excel."
    ]
  },
  {
    titre: 'Equipier polyvalent en restauration',
    structure: 'Orazurn, Chevigny-Saint-Sauveur',
    date: 'Juin 2021 - Septembre 2021',
    description: [
      "Préparation des aliments selon les normes de qualité.",
      "Maintien de la propreté et de l'hygiène.",
      "Suivi des commandes et gestion des stocks."
    ]
  }
]

const experiencesAssociatives: Experience[] = [
  {
    titre: 'Parade opératique du millénaire de Caen',
    structure: 'Millénaire de Caen',
    date: '9 mai 2025',
    description: [
      "Gestion des flux, conseil et accompagnement de spectateurs."
    ]
  },
  {
    titre: 'Mission de mentorat',
    structure: 'Association : Dema1n.org',
    date: '2023 - 2025',
    description: [
      "Accompagnement et conseil de jeunes étudiants dans leur première recherche d'école ou d'alternance."
    ]
  },
  {
    titre: 'Tenu d\'un stand d\'école au salon de l\'étudiant',
    structure: 'Edition 2024 du salon de l\'étudiant de Caen',
    date: 'Décembre 2024',
    description: [
      'Conseil et accueil de jeunes étudiants en recherche d\'une formation scolaire.'
    ]
  },
  {
    titre: 'Mission de soutien scolaire',
    structure: 'Association : AFEV',
    date: 'Janvier à Juin 2021',
    description: [
        'Accompagnement et soutien scolaire pour un enfant HPI et hyperactif'
    ]
  },
  {
    titre: 'Organisation d\'une collecte de nourriture au profit des Restos du cœur',
    structure: 'Restos du cœur',
    date: 'Novembre 2019',
    description: [
        'Organisation d\'une récolte de produits secs et alimentaires au profit de l\'association',
        'Intervention auprès des classes pour inviter les élèves de l\'établissement à faire un don.',
        'Tenue d’un stand pour faciliter la collecte des dons auprès des étudiants.'
    ]
  }
]

export default function ExperiencePage() {
  const [type, setType] = useState<'scolaire' | 'professionnelle' | 'associative'>('scolaire')

  const experiences =
    type === 'scolaire'
      ? experiencesScolaires
      : type === 'professionnelle'
      ? experiencesPro
      : experiencesAssociatives

  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-slate-800 via-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">Mes expériences</h1>

      <div className="flex justify-center flex-wrap gap-4 md:gap-6 mb-12">
        {['scolaire', 'professionnelle', 'associative'].map((category) => (
          <button
            key={category}
            onClick={() => setType(category as typeof type)}
            className={`px-6 py-2 rounded-full text-sm md:text-base transition duration-300 border ${
              type === category
                ? 'bg-cyan-400 text-black'
                : 'border-gray-600 hover:bg-gray-800'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800/60 rounded-2xl p-6 text-white shadow-sm"
          >
            <h2 className="text-xl font-semibold text-cyan-300 mb-1">{exp.titre}</h2>
            <p className="text-sm text-gray-400 italic">
              {exp.structure} &mdash; {exp.date}
            </p>
            {Array.isArray(exp.description) ? (
              <ul className="mt-2 list-disc list-inside text-gray-200 leading-relaxed space-y-1">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-gray-200 leading-relaxed">{exp.description}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}