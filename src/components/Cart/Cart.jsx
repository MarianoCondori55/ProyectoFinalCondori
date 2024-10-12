import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, clearCart } = useCart();
  
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <button onClick={clearCart} className="bg-red-500 text-white p-2 rounded">Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
