
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Home, ShoppingBag, User, Search, Menu } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const MobileBottomNav = () => {
  const location = useLocation();
  const { cartCount } = useCart();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-40 md:hidden">
      <div className="flex justify-around items-center py-2">
        <Link to="/" className="flex flex-col items-center px-3 py-1">
          <Home 
            size={20} 
            className={isActive("/") ? "text-ephemera-purple" : "text-gray-500"} 
          />
          <span className={`text-xs mt-1 ${isActive("/") ? "text-ephemera-purple" : "text-gray-500"}`}>
            Home
          </span>
        </Link>
        
        <Link to="/products" className="flex flex-col items-center px-3 py-1">
          <Search 
            size={20} 
            className={isActive("/products") ? "text-ephemera-purple" : "text-gray-500"}
          />
          <span className={`text-xs mt-1 ${isActive("/products") ? "text-ephemera-purple" : "text-gray-500"}`}>
            Search
          </span>
        </Link>
        
        <Link to="/cart" className="flex flex-col items-center px-3 py-1 relative">
          <ShoppingBag 
            size={20} 
            className={isActive("/cart") ? "text-ephemera-purple" : "text-gray-500"}
          />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
          <span className={`text-xs mt-1 ${isActive("/cart") ? "text-ephemera-purple" : "text-gray-500"}`}>
            Cart
          </span>
        </Link>
        
        <Link to="/login" className="flex flex-col items-center px-3 py-1">
          <User 
            size={20} 
            className={isActive("/login") ? "text-ephemera-purple" : "text-gray-500"}
          />
          <span className={`text-xs mt-1 ${isActive("/login") ? "text-ephemera-purple" : "text-gray-500"}`}>
            Account
          </span>
        </Link>
        
        <button className="flex flex-col items-center px-3 py-1">
          <Menu size={20} className="text-gray-500" />
          <span className="text-xs mt-1 text-gray-500">More</span>
        </button>
      </div>
    </div>
  );
};

export default MobileBottomNav;
