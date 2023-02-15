import React, { useContext, useState, useEffect } from "react";
import "../styles/ProductItem.scss";
import AppContext from "@context/AppContext";
import addToCartImage from "@icons/bt_add_to_cart.svg";
import addedToCartImage from "@icons/bt_added_to_cart.svg";

const ProductItem = ({ product }) => {
  const { title, images, id, price } = product;
  const { addToCart, removeFromCart, state, isInCart } = useContext(AppContext);
  const handleClick = (item) => {
    isInCart(id) ? removeFromCart(item) : addToCart(item);
  };
  return (
    <div className="ProductItem">
      <img src={images[0]} alt={title} />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          { isInCart(id)
          ? <img src={addedToCartImage} alt="added to cart" />
          :<img src={addToCartImage} alt="add to cart" />
          }
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
