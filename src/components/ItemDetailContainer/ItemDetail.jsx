import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../../context/CartContext';

const ItemDetail = ({ product }) => {
  const { addItem } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (quantity) => {
    addItem(product, quantity);
    setAddedToCart(true);
  };

  return (
    <div className="border p-4 rounded">
      <img src={product.imageUrl} alt={product.title} className="w-full h-40 object-cover" />
      <h3 className="font-bold">{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      {addedToCart ? (
        <p>Added to cart!</p>
      ) : (
        <ItemCount stock={product.stock} onAdd={handleAddToCart} />
      )}
    </div>
  );
};

export default ItemDetail;
