
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const SalePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if this is the user's first visit
    const hasVisited = localStorage.getItem("hasVisited");
    
    if (!hasVisited) {
      // Set a delay before showing the popup
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Mark that the user has visited before
        localStorage.setItem("hasVisited", "true");
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-2 border-orange-500">
        <DialogTitle className="text-2xl font-bold text-center text-orange-600">
          Special Offer for New Customers!
        </DialogTitle>
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
          <DialogDescription className="text-center text-base text-gray-800 mb-4">
            Enjoy <span className="font-bold text-orange-600 text-xl">20% OFF</span> your first purchase when you sign up today!
          </DialogDescription>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-700">Use code: <span className="font-bold">WELCOME20</span></p>
            <p className="text-sm text-gray-700">Valid for 24 hours only</p>
          </div>
          
          <div className="mt-6 flex justify-center gap-4">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => window.location.href = "/register"}
            >
              Sign Up Now
            </Button>
            <Button 
              variant="outline" 
              className="border-orange-500 text-orange-500 hover:bg-orange-50"
              onClick={() => setIsOpen(false)}
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SalePopup;
