'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'À propos', href: '/about' },
    { name: 'Compétences', href: '/skills' },
    { name: 'Expériences', href: '/experiences' },
    { name: 'Projets', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl tracking-wider">
            Antonin <span className="text-cyan-400">GOURINCHAS</span>
          </Link>

          <ul className="hidden md:flex space-x-6 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={clsx(
                    'text-gray-300 hover:text-white transition duration-200',
                    pathname === link.href &&
                      'text-white border-b-2 border-cyan-400 pb-1'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center text-white">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <ul className="space-y-6 text-2xl">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    'hover:text-cyan-400 transition',
                    pathname === link.href && 'text-cyan-400'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}