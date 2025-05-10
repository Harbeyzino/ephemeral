
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate, Link } from "react-router-dom";
import { CreditCard, ChevronLeft } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postal: "",
    country: "United States",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: ""
  });
  
  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast.success("Order placed successfully!");
      clearCart();
      navigate("/");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button asChild variant="link" className="text-gray-600 hover:text-ephemera-purple p-0">
          <Link to="/cart">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to cart
          </Link>
        </Button>
      </div>
      
      <h1 className="text-3xl font-medium text-gray-900 mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Shipping Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                    />
                  </div>
                  <div>
                    <label htmlFor="postal" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP / Postal Code
                    </label>
                    <input
                      type="text"
                      id="postal"
                      name="postal"
                      value={formData.postal}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Payment Information</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                  />
                </div>
                
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="XXXX XXXX XXXX XXXX"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      name="cvc"
                      value={formData.cvc}
                      onChange={handleChange}
                      placeholder="XXX"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-ephemera-purple hover:bg-ephemera-purple/90 text-white py-3 flex items-center justify-center"
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                <>
                  <CreditCard className="h-5 w-5 mr-2" />
                  Complete Order
                </>
              )}
            </Button>
          </form>
        </div>
        
        {/* Order summary */}
        <div>
          <div className="bg-white p-6 border rounded-lg shadow-sm sticky top-8">
            <h2 className="text-xl font-medium text-gray-900 mb-4">Order Summary</h2>
            
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="py-4 flex">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{item.name}</h3>
                      <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between text-base mb-2">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-medium">${cartTotal.toFixed(2)}</p>
              </div>
              
              <div className="flex justify-between text-base mb-2">
                <p className="text-gray-600">Shipping</p>
                <p className="font-medium">$5.00</p>
              </div>
              
              <div className="flex justify-between text-base mb-2">
                <p className="text-gray-600">Tax</p>
                <p className="font-medium">${(cartTotal * 0.08).toFixed(2)}</p>
              </div>
              
              <div className="border-t border-gray-200 pt-4 flex justify-between text-lg">
                <p className="text-gray-900 font-medium">Total</p>
                <p className="font-bold">${(cartTotal + 5 + cartTotal * 0.08).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
