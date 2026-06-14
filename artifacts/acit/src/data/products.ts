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
    price: 39.99,
    image: "/images/tee-flat.jpeg",
    images: [
      "/images/tee-flat.jpeg",
      "/images/tee-front.jpeg",
      "/images/tee-back.jpeg",
      "/images/tee-side.jpeg",
    ],
    imageFit: "contain",
    badge: "NOUVEAU",
    description: "Le t-shirt signature Maison Sud. 100% coton ring-spun, teint en pièce pour un toucher doux et un look vintage. Coupe ample, tissu lourd — fait pour durer.",
    details: ["100% coton ring-spun américain", "Tissu lourd 206 g/m²", "Teint en pièce (garment-dyed)", "Coupe ample", "Lavage à 30°C"],
    sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
