import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import './index.css'
import  { Provider } from 'react-redux'
import  {configureStore} from '@reduxjs/toolkit'
import CartReducer from './CartReducer'

const store = configureStore({
  reducer: {
    cart: CartReducer
  }

})

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store = {store}>
    <App />
    </Provider>
 
)
