import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Minus, Plus } from 'lucide-react'
import { Product } from "../../data/product"

interface ProductOptionsProps {
  product: Product
  quantity: number
  setQuantity: (quantity: number) => void
  selectedSize: string
  setSelectedSize: (size: string) => void
  selectedColor: string
  setSelectedColor: (color: string) => void
  onAddToCart: () => void
}

export default function ProductOptions({
  product,
  quantity,
  setQuantity,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  onAddToCart
}: ProductOptionsProps) {
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity))
  }

  return (
    <>
      <Card className="mb-6">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Choisissez votre taille</h3>
          <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
            <div className="flex space-x-2">
              {product.sizes.map((size) => (
                <div key={size}>
                  <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                  <Label
                    htmlFor={`size-${size}`}
                    className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
      <Card className="mb-6">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Choisissez votre couleur</h3>
          <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <div key={color}>
                  <RadioGroupItem value={color} id={`color-${color}`} className="peer sr-only" />
                  <Label
                    htmlFor={`color-${color}`}
                    className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
                  >
                    {color}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
      <div className="flex items-center mb-6">
        <Button variant="outline" size="icon" onClick={() => handleQuantityChange(quantity - 1)}>
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
          className="w-16 mx-2 text-center"
        />
        <Button variant="outline" size="icon" onClick={() => handleQuantityChange(quantity + 1)}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button size="lg" className="w-full mb-4" onClick={onAddToCart}>
        Ajouter au panier
      </Button>
    </>
  )
}