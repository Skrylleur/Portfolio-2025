'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    try {
      const response = await fetch('https://formspree.io/f/mwpljbgd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      })
  
      const result = await response.json()
  
      if (response.ok) {
        alert('Message envoyé avec succès !')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Erreur : ' + result.message || 'Une erreur est survenue.')
      }
    } catch (error) {
      alert('Une erreur réseau est survenue.')
    }
  }

  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-2xl bg-gray-800/60 p-8 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300 mb-1">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
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
    </main>
  )
}