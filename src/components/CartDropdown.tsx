'use client'

import { useCart } from "./cart/CartContext"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"
import Image from "next/image"
import { X, Plus, Minus } from "lucide-react"
import { updateCartItemQuantity, removeCartItem, calculateCartTotal } from '../lib/cartUtils'
import Link from 'next/link'

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDropdown({ isOpen, onClose }: CartDropdownProps) {
  const { cart, setCart } = useCart()

  const handleUpdateQuantity = (id: string, size: string, color: string, newQuantity: number) => {
    updateCartItemQuantity(cart, id, size, color, newQuantity, setCart)
  }

  const handleRemoveItem = (id: string, size: string, color: string) => {
    removeCartItem(cart, id, size, color, setCart)
  }

  if (!isOpen) return null

  return (
    <Card className="absolute right-0 top-full mt-2 w-96 z-50 max-h-[80vh] overflow-auto">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Votre panier</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        {cart.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          cart.map((item) => (
            <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center mb-4">
              {item.image ? (
                <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-md mr-2" />
              ) : (
                <div className="w-[50px] h-[50px] bg-gray-200 rounded-md mr-2 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">No image</span>
                </div>
              )}
              <div className="flex-grow">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">
                  Taille: {item.size}, Couleur: {item.color}
                </p>
                <p className="text-sm">{item.price.toFixed(2)} €</p>
              </div>
              <div className="flex items-center">
                <Button variant="outline" size="sm" onClick={() => handleUpdateQuantity(item.id, item.size, item.color, item.quantity - 1)} disabled={item.quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item.id, item.size, item.color, parseInt(e.target.value))}
                  className="w-12 mx-1 text-center"
                />
                <Button variant="outline" size="sm" onClick={() => handleUpdateQuantity(item.id, item.size, item.color, item.quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleRemoveItem(item.id, item.size, item.color)} className="ml-2">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 border-t">
        <div>
          <p className="font-semibold">Total: {calculateCartTotal(cart).toFixed(2)} €</p>
        </div>
        <Link href="/cart" passHref>
          <Button onClick={onClose}>Voir le panier</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}