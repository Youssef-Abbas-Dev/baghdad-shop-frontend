import { useState } from "react";
import "./slider.css";

const Slider = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className="slider-container">
      <button
        disabled={slideIndex === -data.length}
        onClick={() => handleClick("left")}
        className="bi bi-chevron-left arrow-left"
      ></button>
      <div
        style={{ transform: `translate(${slideIndex * -250}px)` }}
        className="slider-wrapper"
      >
        {data.map((item) => (
          <div className="slide" key={item.id}>
            <img className="slide-image" src={item.image} alt={item.title} />
            <h3 className="slide-title">{item.title}</h3>
            <div className="slide-rating-wrapper">
              <b className="slide-rating">
                {item.rating} <i className="bi bi-star-fill"></i>
              </b>
              <span>{item.reviews} تقییمات</span>
            </div>
            <div className="slide-price">${item.price}</div>
          </div>
        ))}
      </div>
      <button
        disabled={slideIndex === 1}
        onClick={() => handleClick("right")}
        className="bi bi-chevron-right arrow-right"
      ></button>
    </div>
  );
};

export default Slider;
