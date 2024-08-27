import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-black text-white">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/krprss-OmdvgZZOpNNfVNVqT1xuq16FVgQXUo.png"
          alt="KRPRSS Logo"
          width={120}
          height={40}
          className="object-contain"
        />
        <div className="flex items-center space-x-4">
          <Input className="w-64" placeholder="Rechercher..." />
          <Button variant="outline">Connexion</Button>
          <Button>Inscription</Button>
        </div>
      </header>
      <main className="flex-grow">
        <section className="relative h-96 bg-gray-900 text-white">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=400&width=800')" }} />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">KRPRSS - La marque la plus stylée de Paris</h1>
              <Button size="lg">Découvrir la collection</Button>
            </div>
          </div>
        </section>
        <section className="container mx-auto my-12">
          <h2 className="text-2xl font-bold mb-6">Catégories populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Hoodies", "T-shirts", "Nouveautés", "Éditions limitées"].map((category) => (
              <Card key={category}>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={category}
                    width={200}
                    height={200}
                    className="rounded-lg mb-2"
                  />
                  <h3 className="font-semibold text-lg">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="container mx-auto my-12">
          <h2 className="text-2xl font-bold mb-6">Produits en vedette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((product) => (
              <Card key={product}>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt={`Produit ${product}`}
                    width={300}
                    height={300}
                    className="rounded-lg mb-2"
                  />
                  <h3 className="font-semibold">Hoodie KRPRSS Édition Limitée</h3>
                  <p className="text-muted-foreground">99.99 €</p>
                  <Button className="w-full mt-2">Ajouter au panier</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-black text-white p-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">À propos de KRPRSS</h3>
            <p>La marque de hoodies et t-shirts la plus stylée de Paris.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Liens rapides</h3>
            <ul>
              <li><Link href="#">Catalogue</Link></li>
              <li><Link href="#">À propos</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Suivez-nous</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}