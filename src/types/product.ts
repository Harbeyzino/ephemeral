
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  inStock: boolean;
}

export interface Category {
  id: number;
  name: string;
  image?: string;
}
