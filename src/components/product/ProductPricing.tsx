
import React from "react";

interface ProductPricingProps {
  price: number;
  discountPrice?: number;
}

const ProductPricing = ({ price, discountPrice }: ProductPricingProps) => {
  const discountPercentage = discountPrice 
    ? Math.round(((price - discountPrice) / price) * 100) 
    : 0;
    
  return (
    <div className="mb-4 flex items-center">
      {discountPrice ? (
        <>
          <p className="text-xl text-orange-600 font-bold mr-2">${discountPrice.toFixed(2)}</p>
          <p className="text-gray-500 dark:text-gray-400 line-through">${price.toFixed(2)}</p>
          <span className="ml-2 bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300 text-xs px-2 py-1 rounded-full">
            {discountPercentage}% OFF
          </span>
        </>
      ) : (
        <p className="text-xl text-orange-600 dark:text-orange-400 font-bold">${price.toFixed(2)}</p>
      )}
    </div>
  );
};

export default ProductPricing;
