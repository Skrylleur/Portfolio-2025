'use client'

import { useState, useEffect } from 'react'

type Skill = {
  name: string
  level: number // 0-100
  category: string
  icon?: string
}

const skills: Skill[] = [
  // Langages
  { name: 'Kotlin', level: 85, category: 'langages', icon: '🐘' },
  { name: 'Python', level: 80, category: 'langages', icon: '🐍' },
  { name: 'Java', level: 75, category: 'langages', icon: '☕' },
  { name: 'JavaScript', level: 90, category: 'langages', icon: '🟨' },
  { name: 'TypeScript', level: 85, category: 'langages', icon: '🔷' },
  { name: 'PHP', level: 70, category: 'langages', icon: '🐘' },
  { name: 'HTML/CSS', level: 95, category: 'langages', icon: '🌐' },
  { name: 'VBA', level: 95, category: 'langages', icon: '📊' },

  // Frameworks
  { name: 'Next.js', level: 90, category: 'frameworks', icon: '⚡' },
  { name: 'React', level: 85, category: 'frameworks', icon: '⚛️' },
  { name: 'Symfony', level: 75, category: 'frameworks', icon: '🎭' },
  { name: 'Spring Boot', level: 70, category: 'frameworks', icon: '🍃' },
  { name: 'Astro', level: 80, category: 'frameworks', icon: '🚀' },
  { name: 'Svelte', level: 75, category: 'frameworks', icon: '💫' },

  // Outils et méthodes
  { name: 'Agile', level: 85, category: 'methodes', icon: '🔄' },
  { name: 'Scrum', level: 80, category: 'methodes', icon: '📋' },
  { name: 'UML', level: 75, category: 'methodes', icon: '📊' },
  { name: 'Git', level: 70, category: 'methodes', icon: '📚' },
  { name: 'Docker', level: 70, category: 'methodes', icon: '🐳' },

  // Langues
  { name: 'Anglais', level: 75, category: 'langues', icon: '🇬🇧' },
  { name: 'Espagnol', level: 75, category: 'langues', icon: '🇪🇸' },
]

const categories = [
  { id: 'langages', name: 'Langages', icon: '💻', color: 'from-blue-500 to-cyan-500' },
  { id: 'frameworks', name: 'Frameworks', icon: '⚙️', color: 'from-emerald-500 to-teal-500' },
  { id: 'methodes', name: 'Outils & Méthodes', icon: '🛠️', color: 'from-purple-500 to-pink-500' },
  { id: 'langues', name: 'Langues', icon: '🌍', color: 'from-orange-500 to-red-500' },
]

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'from-green-400 to-emerald-500'
    if (level >= 80) return 'from-blue-400 to-cyan-500'
    if (level >= 70) return 'from-yellow-400 to-orange-500'
    return 'from-gray-400 to-gray-500'
  }

  const getLevelText = (level: number) => {
    if (level >= 90) return 'Expert'
    if (level >= 80) return 'Avancé'
    if (level >= 70) return 'Intermédiaire'
    return 'Débutant'
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 px-6 py-20">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Mes Compétences
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Découvrez mon expertise technique à travers mes compétences en développement et gestion de projets
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`relative px-6 py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              🎯 Toutes
              {selectedCategory === 'all' && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              )}
            </button>
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative px-6 py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 ${
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

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getLevelColor(skill.level)} text-white`}>
                      {getLevelText(skill.level)}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="flex justify-end">
                    <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded-full">
                      {categories.find(cat => cat.id === skill.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{skills.length}</div>
              <div className="text-gray-400 text-sm">Compétences</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{categories.length}</div>
              <div className="text-gray-400 text-sm">Catégories</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">{Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%</div>
              <div className="text-gray-400 text-sm">Niveau moyen</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
              <div className="text-3xl font-bold text-orange-400 mb-2">{skills.filter(skill => skill.level >= 80).length}</div>
              <div className="text-gray-400 text-sm">Expert/Avancé</div>
            </div>
          </div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="fixed top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
      </div>
    </main>
  )
}
