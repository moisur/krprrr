// app/product/[id]/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Star, Truck, RefreshCw, ShieldCheck, Minus, Plus } from 'lucide-react'
import { products, getSimilarProducts, getRecommendedProducts,Product } from "../../data/product"
import { useParams } from 'next/navigation'
import { useCart, CartProvider } from '../../cart/page'
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

function ProductPageContent() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [mainImage, setMainImage] = useState('')
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [isZoomed, setIsZoomed] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0])
      setSelectedColor(product.colors[0])
      setMainImage(product.images[0])
    }
  }, [product])

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

  const similarProducts = getSimilarProducts(product.id).filter((p): p is Product => p !== undefined)
  const recommendedProducts = getRecommendedProducts(product.id).filter((p): p is Product => p !== undefined)

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      size: selectedSize,
      color: selectedColor
    }
    addToCart(item)
    toast({
      title: "Produit ajouté au panier",
      description: `${quantity} x ${product.name} (${selectedSize}, ${selectedColor}) ajouté(s) au panier.`,
    })
  }

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height
      setZoomPosition({ x, y })
    }
  }

  const discountPercentage = Math.round((1 - product.price / product.originalPrice) * 100)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div 
            ref={imageRef}
            className="relative overflow-hidden rounded-lg cursor-zoom-in"
            style={{ paddingBottom: '100%' }}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
          >
            <Image
              src={mainImage}
              alt={product.name}
              layout="fill"
              objectFit="cover"
            />
            {isZoomed && (
              <div 
                className="absolute w-1/5 h-1/5 border-2 border-white pointer-events-none"
                style={{
                  left: `${zoomPosition.x * 80}%`,
                  top: `${zoomPosition.y * 80}%`,
                  backgroundImage: `url(${mainImage})`,
                  backgroundPosition: `${zoomPosition.x * 100}% ${zoomPosition.y * 100}%`,
                  backgroundSize: '500% 500%'
                }}
              />
            )}
          </div>
          <div className="flex mt-4 gap-2">
            {product.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${product.name} view ${index + 1}`}
                width={100}
                height={100}
                className="rounded-lg object-cover cursor-pointer"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
            ))}
            <span className="ml-2 text-sm text-gray-600">({product.reviews.length} avis)</span>
          </div>
          <div className="mb-4">
            <span className="text-3xl font-bold">{product.price.toFixed(2)} €</span>
            <span className="ml-2 text-xl text-gray-500 line-through">{product.originalPrice.toFixed(2)} €</span>
            <span className="ml-2 text-sm text-green-600">-{discountPercentage}%</span>
          </div>
          <p className="text-sm text-green-600 mb-4">
            Économisez {(product.originalPrice - product.price).toFixed(2)} € pour les 150 premiers acheteurs !
          </p>
          <p className="mb-6" dangerouslySetInnerHTML={{ __html: product.descriptionShort.replace(/\*(.*?)\*/g, '<em>$1</em>') }}></p>
          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Choisissez votre taille</h3>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                <div className="flex space-x-2">
                  {product.sizes.map((size) => (
                    <div key={size}>
                      <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                      <Label
                        htmlFor={`size-${size}`}
                        className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Choisissez votre couleur</h3>
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <div key={color}>
                      <RadioGroupItem value={color} id={`color-${color}`} className="peer sr-only" />
                      <Label
                        htmlFor={`color-${color}`}
                        className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
                      >
                        {color}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
          <div className="flex items-center mb-6">
            <Button variant="outline" size="icon" onClick={() => handleQuantityChange(quantity - 1)}>
              <Minus className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
              className="w-16 mx-2 text-center"
            />
            <Button variant="outline" size="icon" onClick={() => handleQuantityChange(quantity + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button size="lg" className="w-full mb-4" onClick={handleAddToCart}>
            Ajouter au panier
          </Button>
          <div className="flex justify-between text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <Truck className="w-4 h-4 mr-1" />
              <span className="font-bold">Livraison gratuite</span>
            </div>
            <div className="flex items-center">
              <RefreshCw className="w-4 h-4 mr-1" />
              <span className="font-bold">Retours sous 30 jours</span>
            </div>
            <div className="flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1" />
              <span className="font-bold">Garantie 2 ans</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">SKU: {product.sku}</p>
          <p className="text-sm text-gray-600">
            Disponibilité: {product.inStock ? 'En stock' : 'Rupture de stock'}
          </p>
        </div>
      </div>
      
      <Tabs defaultValue="description" className="mt-12">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="details">Détails</TabsTrigger>
          <TabsTrigger value="avis">Avis</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Description du produit</h3>
              <p>{product.descriptionLong}</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="details">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Détails du produit</h3>
              <ul className="list-disc pl-5">
                <li>100% coton biologique français</li>
                <li>Fabriqué à Paris</li>
                <li>Coupe ajustée</li>
                <li>Lavable en machine à 30°C</li>
                <li>Ne pas utiliser de sèche-linge</li>
                <li>Repasser à basse température</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="avis">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Avis clients</h3>
              {product.reviews.map((review, index) => (
                <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
                  <div className="flex items-center mb-2">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{review.author}</span>
                  </div>
                  <p>{review.content}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Produits similaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarProducts.map((product, index) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <Link href={`/product/${product.id}`}>
                  <div className="relative">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="rounded-lg mb-4 object-cover"
                    />
                    {index === 0 && product.price < product.originalPrice && (
                      <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold">{product.price.toFixed(2)} €</span>
                    {index === 0 && product.price < product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice.toFixed(2)} €</span>
                    )}
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Vous aimerez aussi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <Link href={`/product/${product.id}`}>
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="rounded-lg mb-4 object-cover"
                  />
                  <h3 className="font-semibold">{product.name}</h3>
                  <span className="text-lg font-bold">{product.price.toFixed(2)} €</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Nos promos exceptionnelles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.filter(p => p.price < p.originalPrice).slice(0, 4).map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <Link href={`/product/${product.id}`}>
                  <div className="relative">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="rounded-lg mb-4 object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs animate-pulse">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  </div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold">{product.price.toFixed(2)} €</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice.toFixed(2)} €</span>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Toaster />
    </div>
  )
}

export default function ProductPage() {
  return (
    <CartProvider>
      <ProductPageContent />
    </CartProvider>
  )
}