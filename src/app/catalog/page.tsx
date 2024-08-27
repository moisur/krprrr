'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import Link from "next/link"
import { products, categories } from "../data/product"

export default function CatalogPage() {
  const [filters, setFilters] = useState({
    category: [] as string[],
    color: [] as string[],
    size: [] as string[],
  })
  const [filteredProducts, setFilteredProducts] = useState(products)

  const allColors = Array.from(new Set(products.flatMap(product => product.colors)))
  const allSizes = Array.from(new Set(products.flatMap(product => product.sizes)))

  useEffect(() => {
    const newFilteredProducts = products.filter(product => {
      const categoryMatch = filters.category.length === 0 || filters.category.includes(product.category)
      const colorMatch = filters.color.length === 0 || product.colors.some(color => filters.color.includes(color))
      const sizeMatch = filters.size.length === 0 || product.sizes.some(size => filters.size.includes(size))
      return categoryMatch && colorMatch && sizeMatch
    })
    setFilteredProducts(newFilteredProducts)
  }, [filters])

  const handleFilterChange = (filterType: 'category' | 'color' | 'size', value: string) => {
    setFilters(prevFilters => {
      const updatedFilter = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter(item => item !== value)
        : [...prevFilters[filterType], value]
      return { ...prevFilters, [filterType]: updatedFilter }
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Catalogue KRPRSS</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">Filtres</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Catégorie</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <Checkbox 
                          id={category.id} 
                          checked={filters.category.includes(category.name)}
                          onCheckedChange={() => handleFilterChange('category', category.name)}
                        />
                        <label htmlFor={category.id} className="ml-2">{category.name}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Couleur</h3>
                  <div className="space-y-2">
                    {allColors.map((color) => (
                      <div key={color} className="flex items-center">
                        <Checkbox 
                          id={color} 
                          checked={filters.color.includes(color)}
                          onCheckedChange={() => handleFilterChange('color', color)}
                        />
                        <label htmlFor={color} className="ml-2">{color}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Taille</h3>
                  <div className="space-y-2">
                    {allSizes.map((size) => (
                      <div key={size} className="flex items-center">
                        <Checkbox 
                          id={size} 
                          checked={filters.size.includes(size)}
                          onValueChange={() => handleFilterChange('size', size)}
                        />
                        <label htmlFor={size} className="ml-2">{size}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
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
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-muted-foreground">{product.price.toFixed(2)} €</p>
                  </Link>
                  <Button className="w-full mt-4">Ajouter au panier</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}