
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdBanner from "./AdBanner";
import MobileBottomNav from "./MobileBottomNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLoginPopup } from "@/contexts/LoginPopupContext";

const Layout = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <AdBanner />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {isMobile && <MobileBottomNav />}
    </div>
  );
};

export default Layout;
