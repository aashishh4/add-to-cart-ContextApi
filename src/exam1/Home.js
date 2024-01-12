// Home.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Cart from "./Cart";

const Home = () => {
  const { day, color, setColor } = useContext(CartContext);

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Day: {day}</p>
      <p>Color: {color}</p>
      <button onClick={changeColor}>Change Color</button>
      <Cart />
    </div>
  );
};

export default Home;
