import "./rating.css";

const Rating = ({rating,reviews}) => {
  return (
    <div className="rating-wrapper">
      <b className="rating">
        {rating} <i className="bi bi-star-fill"></i>
      </b>
      <span>{reviews} تقییمات</span>
    </div>
  );
};

export default Rating;
