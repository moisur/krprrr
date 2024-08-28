'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, User, LogOut } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('userToken')
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('userToken')
    setIsLoggedIn(false)
    router.push('/')
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="flex items-center justify-between p-4 bg-black text-white">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/krprss-OmdvgZZOpNNfVNVqT1xuq16FVgQXUo.png"
          alt="KRPRSS Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </Link>
      <nav className="hidden md:flex space-x-4">
        <Link href="/catalog" className="hover:text-gray-300">Catalogue</Link>
        <Link href="/about" className="hover:text-gray-300">À propos</Link>
        <Link href="/contact" className="hover:text-gray-300">Contact</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <form onSubmit={handleSearch} className="relative text-black">
          <Input
            className="w-64 pr-10"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            type="submit"
            variant="ghost"
            className="absolute right-0 top-0 h-full px-3 text-black"
          >
            🔍
          </Button>
        </form>
        <Link href="/cart">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Panier</span>
          </Button>
        </Link>
        {isLoggedIn ? (
          <>
            <Button variant="ghost" size="icon" onClick={() => router.push('/profile')}>
              <User className="h-5 w-5" />
              <span className="sr-only">Profil</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Déconnexion</span>
            </Button>
          </>
        ) : (
          <>
            <Button className="text-black" variant="outline" onClick={() => router.push('/login')}>Connexion</Button>
            <Button onClick={() => router.push('/signup')}>Inscription</Button>
          </>
        )}
      </div>
    </header>
  )
}