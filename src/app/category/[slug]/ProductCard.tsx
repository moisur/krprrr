import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Product } from "../../data/product"
import { slugify } from '@/utils/stringUtils'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = Math.round((1 - product.price / product.originalPrice) * 100)

  return (
    <Card>
      <CardContent className="p-4">
        <Link href={`/product/${slugify(product.name)}`}>
          <div className="relative">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg mb-4 object-cover"
            />
            {product.price < product.originalPrice && (
              <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                -{discountPercentage}%
              </span>
            )}
          </div>
          <h3 className="font-semibold">{product.name}</h3>
          <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-bold">{product.price.toFixed(2)} €</span>
            {product.price < product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">{product.originalPrice.toFixed(2)} €</span>
            )}
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}