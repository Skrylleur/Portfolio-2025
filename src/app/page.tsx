'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Briefcase, Award, Mail } from 'lucide-react'

export default function Home() {
  const quickLinks = [
    {
      title: 'Mes Compétences',
      description: 'Découvrez mes compétences techniques',
      href: '/skills',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mes Expériences',
      description: 'Parcourez mon parcours professionnel',
      href: '/experiences',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Mes Projets',
      description: 'Explorez mes réalisations',
      href: '/projects',
      icon: <Award className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Me Contacter',
      description: 'Échangeons sur vos projets',
      href: '/contact',
      icon: <Mail className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          >
            Antonin Gourinchas
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-4 text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          >
            Développeur Web & Mobile
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
          >
            Étudiant en BTS SIO option SLAM, passionné par le développement d&apos;applications web et mobiles. 
            Spécialisé dans l&apos;automatisation de processus et la création d&apos;expériences utilisateur innovantes.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
              <Link href="/about">
                <button className="group px-8 py-3 text-lg border border-cyan-400 rounded-full text-cyan-300 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-2">
                  Me découvrir
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-3 text-lg bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-white hover:from-cyan-300 hover:to-blue-400 transition-all duration-300">
                  Me contacter
                </button>
              </Link>
            </div>
            {/* Scroll Down Indicator sous les boutons */}
            <div className="w-full flex flex-col items-center">
              <motion.div
                className="mt-20 animate-bounce"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <motion.button
                  type="button"
                  aria-label="Faire défiler vers la suite"
                  className="focus:outline-none"
                  whileTap={{ scale: 1.2, boxShadow: '0 0 16px #22d3ee' }}
                  onClick={() => {
                    const section = document.getElementById('quick-nav');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="text-cyan-400">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto animate-bounce">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </motion.button>
              </motion.div>
              <span className="mt-2 text-sm text-gray-400">Faites défiler pour découvrir</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Navigation Section */}
      <section id="quick-nav" className="py-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
            Explorez mon portfolio
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={link.href}>
                  <div className="group relative bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                    {/* Animated border gradient */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 mb-4 flex justify-center">
                        {link.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-2">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {link.description}
                      </p>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
            Prêt à collaborer ?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Vous avez un projet en tête ? N&apos;hésitez pas à me contacter pour discuter de vos besoins 
            et voir comment je peux vous aider à concrétiser vos idées.
          </p>
          <Link href="/contact">
            <button className="px-8 py-3 text-lg bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-white hover:from-cyan-300 hover:to-blue-400 transition-all duration-300">
              Démarrer un projet
            </button>
          </Link>
        </motion.div>
      </section>
    </main>
  )
}