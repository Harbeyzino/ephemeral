
import React from "react";
import { ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductActionsProps {
  inStock: boolean;
  onAddToCart: () => void;
  onAddToFavorites: () => void;
}

const ProductActions = ({ inStock, onAddToCart, onAddToFavorites }: ProductActionsProps) => {
  return (
    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
      <Button 
        onClick={onAddToCart}
        className="bg-ephemera-purple hover:bg-ephemera-purple/90 text-white dark:bg-ephemera-purple dark:hover:bg-ephemera-purple/90"
        size="lg"
        disabled={!inStock}
      >
        <ShoppingBag className="h-5 w-5 mr-2" />
        {inStock ? "Add to Cart" : "Out of Stock"}
      </Button>
      <Button 
        onClick={onAddToFavorites}
        variant="outline" 
        size="lg"
      >
        <Heart className="h-5 w-5 mr-2" />
        Add to Favorites
      </Button>
    </div>
  );
};

export default ProductActions;
