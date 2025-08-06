import axios from "axios";

import type { Recipe } from "../types/recipe";

export const fetchRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await axios.get<{ recipes: Recipe[] }>(
      "https://dummyjson.com/recipes"
    );
    return response.data.recipes;
  } catch (error) {
    alert(error);
    return [];
  }
};
