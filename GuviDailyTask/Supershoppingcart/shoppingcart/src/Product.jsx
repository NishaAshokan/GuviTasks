import React from 'react'
import './Product.css'
import { useDispatch } from 'react-redux'
import {addtocart} from "./CartAction"

function Product({id, title, price, rating, image}) {
  const dispatch = useDispatch()
  return (
    <div className='product'> 
        <h4>{title}</h4>
        <p>{rating}</p>
        <p>{price}</p>
        <img src={image} alt="" />
        <button onClick ={() => dispatch(addtocart(id, title, price, rating, image))}>Add to Cart</button>

    </div>
  )
}

export default Product