
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById, getProductsByCategory } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { ShoppingBag, ChevronLeft, Heart, ZoomIn } from "lucide-react";
import { Product } from "@/types/product";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { addToCart } = useCart();
  
  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    
    if (id) {
      const foundProduct = getProductById(Number(id));
      if (foundProduct) {
        // Add dummy images if not already available
        if (!foundProduct.images) {
          foundProduct.images = [
            foundProduct.image,
            foundProduct.image.replace('?', '?alt=1&'),
            foundProduct.image.replace('?', '?alt=2&')
          ];
        }
        setProduct(foundProduct);
        
        // Get related products (same category, excluding current product)
        const related = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== foundProduct.id)
          .slice(0, 8);
        setRelatedProducts(related);
      } else {
        setProduct(null);
      }
    }
    
    setLoading(false);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast.success(`${product.name} added to cart`);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const addToFavorites = () => {
    if (product) {
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
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p>Loading product...</p>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Product not found</h2>
        <Button asChild variant="link" className="text-ephemera-purple">
          <Link to="/products">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to all products
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* Back link */}
        <div className="mb-4">
          <Button asChild variant="link" className="text-gray-600 hover:text-ephemera-purple p-0">
            <Link to="/products">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to products
            </Link>
          </Button>
        </div>
        
        {/* Product details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16">
          {/* Product images */}
          <div className="space-y-4">
            {/* Main image carousel */}
            <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-square">
              <Carousel className="w-full">
                <CarouselContent>
                  {product.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square relative">
                        <img 
                          src={img} 
                          alt={`${product.name} - view ${index + 1}`} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <Button 
                variant="secondary" 
                size="icon" 
                className="absolute bottom-2 right-2 z-10 bg-white/80 hover:bg-white"
                onClick={() => {/* Implement zoom functionality */}}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-2 overflow-auto pb-2">
              {product.images.map((img, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`cursor-pointer rounded-md border-2 overflow-hidden h-16 w-16 flex-shrink-0 transition-all ${
                    activeImageIndex === index ? "border-ephemera-purple" : "border-gray-200"
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} thumbnail ${index + 1}`} 
                    className="h-full w-full object-cover" 
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">{product.name}</h1>
            
            {/* Pricing */}
            <div className="mb-4 flex items-center">
              {product.discountPrice ? (
                <>
                  <p className="text-xl text-orange-600 font-bold mr-2">${product.discountPrice.toFixed(2)}</p>
                  <p className="text-gray-500 line-through">${product.price.toFixed(2)}</p>
                  <span className="ml-2 bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                    {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                  </span>
                </>
              ) : (
                <p className="text-xl text-orange-600 font-bold">${product.price.toFixed(2)}</p>
              )}
            </div>
            
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.round(product.rating || 0) ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  ({product.ratingCount || 0} reviews)
                </span>
              </div>
            )}
            
            <div className="prose prose-gray mb-6">
              <p>{product.description}</p>
            </div>
            
            {/* Quantity selector */}
            <div className="flex items-center mb-6">
              <span className="mr-4 text-gray-700">Quantity</span>
              <div className="flex border border-gray-300 rounded-md">
                <button 
                  onClick={decreaseQuantity}
                  className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 py-1 flex items-center justify-center min-w-[40px]">{quantity}</span>
                <button 
                  onClick={increaseQuantity}
                  className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <Button 
                onClick={handleAddToCart}
                className="bg-ephemera-purple hover:bg-ephemera-purple/90 text-white"
                size="lg"
                disabled={!product.inStock}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              <Button 
                onClick={addToFavorites}
                variant="outline" 
                size="lg"
              >
                <Heart className="h-5 w-5 mr-2" />
                Add to Favorites
              </Button>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500 mb-1">Category: <span className="capitalize">{product.category}</span></p>
              <p className="text-sm text-gray-500">
                Availability: {product.inStock ? (
                  <span className="text-green-600">In Stock</span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </p>
            </div>
          </div>
        </div>
        
        {/* Similar products */}
        {relatedProducts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">Similar Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-4">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
