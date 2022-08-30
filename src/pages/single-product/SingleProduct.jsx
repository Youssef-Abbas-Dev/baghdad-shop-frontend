import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Rating from "../../components/rating/Rating";
import "./single-product.css";
import ProductDescription from "./ProductDescription";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "../../redux/apiCalls/productApiCall";
import Spinner from "../../components/spinner/Spinner";
import { addToCart } from "../../redux/apiCalls/cartApiCall";

const SingleProduct = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);

  // Add To Cart Handler
  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: product?.id,
        quantity: quantity,
        price: product?.price,
        title: product?.title,
        image: product?.image,
      })
    );
  };

  if (loading) return <Spinner />;

  return (
    <div className="single-product">
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img src={product?.image} alt="" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product?.title}</h1>
          <Rating rating={product?.rating} reviews={product?.reviews} />
          <div className="product-price">${product?.price}</div>
          <div className="product-add-to-cart">
            <div>الکمیه</div>
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              min="1"
              max="10"
            />
            <button onClick={addToCartHandler} className="add-to-cart-btn">
              إضافه الی سله التسوق
            </button>
          </div>
        </div>
      </div>
      <ProductDescription />
    </div>
  );
};

export default SingleProduct;
