
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call
    setFeaturedProducts(getFeaturedProducts());
  }, []);

  return (
    <section id="featured" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-medium text-ephemera-charcoal">Featured Products</h2>
          <Button asChild variant="outline" className="mt-4 md:mt-0 border-ephemera-purple text-ephemera-purple hover:bg-ephemera-purple/10">
            <Link to="/products">
              View All Products
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
