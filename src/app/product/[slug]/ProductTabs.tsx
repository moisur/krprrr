import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'
import { Product } from "../../data/product"

interface ProductTabsProps {
  product: Product
}

export default function ProductTabs({ product }: ProductTabsProps) {
  return (
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
  )
}