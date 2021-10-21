import { useState } from "react";

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [toggle , setToggle] = useState(false);

  const addToCart = (payload) => {
    payload["addImage"] = true;
    setState({
      ...state,
      cart: [...state.cart, payload] 
    })
  }

  const removeFromCart = (payload) => {
    payload["addImage"] = false;
    setState({
      ...state,
      cart: state.cart.filter(items => items.id != payload.id)
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
    toggle,
    setToggle
  }
}

export { useInitialState };