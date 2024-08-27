import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-96 bg-gray-900 text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=400&width=800')" }} />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">KRPRSS - La marque la plus stylée de Paris</h1>
          <Button size="lg">Découvrir la collection</Button>
        </div>
      </div>
    </section>
  )
}