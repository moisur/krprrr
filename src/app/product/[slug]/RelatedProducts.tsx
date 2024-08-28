import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Product } from "../../data/product"
import { slugify } from '@/utils/stringUtils'

interface RelatedProductsProps {
  title: string
  products: Product[]
}

export default function RelatedProducts({ title, products }: RelatedProductsProps) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card key={product.id}>
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
  )
}