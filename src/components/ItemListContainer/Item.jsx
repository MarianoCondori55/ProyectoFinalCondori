import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="border p-4 rounded">
      <img src={product.imageUrl} alt={product.title} className="w-full h-40 object-cover" />
      <h3 className="font-bold">{product.title}</h3>
      <p>Price: ${product.price}</p>
      <Link to={`/item/${product.id}`} className="bg-blue-500 text-white p-2 rounded">View Details</Link>
    </div>
  );
};

export default Item;