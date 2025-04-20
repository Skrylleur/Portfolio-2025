'use client'

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-800 via-gray-900 to-gray-800 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Mentions Légales</h1>

        <p><strong>Nom : </strong> Antonin Gourinchas</p>
        <p><strong>Adresse : </strong>Caen</p>
        <p><strong>Email : </strong> antonin.gourinchas@gmail.com</p>

        <p><strong>Hébergeur :</strong> Netlify, Inc. <br />
        44 Montgomery Street, Suite 300, San Francisco, California 94104 <br />
        <a href="https://www.netlify.com/">www.netlify.com</a></p>

        <p>Ce site est un portfolio personnel publié à titre non lucratif.</p>
      </div>
    </main>
  )
}