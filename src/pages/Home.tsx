
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      
      <section className="py-20 bg-ephemera-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Join Our Community</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new product announcements, and stories from our artisans.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Email address"
              />
              <Button className="bg-white text-ephemera-purple hover:bg-white/90">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-white/80 mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from Ephemera.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
