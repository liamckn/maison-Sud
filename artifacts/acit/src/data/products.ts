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
    id: "tee-welcome-st-tropez",
    name: "TEE WELCOME TO ST-TROPEZ",
    price: 29.99,
    image: "/images/tee-st-tropez.png",
    badge: "NOUVEAU",
    description: "Le tee qui t'emmène direct sur la Méditerranée. Dos imprimé avec le graphic iconique — yacht, palmier, Saint-Tropez. Coupe oversize, 100% coton premium.",
    details: ["100% Coton biologique", "Coupe oversize", "Print dos haute qualité", "Lavage à 30°C", "Fabriqué en France"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "tee-fuck-taxes",
    name: "TEE FUCK TAXES",
    price: 29.99,
    image: "/images/tee-fuck-taxes.png",
    badge: "BEST-SELLER",
    description: "Le statement tee des gens qui ont compris. FUCK TAXES en relief sur fond blanc, pour ceux qui font travailler leur argent plus qu'eux-mêmes.",
    details: ["100% Coton biologique", "Coupe oversize", "Print velours relief", "Lavage à 30°C", "Fabriqué en France"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "tee-smic",
    name: "TEE SMIC",
    price: 29.99,
    image: "/images/tee-smic.png",
    description: "St-tropez. Monaco. Ibiza. Courchevel. Quatre destinations, une vérité. Le tee pour ceux qui savent que le SMIC ça peut aussi vouloir dire autre chose.",
    details: ["100% Coton biologique", "Coupe oversize", "Print dos typo signature", "Lavage à 30°C", "Fabriqué en France"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
