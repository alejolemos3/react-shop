import React from "react";
import OrderItem from "../components/OrderItem";

const MyOrder = () => {
  return (
    <aside class="MyOrder">
    <div class="title-container">
      <img src="./icons/flechita.svg" alt="arrow" />
      <p class="title">My order</p>
    </div>
    <div class="my-order-content">
      <OrderItem />
      <div class="order">
        <p>
          <span>Total</span>
        </p>
        <p>$560.00</p>
      </div>
      <button class="primary-button">
        Checkout
      </button>
    </div>
  </aside>
  );
};

export default MyOrder;
