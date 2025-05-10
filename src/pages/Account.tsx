
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Account = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [isUpdating, setIsUpdating] = useState(false);
  
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    
    // Simulate update
    setTimeout(() => {
      toast.success("Profile updated successfully!");
      setIsUpdating(false);
    }, 1000);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-medium text-gray-900 mb-8">My Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 border rounded-lg shadow-sm">
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="block px-4 py-2 rounded-md bg-ephemera-purple/10 text-ephemera-purple font-medium">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                    Addresses
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                    Payment Methods
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                    Notifications
                  </a>
                </li>
                <li className="border-t border-gray-200 pt-2 mt-2">
                  <Link to="/" className="block px-4 py-2 rounded-md text-red-600 hover:bg-gray-50">
                    Sign Out
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Profile content */}
        <div className="md:col-span-2">
          <div className="bg-white p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-medium text-gray-900 mb-6">Profile Information</h2>
            
            <form onSubmit={handleUpdateProfile} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                />
              </div>
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  disabled={isUpdating}
                  className="bg-ephemera-purple hover:bg-ephemera-purple/90"
                >
                  {isUpdating ? "Updating..." : "Update Profile"}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="bg-white p-6 border rounded-lg shadow-sm mt-6">
            <h2 className="text-xl font-medium text-gray-900 mb-6">Change Password</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                />
              </div>
              
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                />
              </div>
              
              <div>
                <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmNewPassword"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ephemera-purple"
                />
              </div>
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="bg-ephemera-purple hover:bg-ephemera-purple/90"
                >
                  Change Password
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
