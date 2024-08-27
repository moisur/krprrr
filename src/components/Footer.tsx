import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KRPRSS</h3>
            <p className="mb-2">La marque qui fait tourner les têtes (et pas que sur les Champs-Élysées)</p>
            <p>© {new Date().getFullYear()} KRPRSS. Tous droits réservés (même le droit de faire des blagues)</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:underline">FAQ (Foire Aux Questions Loufoques)</Link></li>
              <li><Link href="/cgv" className="hover:underline">CGV (Conditions Généralement Vagues)</Link></li>
              <li><Link href="/mentions-legales" className="hover:underline">Mentions légales (le truc barbant mais nécessaire)</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <p className="mb-2">Parce que stalker, c'est tellement 2010</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <Twitter />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}