import { useState } from "react";
import type { UseOpenProps } from "~types/userProfile";

export function useOpen(initialValue = false): UseOpenProps {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
  };
}
