
import { createContext, useContext, useState, ReactNode } from "react";
import LoginPopup from "@/components/LoginPopup";

interface LoginPopupContextType {
  openLoginPopup: () => void;
  openRegisterPopup: () => void;
  closePopup: () => void;
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
}

const LoginPopupContext = createContext<LoginPopupContextType | undefined>(undefined);

export function LoginPopupProvider({ children }: { children: ReactNode }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLoginPopup = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const openRegisterPopup = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const closePopup = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  return (
    <LoginPopupContext.Provider value={{ 
      openLoginPopup, 
      openRegisterPopup, 
      closePopup, 
      isLoginOpen, 
      isRegisterOpen 
    }}>
      {children}
      <LoginPopup 
        isLoginOpen={isLoginOpen}
        isRegisterOpen={isRegisterOpen}
        onClose={closePopup}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
        onSwitchToLogin={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />
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
