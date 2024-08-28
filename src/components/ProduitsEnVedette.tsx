'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { getFeaturedProducts } from "../app/data/product"
import Link from "next/link"
import { slugify } from "../utils/stringUtils"
import { useCart } from "./cart/CartContext"
import { useState } from "react"
import { handleAddToCart } from '../lib/cartUtils'
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function ProduitsEnVedette() {
  const featuredProducts = getFeaturedProducts()
  const { cart, setCart } = useCart()
  const [addedToCart, setAddedToCart] = useState<{ [key: string]: boolean }>({})
  const { toast } = useToast()

  const handleAddToCartClick = (product: any) => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      size: product.sizes[0], // Default to first size
      color: product.colors[0], // Default to first color
    }
    handleAddToCart(cart, item, setCart)
    setAddedToCart(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }))
    }, 2000)

    toast({
      title: "Produit ajouté au panier",
      description: `${item.name} a été ajouté à votre panier.`,
    })
  }

  return (
    <section className="container mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6">Produits en vedette</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <Link href={`/product/${slugify(product.name)}`}>
                <Image
                  src={product.images[0]} 
                  alt={product.name}
                  width={300}
                  height={300}
                  className="rounded-lg mb-2"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-muted-foreground">{product.price.toFixed(2)} €</p>
              </Link>
              <Button 
                className="w-full mt-2" 
                onClick={() => handleAddToCartClick(product)}
                disabled={addedToCart[product.id]}
              >
                {addedToCart[product.id] ? "Ajouté !" : "Ajouter au panier"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Toaster />
    </section>
  )
}