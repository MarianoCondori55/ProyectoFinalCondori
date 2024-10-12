import React from 'react';
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
  const { totalItems } = useCart();
  
  return (
    <div className="text-white">
      🛒 {totalItems}
    </div>
  );
};

export default CartWidget;
