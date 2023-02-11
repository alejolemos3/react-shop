import React from "react";
import ProductItem from "../components/ProductItem";
import "../styles/ProductLIst.scss";

const ProductList = () => {
  return (
    <section class="ProductList">
      <div class="ProductCards-container">
        <ProductItem />
      </div>
    </section>
  );
};

export default ProductList;
