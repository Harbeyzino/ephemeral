
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-ephemera-light-purple">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-ephemera-charcoal leading-tight">
              Discover Unique <span className="text-ephemera-purple">Treasures</span> for Everyday Joy
            </h1>
            <p className="text-lg text-gray-700">
              Ephemera curates beautiful, thoughtfully crafted items from independent makers and artisans around the world.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-ephemera-purple hover:bg-ephemera-purple/90 text-white px-8 py-6"
                size="lg"
              >
                <Link to="/products">
                  Shop Collection
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-ephemera-purple text-ephemera-purple hover:bg-ephemera-purple/10"
                size="lg"
              >
                <a href="#featured">
                  Explore Featured
                </a>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg animate-slide-in">
            <img 
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200" 
              alt="Ephemera collection" 
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
