import Image from "next/image";
import Hero from '../components/Hero'
import CategoriesPopulaires from '../components/CategoriesPopulaires'
import ProduitsEnVedette from '../components/ProduitsEnVedette'

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <ProduitsEnVedette />
        <CategoriesPopulaires />
      </main>
    </>
  )
}