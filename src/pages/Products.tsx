
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    setActiveCategory(categoryParam);
    
    if (categoryParam) {
      setFilteredProducts(products.filter(product => product.category === categoryParam));
    } else {
      setFilteredProducts(products);
    }
  }, [searchParams]);
  
  const handleCategoryFilter = (categoryName: string | null) => {
    if (categoryName === null) {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryName });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-medium text-ephemera-charcoal">Shop</h1>
        <p className="text-gray-600 mt-2">Discover our curated collection of unique treasures.</p>
      </header>
      
      {/* Category filters */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            onClick={() => handleCategoryFilter(null)}
            className={activeCategory === null ? "bg-ephemera-purple hover:bg-ephemera-purple/90" : ""}
          >
            All
          </Button>
          
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.name ? "default" : "outline"}
              onClick={() => handleCategoryFilter(category.name)}
              className={`whitespace-nowrap capitalize ${
                activeCategory === category.name ? "bg-ephemera-purple hover:bg-ephemera-purple/90" : ""
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Products grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-600">No products found</h3>
          <Button 
            onClick={() => handleCategoryFilter(null)} 
            variant="link" 
            className="text-ephemera-purple mt-2"
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Products;
