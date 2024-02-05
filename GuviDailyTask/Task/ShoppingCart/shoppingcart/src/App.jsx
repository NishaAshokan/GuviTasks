import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart'
import Home from './Home';
//import Products from './Products';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (Products) => {
    setCartItems( [...prevItems, Products]);
  }

  const handleRemoveFromCart = (productToRemove) => {
    setCartItems(prevItems => prevItems.filter(Products => Products !== productToRemove));
  }
3
  return (
   
    <div className="App">
      <h1>Shopping Cart</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <ShoppingCart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      <Home />
    </div>
  )
}

export default App