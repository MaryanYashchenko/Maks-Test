import styles from "./ProductCardList.module.css";
import { useState, type FC } from "react";
import ProductCard from "../ProductCart/ProductCard.tsx";
import type { Recipe } from "~types/recipe";
import { fetchRecipes } from "../../API/recipes.ts";

const ProductCardList: FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const useRecipes = async () => {
    const data = await fetchRecipes();
    setRecipes(data);
  };

  useRecipes();

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
