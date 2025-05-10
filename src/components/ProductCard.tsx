
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag, Heart } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.inStock) {
      addToCart(product);
      toast.success(`${product.name} added to cart`);
    }
  };

  const handleAddToFavorites = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    let favorites = [];
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      favorites = JSON.parse(storedFavorites);
    }
    
    // Check if product is already in favorites
    const existingIndex = favorites.findIndex((fav: Product) => fav.id === product.id);
    if (existingIndex === -1) {
      favorites.push(product);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      toast.success(`${product.name} added to favorites`);
    } else {
      toast.info("This product is already in your favorites");
    }
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
          <div className="absolute top-0 right-0 p-2">
            <Button 
              onClick={handleAddToFavorites}
              variant="ghost" 
              size="sm"
              className="h-8 w-8 p-0 bg-white/70 hover:bg-white rounded-full shadow-sm"
            >
              <Heart className="h-4 w-4 text-gray-700 hover:text-red-500" />
              <span className="sr-only">Add to favorites</span>
            </Button>
          </div>
          {product.featured && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              Featured
            </div>
          )}
          {product.discountPrice && (
            <div className="absolute bottom-2 left-2 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              -{Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
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
            
            {/* Rating stars if available */}
            {product.rating && (
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-3 h-3 ${
                        star <= Math.round(product.rating || 0) ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-xs text-gray-500">
                  ({product.ratingCount || 0})
                </span>
              </div>
            )}
          </div>
          
          <div className="mt-2 flex items-center justify-between">
            <div>
              {product.discountPrice ? (
                <div>
                  <p className="text-sm font-bold text-orange-500">${product.discountPrice.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 line-through">${product.price.toFixed(2)}</p>
                </div>
              ) : (
                <p className="text-sm font-bold text-orange-500">${product.price.toFixed(2)}</p>
              )}
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
