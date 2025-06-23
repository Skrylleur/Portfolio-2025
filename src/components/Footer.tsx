// app/components/Footer.tsx
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigationLinks = [
    { name: 'À propos', href: '/about' },
    { name: 'Compétences', href: '/skills' },
    { name: 'Expériences', href: '/experiences' },
    { name: 'Projets', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/antonin-gourinchas/',
      icon: <Linkedin size={20} />
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Skrylleur',
      icon: <Github size={20} />
    }  
  ]

  return (
    <footer className="bg-gray-900 text-white px-6 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
              Antonin Gourinchas
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Développeur web et mobile passionné, étudiant en BTS SIO SLAM. 
              Futur créateur d&apos;applications innovantes et d&apos;expériences utilisateur exceptionnelles.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Liens utiles</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/documents/CV Antonin GOURINCHAS - Alternance.pdf"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  target="_blank"
                >
                  Télécharger mon CV
                </Link>
              </li>
              <li>
                <Link 
                  href="/documents/Veille technologique.pdf"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  target="_blank"
                >
                  Veille technologique
                </Link>
              </li>
              <li>
                <Link 
                  href="/mentions-legales"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link 
                  href="/confidentialite"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © 2025 Antonin Gourinchas. Tous droits réservés.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
            aria-label="Retour en haut de page"
          >
            <ArrowUp size={16} />
            Retour en haut
          </button>
        </div>
      </div>
    </footer>
  )
}