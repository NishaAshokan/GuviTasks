import React from 'react'
import Product from './Product'

import antiquehomedecor from "./images/antiquehomedocor.png"
import product2 from './images/babydress.jpg'
import product3 from './images/grocery.png'
import product4 from './images/laptop.png'
import product5 from './images/mobile.png'
import product6 from './images/shoe.jpg'
import product7 from './images/watch.png'

import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div>
          
          
<Product
id = "1"
title = "The product one is Home Decor " 
price= "555"
rating = "⭐⭐⭐⭐"
image = {antiquehomedecor}
 />
 <Product
id = "2"
title = "The product one is BabyDress " 
price= "250"
rating = "⭐⭐⭐⭐"
image = {product2}

 />
 <Product
id = "3"
title = "The product one is Grocery " 
price= "767"
rating = "⭐⭐⭐⭐⭐"
image = {product3}
 />
 <Product
id = "4"
title = "The product one is Laptop " 
price= "2350"
rating = "⭐⭐⭐⭐"
image = {product4}
 />
 <Product
id = "5"
title = "The product one is Mobile " 
price= "1346"
rating = "⭐⭐⭐"
image = {product5}
 />
  <Product
id = "6"
title = "The product one is Shoe " 
price= "15"
rating = "⭐⭐⭐⭐⭐"
image = {product6}
 />
  <Product
id = "7"
title = "The product one is Watch " 
price= "11"
rating = "⭐⭐⭐⭐"
image = {product7}
 />
 
       
         </div>
         
        <div>
       
        </div>

    </div>
  )
}

export default Home