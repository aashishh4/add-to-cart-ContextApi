// Cart.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { day, setDay, color } = useContext(CartContext);

  const changeDay = () => {
    setDay("Wednesday");
  };

  return (
    <div>
      <h1>Cart Page</h1>
      <p>Day from Home: {day}</p>
      <p>Color from Home: {color}</p>
      <button onClick={changeDay}>Change Day</button>
      
    </div>
  );
};

export default Cart;
