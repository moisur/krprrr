'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Truck, RefreshCw, ShieldCheck, Percent } from 'lucide-react'

const product = {
  id: '1',
  name: "T-shirt KRPSKR Classic",
  price: 79.99,
  originalPrice: 99.99,
  descriptionShort: "Le Hoodie KRPRSS Classic incarne l'essence du *style urbain parisien* tout en respectant l'environnement. Fabriqué à partir de coton bio 100% français, ce hoodie allie *confort* et *éthique*. Conçu et produit avec soin dans notre atelier à Paris, chaque pièce est le fruit d'un savoir-faire local et d'une attention particulière aux détails. Sa coupe *intemporelle* et son tissu *doux* en font un indispensable de votre garde-robe, parfait pour toutes les saisons. Le logo *KRPSKR* brodé avec finesse ajoute une touche d'*originalité* à ce classique revisité. En choisissant ce hoodie, vous optez pour un *style authentique* et un *engagement écologique*, le tout fabriqué avec *passion* au cœur de la capitale de la mode.",
  descriptionLong: "Le T-shirt KRPSKR Classic est bien plus qu'un simple vêtement. C'est une déclaration de style et d'engagement. Fabriqué avec du coton biologique cultivé en France, ce t-shirt représente notre engagement envers la durabilité et le soutien à l'agriculture locale. La coupe soigneusement étudiée offre un confort optimal tout en restant élégante, adaptée aussi bien pour une journée décontractée que pour une sortie en ville. Le logo KRPSKR, emblème de notre marque, est imprimé avec une technique respectueuse de l'environnement, garantissant sa durabilité même après de nombreux lavages. Chaque détail, de la qualité du tissu à la finition des coutures, témoigne de l'artisanat parisien et de notre souci du détail. En portant ce t-shirt, vous ne faites pas que suivre une mode, vous participez à un mouvement vers une mode plus responsable et locale, tout en affichant un style unique et contemporain.",
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Blanc', 'Noir', 'Gris'],
  images: [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-person-with-goggles-wearing-tshirt-mockup-in-funky-pose-in-front-of-grey-screen-00186-jZM9QzSi4R1SAFhucxuxwrdi3bX2no.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/african-woman-wearing-round-neck-tshirt-mockup-in-red-studio-0323-jFC1c27xA2zWZswb2qviZsCcGcthHz.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/round-neck-tshirt-mockup-on-african-model-in-professional-studio-scene1-0338-cqtwk1SbfV6vL0vrMC37zQhBdBNIrv.jpg",
  ],
  rating: 4.5,
  reviews: [
    { author: "Sophie L.", content: "J'adore ce t-shirt ! La qualité est exceptionnelle et le design est vraiment cool.", rating: 5 },
    { author: "Thomas M.", content: "Très confortable et stylé. Je le recommande vivement !", rating: 4 },
    { author: "Emma R.", content: "Le tissu est super doux et la coupe est parfaite. Je suis fan !", rating: 5 },
  ],
  sku: "KRPRSS-TS-001",
  inStock: true,
}

const similarProducts = [
  { id: '2', name: "Hoodie KRPRSS Logo", price: 89.99, originalPrice: 109.99, image: "/placeholder.svg?height=200&width=200", promo: true },
  { id: '3', name: "Casquette KRPRSS", price: 29.99, originalPrice: 34.99, image: "/placeholder.svg?height=200&width=200", promo: false },
  { id: '4', name: "Sweat KRPRSS Oversize", price: 69.99, originalPrice: 79.99, image: "/placeholder.svg?height=200&width=200", promo: false },
]

const recommendedProducts = [
  { id: '5', name: "Pantalon KRPRSS Cargo", price: 89.99, originalPrice: 109.99, image: "/placeholder.svg?height=200&width=200", promo: true },
  { id: '6', name: "Chaussettes KRPRSS Pack", price: 19.99, originalPrice: 24.99, image: "/placeholder.svg?height=200&width=200", promo: false },
  { id: '7', name: "Bonnet KRPRSS Hiver", price: 24.99, originalPrice: 29.99, image: "/placeholder.svg?height=200&width=200", promo: false },
]

const promoProducts = [
  { id: '8', name: "Veste KRPRSS Limited", price: 129.99, originalPrice: 179.99, image: "/placeholder.svg?height=200&width=200" },
  { id: '9', name: "Sac KRPRSS Tote", price: 34.99, originalPrice: 49.99, image: "/placeholder.svg?height=200&width=200" },
  { id: '10', name: "Écharpe KRPRSS Deluxe", price: 39.99, originalPrice: 59.99, image: "/placeholder.svg?height=200&width=200" },
]

export default function Component() {
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState('Blanc')
  const [mainImage, setMainImage] = useState(product.images[0])
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [isZoomed, setIsZoomed] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  const handleAddToCart = () => {
    console.log(`Added to cart: ${product.name} (Size: ${selectedSize}, Color: ${selectedColor})`)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height
      setZoomPosition({ x, y })
    }
  }

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
                <li>Coupe classique et confortable</li>
                <li>Logo KRPSKR imprimé</li>
                <li>Lavable en machine</li>
                <li>Grammage : 180 g/m²</li>
                <li>Col rond renforcé</li>
                <li>Coutures doubles pour plus de durabilité</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="avis">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Avis des clients</h3>
              {product.reviews.map((review, index) => (
                <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
                  <div className="flex items-center mb-2">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
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

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Produits similaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {similarProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="rounded-lg mb-2"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <div className="flex items-center">
                  <span className="text-lg font-bold">{product.price.toFixed(2)} €</span>
                  {product.promo && (
                    <>
                      <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice.toFixed(2)} €</span>
                      <span className="ml-2 text-sm text-green-600">-{Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Vous aimerez aussi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="rounded-lg mb-2"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <div className="flex items-center">
                  <span className="text-lg font-bold">{product.price.toFixed(2)} €</span>
                  {product.promo && (
                    <>
                      <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice.toFixed(2)} €</span>
                      <span className="ml-2 text-sm text-green-600">-{Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Nos promos exceptionnelles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promoProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg">
                  <Percent className="w-4 h-4 inline-block mr-1" />
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="rounded-lg mb-2"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <div className="flex items-center">
                  <span className="text-lg font-bold">{product.price.toFixed(2)} €</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice.toFixed(2)} €</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}