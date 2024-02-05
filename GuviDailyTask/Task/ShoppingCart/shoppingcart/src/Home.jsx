import React from 'react';
import ProductList from './ProductList';
import Products from './Products'; // Import the products array

const Home = () => {
  return (
    <div>
      <h1>Welcome to our Online Shop!</h1>
      {console.log(Products)}
      <ProductList Products={Products} />

    </div>
  );
};

export default Home;
