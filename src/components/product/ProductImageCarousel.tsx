
import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

const ProductImageCarousel = ({ images, productName }: ProductImageCarouselProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image carousel */}
      <div className="relative rounded-lg overflow-hidden bg-gray-100 aspect-square">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="aspect-square relative">
                  <img 
                    src={img} 
                    alt={`${productName} - view ${index + 1}`} 
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
          className="absolute bottom-2 right-2 z-10 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
          onClick={() => {/* Implement zoom functionality */}}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-auto pb-2">
        {images.map((img, index) => (
          <div 
            key={index}
            onClick={() => setActiveImageIndex(index)}
            className={`cursor-pointer rounded-md border-2 overflow-hidden h-16 w-16 flex-shrink-0 transition-all ${
              activeImageIndex === index ? "border-ephemera-purple" : "border-gray-200 dark:border-gray-700"
            }`}
          >
            <img 
              src={img} 
              alt={`${productName} thumbnail ${index + 1}`} 
              className="h-full w-full object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageCarousel;
