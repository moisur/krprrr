'use client'

import React from 'react'

// Composants personnalisés

export default function AboutPage() {
  const category = {
    name: "À propos de KPRSKR",
    description: "Découvrez l'univers déjanté de la marque la plus stylée de Paris.",
    imageUrl: "/images/kprskr-logo.jpg" // Remplacez par le chemin d'image réel
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* En-tête de la catégorie pour styliser la section */}

      <div className="flex flex-col md:flex-row gap-8">
        {/* Section à propos */}
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold mb-4">Qui sommes-nous ?</h2>
          <p className="mb-6 text-lg">
            **KPRSKR** n'est pas juste une marque, c'est une explosion de créativité au cœur de Paris. 
            Nous fusionnons l'avant-garde et l'irrévérence pour créer des pièces qui vous feront 
            sortir du lot. Si vous cherchez des vêtements qui défient les normes et cassent les codes, 
            vous êtes au bon endroit !
          </p>
          <h3 className="text-3xl font-bold mb-4">Notre Mission</h3>
          <p className="mb-6 text-lg">
            Chez **KPRSKR**, nous croyons que la mode doit être une forme d'expression libre et 
            débridée. Notre mission ? Transformer chaque coin de rue parisien en un podium où vous pouvez 
            montrer votre style sans limites.
          </p>
          <h3 className="text-3xl font-bold mb-4">Pourquoi KPRSKR ?</h3>
          <p className="mb-6 text-lg">
            Pourquoi ce nom ? Parce que **KPRSKR** c'est une énigme, un code secret, un jeu de lettres 
            aussi imprévisible que nos créations. C'est un clin d'œil à l'art de se démarquer tout en 
            restant insaisissable.
          </p>
        </div>

        {/* Section Image ou contenu additionnel */}
        <div className="md:w-1/3">
          <img src={category.imageUrl} alt="KPRSKR Logo" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  )
}
