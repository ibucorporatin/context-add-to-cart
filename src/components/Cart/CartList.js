import React from 'react'
import { ProductConsumer } from '../context'
import CartItem from './CartItem'

const CartList = () => {
 const value= ProductConsumer()
 const {cart}=value
  return (
    <div>
        {
            cart.map(item=>{
                return <CartItem key={item.id} item={item} value={value} />
            })
        }
        
    </div>
  )
}

export default CartList