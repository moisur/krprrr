'use client'

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { getPopularCategories } from "../app/data/product"
import Link from "next/link"
import { slugify } from "@/utils/stringUtils"

export default function CategoriesPopulaires() {
  const categories = getPopularCategories()

  return (
    <section className="container mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6">Catégories populaires</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardContent className="p-4">
            <Link href={`/category/${slugify(category.name)}`}>
            <Image
                  src={category.image}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="rounded-lg mb-2"
                />
                <h3 className="font-semibold text-lg">{category.name}</h3>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}