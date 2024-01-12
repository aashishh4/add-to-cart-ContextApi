import React from 'react';
import Rout from './project/Rout';
import{CartProvider} from './project/CartContext';

const App = () => {
  return (
  <div>
    <CartProvider>
    <Rout/>
    </CartProvider>
  </div>
  );
};

export default App;
