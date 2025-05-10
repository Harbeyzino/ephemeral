
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useIsMobile } from "@/hooks/use-mobile";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
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
    <div className="container mx-auto px-4 py-4 bg-gray-100">
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h1 className="text-xl font-medium text-gray-800">All Products</h1>
        {activeCategory && (
          <div className="flex items-center mt-2">
            <span className="text-sm text-gray-500 mr-2">Category:</span>
            <div className="flex items-center bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
              <span className="capitalize">{activeCategory}</span>
              <button 
                onClick={() => handleCategoryFilter(null)}
                className="ml-1 font-bold"
                aria-label="Clear filter"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Category filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4 overflow-x-auto">
        <div className="flex space-x-2">
          <Button
            size="sm"
            variant={activeCategory === null ? "default" : "outline"}
            onClick={() => handleCategoryFilter(null)}
            className={`text-xs ${activeCategory === null ? "bg-orange-500 hover:bg-orange-600 text-white" : ""}`}
          >
            All
          </Button>
          
          {categories.map(category => (
            <Button
              key={category.id}
              size="sm"
              variant={activeCategory === category.name ? "default" : "outline"}
              onClick={() => handleCategoryFilter(category.name)}
              className={`whitespace-nowrap capitalize text-xs ${
                activeCategory === category.name ? "bg-orange-500 hover:bg-orange-600 text-white" : ""
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Products grid */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <h3 className="text-lg text-gray-600">No products found</h3>
            <Button 
              onClick={() => handleCategoryFilter(null)} 
              variant="link" 
              className="text-orange-500 mt-2"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>

      {isMobile && <div className="h-16"></div>}
    </div>
  );
};

export default Products;
