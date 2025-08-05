import axios from "axios";
import { useEffect, useState } from "react";
import ProductCardList from "../ProductCardList.tsx";
interface Recipe {
  id: number;
  rating: number;
  name: string;
  image: string;
  prepTimeMinutes: number;
}

const RecipesAPI = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetchREcipes();
  }, []);
  async function fetchREcipes() {
    try {
      const response = await axios.get<{ recipes: Recipe[] }>(
        "https://dummyjson.com/recipes"
      );
      setRecipes(response.data.recipes);
    } catch (e) {
      alert(e);
    }
  }
  return <ProductCardList recipes={recipes} />;
};

export default RecipesAPI;
