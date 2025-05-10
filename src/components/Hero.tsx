
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <div className="container mx-auto px-4 pt-4 pb-2">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="pl-0">
            <div className="relative rounded-lg overflow-hidden h-[180px] md:h-[300px] lg:h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200" 
                alt="Discount sale"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-6 md:px-12">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
                  Big Sale Up To 50% Off
                </h1>
                <p className="text-white/90 text-sm md:text-base mb-4 max-w-md">
                  Discover amazing deals on our collection
                </p>
                <Button 
                  asChild 
                  className="bg-orange-500 hover:bg-orange-600 text-white w-fit"
                  size={isMobile ? "sm" : "default"}
                >
                  <Link to="/products">
                    Shop Now
                  </Link>
                </Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-0">
            <div className="relative rounded-lg overflow-hidden h-[180px] md:h-[300px] lg:h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200" 
                alt="New collection"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-6 md:px-12">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
                  New Arrivals
                </h1>
                <p className="text-white/90 text-sm md:text-base mb-4 max-w-md">
                  Check out our latest collections
                </p>
                <Button 
                  asChild 
                  className="bg-orange-500 hover:bg-orange-600 text-white w-fit"
                  size={isMobile ? "sm" : "default"}
                >
                  <Link to="/products">
                    Explore
                  </Link>
                </Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Hero;
