import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Rating from "../../components/rating/Rating";
import "./single-product.css";
import ProductDescription from "./ProductDescription";

const SingleProduct = () => {
  const { id } = useParams();
 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`http://localhost:5000/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProducts();
  }, [id]);

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
            <input type="number" min="1" max="10" />
            <button className="add-to-cart-btn">إضافه الی سله التسوق</button>
          </div>
        </div>
      </div>
       <ProductDescription />
    </div>
  );
};

export default SingleProduct;
