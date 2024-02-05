import React from 'react'
import './SubTotal.css'
import {  useSelector } from 'react-redux'
import { getTotal } from './CartReducer'

function SubTotal() {
    const cart = useSelector(state => state.cart)
  return (
    <div className='subtotal'>
        <div className='subtotal_area'>
            <p>Subtotal ({cart.cart.length} items): ${getTotal(cart.cart)}</p>
            <button>Proceed to checkout</button>
        </div>
    </div>
  )
}

export default SubTotal