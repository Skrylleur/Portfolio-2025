// components/ImageModal.tsx
'use client'

import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function ImageModal({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-2 right-2 bg-gray-900/70 p-1 rounded-full hover:bg-gray-800 transition"
        aria-label="Agrandir l'image"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative bg-gray-900 p-4 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={1000}
              className="w-full h-auto rounded"
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}