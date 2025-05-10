
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  featured?: boolean;
  inStock: boolean;
  rating?: number;
  ratingCount?: number;
  badges?: string[];
}

export interface Category {
  id: number;
  name: string;
  image?: string;
}
