
import { useState, useEffect } from "react";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { useIsMobile } from "@/hooks/use-mobile";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    // In a real app, this would be an API call
    setFeaturedProducts(getFeaturedProducts());
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
