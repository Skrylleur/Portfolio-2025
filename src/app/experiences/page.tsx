'use client'

import { useState, useEffect } from 'react'

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
      "Conception et développement d'outils automatisés visant à optimiser les processus de l'entreprise.",
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
        'Tenue d\'un stand pour faciliter la collecte des dons auprès des étudiants.'
    ]
  }
]

export default function ExperiencePage() {
  const [type, setType] = useState<'scolaire' | 'professionnelle' | 'associative'>('scolaire')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const experiences =
    type === 'scolaire'
      ? experiencesScolaires
      : type === 'professionnelle'
      ? experiencesPro
      : experiencesAssociatives

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'scolaire':
        return '🎓'
      case 'professionnelle':
        return '💼'
      case 'associative':
        return '🤝'
      default:
        return '📋'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'scolaire':
        return 'from-blue-500 to-cyan-500'
      case 'professionnelle':
        return 'from-emerald-500 to-teal-500'
      case 'associative':
        return 'from-purple-500 to-pink-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <main className="min-h-screen w-full box-border bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 px-4 sm:px-6 py-20 w-full box-border">
        {/* Header Section */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Mes Expériences
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Découvrez mon parcours à travers mes expériences scolaires, professionnelles et associatives
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            {['scolaire', 'professionnelle', 'associative'].map((category, index) => (
              <button
                key={category}
                onClick={() => setType(category as typeof type)}
                className={`relative px-8 py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 ${
                  type === category
                    ? `bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-lg transform scale-105`
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <span className="mr-2">{getCategoryIcon(category)}</span>
                {category.charAt(0).toUpperCase() + category.slice(1)}
                {type === category && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Experiences Grid */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid gap-6 sm:gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-2 group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
                        {exp.titre}
                      </h2>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-400">
                        <span className="flex items-center mb-1 sm:mb-0">
                          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {exp.structure}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {exp.date}
                        </span>
                      </div>
                    </div>
                    
                    {/* Category badge */}
                    <div className={`mt-4 md:mt-0 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(type)} text-white shadow-lg`}>
                      {getCategoryIcon(type)} {type.charAt(0).toUpperCase() + type.slice(1)}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    {Array.isArray(exp.description) ? (
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">
                            <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 sm:mt-3"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="fixed top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
      </div>
    </main>
  )
}