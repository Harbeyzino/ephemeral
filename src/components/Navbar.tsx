
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, X, Search, User, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const { cartCount } = useCart();
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo and menu button for mobile */}
          <div className="flex items-center">
            {isMobile && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="mr-2 md:hidden"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            )}
            
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">
                Eph<span className="text-ephemera-purple">Shop</span>
              </span>
            </Link>
          </div>

          {/* Search bar */}
          {!isMobile && (
            <form onSubmit={handleSearch} className="flex-grow max-w-xl mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products, brands and categories..."
                  className="w-full h-10 pl-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit" 
                  className="absolute top-0 right-0 h-10 px-3 bg-orange-500 hover:bg-orange-600 rounded-r-md"
                >
                  <Search size={18} />
                </Button>
              </div>
            </form>
          )}

          {/* Right side icons - desktop only */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/login" className="flex flex-col items-center text-gray-600 hover:text-ephemera-purple">
                <User size={20} />
                <span className="text-xs mt-1">Account</span>
              </Link>
              <Link to="/favorites" className="flex flex-col items-center text-gray-600 hover:text-ephemera-purple">
                <Heart size={20} />
                <span className="text-xs mt-1">Favorites</span>
              </Link>
              <Link to="/cart" className="flex flex-col items-center text-gray-600 hover:text-ephemera-purple relative">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
                <span className="text-xs mt-1">Cart</span>
              </Link>
            </div>
          )}
          
          {/* Mobile cart icon */}
          {isMobile && (
            <Link to="/cart" className="relative">
              <ShoppingBag size={20} className="text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          )}
        </div>
        
        {/* Mobile search bar */}
        {isMobile && (
          <form onSubmit={handleSearch} className="mt-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-9 pl-4 pr-10 text-sm rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                className="absolute top-0 right-0 h-9 px-3 bg-orange-500 hover:bg-orange-600 rounded-r-md"
              >
                <Search size={16} />
              </Button>
            </div>
          </form>
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-2 py-2">
              <Link
                to="/"
                onClick={closeMenu}
                className="py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={closeMenu}
                className="py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                All Products
              </Link>
              <Link
                to="/login"
                onClick={closeMenu}
                className="py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                Account
              </Link>
              <Link
                to="/favorites"
                onClick={closeMenu}
                className="py-2 px-4 hover:bg-gray-100 rounded-md"
              >
                Favorites
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
