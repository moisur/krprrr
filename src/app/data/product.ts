import images from './image';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  descriptionShort: string;
  descriptionLong: string;
  sizes: string[];
  colors: string[];
  images: string[];
  rating: number;
  reviews: Review[];
  sku: string;
  inStock: boolean;
  category: string;
  isFeatured: boolean;
  isPopular: boolean;
  similarProducts: string[];
  recommendedProducts: string[];
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

interface Review {
  author: string;
  content: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: "T-shirt KRPSKR Classic",
    price: 39.99,
    originalPrice: 49.99,
    descriptionShort: "Le T-shirt KRPSKR Classic incarne l'essence du *style urbain parisien* tout en respectant l'environnement.",
    descriptionLong: "Le T-shirt KRPSKR Classic est bien plus qu'un simple vêtement. Fabriqué avec du coton biologique cultivé en France, ce t-shirt représente notre engagement envers la durabilité et le soutien à l'agriculture locale. Sa coupe soigneusement étudiée offre un confort optimal tout en restant élégante, parfaite pour flâner sur les Champs-Élysées ou siroter un café en terrasse.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blanc', 'Noir', 'Gris'],
    images: [
      images.tshirtkrpskr, // Remplacez par le nom de votre image importée
      images.tshirtkrpskr, // Remplacez par le nom de votre image importée
      images.tshirtkrpskr, // Remplacez par le nom de votre image importée
    ],
    rating: 4.5,
    reviews: [
      { author: "Sophie L.", content: "J'adore ce t-shirt ! La qualité est exceptionnelle et le design est vraiment cool.", rating: 5 },
      { author: "Thomas M.", content: "Très confortable et stylé. Je le recommande vivement !", rating: 4 },
    ],
    sku: "KRPRSS-TS-001",
    inStock: true,
    category: "T-shirts",
    isFeatured: true,
    isPopular: true,
    similarProducts: ['2', '3', '4'],
    recommendedProducts: ['5', '6', '7'],
    tags: ['coton bio', 'made in France', 'éthique'],
  },
  {
    id: '2',
    name: "Hoodie KRPSKR Logo",
    price: 69.99,
    originalPrice: 89.99,
    descriptionShort: "Notre Hoodie KRPSKR Logo allie *style* et *confort* pour un look urbain parfait.",
    descriptionLong: "Le Hoodie KRPSKR Logo est l'incarnation du confort et du style urbain. Fabriqué à partir de matériaux durables, ce hoodie offre une chaleur optimale tout en restant respirant. Idéal pour affronter la bise parisienne avec style ou pour un dimanche cocooning devant Netflix.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Noir', 'Gris', 'Bleu marine'],
    images: [
      images.hoodiekrpskr, // Remplacez par le nom de votre image importée
      images.hoodiekrpskr1, // Remplacez par le nom de votre image importée
    ],
    rating: 4.7,
    reviews: [
      { author: "Lucas P.", content: "Ce hoodie est devenu mon préféré ! Confortable et stylé.", rating: 5 },
      { author: "Chloé D.", content: "J'adore le design et la qualité du tissu. Parfait pour l'automne.", rating: 4 },
    ],
    sku: "KRPRSS-HD-001",
    inStock: true,
    category: "Hoodies",
    isFeatured: true,
    isPopular: true,
    similarProducts: ['1', '4', '5'],
    recommendedProducts: ['3', '6', '8'],
    tags: ['hoodie', 'logo', 'confort'],
  },
  {
    id: '3',
    name: "Casquette KRPSKR Snapback",
    price: 29.99,
    originalPrice: 34.99,
    descriptionShort: "Protégez-vous du soleil avec style grâce à notre casquette KRPSKR Snapback.",
    descriptionLong: "Notre casquette KRPSKR Snapback est l'accessoire parfait pour compléter votre look urbain. Avec son design épuré et son logo brodé, elle ajoute une touche de style à n'importe quelle tenue. Idéale pour les balades le long de la Seine ou pour cacher une coupe de cheveux ratée après une soirée trop arrosée.",
    sizes: ['Taille unique'],
    colors: ['Noir', 'Blanc', 'Rouge'],
    images: [
      images.casquette, // Remplacez par le nom de votre image importée
      images.casquette, // Remplacez par le nom de votre image importée
    ],
    rating: 4.3,
    reviews: [
      { author: "Alex M.", content: "Super casquette, très confortable et ajustable.", rating: 4 },
    ],
    sku: "KRPRSS-CAP-001",
    inStock: true,
    category: "Accessoires",
    isFeatured: false,
    isPopular: true,
    similarProducts: ['1', '2', '7'],
    recommendedProducts: ['4', '5', '6'],
    tags: ['casquette', 'accessoire', 'été'],
  },
  {
    id: '4',
    name: "Sweat KRPSKR Oversize",
    price: 59.99,
    originalPrice: 79.99,
    descriptionShort: "Notre Sweat KRPSKR Oversize offre un confort maximal avec un style décontracté.",
    descriptionLong: "Le Sweat KRPSKR Oversize est la définition même du confort stylé. Sa coupe ample vous donne l'impression d'être enveloppé dans un nuage de douceur, parfait pour les jours où vous voulez être à l'aise tout en restant chic. Idéal pour les brunchs du dimanche ou pour faire semblant de faire du sport.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gris chiné', 'Noir', 'Beige'],
    images: [
      images.sweatmusique, // Remplacez par le nom de votre image importée
      images.sweatmusique, // Remplacez par le nom de votre image importée
    ],
    rating: 4.6,
    reviews: [
      { author: "Emma R.", content: "J'adore ce sweat ! Il est super confortable et la coupe oversize est parfaite.", rating: 5 },
    ],
    sku: "KRPRSS-SW-001",
    inStock: true,
    category: "Sweats",
    isFeatured: true,
    isPopular: true,
    similarProducts: ['2', '5', '6'],
    recommendedProducts: ['1', '3', '7'],
    tags: ['sweat', 'oversize', 'confort'],
  },
  {
    id: '5',
    name: "Pantalon KRPSKR Cargo",
    price: 79.99,
    originalPrice: 99.99,
    descriptionShort: "Notre Pantalon KRPSKR Cargo allie fonctionnalité et style urbain.",
    descriptionLong: "Le Pantalon KRPSKR Cargo est le compagnon idéal pour vos aventures urbaines. Avec ses nombreuses poches, vous pouvez emporter tout ce dont vous avez besoin (et même ce dont vous n'avez pas besoin). Parfait pour les explorateurs urbains ou pour ceux qui ont trop de choses à transporter mais qui refusent d'utiliser un sac.",
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Kaki', 'Noir', 'Beige'],
    images: [
      images.guitarepied, // Remplacez par le nom de votre image importée
      images.guitarepied, // Remplacez par le nom de votre image importée
    ],
    rating: 4.4,
    reviews: [
      { author: "Léo D.", content: "Ce pantalon est génial ! Confortable et pratique avec toutes ses poches.", rating: 4 },
    ],
    sku: "KRPRSS-PNT-001",
    inStock: true,
    category: "Pantalons",
    isFeatured: false,
    isPopular: true,
    similarProducts: ['4', '6', '7'],
    recommendedProducts: ['1', '2', '3'],
    tags: ['pantalon', 'cargo', 'fonctionnel'],
  },
  {
    id: '6',
    name: "Veste KRPSKR Bomber",
    price: 99.99,
    originalPrice: 129.99,
    descriptionShort: "Notre Veste KRPSKR Bomber vous donne un look d'aviateur urbain.",
    descriptionLong: "La Veste KRPSKR Bomber est l'accessoire parfait pour ajouter une touche de cool à votre garde-robe. Inspirée des vestes de pilotes, elle vous donne un air de Top Gun parisien. Idéale pour impressionner en terrasse ou pour faire croire que vous savez piloter un avion (on ne jugera pas).",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Noir', 'Vert olive', 'Bleu marine'],
    images: [
      images.hoodiekrpskr, // Remplacez par le nom de votre image importée
      images.hoodiekrpskr, // Remplacez par le nom de votre image importée
    ],
    rating: 4.8,
    reviews: [
      { author: "Sarah B.", content: "Cette veste est incroyable ! La qualité est au top et le style est parfait.", rating: 5 },
    ],
    sku: "KRPRSS-VES-001",
    inStock: true,
    category: "Vestes",
    isFeatured: true,
    isPopular: true,
    similarProducts: ['2', '4', '5'],
    recommendedProducts: ['1', '3', '7'],
    tags: ['veste', 'bomber', 'style'],
  },
  {
    id: '7',
    name: "Bonnet KRPSKR Beanie",
    price: 24.99,
    originalPrice: 29.99,
    descriptionShort: "Notre Bonnet KRPSKR Beanie vous garde au chaud avec style.",
    descriptionLong: "Le Bonnet KRPSKR Beanie est l'accessoire parfait pour affronter l'hiver parisien avec style. Doux, chaud et confortable, il protège vos oreilles du froid tout en vous donnant un air de hipster branché. Idéal pour les balades hivernales ou pour cacher une mauvaise coupe de cheveux.",
    sizes: ['Taille unique'],
    colors: ['Noir', 'Gris', 'Bordeaux'],
    images: [
      images.bonnet, // Remplacez par le nom de votre image importée
      images.bonnet, // Remplacez par le nom de votre image importée
    ],
    rating: 4.5,
    reviews: [
      { author: "Julie M.", content: "J'adore ce bonnet ! Il est super doux et tient bien chaud.", rating: 5 },
    ],
    sku: "KRPRSS-BNT-001",
    inStock: true,
    category: "Accessoires",
    isFeatured: false,
    isPopular: true,
    similarProducts: ['3', '6', '8'],
    recommendedProducts: ['1', '2', '4'],
    tags: ['bonnet', 'hiver', 'accessoire'],
  },
  {
    id: '8',
    name: "Sac KRPSKR Tote",
    price: 34.99,
    originalPrice: 39.99,
    descriptionShort: "Notre Sac KRPSKR Tote est le compagnon idéal pour vos aventures urbaines.",
    descriptionLong: "Le Sac KRPSKR Tote est le sac parfait pour transporter vos essentiels quotidiens avec style. Spacieux et résistant, il peut contenir tout ce dont vous avez besoin, de votre ordinateur portable à votre collection de macarons. Idéal pour le shopping, le travail ou pour transporter discrètement votre collection de fromages.",
    sizes: ['Taille unique'],
    colors: ['Écru', 'Noir', 'Bleu marine'],
    images: [
      images.dernierarbre, // Remplacez par le nom de votre image importée
      images.dernierarbre, // Remplacez par le nom de votre image importée
    ],
    rating: 4.6,
    reviews: [
      { author: "Marie L.", content: "Ce sac est génial ! Très pratique et le design est super.", rating: 5 },
    ],
    sku: "KRPRSS-SAC-001",
    inStock: true,
    category: "Accessoires",
    isFeatured: true,
    isPopular: true,
    similarProducts: ['3', '7', '9'],
    recommendedProducts: ['1', '2', '6'],
    tags: ['sac', 'tote', 'accessoire'],
  },
  {
    id: '9',
    name: "Chemise KRPSKR Flanelle",
    price: 59.99,
    originalPrice: 69.99,
    descriptionShort: "Notre Chemise KRPSKR Flanelle allie confort et style décontracté.",
    descriptionLong: "La Chemise KRPSKR Flanelle est le vêtement parfait pour un look décontracté-chic. Douce et confortable, elle vous donne un air de bûcheron urbain prêt à affronter la jungle parisienne. Idéale pour les soirées décontractées ou pour faire croire que vous savez manier une hache.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Rouge à carreaux', 'Bleu à carreaux', 'Vert à carreaux'],
    images: [
      images.tshirtnavetlit, // Remplacez par le nom de votre image importée
      images.tshirtnavetlit, // Remplacez par le nom de votre image importée
    ],
    rating: 4.7,
    reviews: [
      { author: "Pierre D.", content: "Cette chemise est super confortable et le style est top !", rating: 5 },
    ],
    sku: "KRPRSS-CHM-001",
    inStock: true,
    category: "Chemises",
    isFeatured: false,
    isPopular: true,
    similarProducts: ['1', '4', '6'],
    recommendedProducts: ['2', '5', '8'],
    tags: ['chemise', 'flanelle', 'décontracté'],
  },
  {
    id: '10',
    name: "Short KRPSKR Denim",
    price: 49.99,
    originalPrice: 59.99,
    descriptionShort: "Notre Short KRPSKR Denim est parfait pour un look estival décontracté.",
    descriptionLong: "Le Short KRPSKR Denim est l'incontournable de l'été. Avec sa coupe parfaite et son denim de qualité, il vous accompagnera dans toutes vos aventures estivales. Idéal pour les pique-niques au bord de la Seine ou pour montrer vos jambes (plus ou moins) bronzées.",
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Bleu clair', 'Bleu foncé', 'Noir'],
    images: [
      images.tshirtcolibri, // Remplacez par le nom de votre image importée
      images.tshirtcolibri, // Remplacez par le nom de votre image importée
    ],
    rating: 4.4,
    reviews: [
      { author: "Lucie F.", content: "J'adore ce short ! La coupe est parfaite et le denim est de très bonne qualité.", rating: 4 },
    ],
    sku: "KRPRSS-SHT-001",
    inStock: true,
    category: "Shorts",
    isFeatured: true,
    isPopular: true,
    similarProducts: ['5', '9', '11'],
    recommendedProducts: ['1', '3', '7'],
    tags: ['short', 'denim', 'été'],
  },
  {
    id: '11',
    name: "Robe KRPSKR Bohème",
    price: 79.99,
    originalPrice: 99.99,
    descriptionShort: "Notre Robe KRPSKR Bohème vous donne un look effortless chic.",
    descriptionLong: "La Robe KRPSKR Bohème est la pièce parfaite pour un look bohème chic. Légère et fluide, elle vous donne un air de parisienne décontractée prête pour un vernissage ou un pique-nique improvisé. Idéale pour les journées ensoleillées ou pour faire semblant d'être une artiste incomprise.",
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Blanc cassé', 'Terracotta', 'Bleu ciel'],
    images: [
      images.tshirtcravate, // Remplacez par le nom de votre image importée
      images.tshirtcravate, // Remplacez par le nom de votre image importée
    ],
    rating: 4.8,
    reviews: [
      { author: "Sophie G.", content: "Cette robe est magnifique ! Le tissu est de qualité et la coupe est très flatteuse.", rating: 5 },
    ],
    sku: "KRPRSS-ROB-001",
    inStock: true,
    category: "Robes",
    isFeatured: true,
    isPopular: true,
    similarProducts: ['10', '12', '13'],
    recommendedProducts: ['3', '7', '8'],
    tags: ['robe', 'bohème', 'été'],
  },
  {
    id: '12',
    name: "Blazer KRPSKR Chic",
    price: 119.99,
    originalPrice: 149.99,
    descriptionShort: "Notre Blazer KRPSKR Chic ajoute une touche d'élégance à votre garde-robe.",
    descriptionLong: "Le Blazer KRPSKR Chic est la pièce parfaite pour upgrader instantanément votre look. Avec sa coupe impeccable et son tissu de qualité, il vous donne un air de boss parisien prêt à conquérir le monde (ou au moins le quartier). Idéal pour les réunions importantes ou pour impressionner votre date au restaurant étoilé.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Noir', 'Bleu marine', 'Gris'],
    images: [
      images.coqueportable, // Remplacez par le nom de votre image importée
      images.coqueportable, // Remplacez par le nom de votre image importée
    ],
    rating: 4.9,
    reviews: [
      { author: "Thomas B.", content: "Ce blazer est incroyable ! La qualité est au rendez-vous et la coupe est parfaite.", rating: 5 },
    ],
    sku: "KRPRSS-BLZ-001",
    inStock: true,
    category: "Vestes",
    isFeatured: true,
    isPopular: true,
    similarProducts: ['6', '9', '11'],
    recommendedProducts: ['2', '4', '8'],
    tags: ['blazer', 'chic', 'élégant'],
  },
  {
    id: '13',
    name: "Jupe KRPSKR Plissée",
    price: 59.99,
    originalPrice: 69.99,
    descriptionShort: "Notre Jupe KRPSKR Plissée ajoute une touche de féminité à votre look.",
    descriptionLong: "La Jupe KRPSKR Plissée est la pièce parfaite pour un look féminin et élégant. Avec ses plis délicats et sa coupe flatteuse, elle vous donne un air de danseuse de ballet prête à virevolter dans les rues de Paris. Idéale pour les rendez-vous galants ou pour faire semblant d'être une influenceuse mode.",
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Noir', 'Beige', 'Rouge'],
    images: [
      images.croptopcolibri, // Remplacez par le nom de votre image importée
      images.croptopcolibri, // Remplacez par le nom de votre image importée
    ],
    rating: 4.7,
    reviews: [
      { author: "Claire M.", content: "Cette jupe est magnifique ! Elle tombe parfaitement et les plis sont très bien faits.", rating: 5 },
    ],
    sku: "KRPRSS-JUP-001",
    inStock: true,
    category: "Jupes",
    isFeatured: false,
    isPopular: true,
    similarProducts: ['11', '12', '14'],
    recommendedProducts: ['1', '3', '8'],
    tags: ['jupe', 'plissée', 'féminin'],
  },
  {
    id: '14',
    name: "Pull KRPSKR Marin",
    price: 69.99,
    originalPrice: 79.99,
    descriptionShort: "Notre Pull KRPSKR Marin vous donne un look nautique chic.",
    descriptionLong: "Le Pull KRPSKR Marin est l'incontournable pour un look marin chic. Avec ses rayures classiques et sa coupe confortable, il vous donne un air de matelot parisien prêt à naviguer sur la Seine (ou au moins à en longer les quais). Idéal pour les balades au bord de l'eau ou pour faire croire que vous avez un yacht.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Bleu marine/Blanc', 'Noir/Blanc', 'Rouge/Blanc'],
    images: [
      images.hoodiemusique, // Remplacez par le nom de votre image importée
      images.hoodiemusique, // Remplacez par le nom de votre image importée
    ],
    rating: 4.6,
    reviews: [
      { author: "Antoine L.", content: "Ce pull est super ! La qualité est au rendez-vous et le style marin est parfait.", rating: 5 },
    ],
    sku: "KRPRSS-PUL-001",
    inStock: true,
    category: "Pulls",
    isFeatured: true,
    isPopular: true,
    similarProducts: ['2', '4', '9'],
    recommendedProducts: ['1', '3', '7'],
    tags: ['pull', 'marin', 'rayures'],
  },
  {
    id: '15',
    name: "Ceinture KRPSKR Cuir",
    price: 39.99,
    originalPrice: 49.99,
    descriptionShort: "Notre Ceinture KRPSKR Cuir ajoute une touche de finition à votre tenue.",
    descriptionLong: "La Ceinture KRPSKR Cuir est l'accessoire parfait pour finaliser votre look. Fabriquée en cuir de qualité, elle allie style et durabilité. Que vous l'utilisiez pour maintenir votre pantalon ou juste pour le style, elle vous donnera un air de fashionista parisien. Attention, elle ne vous aidera pas à digérer après un repas trop copieux chez mamie.",
    sizes: ['85cm', '90cm', '95cm', '100cm'],
    colors: ['Noir', 'Marron', 'Cognac'],
    images: [
      images.plume, // Remplacez par le nom de votre image importée
      images.plume, // Remplacez par le nom de votre image importée
    ],
    rating: 4.5,
    reviews: [
      { author: "Paul R.", content: "Très belle ceinture ! Le cuir est de qualité et la boucle est élégante.", rating: 4 },
    ],
    sku: "KRPRSS-CEN-001",
    inStock: true,
    category: "Accessoires",
    isFeatured: false,
    isPopular: true,
    similarProducts: ['3', '7', '8'],
    recommendedProducts: ['5', '9', '12'],
    tags: ['ceinture', 'cuir', 'accessoire'],
  },
  {
    id: '16',
    name: "Chaussettes KRPSKR Fun",
    price: 12.99,
    originalPrice: 14.99,
    descriptionShort: "Nos Chaussettes KRPSKR Fun ajoutent une touche d'originalité à votre look.",
    descriptionLong: "Les Chaussettes KRPSKR Fun sont l'accessoire parfait pour ajouter une touche d'humour à votre tenue. Avec leurs motifs originaux et décalés, elles feront sourire tous ceux qui les apercevront. Idéales pour égayer une réunion ennuyeuse ou pour montrer que vous avez un sens de l'humour (même si vos blagues ne font rire personne).",
    sizes: ['35-38', '39-42', '43-46'],
    colors: ['Multicolore'],
    images: [
      images.chien, // Remplacez par le nom de votre image importée
      images.chien, // Remplacez par le nom de votre image importée
    ],
    rating: 4.8,
    reviews: [
      { author: "Léa S.", content: "Ces chaussettes sont géniales ! Les motifs sont super fun et la qualité est bonne.", rating: 5 },
    ],
    sku: "KRPRSS-CHS-001",
    inStock: true,
    category: "Accessoires",
    isFeatured: true,
    isPopular: true,
    similarProducts: ['3', '7', '15'],
    recommendedProducts: ['1', '2', '4'],
    tags: ['chaussettes', 'fun', 'accessoire'],
  },
  {
    id: '17',
    name: "Écharpe KRPSKR Cachemire",
    price: 79.99,
    originalPrice: 99.99,
    descriptionShort: "Notre Écharpe KRPSKR Cachemire vous enveloppe de douceur et d'élégance.",
    descriptionLong: "L'Écharpe KRPSKR Cachemire est le summum du luxe et du confort. Fabriquée en cachemire de la plus haute qualité, elle vous tiendra chaud tout en vous donnant un air sophistiqué. Parfaite pour affronter les hivers parisiens avec style ou pour faire semblant d'être un aristocrate en exil.",
    sizes: ['Taille unique'],
    colors: ['Gris', 'Beige', 'Bordeaux'],
    images: [
      images.flatlay_greeting_card_mockup_with_leaf_and_colors_on_table_18, // Remplacez par le nom de votre image importée
      images.flatlay_greeting_card_mockup_with_leaf_and_colors_on_table_18, // Remplacez par le nom de votre image importée
    ],
    rating: 4.9,
    reviews: [
      { author: "Julien M.", content: "Cette écharpe est un pur bonheur ! Douce, chaude et élégante.", rating: 5 },
    ],
    sku: "KRPRSS-ECH-001",
    inStock: true,
    category: "Accessoires",
    isFeatured: true,
    isPopular: true,
    similarProducts: ['7', '15', '16'],
    recommendedProducts: ['6', '12', '14'],
    tags: ['écharpe', 'cachemire', 'luxe'],
  },
  {
    id: '18',
    name: "Débardeur KRPSKR Sport",
    price: 29.99,
    originalPrice: 34.99,
    descriptionShort: "Notre Débardeur KRPSKR Sport allie performance et style.",
    descriptionLong: "Le Débardeur KRPSKR Sport est le vêtement parfait pour vos séances de sport (ou de Netflix, on ne juge pas). Fabriqué dans un tissu technique respirant, il vous gardera au sec pendant vos efforts. Idéal pour le jogging, la salle de sport ou pour faire croire que vous êtes un athlète professionnel en pause café.",
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Noir', 'Blanc', 'Bleu'],
    images: [
      images.hoodiecolibri, // Remplacez par le nom de votre image importée
      images.hoodiecolibri, // Remplacez par le nom de votre image importée
    ],
    rating: 4.6,
    reviews: [
      { author: "Sarah L.", content: "Super débardeur ! Confortable et respirant, parfait pour le sport.", rating: 5 },
    ],
    sku: "KRPRSS-DBD-001",
    inStock: true,
    category: "Sport",
    isFeatured: false,
    isPopular: true,
    similarProducts: ['1', '4', '10'],
    recommendedProducts: ['3', '16', '19'],
    tags: ['débardeur', 'sport', 'technique'],
  },
  {
    id: '19',
    name: "Lunettes KRPSKR Solaires",
    price: 89.99,
    originalPrice: 109.99,
    descriptionShort: "Nos Lunettes KRPSKR Solaires protègent vos yeux avec style.",
    descriptionLong: "Les Lunettes KRPSKR Solaires sont l'accessoire indispensable pour un look cool et protégé. Avec leur design élégant et leurs verres de haute qualité, elles vous protégeront du soleil tout en vous donnant un air de star incognito. Parfaites pour les terrasses ensoleillées ou pour faire semblant de ne pas reconnaître vos collègues dans la rue.",
    sizes: ['Taille unique'],
    colors: ['Noir', 'Écaille', 'Doré'],
    images: [
      images.krpskrboite, // Remplacez par le nom de votre image importée
      images.krpskrboite, // Remplacez par le nom de votre image importée
    ],
    rating: 4.7,
    reviews: [
      { author: "Marc D.", content: "Ces lunettes sont top ! Le style est classe et la protection solaire est efficace.", rating: 5 },
    ],
    sku: "KRPRSS-LUN-001",
    inStock: true,
    category: "Accessoires",
    isFeatured: true,
    isPopular: true,
    similarProducts: ['3', '8', '15'],
    recommendedProducts: ['1', '6', '11'],
    tags: ['lunettes', 'solaire', 'accessoire'],
  },
  {
    id: '20',
    name: "Pantalon KRPSKR Chino",
    price: 69.99,
    originalPrice: 79.99,
    descriptionShort: "Notre Pantalon KRPSKR Chino offre un look décontracté-chic polyvalent.",
    descriptionLong: "Le Pantalon KRPSKR Chino est le must-have de toute garde-robe qui se respecte. Avec sa coupe impeccable et son tissu confortable, il vous accompagnera aussi bien au bureau que pour vos sorties entre amis. Parfait pour un look casual chic ou pour faire croire que vous êtes un jeune entrepreneur branché (même si vous passez vos journées en pyjama en télétravail).",
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Beige', 'Bleu marine', 'Kaki'],
    images: [
      images.krpskrcarte, // Remplacez par le nom de votre image importée
      images.krpskrcarte, // Remplacez par le nom de votre image importée
    ],
    rating: 4.5,
    reviews: [
      { author: "Nicolas P.", content: "Excellent pantalon ! La coupe est parfaite et le tissu est de qualité.", rating: 4 },
    ],
    sku: "KRPRSS-PNT-002",
    inStock: true,
    category: "Pantalons",
    isFeatured: true,
    isPopular: true,
    similarProducts: ['5', '9', '12'],
    recommendedProducts: ['2', '6', '14'],
    tags: ['pantalon', 'chino', 'casual'],
  },
];

export const categories = [
  { id: '1', name: "T-shirts", image: images.dernierarbre1 },
  { id: '2', name: "Hoodies", image: images.hoodiemusique1},
  { id: '3', name: "Accessoires", image: images.coqueportable},
  { id: '4', name: "Pantalons", image: images.croptopcolibri },
  { id: '5', name: "Robes", image: images.guitarepied },
  { id: '6', name: "Vestes", image: images.tshirtnavetlit2 },
  { id: '7', name: "Sport", image: images.sweatmusique1},
];

export const getFeaturedProducts = () => products.filter(product => product.isFeatured);
export const getPopularCategories = () => categories;
export const getPromoProducts = () => products.filter(product => product.price < product.originalPrice);
export const getSimilarProducts = (productId: string) => {
  const product = products.find(p => p.id === productId);
  return product ? product.similarProducts.map(id => products.find(p => p.id === id)).filter(Boolean) : [];
};
export const getRecommendedProducts = (productId: string) => {
  const product = products.find(p => p.id === productId);
  return product ? product.recommendedProducts.map(id => products.find(p => p.id === id)).filter(Boolean) : [];
};