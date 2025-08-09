import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./Header.module.css";
import { useOpen } from "../../hooks/useOpen";
import UserProfile from "../UserProfile/UserProfile";
import { useNavigate } from "react-router-dom";
function Header() {
  const {
    isOpen: isProfileOpen,
    open: openProfile,
    close: closeProfile,
  } = useOpen();

  const navigate = useNavigate();
  if (location.pathname === "/cart") return null;
  const goToCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <header className={styles.headerContainer}>
        <button className={styles.headerButton} onClick={openProfile}>
          <PersonOutlineIcon className={styles.headerIcon} />
        </button>
        <h1 className={styles.headerTitle}>Products List</h1>

        <button className={styles.headerButton}>
          <ShoppingCartIcon className={styles.headerIcon} onClick={goToCart} />
          <span className={styles.cartBadge}>0</span>
        </button>
      </header>

      <UserProfile isOpen={isProfileOpen} onClose={closeProfile} />
    </>
  );
}

export default Header;
