'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const documents = [
    {
      name: 'CV Antonin GOURINCHAS - Alternance',
      file: 'CV Antonin GOURINCHAS - Alternance.pdf',
      icon: '📄',
      description: 'Mon CV détaillé avec mes expériences et compétences'
    },
    {
      name: 'Veille technologique',
      file: 'Veille technologique.pdf',
      icon: '🔬',
      description: 'Ma veille sur les dernières technologies'
    },
    {
      name: 'Veille juridique',
      file: 'Veille juridique.pdf',
      icon: '⚖️',
      description: 'Ma veille sur l&apos;actualité juridique du numérique'
    },
    {
      name: 'Tableau de synthèse',
      file: 'Antonin GOURINCHAS - Tableau de synthèse.pdf',
      icon: '📊',
      description: 'Synthèse de mon parcours et de mes réalisations'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Skrylleur',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008.19 10.95c.6.11.82-.26.82-.58 0-.29-.01-1.04-.01-2.05-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.29 3.46.99.11-.77.42-1.29.76-1.59-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.24 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.68.24 2.93.12 3.24.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.63-5.49 5.93.43.38.81 1.13.81 2.28 0 1.64-.01 2.97-.01 3.38 0 .32.22.7.82.58A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
        </svg>
      ),
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/antonin-gourinchas/',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24V7h5v17H0zm8 0h5v-8.4c0-4.97 6-5.38 6 0V24h5V13.6c0-8.3-9-8-11.5-3.9V7H8v17z" />
        </svg>
      ),
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <main className="min-h-screen w-full box-border bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 px-4 sm:px-6 py-20 w-full box-border">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            À propos de moi
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Étudiant en BTS Services Informatiques aux Organisations (SLAM), passionné par le développement web et mobile
            ainsi que l&apos;automatisation de processus.
          </p>
        </div>

        {/* About Content */}
        <div className="w-full max-w-6xl mx-auto space-y-16 box-border">
          {/* Personal Info Section */}
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                Qui suis-je ?
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Je suis un développeur passionné par la création d&apos;applications web et mobiles innovantes. 
                  Mon parcours en alternance m&apos;a permis d&apos;acquérir une expérience pratique significative 
                  dans le développement d&apos;outils automatisés et l&apos;optimisation de processus.
                </p>
                <p>
                  Actuellement en BTS SIO option SLAM, je combine mes compétences techniques avec une 
                  approche méthodique pour résoudre des problèmes complexes et créer des solutions efficaces.
                </p>
                <p>
                  Je suis constamment en veille technologique pour rester à jour avec les dernières 
                  innovations et améliorer mes compétences en développement.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">Mes centres d&apos;intérêt</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💻</span>
                  <span className="text-gray-300">Développement web et mobile</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🤖</span>
                  <span className="text-gray-300">Automatisation de processus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📚</span>
                  <span className="text-gray-300">Apprentissage continu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏃</span>
                  <span className="text-gray-300">Sport</span>
                </div>

              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
              Mes documents
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {documents.map((doc, index) => (
                <a
                  key={doc.name}
                  href={`/documents/${doc.file}`}
                  download
                  className={`group relative bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-4">{doc.icon}</div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-2">
                      {doc.name}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {doc.description}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Networks Section */}
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
              Mes réseaux
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Retrouvez-moi également sur :
            </p>
            
            <div className="flex justify-center gap-8">
              {socialLinks.map((social, index) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className={`group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-white group-hover:text-cyan-300 transition-colors duration-300 mb-2">
                      {social.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="fixed top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
      </div>
    </main>
  )
}