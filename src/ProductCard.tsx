import type { FC } from "react";
import "./ProductCard.css";
import StarRateIcon from "@mui/icons-material/StarRate";
interface ProductCardProps {
  name: string;
  imageUrl: string;
  altText: string;
  prepTimeMinutes: number;
  rating: number;
}
const ProductCard: FC<ProductCardProps> = ({
  name,
  imageUrl,
  altText,
  prepTimeMinutes,
  rating,
}) => {
  return (
    <div className="card">
      <img className="card-image" src={imageUrl} alt={altText} />
      <div className="card-info">
        <h2 className="card-name"> {name} </h2>

        <div className="card-details">
          <p className="card-price">{prepTimeMinutes}$</p>
          <p className="card-rating">
            {rating} <StarRateIcon className="card-rating__icon " />
          </p>
        </div>
        <div className="card-amount">
          <p className="card-amount__text">0</p>
          <div className="card-amount__buttons">
            <button className="card-amount__button">+</button>
            <button className="card-amount__button">-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
