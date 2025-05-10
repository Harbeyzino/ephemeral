
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];  // Changed from image to images array
  image: string;     // Keep for backward compatibility
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
