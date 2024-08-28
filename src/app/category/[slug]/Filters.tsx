import { useState, useEffect } from 'react'
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Product } from "../../data/product"

interface FiltersProps {
  onFilter: (filters: any) => void
  products: Product[]
}

export default function Filters({ onFilter, products }: FiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])

  const allSizes = Array.from(new Set(products.flatMap(p => p.sizes)))
  const allColors = Array.from(new Set(products.flatMap(p => p.colors)))

  useEffect(() => {
    onFilter({
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      sizes: selectedSizes,
      colors: selectedColors
    })
  }, [priceRange, selectedSizes, selectedColors])

  const handleSizeChange = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    )
  }

  const handleColorChange = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    )
  }

  return (
    <div className="w-full md:w-1/4 mb-8 md:mb-0">
      <h2 className="text-xl font-semibold mb-4">Filtres</h2>
      
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Prix</h3>
        <Slider
          min={0}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
        />
        <div className="flex justify-between mt-2">
          <span>{priceRange[0]}€</span>
          <span>{priceRange[1]}€</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Tailles</h3>
        {allSizes.map(size => (
          <div key={size} className="flex items-center mb-2">
            <Checkbox
              id={`size-${size}`}
              checked={selectedSizes.includes(size)}
              onCheckedChange={() => handleSizeChange(size)}
            />
            <Label htmlFor={`size-${size}`} className="ml-2">{size}</Label>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Couleurs</h3>
        {allColors.map(color => (
          <div key={color} className="flex items-center mb-2">
            <Checkbox
              id={`color-${color}`}
              checked={selectedColors.includes(color)}
              onCheckedChange={() => handleColorChange(color)}
            />
            <Label htmlFor={`color-${color}`} className="ml-2">{color}</Label>
          </div>
        ))}
      </div>
    </div>
  )
}