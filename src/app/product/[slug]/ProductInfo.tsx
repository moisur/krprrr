import { Star, Truck, RefreshCw, ShieldCheck } from 'lucide-react'
import { Product } from "../../data/product"

interface ProductInfoProps {
  product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const discountPercentage = Math.round((1 - product.price / product.originalPrice) * 100)

  return (
    <>
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
    </>
  )
}