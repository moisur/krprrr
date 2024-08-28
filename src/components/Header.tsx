'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, User, LogOut, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { useCart } from "./cart/CartContext"
import { getTotalItems } from '../lib/cartUtils'
import CartIcon from "./cart/CartIcon"
import CartDropdown from "./CartDropdown"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const router = useRouter()
  const { cart } = useCart()

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  return (
    <header className="bg-black text-white">
      <div className="flex items-center justify-between p-4">
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
          <form onSubmit={handleSearch} className="relative text-black hidden md:block">
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
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Panier</span>
              {getTotalItems(cart) > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {getTotalItems(cart)}
                </span>
              )}
            </Button>
          </Link>
          <div className="hidden md:block">
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
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-gray-900">
          <nav className="flex flex-col space-y-2">
            <Link href="/catalog" className="hover:text-gray-300">Catalogue</Link>
            <Link href="/about" className="hover:text-gray-300">À propos</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </nav>
          <form onSubmit={handleSearch} className="relative text-black mt-4">
            <Input
              className="w-full pr-10"
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
          <div className="mt-4">
            {isLoggedIn ? (
              <div className="flex flex-col space-y-2">
                <Button variant="outline" onClick={() => router.push('/profile')}>
                  <User className="h-5 w-5 mr-2" />
                  Profil
                </Button>
                <Button variant="outline" onClick={handleLogout}>
                  <LogOut className="h-5 w-5 mr-2" />
                  Déconnexion
                </Button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Button className="text-black" variant="outline" onClick={() => router.push('/login')}>Connexion</Button>
                <Button onClick={() => router.push('/signup')}>Inscription</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}