
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { X } from "lucide-react";

const AdBanner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const isMobile = useIsMobile();

  if (!showBanner) return null;

  return (
    <div className="bg-orange-500 text-white relative">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="pl-0">
            <div className="w-full py-2 px-4 flex items-center justify-center">
              <Link to="/products" className="text-center font-medium">
                {isMobile ? "FLASH SALE! Up to 50% OFF" : "FLASH SALE! Up to 50% OFF on selected items. Shop now before it's gone!"}
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-0">
            <div className="w-full py-2 px-4 flex items-center justify-center">
              <Link to="/products" className="text-center font-medium">
                {isMobile ? "Free shipping on orders $50+" : "Free shipping on all orders above $50. Limited time offer!"}
              </Link>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <button 
        onClick={() => setShowBanner(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
        aria-label="Close banner"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default AdBanner;
