'use client'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col px-6 py-20 bg-gradient-to-b from-slate-800 via-gray-900 to-gray-800 text-white text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">À propos</h1>

      <p className="max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed">
        Étudiant en BTS Services Informatiques aux Organisations (SLAM), passionné par le développement web et mobile
        ainsi que l’automatisation de processus.
      </p>

      <div className="mt-12 flex flex-col md:flex-row gap-4">
        <a
          href="/documents/CV Antonin GOURINCHAS - Alternance.pdf"
          download
          className="px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300"
        >
          Télécharger mon CV
        </a>

        <a
          href="/documents/Lettre_de_Motivation.pdf"
          download
          className="px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300"
        >
          Lettre de motivation
        </a>

        <a
          href="/documents/Lettre de recommandation - Nicole MAUGER.pdf"
          download
          className="px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300"
        >
          Lettre de recommandation
        </a>

        <a
          href="/documents/Veille technologique.pdf"
          download
          className="px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition duration-300"
        >
          Ma veille technologique
        </a>

      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold">Mes réseaux</h2>
        <p className="text-gray-400 mt-2">Retrouvez-moi également sur :</p>

        <div className="flex gap-6 mt-4 justify-center">
          <Link href="https://github.com/Skrylleur" target="_blank" className="hover:scale-110 transition-transform">
            <svg width="32" height="32" fill="currentColor" className="text-white" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008.19 10.95c.6.11.82-.26.82-.58 0-.29-.01-1.04-.01-2.05-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.29 3.46.99.11-.77.42-1.29.76-1.59-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.24 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.68.24 2.93.12 3.24.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.63-5.49 5.93.43.38.81 1.13.81 2.28 0 1.64-.01 2.97-.01 3.38 0 .32.22.7.82.58A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </Link>

          <Link
            href="https://www.linkedin.com/in/antonin-gourinchas/"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <svg width="32" height="32" fill="currentColor" className="text-white" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24V7h5v17H0zm8 0h5v-8.4c0-4.97 6-5.38 6 0V24h5V13.6c0-8.3-9-8-11.5-3.9V7H8v17z" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}