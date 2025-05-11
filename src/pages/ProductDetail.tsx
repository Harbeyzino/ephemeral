
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById, getProductsByCategory } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Product } from "@/types/product";
import { toast } from "sonner";
import ProductImageCarousel from "@/components/product/ProductImageCarousel";
import ProductPricing from "@/components/product/ProductPricing";
import ProductRating from "@/components/product/ProductRating";
import QuantitySelector from "@/components/product/QuantitySelector";
import ProductActions from "@/components/product/ProductActions";
import ProductMeta from "@/components/product/ProductMeta";
import RelatedProducts from "@/components/product/RelatedProducts";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
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
        <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4">Product not found</h2>
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
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* Back link */}
        <div className="mb-4">
          <Button asChild variant="link" className="text-gray-600 dark:text-gray-300 hover:text-ephemera-purple dark:hover:text-ephemera-purple p-0">
            <Link to="/products">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to products
            </Link>
          </Button>
        </div>
        
        {/* Product details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16">
          {/* Product images */}
          <ProductImageCarousel 
            images={product.images} 
            productName={product.name} 
          />
          
          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100 mb-2">{product.name}</h1>
            
            {/* Pricing */}
            <ProductPricing 
              price={product.price} 
              discountPrice={product.discountPrice} 
            />
            
            {/* Rating */}
            <ProductRating 
              rating={product.rating} 
              ratingCount={product.ratingCount} 
            />
            
            <div className="prose prose-gray dark:prose-invert mb-6">
              <p>{product.description}</p>
            </div>
            
            {/* Quantity selector */}
            <QuantitySelector 
              quantity={quantity}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
            />
            
            {/* Action buttons */}
            <ProductActions 
              inStock={product.inStock}
              onAddToCart={handleAddToCart}
              onAddToFavorites={addToFavorites}
            />
            
            {/* Product meta */}
            <ProductMeta 
              category={product.category} 
              inStock={product.inStock} 
            />
          </div>
        </div>
        
        {/* Similar products */}
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductDetail;
