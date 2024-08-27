'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Star, Truck } from 'lucide-react'

// Types
type Product = {
  id: string
  name: string
  price: number
  description: string
  images: string[]
  colors: string[]
  sizes: string[]
  reviews: {
    rating: number
    comment: string
    author: string
  }[]
}

type SimilarProduct = {
  id: string
  name: string
  price: number
  image: string
}

// Mock data
const product: Product = {
  id: '1',
  name: 'Hoodie KRPRSS Classic',
  price: 79.99,
  description: "Le Hoodie KRPRSS Classic est fabriqué à partir de coton bio 100% français. Conçu et produit à Paris, ce hoodie incarne le style urbain parisien tout en respectant l'environnement.",
  images: ['/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600', '/placeholder.svg?height=600&width=600'],
  colors: ['Noir', 'Blanc', 'Gris'],
  sizes: ['S', 'M', 'L', 'XL'],
  reviews: [
    { rating: 5, comment: "Qualité exceptionnelle, je recommande !", author: "Sophie L." },
    { rating: 4, comment: "Très confortable, mais un peu cher.", author: "Thomas M." },
  ]
}

const similarProducts: SimilarProduct[] = [
  { id: '2', name: 'T-shirt KRPRSS Logo', price: 39.99, image: '/placeholder.svg?height=300&width=300' },
  { id: '3', name: 'Hoodie KRPRSS Limited Edition', price: 99.99, image: '/placeholder.svg?height=300&width=300' },
  { id: '4', name: 'T-shirt KRPRSS Graffiti', price: 44.99, image: '/placeholder.svg?height=300&width=300' },
]

export default function ProductDetailPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square relative">
            <Image
              src={product.images[0]}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-square relative">
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 2}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={i < 4 ? "text-yellow-400" : "text-gray-300"} />
            ))}
            <span className="ml-2 text-sm text-gray-500">(18 avis)</span>
          </div>
          <p className="text-2xl font-bold">{product.price.toFixed(2)} €</p>
          <p className="text-gray-600">{product.description}</p>
          <div>
            <h3 className="text-lg font-semibold mb-2">Couleur</h3>
            <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <div key={color}>
                    <RadioGroupItem value={color} id={`color-${color}`} className="sr-only" />
                    <Label
                      htmlFor={`color-${color}`}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color ? 'border-primary' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    />
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Taille</h3>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <div key={size}>
                    <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
                    <Label
                      htmlFor={`size-${size}`}
                      className={`px-3 py-2 border rounded ${
                        selectedSize === size ? 'bg-primary text-primary-foreground' : 'bg-background'
                      }`}
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
          <Button className="w-full">Ajouter au panier</Button>
          <div className="flex items-center text-sm text-gray-500">
            <Truck className="mr-2" />
            <span>Livraison gratuite en France métropolitaine</span>
          </div>
        </div>
      </div>
      <Tabs defaultValue="details" className="mt-12">
        <TabsList>
          <TabsTrigger value="details">Détails du produit</TabsTrigger>
          <TabsTrigger value="reviews">Avis clients</TabsTrigger>
          <TabsTrigger value="shipping">Livraison</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Caractéristiques</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>100% coton bio français</li>
                <li>Fabriqué à Paris</li>
                <li>Coupe regular fit</li>
                <li>Poche kangourou</li>
                <li>Capuche doublée</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reviews">
          <Card>
            <CardContent className="p-6">
              {product.reviews.map((review, index) => (
                <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-1">{review.comment}</p>
                  <p className="text-sm text-gray-500">{review.author}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="shipping">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Informations de livraison</h3>
              <p className="mb-2">Livraison gratuite en France métropolitaine pour toute commande supérieure à 50€.</p>
              <p className="mb-2">Délais de livraison estimés :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>France métropolitaine : 2-3 jours ouvrés</li>
                <li>Europe : 3-5 jours ouvrés</li>
                <li>Reste du monde : 5-10 jours ouvrés</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Produits similaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card>
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.price.toFixed(2)} €</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}