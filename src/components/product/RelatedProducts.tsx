
import React from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  if (products.length === 0) return null;
  
  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Similar Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
