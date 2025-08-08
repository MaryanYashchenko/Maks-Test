import ProductFilter from "../ProductFilter/ProductFilter";
import { useEffect, useState, type FC } from "react";
import { fetchRecipes } from "../../API/recipes";
import type { Recipe } from "~types/recipe";
import ProductCardList from "../ProductCartList/ProductCardList";
import styles from "./ProductFiltersList.module.css";

const ProductFilterList: FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  useEffect(() => {
    const useRecipes = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };

    useRecipes();
  });
  const filteredRecipes =
    selectedFilter === "All"
      ? recipes
      : selectedFilter === "Others"
      ? recipes.filter(
          (r) =>
            !r.mealType.includes("Breakfast") &&
            !r.mealType.includes("Lunch") &&
            !r.mealType.includes("Dinner")
        )
      : recipes.filter((r) => r.mealType.includes(selectedFilter));
  return (
    <>
      <div className={styles.buttonContainer}>
        <ProductFilter
          label="All"
          selectedButton={selectedFilter === "All"}
          onClick={() => setSelectedFilter("All")}
        />
        <ProductFilter
          label="Breakfast"
          selectedButton={selectedFilter === "Breakfast"}
          onClick={() => setSelectedFilter("Breakfast")}
        />
        <ProductFilter
          label="Lunch"
          selectedButton={selectedFilter === "Lunch"}
          onClick={() => setSelectedFilter("Lunch")}
        />
        <ProductFilter
          label="Dinner"
          selectedButton={selectedFilter === "Dinner"}
          onClick={() => setSelectedFilter("Dinner")}
        />
        <ProductFilter
          label="Others"
          selectedButton={selectedFilter === "Others"}
          onClick={() => setSelectedFilter("Others")}
        />
      </div>
      <ProductCardList recipes={filteredRecipes} />
    </>
  );
};
export default ProductFilterList;
