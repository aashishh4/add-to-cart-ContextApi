import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
function Navbar() {
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/Cart">Cart</Link>
      <br/>
      <div>
        <span>Cart items: {totalCount}</span> 
        <br/>
       
      </div>
    </div>
  );
}

export default Navbar;
