// utils.ts

import { Category, Product } from './types';

const productData: Product[] = [
  {
    id: 1,
    name: "T-shirt KRPSKR Original",
    price: 49.99,
    description: "Le T-shirt KRPSKR Original incarne l'essence du style urbain parisien. Fabriqué à partir de coton biologique de haute qualité, ce t-shirt offre un confort inégalé tout en affichant fièrement le logo emblématique de la marque.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-person-with-goggles-wearing-tshirt-mockup-in-funky-pose-in-front-of-grey-screen-00186-OOuxspgG83sIlA92cb0lkBXTzHbDli.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/african-woman-wearing-round-neck-tshirt-mockup-in-red-studio-0323-jFC1c27xA2zWZswb2qviZsCcGcthHz.jpg",
    ],
    category: "T-shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Noir", hex: "#000000" },
      { name: "Blanc", hex: "#FFFFFF" },
      { name: "Jaune", hex: "#FFC300" },
    ],
    rating: 4.5,
    reviews: [
      {
        author: "Sophie L.",
        content: "J'adore ce t-shirt ! La qualité est exceptionnelle et le design est vraiment cool.",
        rating: 5,
      },
      {
        author: "Thomas M.",
        content: "Très confortable et stylé. Je le recommande vivement !",
        rating: 4,
      },
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Hoodie KRPSKR Signature",
    price: 79.99,
    description: "Notre hoodie signature KRPSKR est l'alliance parfaite entre confort et style. Fabriqué à partir de coton biologique doux, il vous gardera au chaud tout en affichant votre amour pour la mode parisienne.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/young-male-model-with-frizzy-hair-wearing-hoodie-mockup-in-minimalistic-background-scene1-078-DfFBbeqWOYTagbEvxDVifS737WyQHJ.jpg",
    ],
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Noir", hex: "#000000" },
      { name: "Gris", hex: "#808080" },
    ],
    rating: 4.8,
    reviews: [
      {
        author: "Léa F.",
        content: "Ce hoodie est devenu mon préféré ! Il est super confortable et le design est top.",
        rating: 5,
      },
      {
        author: "Alex D.",
        content: "Qualité exceptionnelle, je le porte tout le temps !",
        rating: 5,
      },
    ],
    featured: true,
  },
  {
    id: 3,
    name: "T-shirt KRPSKR Colibri",
    price: 54.99,
    description: "Le T-shirt KRPSKR Colibri est une pièce unique mettant en vedette notre design coloré et géométrique de colibri. Fabriqué à partir de coton biologique, il allie confort et style artistique.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/round-neck-tshirt-mockup-on-african-model-in-professional-studio-scene1-0338-cqtwk1SbfV6vL0vrMC37zQhBdBNIrv.jpg",
    ],
    category: "T-shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Blanc", hex: "#FFFFFF" }],
    rating: 4.7,
    reviews: [
      {
        author: "Marie T.",
        content: "Le design est magnifique et la qualité est au rendez-vous. Un incontournable pour les amateurs d'art et de mode.",
        rating: 5,
      },
      {
        author: "Pierre K.",
        content: "Très stylé, mais un peu cher pour un t-shirt. Cependant, je ne regrette pas mon achat.",
        rating: 4,
      },
    ],
    featured: false,
  },
  {
    id: 4,
    name: "Casquette KRPSKR",
    price: 29.99,
    description: "Complétez votre look avec la casquette KRPSKR. Cette casquette élégante est parfaite pour un style urbain décontracté tout en offrant une protection contre le soleil.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/african-man-wearing-baseball-cap-mockup-in-professional-studio-scene1-0337-4WxoslmrrACmwHzmwiNp2LGptKwJ5y.jpg",
    ],
    category: "Accessoires",
    sizes: ["Taille unique"],
    colors: [
      { name: "Noir", hex: "#000000" },
      { name: "Rouge", hex: "#FF0000" },
    ],
    rating: 4.3,
    reviews: [
      {
        author: "Julie P.",
        content: "Parfait pour compléter mon style. Confortable et bien ajustée.",
        rating: 4,
      },
      {
        author: "Marc E.",
        content: "Bonne qualité, mais j'aurais aimé plus d'options de couleurs.",
        rating: 4,
      },
    ],
    featured: false,
  },
];

export function getCategories(products: Product[]): Category[] {
  const categories = new Set<string>();
  products.forEach(product => categories.add(product.category));
  return Array.from(categories).map(category => ({
    id: category,
    name: category,
    image: 'https://via.placeholder.com/200', // Remplacez par une image de catégorie appropriée
  }));
}

export function getFeaturedProducts(products: Product[]): Product[] {
  return products.filter(product => product.featured);
}

export default productData;
