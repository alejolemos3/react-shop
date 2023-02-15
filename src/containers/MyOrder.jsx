import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import OrderItem from "@components/OrderItem";
import "@styles/MyOrder.scss";
import flechita from "@icons/flechita.svg";

const MyOrder = () => {
  const { state, changeToggle } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      (acumulator += currentValue.price);
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" onClick={changeToggle}/>
        <p className="title">My order</p>
      </div>
      <div className="orderProducts">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
      </div>
      <div className="btnAndOrder">
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
