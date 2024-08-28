'use client'

import { useParams } from 'next/navigation'
import { categories, products, Category, Product } from "../../data/product"
import ProductGrid from './ProductGrid'
import CategoryHeader from './CategoryHeader'
import Filters from './Filters'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = categories.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === slug)
  const categoryProducts = products.filter(p => p.category.toLowerCase() === category?.name.toLowerCase())

  if (!category) {
    return <div className="container mx-auto px-4 py-8">Category not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryHeader category={category} productCount={categoryProducts.length} />
      <div className="flex flex-col md:flex-row gap-8">
        <Filters onFilter={() => {}} products={categoryProducts} />
        <ProductGrid products={categoryProducts} />
      </div>
    </div>
  )
}