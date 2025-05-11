
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Mail, LogIn, UserPlus } from "lucide-react";
import { toast } from "sonner";

interface LoginPopupProps {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
  onSwitchToLogin: () => void;
}

const LoginPopup = ({ 
  isLoginOpen, 
  isRegisterOpen, 
  onClose,
  onSwitchToRegister,
  onSwitchToLogin
}: LoginPopupProps) => {
  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmittingLogin, setIsSubmittingLogin] = useState(false);
  
  // Register state
  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmittingRegister, setIsSubmittingRegister] = useState(false);
  
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLogin(true);
    
    // Simulate authentication
    setTimeout(() => {
      toast.success("Logged in successfully!");
      setIsSubmittingLogin(false);
      onClose();
    }, 1000);
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerPassword !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    
    setIsSubmittingRegister(true);
    
    // Simulate registration
    setTimeout(() => {
      toast.success("Account created successfully!");
      setIsSubmittingRegister(false);
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

  const handleSocialSignup = (provider: string) => {
    toast.info(`Signing up with ${provider}...`);
    // Simulate social signup
    setTimeout(() => {
      toast.success(`Account created with ${provider} successfully!`);
      onClose();
    }, 1500);
  };

  return (
    <>
      {/* Login Dialog */}
      <Dialog open={isLoginOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium text-center">Sign In</DialogTitle>
          </DialogHeader>
          
          <div className="mt-6">
            <form onSubmit={handleLoginSubmit} className="space-y-4">
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
                disabled={isSubmittingLogin}
                className="w-full bg-ephemera-purple hover:bg-ephemera-purple/90"
              >
                {isSubmittingLogin ? "Signing in..." : "Sign In"}
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
                <button 
                  className="text-ephemera-purple hover:underline font-medium" 
                  onClick={onSwitchToRegister}
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Register Dialog */}
      <Dialog open={isRegisterOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium text-center">Create an Account</DialogTitle>
          </DialogHeader>
          
          <div className="mt-6">
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                />
              </div>
              
              <div>
                <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="register-email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                />
              </div>
              
              <div>
                <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="register-password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-ephemera-purple focus:ring-ephemera-purple border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the{" "}
                  <a href="#" className="text-ephemera-purple hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-ephemera-purple hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmittingRegister}
                className="w-full bg-ephemera-purple hover:bg-ephemera-purple/90"
              >
                {isSubmittingRegister ? "Creating account..." : "Create Account"}
              </Button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background text-gray-500">Or sign up with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleSocialSignup("Facebook")}
                  className="w-full"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleSocialSignup("Google")}
                  className="w-full"
                >
                  <Mail className="h-5 w-5 text-red-500" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleSocialSignup("LinkedIn")}
                  className="w-full"
                >
                  <Linkedin className="h-5 w-5 text-blue-700" />
                </Button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <button 
                  className="text-ephemera-purple hover:underline font-medium" 
                  onClick={onSwitchToLogin}
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginPopup;
