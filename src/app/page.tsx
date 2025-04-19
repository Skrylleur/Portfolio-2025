'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          Antonin Gourinchas
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
        >
          Bonjour, bienvenue sur mon portfolio.
          </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link href="/about">
            <button className="px-8 py-3 text-lg border border-cyan-400 rounded-full text-cyan-300 hover:bg-cyan-300 hover:text-gray-900 transition-all duration-300">
              Me découvrir
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
