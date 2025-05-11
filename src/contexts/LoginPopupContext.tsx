
import { createContext, useContext, useState, ReactNode } from "react";
import LoginPopup from "@/components/LoginPopup";

interface LoginPopupContextType {
  openLoginPopup: () => void;
  closeLoginPopup: () => void;
}

const LoginPopupContext = createContext<LoginPopupContextType | undefined>(undefined);

export function LoginPopupProvider({ children }: { children: ReactNode }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginPopup = () => setIsLoginOpen(true);
  const closeLoginPopup = () => setIsLoginOpen(false);

  return (
    <LoginPopupContext.Provider value={{ openLoginPopup, closeLoginPopup }}>
      {children}
      <LoginPopup isOpen={isLoginOpen} onClose={closeLoginPopup} />
    </LoginPopupContext.Provider>
  );
}

export function useLoginPopup() {
  const context = useContext(LoginPopupContext);
  if (context === undefined) {
    throw new Error("useLoginPopup must be used within a LoginPopupProvider");
  }
  return context;
}
