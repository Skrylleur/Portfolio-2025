'use client'

export default function SkillsPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-b from-slate-800 via-gray-900 to-gray-800bg-gradient-to-b from-slate-800 via-gray-900 to-gray-800 text-white flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Compétences</h1>

      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 text-left">
        {/* Langues */}
        <section className="bg-gray-800 p-6 rounded-2xl shadow-md transition duration-300 hover:scale-[1.02]">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">Langues</h2>
          <ul className="text-gray-300 space-y-1 list-disc list-inside">
            <li>Anglais - intermédiaire</li>
            <li>Espagnol - intermédiaire</li>
          </ul>
        </section>

        {/* Développement front-end */}
        <section className="bg-gray-800 p-6 rounded-2xl shadow-md transition duration-300 hover:scale-[1.02]">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">Développement front-end</h2>
          <ul className="text-gray-300 space-y-1 list-disc list-inside">
            <li>HTML/CSS</li>
            <li>Astro et Svelte</li>
          </ul>
        </section>

        {/* Langages */}
        <section className="bg-gray-800 p-6 rounded-2xl shadow-md transition duration-300 hover:scale-[1.02]">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">Langages</h2>
          <ul className="text-gray-300 space-y-1 list-disc list-inside">
            <li>Kotlin</li>
            <li>Python</li>
            <li>Java</li>
            <li>Javascript / TypeScript</li>
            <li>PHP</li>
          </ul>
        </section>

        {/* Frameworks */}
        <section className="bg-gray-800 p-6 rounded-2xl shadow-md transition duration-300 hover:scale-[1.02]">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">Frameworks</h2>
          <ul className="text-gray-300 space-y-1 list-disc list-inside">
            <li>Symfony</li>
            <li>SpringBoot</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </section>

        {/* Gestion de projet */}
        <section className="bg-gray-800 p-6 rounded-2xl shadow-md transition duration-300 hover:scale-[1.02] md:col-span-2">
          <h2 className="text-xl font-semibold text-cyan-400 mb-4">Conception / gestion de projets</h2>
          <ul className="text-gray-300 space-y-1 list-disc list-inside">
            <li>Agile</li>
            <li>Scrum</li>
            <li>UML</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
