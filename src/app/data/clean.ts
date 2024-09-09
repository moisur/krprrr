import { products, Product } from './product'; 

// Fonction pour supprimer les URL des images dans le tableau 'images' des produits
function cleanProductImages(products: Product[]): Product[] {
  return products.map(product => ({
    ...product,
    images: product.images.map(() => "") // Remplace les URL par des chaînes vides
  }));
}

// Nettoyer les images des produits
const cleanedProducts = cleanProductImages(products);

// Affichages des produits nettoyés (facultatif)
console.log(cleanedProducts);

// Exporter les produits nettoyés (facultatif)
export { cleanedProducts }; 