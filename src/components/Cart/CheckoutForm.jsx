import React, { useState } from 'react';

const CheckoutForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar la orden a Firestore
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Checkout</button>
    </form>
  );
};

export default CheckoutForm;