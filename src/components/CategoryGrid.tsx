
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { useIsMobile } from "@/hooks/use-mobile";

const CategoryGrid = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4">
      {categories.map((category) => (
        <Link 
          to={`/products?category=${category.name}`} 
          key={category.id}
          className="flex flex-col items-center p-2 bg-white rounded-lg hover:shadow-md transition-shadow"
        >
          <div className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} rounded-full overflow-hidden bg-gray-100 mb-2`}>
            {category.image && (
              <img 
                src={category.image} 
                alt={category.name} 
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <h3 className="text-xs md:text-sm text-center capitalize truncate w-full">
            {category.name}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;
