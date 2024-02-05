import React from 'react'
import './Header.css'
import  {Link} from "react-router-dom"
import { useSelector } from 'react-redux'


function Header() {
  const cart = useSelector(state => state.cart)
  return (
    <div className='header'>
        <div className='header_end'>
          <Link to="/checkout" style={{textDecoration: "none", color: "white"}}>
          </Link>
            <span>Cart<strong>{cart.cart.length}</strong></span>

        </div>

    </div>
  )
}

export default Header 
