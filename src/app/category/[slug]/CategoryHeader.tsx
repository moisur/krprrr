import { Category } from "../../data/product"

interface CategoryHeaderProps {
  category: Category
  productCount: number
}

export default function CategoryHeader({ category, productCount }: CategoryHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
      <p className="text-gray-600 mb-4">Découvrez notre sélection de {category.name.toLowerCase()}.</p>
      <p className="text-sm text-gray-500">{productCount} produits trouvés</p>
    </div>
  )
}