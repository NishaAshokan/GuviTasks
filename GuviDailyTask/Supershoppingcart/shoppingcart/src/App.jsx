///import { useState } from 'react'
//import reactLogo from './assets/react.svg'


import Header from './Header'
import Home from './Home'
import CheckOut from './CheckOut'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'> 
    <Router>
      <Routes>
        <Route path='/checkout' element={<><Header></Header> <CheckOut /></>}></Route>
        <Route path='/' element={<>  <Header></Header><Home></Home><CheckOut /></>}></Route>
      </Routes>
      
     
  </Router>     

   
  </div>
    
    </>
  )
}

export default App
