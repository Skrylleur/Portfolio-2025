'use client'

import {Linkedin } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white flex flex-col items-center justify-center">
      {/* Formulaire de contact */}
      <div className="w-full max-w-2xl bg-gray-800/60 p-8 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact</h1>

        <form
          action="https://formspree.io/f/mwpljbgd"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300 mb-1">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-400 text-black py-2 rounded-md hover:bg-cyan-300 transition"
          >
            Envoyer
          </button>
        </form>
      </div>

      {/* Réseaux sociaux */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 mt-2">Vous pouvez également me rejoindre sur Linkedin :</p>

        <div className="flex gap-6 mt-4 justify-center">
          <a
            href="https://www.linkedin.com/in/antonin-gourinchas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Linkedin size={32} className="text-white" />
          </a>
        </div>
      </div>
    </main>
  )
}