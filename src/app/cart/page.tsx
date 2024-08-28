'use client'

import { useCart } from "@/components/cart/CartContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { updateCartItemQuantity, removeCartItem, calculateCartTotal } from '../../lib/cartUtils'

export default function CartPage() {
  const { cart, setCart } = useCart()

  const handleUpdateQuantity = (id: string, size: string, color: string, newQuantity: number) => {
    updateCartItemQuantity(cart, id, size, color, newQuantity, setCart)
  }

  const handleRemoveItem = (id: string, size: string, color: string) => {
    removeCartItem(cart, id, size, color, setCart)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Votre Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center mb-4 p-4 border rounded">
              {item.image ? (
                <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-md mr-4" />
              ) : (
                <div className="w-[100px] h-[100px] bg-gray-200 rounded-md mr-4 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">No image</span>
                </div>
              )}
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  Taille: {item.size}, Couleur: {item.color}
                </p>
                <p className="text-sm">{item.price.toFixed(2)} €</p>
              </div>
              <div className="flex items-center">
                <Button variant="outline" size="sm" onClick={() => handleUpdateQuantity(item.id, item.size, item.color, item.quantity - 1)} disabled={item.quantity <= 1}>
                  -
                </Button>
                <Input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item.id, item.size, item.color, parseInt(e.target.value))}
                  className="w-16 mx-2 text-center"
                />
                <Button variant="outline" size="sm" onClick={() => handleUpdateQuantity(item.id, item.size, item.color, item.quantity + 1)}>
                  +
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleRemoveItem(item.id, item.size, item.color)} className="ml-4">
                  Supprimer
                </Button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: {calculateCartTotal(cart).toFixed(2)} €</p>
          </div>
        </>
      )}
    </div>
  )
}