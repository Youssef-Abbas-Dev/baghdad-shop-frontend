import { specialOffers } from "../../data/special-offers";
import Offer from "./Offer";
import "./special-offers.css";

const SpecialOffers = () => {
    

  return (
    <div className="special-offers">
      <h1 className="special-offers-title">
        عروض کبیره للیوم
        <span className="special-offers-icon-wrapper">
          <i className="bi bi-stopwatch"></i>ل 24 ساعه بس
        </span>
      </h1>
      <div className="special-offers-wrapper">
        {specialOffers.map((item) => (
          <Offer key={item.id} offer={item} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
