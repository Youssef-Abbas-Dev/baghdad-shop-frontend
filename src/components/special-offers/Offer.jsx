import { useState } from "react";

const Offer = ({ offer }) => {
  const { firstImage, secondImage, title, price, rating, discount } = offer;

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
        <div className="offer-rating">
          {rating}{" "}
          <i className="bi bi-star-fill"></i>
        </div>
        <div className="offer-price">
          <b className="offer-price-item">${price}</b>
          <b className="offer-final-price-item">
            ${calculatedDiscount}
          </b>
        </div>
      </div>
      <div className="offer-discount"> خصم {discount}% </div>
    </div>
  );
};

export default Offer;
