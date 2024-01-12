// App.js
import React from "react";

import { CartProvider } from "./exam1/CartContext";
import Home from "./exam1/Home";


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Home />
     
      </CartProvider>
    </div>
  );
}

export default App;