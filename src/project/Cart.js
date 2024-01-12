import React from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleIncrement = (productId) => {
    updateQuantity(productId, 1); 
  };

  const handleDecrement = (productId) => {
    const existingProduct = cartItems.find((item) => item.id === productId);
    if (existingProduct && existingProduct.quantity > 1) {
      updateQuantity(productId, -1);
    } else {
   
      removeFromCart(productId);
    }
  };

  return (
    <div>
      <h1>Cart page</h1>
      <table border="2px">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product) => (
            <tr key={product.id}>
              <td>
                <h3>{product.category}</h3>
              </td>
              <td>
                <h4>{product.title}</h4>
              </td>
              <td>
                <h4>{product.price}</h4>
              </td>
              <td>
                <div>
                  <button onClick={() => handleDecrement(product.id)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleIncrement(product.id)}>+</button>
                </div>
              </td>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <button onClick={() => handleRemove(product.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
