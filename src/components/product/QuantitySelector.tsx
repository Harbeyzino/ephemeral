
import React from "react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector = ({ quantity, onIncrease, onDecrease }: QuantitySelectorProps) => {
  return (
    <div className="flex items-center mb-6">
      <span className="mr-4 text-gray-700 dark:text-gray-300">Quantity</span>
      <div className="flex border border-gray-300 dark:border-gray-700 rounded-md">
        <button 
          onClick={onDecrease}
          className="px-3 py-1 border-r border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="px-4 py-1 flex items-center justify-center min-w-[40px]">{quantity}</span>
        <button 
          onClick={onIncrease}
          className="px-3 py-1 border-l border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
