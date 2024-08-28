'use client'

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "./CartContext"

export default function CartIcon() {
  const { getTotalItems } = useCart()

  return (
    <Button variant="ghost" size="icon" className="relative">
      <ShoppingCart className="h-5 w-5" />
      <span className="sr-only">Panier</span>
      {getTotalItems() > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {getTotalItems()}
        </span>
      )}
    </Button>
  )
}