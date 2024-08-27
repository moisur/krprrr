/* eslint-disable react/no-unescaped-entities */


'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGoogle, FaFacebook } from "react-icons/fa"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique d'inscription ici
    console.log("Signup with:", name, email, password)
    // Si l'inscription réussit, stockez le token et redirigez
    localStorage.setItem('userToken', 'fake-token')
    router.push('/')
  }

  const handleGoogleSignup = () => {
    // Logique d'inscription avec Google
    console.log("Signup with Google")
  }

  const handleFacebookSignup = () => {
    // Logique d'inscription avec Facebook
    console.log("Signup with Facebook")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Inscription</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <Input
              type="text"
              placeholder="Nom complet"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">S'inscrire</Button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Ou s'inscrire avec</p>
            <div className="flex justify-center mt-2 space-x-2">
              <Button variant="outline" onClick={handleGoogleSignup}>
                <FaGoogle className="mr-2" /> Google
              </Button>
              <Button variant="outline" onClick={handleFacebookSignup}>
                <FaFacebook className="mr-2" /> Facebook
              </Button>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Déjà un compte ? <Link href="/login" className="text-blue-600 hover:underline">Se connecter</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}