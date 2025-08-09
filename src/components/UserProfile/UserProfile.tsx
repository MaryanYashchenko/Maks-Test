import styles from "./UserProfile.module.css";
import type { UserProfileProps } from "~types/userProfile";

function UserProfile({ isOpen, onClose }: UserProfileProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.profileContainer}>
      <button className={styles.profileButton}>My Profile</button>
      <button className={styles.profileButton}>Information</button>
      <button className={styles.profileButton}>Security</button>
      <button className={styles.profileButton}>Sign Out</button>
      <button className={styles.closeButton} onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default UserProfile;
