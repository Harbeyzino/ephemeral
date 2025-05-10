
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingBag, ChevronRight } from "lucide-react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
          <Button asChild className="bg-ephemera-purple hover:bg-ephemera-purple/90">
            <Link to="/products">
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-medium text-gray-900 mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">Items ({cartItems.length})</h2>
            </div>
            
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <Link to={`/products/${item.id}`}>{item.name}</Link>
                        </h3>
                        <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 capitalize">{item.category}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 border-r border-gray-300 hover:bg-gray-100"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 border-l border-gray-300 hover:bg-gray-100"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-red-600"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="border-t border-gray-200 px-6 py-4">
              <button
                onClick={clearCart}
                className="text-sm text-ephemera-purple hover:underline"
              >
                Clear cart
              </button>
            </div>
          </div>
        </div>
        
        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            </div>
            
            <div className="px-6 py-4 space-y-4">
              <div className="flex justify-between text-base">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-medium">${cartTotal.toFixed(2)}</p>
              </div>
              
              <div className="flex justify-between text-base">
                <p className="text-gray-600">Shipping</p>
                <p className="font-medium">Calculated at checkout</p>
              </div>
              
              <div className="border-t border-gray-200 pt-4 flex justify-between text-base">
                <p className="text-gray-900 font-medium">Total</p>
                <p className="font-bold">${cartTotal.toFixed(2)}</p>
              </div>
              
              <Button asChild className="w-full bg-ephemera-purple hover:bg-ephemera-purple/90">
                <Link to="/checkout" className="flex items-center justify-center">
                  Proceed to Checkout
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              
              <div className="mt-4 text-center">
                <Link
                  to="/products"
                  className="text-sm text-ephemera-purple hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
