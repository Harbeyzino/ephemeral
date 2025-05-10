
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import { ChevronLeft } from "lucide-react";

const Favorites = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p>Loading favorites...</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-medium">My Favorites</h1>
          <Button asChild variant="link" className="text-gray-600 hover:text-ephemera-purple p-0">
            <Link to="/products">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to products
            </Link>
          </Button>
        </div>

        {/* Favorites grid */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
            {favorites.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-4">You haven't added any favorites yet.</p>
            <Button asChild className="bg-ephemera-purple hover:bg-ephemera-purple/90">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
