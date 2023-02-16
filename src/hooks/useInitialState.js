import { useState } from "react";

const initialState = {
  cart: [],
  toggleOrders: false
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    });
  };

  const removeFromCart = payload => {
    const fooIdx = state.cart.findIndex(({id}) => payload.id === id)
    if (fooIdx > -1){
      let foo = [...state.cart]
      foo.splice(fooIdx, 1)
      setState({
        ...state,
        cart: [...foo],
        lastIdRemoved: payload.id
      });
    };
  };

  const changeToggleOrders = () => {
    setState({
      ...state,
      toggleOrders: !state.toggleOrders
    });
  };

  const isInCart = productId => {
    return state.cart.some(product => product.id === productId);
  };

  return {
    state,
    addToCart,
    removeFromCart,
    changeToggleOrders,
    isInCart
  };
};

export default useInitialState;