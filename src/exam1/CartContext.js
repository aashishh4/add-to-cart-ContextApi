// CartContext.js
import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [day, setDay] = useState("Monday");
  const [color, setColor] = useState("orange");

  return (
    <CartContext.Provider value={{ day, setDay, color,setColor }}>
      {children}
    </CartContext.Provider>
  );
};
