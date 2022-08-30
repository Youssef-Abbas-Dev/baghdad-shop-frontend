import { useState } from "react";
import { useParams } from "react-router-dom";
import { specialOffers } from "../../data/special-offers";
import "./special-offers-page.css";
import Rating from "../../components/rating/Rating";
import ProductDescription from "../single-product/ProductDescription";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/apiCalls/cartApiCall";

const SpecialOffersPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const product = specialOffers.find((p) => p.id === +id);
  const { images, title, rating, reviews, price, discount } = product;

  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const calculatedDiscount = price - (discount * price) / 100;

   // Add To Cart Handler
   const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: id,
        quantity: quantity,
        price: price,
        title: title,
        image: images[0],
      })
    );
  };

  return (
    <>
    <div className="special-offers-page">
      <div className="special-offers-page-img-wrapper">
        <img
          src={images[imageIndex]}
          alt=""
          className="special-offers-page-img"
        />
        <div className="special-offers-page-select">
          {images.map((img, index) => (
            <img
              onClick={() => setImageIndex(index)}
              className="select-img"
              key={index}
              src={img}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="special-offers-page-info">
        <h3 className="special-offers-page-title">{title}</h3>
        <Rating rating={rating} reviews={reviews} />
        <div className="special-offers-price">
          <b className="special-offers-item">${price}</b>
          <b className="special-offers-final-price-item">
            ${calculatedDiscount}
          </b>
        </div>
        <div className="special-offers-add-to-cart">
            <div>الکمیه</div>
            <input value={quantity} onChange={e => setQuantity(e.target.value)} type="number" min="1" max="10" />
            <button onClick={addToCartHandler} className="add-to-cart-btn">إضافه الی سله التسوق</button>
          </div>
      </div>
    </div>
    <ProductDescription />
    </>
  );
};

export default SpecialOffersPage;
