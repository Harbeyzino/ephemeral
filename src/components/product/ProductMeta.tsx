
import React from "react";

interface ProductMetaProps {
  category: string;
  inStock: boolean;
}

const ProductMeta = ({ category, inStock }: ProductMetaProps) => {
  return (
    <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Category: <span className="capitalize">{category}</span></p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Availability: {inStock ? (
          <span className="text-green-600 dark:text-green-400">In Stock</span>
        ) : (
          <span className="text-red-600 dark:text-red-400">Out of Stock</span>
        )}
      </p>
    </div>
  );
};

export default ProductMeta;
