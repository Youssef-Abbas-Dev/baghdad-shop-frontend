import { Link } from "react-router-dom";
import Rating from "../../components/rating/Rating";

const ProductItem = ({ product }) => {
  const { id, image, title, reviews, rating, price } = product;

  return (
    <Link to={`/products/${id}`} className="product-item">
      <img src={image} alt={title} className="product-item-image" />
      <h3 className="product-item-title">{title}</h3>
      <Rating rating={rating} reviews={reviews} />
      <div className="product-item-price">${price}</div>
    </Link>
  );
};

export default ProductItem;
