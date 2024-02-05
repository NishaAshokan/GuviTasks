import React from 'react';
import ProductCard from './ProductCard';
//import Products from './Products';

const ProductList = ({ Products, onAddToCart}) => {
  return (
    <div className="product-list">
      {Products && Products.map((Products) => (
        
        <ProductCard key={Products.id} Products={Products} onAddToCart={onAddToCart} />
        
       
      ))}
      
       
    </div>
  );
};

export default ProductList;


  