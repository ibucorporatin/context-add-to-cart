import React from 'react'
import "./app.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Default from './components/Default'
import Cart from './components/Cart'
import Modal from './components/Modal'


const App = () => {
  return (
<>
<Navbar/>
<Routes>
<Route exact path='/' element={<ProductList/>}  />
<Route path='/details' element={<Details/>}  />
<Route path='/cart' element={<Cart/>}  />
<Route path='*' element={<Default/>}  />
</Routes>
<Modal/>

</>
  )
}

export default App