
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, X, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold text-ephemera-charcoal">
            Ephemera
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/") 
                ? "text-ephemera-purple font-medium" 
                : "text-gray-600 hover:text-ephemera-purple"
              } transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`${
                isActive("/products") 
                ? "text-ephemera-purple font-medium" 
                : "text-gray-600 hover:text-ephemera-purple"
              } transition-colors duration-200`}
            >
              Shop
            </Link>
          </div>

          {/* User actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-ephemera-purple">
              <User size={20} />
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingBag size={20} className="text-gray-600 hover:text-ephemera-purple" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-ephemera-purple text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative mr-2">
              <ShoppingBag size={20} className="text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-ephemera-purple text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                to="/"
                onClick={closeMenu}
                className={`${
                  isActive("/") 
                  ? "text-ephemera-purple font-medium" 
                  : "text-gray-600"
                } py-2`}
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={closeMenu}
                className={`${
                  isActive("/products") 
                  ? "text-ephemera-purple font-medium" 
                  : "text-gray-600"
                } py-2`}
              >
                Shop
              </Link>
              <Link
                to="/login"
                onClick={closeMenu}
                className={`${
                  isActive("/login") 
                  ? "text-ephemera-purple font-medium" 
                  : "text-gray-600"
                } py-2`}
              >
                Account
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
