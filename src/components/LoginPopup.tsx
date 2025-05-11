
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPopup = ({ isOpen, onClose }: LoginPopupProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate authentication
    setTimeout(() => {
      toast.success("Logged in successfully!");
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  const handleSocialLogin = (provider: string) => {
    toast.info(`Logging in with ${provider}...`);
    // Simulate social login
    setTimeout(() => {
      toast.success(`Logged in with ${provider} successfully!`);
      onClose();
    }, 1500);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-2xl font-medium text-center">Sign In</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="popup-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="popup-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
              />
            </div>
            
            <div>
              <label htmlFor="popup-password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="popup-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="popup-remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-ephemera-purple focus:ring-ephemera-purple border-gray-300 rounded"
                />
                <label htmlFor="popup-remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-ephemera-purple hover:bg-ephemera-purple/90"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin("Facebook")}
                className="w-full"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin("Google")}
                className="w-full"
              >
                <Mail className="h-5 w-5 text-red-500" />
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin("LinkedIn")}
                className="w-full"
              >
                <Linkedin className="h-5 w-5 text-blue-700" />
              </Button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-ephemera-purple hover:underline font-medium" onClick={() => onClose()}>
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LoginPopup;
