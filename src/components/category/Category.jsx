import { categories } from "../../data/category";
import "./category.css";

const Category = () => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <div key={category.id} className="category-item">
          <img className="category-item-img" src={category.image} alt="" />
          <b className="category-item-title">{category.title}</b>
        </div>
      ))}
    </div>
  );
};

export default Category;
