
import { useState, useEffect } from "react";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    // In a real app, this would be an API call
    const products = getFeaturedProducts();
    
    // Add dummy images for each product if not already available
    const productsWithImages = products.map(product => {
      if (!product.images) {
        return {
          ...product,
          images: [
            product.image,
            product.image.replace('?', '?alt=1&'),
            product.image.replace('?', '?alt=2&')
          ]
        };
      }
      return product;
    });
    
    setFeaturedProducts(productsWithImages);
  }, []);

  return (
    <div className="relative">
      {isMobile ? (
        <Carousel className="w-full">
          <CarouselContent>
            {featuredProducts.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2" />
          <CarouselNext className="absolute right-2 top-1/2" />
        </Carousel>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;
