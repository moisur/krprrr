/* eslint-disable react/no-unescaped-entities */

'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Croissant, Coffee } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Contact() {
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simule l'envoi du message
    setTimeout(() => {
      router.push('/message-envoye')
    }, 1000)
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Contactez KRPSKR</h1>
      <p className="text-lg mb-8 text-center">
        Vous voulez nous parler ? Pas de souci, on est là... enfin, quand on n'est pas en pause café !
      </p>

      <div className="flex justify-center space-x-4 mb-8">
        <Croissant className="h-8 w-8 transition-transform duration-300 hover:rotate-45 hover:scale-110" />
        <Coffee className="h-8 w-8 transition-transform duration-300 hover:rotate-12 hover:scale-110" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input placeholder="Votre nom (ou votre surnom cool)" required />
        <Input type="email" placeholder="Votre email (promis, on spammera pas... trop)" required />
        <Textarea 
          placeholder="Votre message (140 caractères max, comme un petit croissant, court mais savoureux)" 
          maxLength={140}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required 
        />
        <div className="text-right">
          {message.length}/140 (comme les marches de la Tour Eiffel, mais en moins fatigant)
        </div>
        <Button type="submit" className="w-full">
          Envoyer (et prier Saint-Baguette pour une réponse rapide)
        </Button>
      </form>

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>KRPSKR - Quelque part à Paris, probablement près d'un café ou d'une boulangerie</p>
        <p>Horaires : Du lundi au vendredi, de 10h à 18h (pause déjeuner de 3h incluse, on est français après tout)</p>
        <p>Le week-end ? On est en mode "Do Not Disturb", comme votre voisin qui fait la grasse mat'</p>
      </div>
    </div>
  )
}