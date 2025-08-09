import styles from "./ShoppingCart.module.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
function ShoppingCart() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/");
  };
  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <button className={styles.cartClose} onClick={goToMain}>
          <CloseIcon className={styles.cartCloseIcon} />
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
