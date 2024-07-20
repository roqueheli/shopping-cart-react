import React, { useReducer, useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const initState = [];

  const addProduct = (product) => {
    product.qty = 1;
    dispatch({
      type: "[CART] Add Product",
      payload: product,
    });
  };

  const removeProduct = (id) => {
    dispatch({
      type: "[CART] Remove Product",
      payload: id,
    });
  };

  const incrementQty = (id) => {
    dispatch({
      type: "[CART] Increment Product",
      payload: id,
    });
  };

  const decrementQty = (id) => {
    dispatch({
      type: "[CART] Decrement Product",
      payload: id,
    });
  };

  const cartReducer = (state = initState, action = {}) => {
    switch (action.type) {
      case "[CART] Add Product":
        return [...state, action.payload];
      case "[CART] Remove Product":
        return state.filter((product) => product.id !== action.payload);
      case "[CART] Increment Product":
        return state.map(product => {
          if(product.id === action.payload) return {...product, qty: product.qty + 1}
          return product;
        });
      case "[CART] Decrement Product":
        return state.map(product => {
          if(product.id === action.payload && product.qty > 1) return {...product, qty: product.qty - 1}
          return product;
        });
      default:
        return state;
    }
  };

  const [shoppingList, dispatch] = useReducer(cartReducer, initState);

  return (
    <CartContext.Provider
      value={{
        shoppingList,
        addProduct,
        removeProduct,
        incrementQty,
        decrementQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
