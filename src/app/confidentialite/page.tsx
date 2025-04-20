'use client'

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-800 via-gray-900 to-gray-800 px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Politique de Confidentialité</h1>

        <p>Ce site collecte des données personnelles via un formulaire de contact.</p>

        <h2 className="text-xl font-semibold mt-4">1. Données collectées</h2>
        <p>Les données collectées sont : nom, email, message. Elles sont transmises via Formspree.io.</p>

        <h2 className="text-xl font-semibold mt-4">2. Utilisation des données</h2>
        <p>Les données sont uniquement utilisées pour répondre aux messages.</p>

        <h2 className="text-xl font-semibold mt-4">3. Conservation</h2>
        <p>Les données ne sont pas stockées sur ce site mais transmises à Formspree. Se référer à leur politique pour plus d&apos;informations.</p>

        <h2 className="text-xl font-semibold mt-4">4. Droits</h2>
        <p>Conformément au RGPD, vous pouvez demander la modification ou suppression de vos données en me contactant directement à l&apos;adresse ci-dessus.</p>

        <h2 className="text-xl font-semibold mt-4">5. Cookies</h2>
        <p>Ce site n&apos;utilise pas de cookies de suivi ou de mesure d&apos;audience.</p>
      </div>
    </main>
  )
}
