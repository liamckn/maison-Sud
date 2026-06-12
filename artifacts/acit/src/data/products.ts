export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  imageFit?: "contain" | "cover";
  badge?: string;
  description: string;
  details: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "tee-homme-maison-sud",
    name: "T-shirt homme Maison Sud",
    price: 29.99,
    image: "/images/tee-maison-sud-front.jpeg",
    imageFit: "cover",
    badge: "NOUVEAU",
    description: "Le t-shirt signature Maison Sud. Logo brodé sur la poitrine, coupe régulière en coton premium blanc. Inspiré par la lumière dorée de la Côte d'Azur.",
    details: ["100% Coton premium", "Coupe régulière", "Logo brodé poitrine", "Lavage à 30°C", "Fabriqué avec soin"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
