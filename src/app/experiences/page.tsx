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
      "Gestion et maintenance du parc informatique rédaction de documentation technique et fonctionnelle dans le cadre des projets menés.",
      "Restructuration du site internet de l'entreprise et amélioration de son référencement naturel (SEO)."
    ]
  },
  {
    titre: 'Assistant contrôleur de gestion',
    structure: 'Laboratoires Urgo Healthcare, Chenôve',
    date: 'Septembre 2021 - Août 2023',
    description: [
      "Gestion et surveillance des notes de frais des forces de vente, y compris l'approbation des dépenses, la vérification des justificatifs et la conformité aux politiques de l'entreprise.",
      "Gestion du parc de cartes affaires, y compris la distribution et la gestion des dépenses associées.",
      "Création de reportings réguliers pour le service commercial, en utilisant Excel pour automatiser les processus de collecte et d'analyse de données."
    ]
  },
  {
    titre: 'Equipier polyvalent en restauration',
    structure: 'Orazurn, Chevigny-Saint-Sauveur',
    date: 'Juin 2021 - Septembre 2021',
    description: [
      "Préparation des aliments selon les normes de qualité en suivant les procédures établies pour chaque produit et en utilisant les équipements appropriés.",
      "Maintien de la propreté et de l'hygiène de la cuisine et des équipements.",
      "Suivi des instructions des superviseurs pour assurer le bon fonctionnement de la cuisine, y compris le suivi des commandes, la gestion des stocks et la préparation des commandes."
    ]
  }
]

export default function ExperiencePage() {
  const [type, setType] = useState<'scolaire' | 'professionnelle'>('scolaire')

  const experiences = type === 'scolaire' ? experiencesScolaires : experiencesPro

  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-10">Expériences</h1>

      <div className="flex justify-center gap-6 mb-12">
        <button
          onClick={() => setType('scolaire')}
          className={`px-6 py-2 rounded-full text-sm md:text-base transition duration-300 border ${
            type === 'scolaire'
              ? 'bg-cyan-400 text-black'
              : 'border-gray-600 hover:bg-gray-800'
          }`}
        >
          Scolaire
        </button>
        <button
          onClick={() => setType('professionnelle')}
          className={`px-6 py-2 rounded-full text-sm md:text-base transition duration-300 border ${
            type === 'professionnelle'
              ? 'bg-cyan-400 text-black'
              : 'border-gray-600 hover:bg-gray-800'
          }`}
        >
          Professionnelle
        </button>
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