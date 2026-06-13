export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images?: string[];
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
    image: "/images/tee-flat.jpeg",
    images: [
      "/images/tee-flat.jpeg",
      "/images/tee-front.jpeg",
      "/images/tee-back.jpeg",
      "/images/tee-side.jpeg",
    ],
    imageFit: "contain",
    badge: "NOUVEAU",
    description: "Le t-shirt signature Maison Sud. Logo brodé sur la poitrine, coupe régulière en coton premium blanc. Inspiré par la lumière dorée de la Côte d'Azur.",
    details: ["100% Coton premium", "Coupe régulière", "Logo brodé poitrine", "Lavage à 30°C", "Fabriqué avec soin"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
