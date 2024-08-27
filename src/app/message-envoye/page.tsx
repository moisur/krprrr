'use client'

import { Button } from "@/components/ui/button"
import { Croissant, Coffee, ThumbsUp } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function MessageEnvoye() {
  const router = useRouter()

  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Votre message est bien parti !</h1>
      
      <div className="flex justify-center space-x-4 mb-8">
        <Croissant className="h-12 w-12 animate-bounce" />
        <Coffee className="h-12 w-12 animate-pulse" />
      </div>

      <p className="text-xl mb-4">
        Pas d'inquiétude, votre message n'est pas dans les spams. 
        Il est probablement en train de siroter un petit café avant d'arriver dans notre boîte de réception.
      </p>

      <p className="text-lg mb-8">
        On va y répondre plus vite qu'un Parisien ne traverse au feu rouge, promis juré !
      </p>

      <ThumbsUp className="h-16 w-16 mx-auto mb-8 text-green-500" />

      <p className="text-md mb-8">
        En attendant, pourquoi ne pas aller déguster une baguette bien fraîche ? 
        Ou mieux, allez faire un tour à la Tour Eiffel, le temps qu'on déchiffre votre écriture de docteur !
      </p>

      <Button onClick={() => router.push('/')} className="mx-auto">
        Retour à l'accueil (ou au café du coin)
      </Button>
    </div>
  )
}