
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const CategoryGrid = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium text-ephemera-charcoal text-center mb-12">Shop by Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/products?category=${category.name}`} 
              key={category.id}
              className="group relative overflow-hidden rounded-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                {category.image && (
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-4">
                  <h3 className="text-white text-lg md:text-xl capitalize font-medium">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
