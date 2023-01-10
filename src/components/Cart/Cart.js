import React from 'react'
import { ProductConsumer } from '../context'
import Title from '../Title'
import CartColumns from './CartColumns'
import CartList from './CartList'
import CartTotals from './CartTotals'
import EmptyCart from './EmptyCart'

const Cart = () => {
  console.log('uuuuu')
  const {handleDetails,addToCart,openModel,cart}=ProductConsumer()
  return (
    <section>

  {cart.length>0?(   <>
    <Title name="your" title="cart" />
    <CartColumns/> 
    <CartList/>
    <CartTotals/>
   </>):(<EmptyCart/>) }

    </section>
  )

 
}

export default Cart