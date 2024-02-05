// // AppContext.js
// import React, { createContext, useReducer, useContext, useEffect } from 'react';
// import axios from 'axios';
// //import './product.json'
// const AppContext = createContext();

// const initialState = {
//   products: [],
//   cart: [],
//   totalQuantity: 0,
//   totalAmount: 0,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_PRODUCTS':
//       return { ...state, products: action.payload };
//     case 'ADD_TO_CART':
//       // Handle adding to cart logic
//       return { ...state,  };
//     case 'UPDATE_QUANTITY':
//       // Handle updating quantity logic
//       return { ...state,  };
//     default:
//       return state;
//   }
// };

// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const fetchData = async () => {
     
//       try {
//         const response = await axios.get('./product.json');
//         const jsonData = response.data.products;
//         //console.log(jsonData);
//         dispatch({ type: 'SET_PRODUCTS', payload: jsonData });
        
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Fetch data on component mount

//   return (
//     <AppContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error('useAppContext must be used within an AppProvider');
//   }
//   return context;
// };

// export { AppProvider, useAppContext };
// AppContext.js
import React, { createContext, useReducer, useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const initialState = {
  products: [],
  cart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      const addedProduct = action.payload;
      const updatedCart = [...state.cart, addedProduct];
      return {
        ...state,
        cart: updatedCart,
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + addedProduct.price,
      };
    case 'UPDATE_QUANTITY':
      const { productId, newQuantity } = action.payload;
      const updatedCartQuantity = state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      return {
        ...state,
        cart: updatedCartQuantity,
        totalQuantity: state.totalQuantity + (newQuantity - state.products.find((p) => p.id === productId).quantity),
        totalAmount: state.totalAmount + (newQuantity - state.products.find((p) => p.id === productId).quantity) * state.products.find((p) => p.id === productId).price,
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('./product.json');
        const jsonData = response.data.products;
        console.log('Fetched data:', jsonData);
        dispatch({ type: 'SET_PRODUCTS', payload: jsonData });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Fetch data on component mount

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };

