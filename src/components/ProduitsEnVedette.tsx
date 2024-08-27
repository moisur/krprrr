import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { getFeaturedProducts } from "../app/data/product"

export default function ProduitsEnVedette() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="container mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6">Produits en vedette</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-lg mb-2"
              />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-muted-foreground">{product.price.toFixed(2)} €</p>
              <Button className="w-full mt-2">Ajouter au panier</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}