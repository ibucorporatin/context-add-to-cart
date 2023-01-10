import React from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from './context'
import { ButtonContainer } from './Navbar'

const Details = () => {
  const {detailsProduct,addToCart,openModel}=ProductConsumer()
  const {id,company,info ,title,img,inCart,price}=detailsProduct

  return (
    <div className='container py-5'>
      {/* title */}
      <div className='row' >
<div className='col-12 max-auto text-center text-slanted text-blue my-5' >
<h1>{title}</h1>
</div>
      </div>
      {/* product info */}
      <div className='row' >
        {/* product image */}
        <div className='col-10 ax-auto col-md-6 my-3 text-capitalize' >
         <img src={img} className="img-fluid" alt="product"  />
        </div>
        {/*product text  */}
        <div className='col-10 ax-auto col-md-6 my-3 text-capitalize' >
        <h1 className='' >model :{title}</h1>
        <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
    made by : <span className='text-uppercase'>
      {company}
    </span>
        </h4>
        <h4 className='text-blue' >
        price :<strong>
             $
          </strong>
          {price}
        </h4>
        <p className='text-capitalize font-weight-bold mt-3 mb-0'>some info about product:</p>
        <p className='text-muted lead'>{info}</p>
       {/* buttons */}
       <div>
        <Link to="/" >
        <ButtonContainer>
          back to products
        </ButtonContainer>
        </Link>
        <ButtonContainer cart disabled={inCart?true:false} onClick={()=>{addToCart(id);openModel(id)}} >
          {inCart?"in cart":"add to cart"}
        </ButtonContainer>
      
       </div>
        </div>
      </div>
    </div>
  )
}


export default Details