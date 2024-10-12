import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../firebase/config';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = doc(db, 'products', id);
      const productSnapshot = await getDoc(productDoc);
      setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {loading ? <p>Loading...</p> : product && <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;