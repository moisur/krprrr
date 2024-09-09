/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cjHqjF4w9cX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function Component() {
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState(null)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Beach Bliss Flip-Flops",
      description: "Comfortable Footwear",
      price: 19.99,
      discountedPrice: 15.99,
      color: "black",
      featured: true,
      date: "2023-12-01",
      category: "Shoes",
    },
    {
      id: 2,
      name: "Sunset Shades Sunglasses",
      description: "UV Protection Eyewear",
      price: 29.99,
      discountedPrice: 24.99,
      color: "black",
      featured: true,
      date: "2022-06-01",
      category: "Accessories",
    },
    {
      id: 3,
      name: "Cool Breeze Portable Fan",
      description: "On-the-Go Cooling",
      price: 14.99,
      discountedPrice: 12.99,
      color: "blue",
      date: "2021-06-01",
      category: "Accessories",
    },
    {
      id: 4,
      name: "Summer Breeze T-Shirt",
      description: "Lightweight Cotton Shirt",
      price: 24.99,
      discountedPrice: 19.99,
      color: "red",
      date: "2024-06-01",
      category: "Tops",
    },
    {
      id: 5,
      name: "Sunset Beach Shorts",
      description: "Quick-Dry Swim Shorts",
      price: 34.99,
      discountedPrice: 29.99,
      color: "blue",
      date: "2024-03-15",
      category: "Shorts",
    },
    {
      id: 6,
      name: "Sunset Beach Pants",
      description: "Lightweight Cotton Pants",
      price: 299.99,
      discountedPrice: 249.99,
      color: "black",
      date: "2023-06-01",
      category: "Pants",
    },
    {
      id: 7,
      name: "Sunset Beach Towel",
      description: "Absorbent Cotton Towel",
      price: 19.99,
      discountedPrice: 16.99,
      color: "red",
      date: "2023-09-13",
      category: "Accessories",
    },
  ])
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }
  const sortedProducts = useMemo(() => {
    const sorted = [...products]
    if (sortColumn && sortDirection) {
      sorted.sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
        if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
        return 0
      })
    }
    return sorted
  }, [products, sortColumn, sortDirection])
  const [showAddProductModal, setShowAddProductModal] = useState(false)
  const [showEditProductModal, setShowEditProductModal] = useState(null)
  const handleAddProduct = () => {
    setShowAddProductModal(true)
  }
  const handleCloseAddProductModal = () => {
    setShowAddProductModal(false)
  }
  const handleSaveProduct = (newProduct) => {
    setProducts([...products, newProduct])
    setShowAddProductModal(false)
  }
  const handleEditProduct = (product) => {
    setShowEditProductModal(product.id)
  }
  const handleCloseEditProductModal = () => {
    setShowEditProductModal(null)
  }
  const handleUpdateProduct = (updatedProduct) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)))
    setShowEditProductModal(null)
  }
  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId))
  }
  const categoryOptions = [
    { value: "Shoes", label: "Shoes" },
    { value: "Accessories", label: "Accessories" },
    { value: "Tops", label: "Tops" },
    { value: "Shorts", label: "Shorts" },
    { value: "Pants", label: "Pants" },
  ]
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 lg:block">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
              <Package2Icon className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <ShoppingCartIcon className="h-4 w-4" />
                Orders{" "}
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">12</Badge>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary  transition-all hover:text-primary"
                prefetch={false}
              >
                <PackageIcon className="h-4 w-4" />
                Products
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <UsersIcon className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <LineChartIcon className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-muted/40 px-6">
          <Link href="#" className="lg:hidden" prefetch={false}>
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Products</h1>
          </div>
          <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <Button onClick={handleAddProduct} className="ml-auto">
              Add Product
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <img
                    src="/placeholder.svg"
                    width="32"
                    height="32"
                    className="rounded-full"
                    alt="Avatar"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <div key={product.id} className="grid gap-4">
                <div className="grid gap-2.5 relative group">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <img
                    src="/placeholder.svg"
                    alt={product.name}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                  />
                  <div className="grid gap-1">
                    <div className="flex items-center gap-4">
                      <h3 className="font-semibold">
                        {product.name} ({product.color})
                      </h3>
                      <h4 className="font-semibold ml-auto">
                        ${product.discountedPrice.toFixed(2)}{" "}
                        <span className="text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                      </h4>
                    </div>
                    <p className="text-sm leading-none">{product.description}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={() => handleEditProduct(product)}>
                    Edit
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      {showAddProductModal && (
        <div>
          <div>
            <div>
              <div>Add Product</div>
              <div>
                <XIcon className="h-4 w-4" />
              </div>
            </div>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const newProduct = {
                    id: products.length + 1,
                    name: e.target.elements.name.value,
                    description: e.target.elements.description.value,
                    price: parseFloat(e.target.elements.price.value),
                    discountedPrice: parseFloat(e.target.elements.discountedPrice.value),
                    color: e.target.elements.color.value,
                    date: new Date().toISOString().slice(0, 10),
                    category: e.target.elements.category.value,
                  }
                  handleSaveProduct(newProduct)
                }}
              >
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" name="description" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="price">Price</Label>
                    <Input type="number" id="price" name="price" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="discountedPrice">Discounted Price</Label>
                    <Input type="number" id="discountedPrice" name="discountedPrice" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="color">Color</Label>
                    <Input type="text" id="Lorem ipsum" name="color" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select id="category" name="category" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={handleCloseAddProductModal}>
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {showEditProductModal !== null && (
        <div>
          <div>
            <div>
              <div>Edit Product</div>
              <div>
                <XIcon className="h-4 w-4" />
              </div>
            </div>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const updatedProduct = {
                    id: showEditProductModal,
                    name: e.target.elements.name.value,
                    description: e.target.elements.description.value,
                    price: parseFloat(e.target.elements.price.value),
                    discountedPrice: parseFloat(e.target.elements.discountedPrice.value),
                    color: e.target.elements.color.value,
                    date: new Date().toISOString().slice(0, 10),
                    category: e.target.elements.category.value,
                  }
                  handleUpdateProduct(updatedProduct)
                }}
              >
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function LineChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}