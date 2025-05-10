
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Home = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-gray-100 pb-16 md:pb-0">
      <Hero />
      
      {/* Top Categories */}
      <div className="container mx-auto px-4 py-4">
        <h2 className="text-lg font-medium text-gray-800 mb-3">Top Categories</h2>
        <CategoryGrid />
      </div>
      
      {/* Flash Sales */}
      <div className="container mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-medium text-gray-800">Flash Sales</h2>
              <p className="text-sm text-gray-500">Deals end in 06:12:45</p>
            </div>
            <Button asChild variant="link" className="text-orange-500">
              <Link to="/products">See All</Link>
            </Button>
          </div>
          <FeaturedProducts />
        </div>
      </div>
      
      {/* Top Deals Banner */}
      <div className="container mx-auto px-4 py-4">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-sm p-6 text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Top Deals</h2>
          <p className="mb-4">Get up to 70% off on top brands!</p>
          <Button asChild className="bg-white text-orange-500 hover:bg-gray-100">
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-medium text-gray-800 mb-2 text-center">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-4 text-center">
            Subscribe for exclusive offers and updates
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
                aria-label="Email address"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add bottom padding for mobile to account for the fixed navigation */}
      {isMobile && <div className="h-16"></div>}
    </div>
  );
};

export default Home;
