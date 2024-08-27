// components/Cart.tsx
'use client'

import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  size: string
  color: string
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  getTotalItems: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        i => i.id === item.id && i.size === item.size && i.color === item.color
      )
      if (existingItem) {
        return prevCart.map(i => 
          i.id === item.id && i.size === item.size && i.color === item.color
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      } else {
        return [...prevCart, item]
      }
    })
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export default function Cart() {
  const { getTotalItems } = useCart()

  return (
    <Button variant="ghost" size="icon">
      <ShoppingCart className="h-5 w-5" />
      <span className="sr-only">Panier</span>
      {getTotalItems() > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
          {getTotalItems()}
        </span>
      )}
    </Button>
  )
}