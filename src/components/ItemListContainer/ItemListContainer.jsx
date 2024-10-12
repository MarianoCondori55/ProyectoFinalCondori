// src/components/ItemListContainer/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase/config';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsList);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;

