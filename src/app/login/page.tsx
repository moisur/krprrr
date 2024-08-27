'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGoogle, FaFacebook } from "react-icons/fa"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique de connexion ici
    console.log("Login with:", email, password)
    // Si la connexion réussit, stockez le token et redirigez
    localStorage.setItem('userToken', 'fake-token')
    router.push('/')
  }

  const handleGoogleLogin = () => {
    // Logique de connexion avec Google
    console.log("Login with Google")
  }

  const handleFacebookLogin = () => {
    // Logique de connexion avec Facebook
    console.log("Login with Facebook")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Connexion</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
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
            <Button type="submit" className="w-full">Se connecter</Button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Ou se connecter avec</p>
            <div className="flex justify-center mt-2 space-x-2">
              <Button variant="outline" onClick={handleGoogleLogin}>
                <FaGoogle className="mr-2" /> Google
              </Button>
              <Button variant="outline" onClick={handleFacebookLogin}>
                <FaFacebook className="mr-2" /> Facebook
              </Button>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Pas encore de compte ? <Link href="/signup" className="text-blue-600 hover:underline">S'inscrire</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}