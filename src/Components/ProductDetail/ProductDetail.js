import React from 'react';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';

export default function ProductDetail() {
  return (
    <ProductConsumer>
      {(value) => {
        const { id, title, img, price, info, inCart } = value.detailProduct
        return (
          <div className="container py-3 mt-4 mb-4" >
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-title text-mainGreen">
                <h1>{title}</h1>
              </div>
            </div>
            {/* title end*/}
            {/* product info */}
            <div className="row" >
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} className="img-fluid" alt="product-image" />
              </div>
              {/* product text */}
              <div className="col-10 mx-auto col-md-6 my-3">
                {/* <h3 className="mt-10 mb-3">Name: {title}</h3> */}
                <h5 className="mb-3">Product Description:<br />{info}</h5>
                <h5 className="mt-3 mb-3">Price: ${price}</h5>
                {/* buttons */}
                <div className="mb-5">
                  <Link to="/">
                    <ButtonContainer>
                      Back to Product Page
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer cart disabled={inCart ? true : false} onClick={() => { value.addToCart(id); value.openModal(id) }}>
                    {inCart ? 'already in cart' : 'add to cart'}
                  </ButtonContainer>
                </div>
              </div>

            </div>
          </div>
        )
      }}
    </ProductConsumer>
  )
}