
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById, getProductsByCategory } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { ShoppingBag, ChevronLeft } from "lucide-react";
import { Product } from "@/types/product";

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
      setProduct(foundProduct || null);
      
      if (foundProduct) {
        // Get related products (same category, excluding current product)
        const related = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
    
    setLoading(false);
  }, [id]);
  
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
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back link */}
        <div className="mb-6">
          <Button asChild variant="link" className="text-gray-600 hover:text-ephemera-purple p-0">
            <Link to="/products">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to products
            </Link>
          </Button>
        </div>
        
        {/* Product details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product image */}
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-full w-full object-cover" 
            />
          </div>
          
          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-medium text-gray-900 mb-2">{product.name}</h1>
            <p className="text-xl text-gray-900 mb-6">${product.price.toFixed(2)}</p>
            
            <div className="prose prose-gray mb-8">
              <p>{product.description}</p>
            </div>
            
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
            
            <Button 
              onClick={handleAddToCart}
              className="bg-ephemera-purple hover:bg-ephemera-purple/90 text-white"
              size="lg"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            
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
        
        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
