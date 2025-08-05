import "./ProductCardList.css";
import type { FC } from "react";
import ProductCard from "./ProductCard.tsx";

interface Recipe {
  id: number;
  rating: number;
  name: string;
  image: string;
  prepTimeMinutes: number;
}
interface ProductCardListProps {
  recipes: Recipe[];
}

const ProductCardList: FC<ProductCardListProps> = ({ recipes }) => {
  return (
    <div className="card-list">
      {recipes.map((recipe) => (
        <ProductCard
          key={recipe.id}
          name={recipe.name}
          imageUrl={recipe.image}
          altText={recipe.name}
          rating={recipe.rating}
          prepTimeMinutes={recipe.prepTimeMinutes}
        />
      ))}
    </div>
  );
};

export default ProductCardList;
