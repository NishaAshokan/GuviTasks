import React from 'react';
import './style.css'

const ProductCard = ({ Products, onAddToCart}) => {
  return (
    <div className="card">
      <img src={Products.image} alt={Products.name} />
      <div className="card-body">
        <h5 className="card-title">{Products.name}</h5>
        <p className="card-text">{Products.description}</p>
        <p className="card-price">${Products.price.toFixed(2)}</p>
        <button onClick={() => onAddToCart(Products)}>Add to Cart</button>
        
      </div>
    </div>
  );
};

export default ProductCard;
