export interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface UseOpenProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
