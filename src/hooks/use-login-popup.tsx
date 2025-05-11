
import { useLoginPopup as useLoginPopupContext } from "@/contexts/LoginPopupContext";

export const useLoginPopup = () => {
  return useLoginPopupContext();
};
