
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { Product } from "@/types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("ephemera-cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("ephemera-cart", JSON.stringify(cartItems));
    }
    
    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setCartTotal(total);
    
    // Calculate count
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);
  
  const addToCart = (product: Product, quantity = 1) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        toast.success(`Updated ${product.name} quantity in cart`);
        return updatedItems;
      } else {
        // Add new item to cart
        toast.success(`Added ${product.name} to cart`);
        return [...prevItems, { ...product, quantity }];
      }
    });
  };
  
  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== productId);
      
      if (updatedItems.length === 0) {
        localStorage.removeItem("ephemera-cart");
      }
      
      toast.success("Item removed from cart");
      return updatedItems;
    });
  };
  
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("ephemera-cart");
    toast.success("Cart cleared");
  };
  
  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
