// import React from 'react';
// import { useAppContext } from './AppContext';

// const ProductItem = ({ products }) => {
//   // Check if the product is defined before attempting to destructure it
//   if (!products) {
    
//     return null; // or render an error message or a placeholder
//   }

//   const { id, title, price, quantity } = products;
//   const { state, dispatch } = useAppContext();

//   const handleAddToCart = () => {
//     // Dispatch action to add product to cart
//     dispatch({ type: 'ADD_TO_CART', payload: products });
//   };

//   const handleQuantityChange = (newQuantity) => {
//     // Dispatch action to update quantity
//     dispatch({ type: 'UPDATE_QUANTITY', payload: { productId: id, newQuantity } });
//   };

//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>Price: ${price}</p>
//       <p>Quantity: {quantity}</p>
//       <p>Total Quantity: {state.totalQuantity}</p>
//       <p>Total Amount: ${state.totalAmount}</p>
     

//       <button onClick={handleAddToCart}>Add to Cart</button>
//       <button onClick={() => handleQuantityChange(quantity + 1)}>Increase Quantity</button>
//       <button onClick={() => handleQuantityChange(quantity - 1)}>Decrease Quantity</button>
//     </div>
//   );
// };

// export default ProductItem;
// ProductItem.js
 import React from 'react';
 import { useAppContext } from './AppContext';

// const ProductItem = () => {
//   const { state, dispatch } = useAppContext();

//   return (
//     <div>
//       {state.products.map((product) => (
//         <div key={product.id}>
//           <h3>{product.title}</h3>
//           <p>Price: ${product.price}</p>
//           <p>Quantity: {product.quantity}</p>
//           <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
//             Add to Cart
//           </button>
//           <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { productId: product.id, newQuantity: product.quantity + 1 } })}>
//             Increase Quantity
//           </button>
//           <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { productId: product.id, newQuantity: product.quantity - 1 } })}>
//             Decrease Quantity
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductItem;
import './App.css'
const ProductItem = ({ products }) => {
  const { state, dispatch } = useAppContext();

  return (
    <div>
      {state.products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Descrinpption:{product.description}</p>
          <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })} className='addtocart'>
            Add to Cart
          </button>
          <button className='increasequantity' onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { productId: product.id, newQuantity: product.quantity + 1 } })}>
            Increase Quantity
          </button>
          <button className='decreasequantity'  onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { productId: product.id, newQuantity: product.quantity - 1 } })}>
            Decrease Quantity
          </button>
        </div>
      ))}

      <div>
        <h2>Cart</h2>
        {state.cart.map((cartItem) => (
          <div key={cartItem.id}>
            <p>{cartItem.title} - Quantity: {cartItem.quantity}</p>
            <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { productId: cartItem.id, newQuantity: cartItem.quantity - 1 } })}>
              Remove from Cart
            </button>
          </div>
        ))}
        <p>Total Quantity in Cart: {state.totalQuantity}</p>
        <p className='subtotal'>Subtotal: ${state.totalAmount}</p>
      </div>
    </div>
  );
};
export default ProductItem