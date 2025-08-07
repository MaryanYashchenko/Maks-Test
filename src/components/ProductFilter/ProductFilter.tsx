import type { FC } from "react";
import styles from "./ProductFilter.module.css";
import type { ProductFilterProps } from "../../types/productFilter";

const ProductFilter: FC<ProductFilterProps> = ({
  label,
  selectedButton,
  onClick,
}) => {
  const filterButton = `${styles.filterButton} ${
    selectedButton ? styles["filterButtonSelected"] : ""
  }`;

  return (
    <button className={filterButton} onClick={onClick}>
      {label}
    </button>
  );
};
export default ProductFilter;
