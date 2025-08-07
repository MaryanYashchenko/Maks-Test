import styles from "./ProductCardList.module.css";
import type { FC } from "react";
import ProductCard from "../ProductCart/ProductCard.tsx";
import type { Recipe } from "~types/recipe";

interface ProductCardListProps {
  recipes: Recipe[];
}

const ProductCardList: FC<ProductCardListProps> = ({ recipes }) => {
  return (
    <div className={styles.cardList}>
      {recipes.map((recipe) => (
        <ProductCard
          key={recipe.id}
          name={recipe.name}
          image={recipe.image}
          rating={recipe.rating}
          prepTimeMinutes={recipe.prepTimeMinutes}
        />
      ))}
    </div>
  );
};

export default ProductCardList;
