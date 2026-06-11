export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  description: string;
  details: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "tee-acit-sunset",
    name: "TEE ACIT SUNSET",
    price: 65,
    image: "/images/tee.png",
    badge: "NOUVEAU",
    description: "Le tee-shirt iconique de la maison ACIT. Coupe premium oversize, broderie ton-sur-ton sur la poitrine. Conçu pour les matins sur la terrasse et les nuits sur le port.",
    details: ["100% Coton biologique", "Coupe oversize", "Broderie ACIT chest logo", "Lavage à 30°C", "Fabriqué en France"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "short-riviera",
    name: "SHORT RIVIERA",
    price: 85,
    image: "/images/shorts.png",
    description: "Le short de bain qui définit l'été. Coupe mi-longue, séchage rapide, bande latérale signature ACIT. Du port de Monaco à la plage de Pampelonne.",
    details: ["100% Polyester recyclé", "Séchage ultra-rapide", "Bande latérale contrastée", "Poche zippée imperméable", "Longueur 21cm"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "casquette-monaco",
    name: "CASQUETTE MONACO",
    price: 55,
    image: "/images/cap.png",
    badge: "BEST-SELLER",
    description: "La casquette structurée qui ne quitte jamais ceux qui savent. Logo ACIT brodé à plat sur le front, fermeture cuir ajustable. Une pièce intemporelle.",
    details: ["Shell 100% Coton twill", "Broderie ACIT flat logo", "Fermeture cuir ajustable", "Visière pré-courbée", "Taille unique"],
    sizes: ["Taille Unique"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
