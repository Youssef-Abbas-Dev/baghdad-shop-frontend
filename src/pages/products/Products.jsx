import ProductList from "./ProductList";
import SelectBox from "./SelectBox";
import { products } from "../../data/products";
import "./products.css";
import { useState } from "react";

const Products = () => {
    const [sortItem,setSortItem] = useState("select");
    
    const sortedProductList = 
       sortItem === "low" 
       ? products.sort((a,b) => a.price - b.price)
       : sortItem === "high" ? products.sort((a,b) => b.price - a.price)
       : products.sort((a,b) => a.title > b.title ? 1 : -1);

    return ( 
    <section className="products">
        <SelectBox setSortItem={setSortItem} sortItem={sortItem} />
        <ProductList products={sortedProductList} />
    </section> );
}
 
export default Products;