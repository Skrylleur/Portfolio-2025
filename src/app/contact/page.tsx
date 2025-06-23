'use client'

import { useState, useEffect } from 'react'
import { Linkedin, User, Mail, MessageSquare, Send } from 'lucide-react'

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen px-4 sm:px-6 py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      {/* Formulaire de contact */}
      <div className={`relative z-10 w-full max-w-2xl bg-gray-800/30 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-700/50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Contact
        </h1>

        <form
          action="https://formspree.io/f/mwpljbgd"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Nom
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Votre nom"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Votre adresse email"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-5 text-gray-400" size={20} />
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Votre message"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
          >
            <Send size={18} />
            Envoyer
          </button>
        </form>
      </div>

      {/* Réseaux sociaux */}
      <div className={`relative z-10 mt-12 text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-gray-400 mt-2">Vous pouvez également me rejoindre sur Linkedin :</p>

        <div className="flex gap-6 mt-4 justify-center">
          <a
            href="https://www.linkedin.com/in/antonin-gourinchas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-3 bg-gray-800/50 rounded-full hover:bg-cyan-500/20 transition-all duration-300 group"
          >
            <Linkedin size={28} className="text-gray-300 group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>
      </div>
    </main>
  )
}