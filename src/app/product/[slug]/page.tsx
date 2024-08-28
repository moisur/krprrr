'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useCart } from '../../cart/page'
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { products, getSimilarProducts, getRecommendedProducts, Product } from "../../data/product"
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import ProductOptions from './ProductOptions'
import ProductTabs from './ProductTabs'
import RelatedProducts from './RelatedProducts'
import { slugify } from "../../../utils/stringUtils"

export default function ProductPage() {
  const { slug } = useParams()
  const product = products.find(p => slugify(p.name) === slug)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0])
      setSelectedColor(product.colors[0])
    }
  }, [product])

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

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

  const similarProducts = getSimilarProducts(product.id).filter((p): p is Product => p !== undefined)
  const recommendedProducts = getRecommendedProducts(product.id).filter((p): p is Product => p !== undefined)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <ProductImage images={product.images} />
        <div className="w-full md:w-1/2">
          <ProductInfo product={product} />
          <ProductOptions
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
      
      <ProductTabs product={product} />

      <RelatedProducts title="Produits similaires" products={similarProducts} />
      <RelatedProducts title="Vous aimerez aussi" products={recommendedProducts} />
      <RelatedProducts title="Nos promos exceptionnelles" products={products.filter(p => p.price < p.originalPrice).slice(0, 4)} />

      <Toaster />
    </div>
  )
}