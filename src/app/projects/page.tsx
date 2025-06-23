'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, Github, Globe, Code, Briefcase, Award, Filter, X } from 'lucide-react'
import ImageModal from '@/components/ImageModal'

const projects = [
  {
    title: "Citation Master",
    place: 'Projet personnel',
    description: "CitationMaster est une application web moderne permettant de gérer une base de citations inspirantes, drôles ou philosophiques. Elle est conçue avec Next.js 15, Prisma et Tailwind CSS, et propose une interface simple pour ajouter, modifier, supprimer ou partager des citations.",
    category: 'web',
    links: [
      { label: "Repository GitHub", url: "https://github.com/Skrylleur/CitationMaster", icon: <Github className="w-4 h-4" /> },
    ],  
  },
  {
    title: "Midi Match",
    place: "Projet personnel",
    description: "Midi-Match est une application simple et ludique qui vous aide à répondre à la fameuse question : \"On mange quoi ce midi ?\" En un clic, l&apos;application sélectionne aléatoirement un repas parmi une liste personnalisable de suggestions. Que ce soit pour manger rapidement, varier les plaisirs ou éviter les éternelles hésitations, Midi-Match est là pour vous inspirer au quotidien.",
    category: 'web',
    links: [
      { label: "Voir le projet", url: "https://glistening-kulfi-a2a262.netlify.app", icon: <Globe className="w-4 h-4" /> },
      { label: "Repository GitHub", url: "https://github.com/Skrylleur/Midi-match", icon: <Github className="w-4 h-4" /> }
    ],  
  },
  {
    title: "Conception de trois Portfolios en Next.js",
    place: 'Projets personnel',
    description: 'Création de portfolios modernes avec responsive design et navigation fluide. Il s\'agit du portfolio sur lequel vous vous trouvez actuellement ainsi que de deux autres portfolios que vous trouverez ci-dessous.',
    category: 'web',
    links: [
      { label: "Portfolio numéro 1", url: "https://mateo-legigan.netlify.app", icon: <Globe className="w-4 h-4" /> },
      { label: "Portfolio numéro 2", url: "https://portfolio-clement-papillon.netlify.app", icon: <Globe className="w-4 h-4" /> }
    ],  
  },
  {
    title: "Conception d'un Portfolio en Astro",
    place: 'Projet personnel',
    description: 'Création d&apos;un portfolio moderne avec responsive design et navigation fluide.',
    category: 'web',
    image: '/images/Portfolio.png',
  },
  {
    title: "Conception d'une API Spring Boot",
    place: 'Projet scolaire',
    description: 'Développement d&apos;une API REST pour un système de gestion locative.',
    category: 'api',
    links: [
      { label: "Repository GitHub", url: "https://github.com/Skrylleur/API_Azurimmo", icon: <Github className="w-4 h-4" /> },
    ],  
    image: '/images/Base_de_donnees.png',
  },
  {
    title: 'Application mobile de gestion locative',
    place: 'Projet scolaire',
    description: 'Application Android native en Kotlin connectée à une API Spring Boot.',
    category: 'mobile',
    links: [
      { label: "Repository GitHub", url: "https://github.com/Skrylleur/API_Azurimmo", icon: <Github className="w-4 h-4" /> },
    ],  
    image: '/images/AzurImmo.png',
  },
  {
    title: 'Automatisation de 150 fichiers Excel',
    place: 'Projet en entreprise',
    description: 'Scripts VBA pour automatiser la production d\'écritures comptables.',
    category: 'automation',
    image: '/images/Code_VBA.png',
  },
  {
    title: 'SEO & refonte du site des cabinets Chemin',
    place: 'Projet en entreprise',
    description: 'Audit, optimisation SEO et restructuration du site des cabinets Chemin.',
    category: 'web',
    links: [
      { label: "Site des cabinets Chemin", url: "https://cabinet-chemin.fr", icon: <Globe className="w-4 h-4" /> },
    ],  
  },
  {
    title: 'Migration de dossiers clients',
    place: 'Projet en entreprise',
    description: 'Création d\'un outil pour migrer automatiquement les dossiers clients. Il s\'agit de documents confidentiel, l\'image de preuve n\'est donc pas un extrait du dit projet mais d\'un exemple pour imager le projet.',
    category: 'automation',
    image: '/images/Code_VBA.png',
  },
]

const categories = [
  { id: 'all', name: 'Tous', icon: <Award className="w-4 h-4" />, color: 'from-cyan-500 to-blue-500' },
  { id: 'web', name: 'Web', icon: <Globe className="w-4 h-4" />, color: 'from-emerald-500 to-teal-500' },
  { id: 'mobile', name: 'Mobile', icon: <Code className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' },
  { id: 'api', name: 'APIs', icon: <Code className="w-4 h-4" />, color: 'from-orange-500 to-red-500' },
  { id: 'automation', name: 'Automatisations', icon: <Briefcase className="w-4 h-4" />, color: 'from-blue-500 to-indigo-500' },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isVisible, setIsVisible] = useState(false)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory
    return categoryMatch
  })

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category)
    return cat?.icon || <Code className="w-4 h-4" />
  }

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category)
    return cat?.color || 'from-gray-500 to-gray-600'
  }

  const clearFilters = () => {
    setSelectedCategory('all')
  }

  const hasActiveFilters = selectedCategory !== 'all'

  return (
    <main className="min-h-screen w-full box-border bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 px-2 sm:px-6 py-16 sm:py-20 w-full box-border">
        {/* Header Section */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Mes Projets
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            Découvrez mes réalisations en développement web, mobile, automatisation et gestion de projets
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex justify-center mb-6 sm:hidden">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 text-white hover:bg-gray-700/50 transition-all duration-300"
          >
            <Filter className="w-4 h-4" />
            <span>Filtres</span>
            {hasActiveFilters && (
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            )}
          </button>
        </div>

        {/* Mobile Filters Panel */}
        {showMobileFilters && (
          <div className="sm:hidden mb-8 p-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 mx-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Filtres actifs</h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                  {categories.find(cat => cat.id === selectedCategory)?.name}
                </span>
                <button
                  onClick={clearFilters}
                  className="px-3 py-1 bg-gray-600/50 text-gray-300 rounded-full text-sm hover:bg-gray-600/70 transition-colors"
                >
                  Effacer
                </button>
              </div>
            )}

            {/* Category Filter */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Catégories</h4>
              <div className="grid grid-cols-4 gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`relative p-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      {category.icon}
                      <span>{category.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Desktop Category Filter */}
        <div className="hidden sm:flex justify-center mb-8">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            <div className="flex gap-2">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  {selectedCategory === category.id && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8 px-2">
          <p className="text-gray-400 text-sm">
            {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="ml-2 text-cyan-400 hover:text-cyan-300 underline"
              >
                Effacer les filtres
              </button>
            )}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-0 box-border">
          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 w-full box-border">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-cyan-500/20 max-w-xs sm:max-w-full mx-auto`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex-1 min-w-0 pr-2">
                      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-1 truncate">
                        {project.title}
                      </h2>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
                        <span className="flex items-center flex-shrink-0">
                          {getCategoryIcon(project.category)}
                        </span>
                        <span className="truncate">{project.place}</span>
                      </div>
                    </div>
                    
                    {/* Category badge */}
                    <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(project.category)} text-white shadow-lg flex-shrink-0`}>
                      <span className="hidden sm:inline">{categories.find(cat => cat.id === project.category)?.name}</span>
                      <span className="sm:hidden">{categories.find(cat => cat.id === project.category)?.name}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Image */}
                  {project.image && (
                    <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-xl sm:rounded-2xl border border-gray-700/50 group-hover:border-cyan-500/30 transition-colors duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-40 sm:h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <ImageModal src={project.image} alt={project.title} />
                    </div>
                  )}

                  {/* Links */}
                  {project.links && project.links.length > 0 && (
                    <div className="space-y-1 sm:space-y-2">
                      {project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-xs sm:text-sm group/link"
                        >
                          {link.icon}
                          <span className="group-hover/link:underline truncate flex-1">{link.label}</span>
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-16 sm:mt-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-2 sm:px-0 box-border">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/30">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">{projects.length}</div>
              <div className="text-gray-400 text-xs sm:text-sm">Projets réalisés</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/30">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1 sm:mb-2">{categories.length - 1}</div>
              <div className="text-gray-400 text-xs sm:text-sm">Catégories</div>
            </div>
          </div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="fixed top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
      </div>
    </main>
  )
}