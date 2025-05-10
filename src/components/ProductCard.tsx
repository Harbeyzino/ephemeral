
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-md animate-fade-in">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          {product.featured && (
            <div className="absolute top-2 left-2 bg-ephemera-purple text-white text-xs font-medium px-2 py-1 rounded-full">
              Featured
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="mt-1 text-lg font-medium text-gray-900 line-clamp-1">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.category}</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-lg font-medium text-gray-900">${product.price.toFixed(2)}</p>
            <Button 
              onClick={handleAddToCart} 
              variant="outline" 
              size="sm" 
              className="opacity-0 group-hover:opacity-100 transition-opacity border-ephemera-purple text-ephemera-purple hover:text-white hover:bg-ephemera-purple"
            >
              <ShoppingBag className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
