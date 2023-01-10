import React,{useState} from 'react'
import { storeProducts } from '../data';
import { ProductConsumer } from './context';
import Product from './Product'
import Title from './Title'

const ProductList = () => {
  
 const {products,cart}= ProductConsumer()

 console.log(cart)
  return (
   <>
   <div className='py-5' >
    <div className='container' >
      <Title name="our"  title="products" />
      <div className='row' >  
{
  products.map(product=>{
    return <Product key={product.id} product={product}/>
  })
}
      </div>
    </div>
   </div>
   </>
  )
}

export default ProductList