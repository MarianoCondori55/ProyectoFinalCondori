import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Subtotal: ${item.price * item.quantity}</p>
    </div>
  );
};

export default CartItem;