// app/components/Footer.tsx
import { Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-4 text-sm border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <p>© 2025 Antonin Gourinchas. Tous droits réservés.</p>
          <div className="flex gap-4 underline">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/confidentialite">Politique de confidentialité</Link>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/antonin-gourinchas/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  )
}