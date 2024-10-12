import React, { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <div className="flex items-center">
        <button onClick={decrement} className="border px-2">-</button>
        <span className="mx-2">{count}</span>
        <button onClick={increment} className="border px-2">+</button>
      </div>
      <button onClick={() => onAdd(count)} className="bg-blue-500 text-white p-2 rounded mt-2">
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCount;