import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-lg">My E-Commerce App</Link>
      <CartWidget />
      <div>
        <Link to="/" className="text-white px-4">Home</Link>
        <Link to="/cart" className="text-white px-4">Cart</Link>
      </div>
    </nav>
  );
};

export default NavBar;