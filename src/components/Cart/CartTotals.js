import React from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'

const CartTotals = () => {
    const {cartSubTotal,cartTax,cartTotal,clearCart}=ProductConsumer()
  return (
    <>
    <div className='container d-flex alightn-item-center justify-content-center'>
        <div className='row'>
            <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
           <Link to="/">
            <button onClick={()=>clearCart()} className='btn btn-outline-danger text-uppercase mb-3 px-5' >
                clear cart
            </button>
           </Link>
           <h5>
            <span className='text-title' >subtotal:</span>
            <strong>${cartSubTotal}</strong>
           </h5>
           <h5>
            <span className='text-title' >tax:</span>
            <strong>${cartTax}</strong>
           </h5>
           <h5>
            <span className='text-title' >subtotal:</span>
            <strong>${cartTotal}</strong>
           </h5>
            </div>
        </div>
    </div>
    </>
  )
}

export default CartTotals