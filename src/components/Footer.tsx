
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ephemera-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium">Ephemera</h3>
            <p className="text-gray-300 text-sm">
              Curated collection of unique and thoughtfully crafted items that bring beauty and meaning to everyday life.
            </p>
          </div>
          
          {/* Shop column */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products?category=home" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products?category=art" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Art
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Info column */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Info</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact column */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">
                1234 Market Street<br />
                Suite 100<br />
                San Francisco, CA 94103
              </li>
              <li className="text-gray-300 text-sm">
                hello@ephemera.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Ephemera. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Pinterest
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
