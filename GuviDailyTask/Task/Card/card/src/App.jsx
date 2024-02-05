//import { useState } from 'react'
//import reactLogo from './assets/react.svg'

import './App.css'
// App.js
import React from 'react';
import { AppProvider } from './AppContext';
import ProductItem from './ProductItem';

const App = () => {
  return (
  
      <div>
        <AppProvider>
        <ProductItem />
          </AppProvider> 
     
    
      </div>
    
      
    
  );
};

export default App;

