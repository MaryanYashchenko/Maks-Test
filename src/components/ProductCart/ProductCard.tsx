import type { FC } from "react";
import styles from "./ProductCard.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";

import type { ProductCardProps } from "../../types/productCard";

const ProductCard: FC<ProductCardProps> = ({
  name,
  image,
  prepTimeMinutes,
  rating,
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={name} />
      <div className={styles.cardInfo}>
        <h2 className={styles.cardName}> {name} </h2>

        <div className={styles.cardDetails}>
          <p className={styles.cardPrice}>{prepTimeMinutes}$</p>
          <p className={styles.cardRating}>
            {rating} <StarRateIcon className={styles.cardRatingIcon} />
          </p>
        </div>
        <div className={styles.cardAmount}>
          <p className={styles.cardAmountText}>0</p>
          <div className={styles.cardButtons}>
            <button className={styles.cardButton}>+</button>
            <button className={styles.cardButton}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
