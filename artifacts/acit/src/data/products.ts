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

export const products: Product[] = [];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
