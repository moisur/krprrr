'use client'

import React from 'react'
import Image from 'next/image'

import toutou from '../../../public/chien.jpg' 

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">KPRSKR</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <p className="mb-6 text-lg">
            Foutez la paix avec les marques qui vous disent ce qu'il faut penser. <span className="font-bold">KPRSKR</span>, c'est une <span className="font-bold">putain</span> de rébellion contre la banalité. C'est le reflet de tous ces rebelles qui ont toujours voulu se démarquer, comme moi. C'est la marque qui fait peur aux <span className="font-bold">normes</span>, qui <span className="font-bold">brise</span> les codes, qui défie le conformisme. 
          </p>
          <p className="mb-6 text-lg">
            Quand j'étais gosse, j'adorais le <span className="font-bold">Goéland</span>. C'était la marque des <span className="font-bold">rebelles</span>, des <span className="font-bold">skateurs</span>, des <span className="font-bold">métalleux</span>. J'ai toujours rêvé de créer mes propres vêtements, des vêtements qui reflètent la <span className="font-bold">liberté</span>, l'<span className="font-bold">originalité</span>, la <span className="font-bold">folie</span>. 
          </p>
          <p className="mb-6 text-lg">
            <span className="font-bold">KPRSKR</span>, c'est l'<span className="font-bold">absurde</span> incarné. Le nom est une <span className="font-bold">énigme</span>, un <span className="font-bold">jeu de lettres</span> qui fait penser aux mots de passe des <span className="font-bold">rebelles</span>. C'est un clin d'œil à l'art de se démarquer tout en restant <span className="font-bold">insaisissable</span>. Et nos vêtements ? C'est un mélange d'<span className="font-bold">absurdité</span>, d'<span className="font-bold">humour</span>, de <span className="font-bold">provocation</span>. On mélange les <span className="font-bold">betteraves</span> avec des <span className="font-bold">matelas</span>, on fait des collabs avec des <span className="font-bold">artistes</span> qui défoncent les codes.
          </p>
          <p className="mb-6 text-lg">
            Foutez la paix avec le conformisme. <span className="font-bold">Rejoignez la rébellion</span>. Achetez un vêtement <span className="font-bold">KPRSKR</span>. Et faites vivre votre <span className="font-bold">rebelle intérieur</span>.
          </p>
          <p className="mb-6 text-lg">
            N'oubliez pas, c'est plus qu'une marque, c'est un <span className="font-bold">mouvement</span>. Un mouvement qui défie les <span className="font-bold">normes</span>, qui célèbre l'<span className="font-bold">individualité</span>, qui s'amuse de l'<span className="font-bold">absurde</span> et qui donne envie de se réveiller son <span className="font-bold">rebelle intérieur</span>.  Eugène Schwartz serait fier de vous!
          </p>
        </div>

        <div className="md:w-1/3">
          <Image
            src={toutou}
            alt="KPRSKR Logo"
            className="rounded-lg shadow-lg"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}