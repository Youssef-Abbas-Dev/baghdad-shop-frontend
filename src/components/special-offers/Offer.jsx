import { useState } from "react";
import Rating from "../rating/Rating";
import {Link} from "react-router-dom";

const Offer = ({ offer }) => {
  const { firstImage, secondImage, title, price, rating, discount,reviews, id } = offer;

  const [imageSrc, setImageSrc] = useState(firstImage);

  const calculatedDiscount = price - (discount * price) / 100;

  return (
    <div className="offer">
      <div className="offer-image-wrapper">
        <img
          onMouseEnter={() => setImageSrc(secondImage)}
          onMouseLeave={() => setImageSrc(firstImage)}
          src={imageSrc}
          alt={title}
          className="offer-image"
        />
      </div>
      <div className="offer-info">
        <h5 className="offer-title">{title}</h5>
        <Rating rating={rating} reviews={reviews} />
        <div className="offer-price">
          <b className="offer-price-item">${price}</b>
          <b className="offer-final-price-item">
            ${calculatedDiscount}
          </b>
        </div>
         <Link to={`/special-offers/${id}`} className="offer-see-more">
          شاهد المزید ...
         </Link>
      </div>
      <div className="offer-discount"> خصم {discount}% </div>
    </div>
  );
};

export default Offer;
