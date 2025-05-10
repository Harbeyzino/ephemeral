
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
    <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-full animate-fade-in">
      <Link to={`/products/${product.id}`} className="flex flex-col h-full">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full aspect-square object-cover rounded-t-md" 
          />
          {product.featured && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              Featured
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-medium px-2 py-1">Out of Stock</span>
            </div>
          )}
        </div>
        
        <div className="p-3 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</h3>
            <p className="mt-1 text-xs text-gray-500 capitalize">{product.category}</p>
          </div>
          
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-orange-500">${product.price.toFixed(2)}</p>
            </div>
            <Button 
              onClick={handleAddToCart} 
              variant="outline" 
              size="sm"
              className="h-8 w-8 p-0 border-gray-300 rounded-full"
              disabled={!product.inStock}
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
