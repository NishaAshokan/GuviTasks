import React from 'react'
import {   useSelector } from 'react-redux'
import './CheckOut.css'
import SubTotal from './SubTotal'
import { useDispatch } from 'react-redux'
import { removefromcart } from './CartAction'


function CheckOut() {
  const dispatch = useDispatch()
  const cart = useSelector(state=> state.cart)
  return (
    <div className='checkout'>
      <div className='checkout_item'>
        {cart.cart.map(item => {
          return(
            <div className='checkout_product'>
              <img src={item.image} alt="" />
              <div className='product_info'>
                <h4>{item.title}</h4>
                <p>{item.rating}</p>
                <p>{item.price}</p>
                <button onClick={() => dispatch(removefromcart(item.id)) }>Remove from cart</button>

              </div>

            </div>
          )
        })}

      </div> 
      <div className='subtotal'>
        <SubTotal></SubTotal>


      </div>

    </div>
  )
}

export default CheckOut