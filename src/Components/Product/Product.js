import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
import { render } from 'enzyme';
import addToCartIcon from '../../Images/addToCart.png';
export class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <ProductWrapper className="col-9 mx-auto - col-md-6 col-lg-3 my-3 ">
        <div className="card">
          <div className="image-container" onClick={() => console.log('you clicked me')}>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button className="cart-btn" disabled={inCart ? true : false} onClick={() => console.log('added to cart')}>
              {inCart ? (<p className="text-capitalized mb-0" disabled>{" "}Added to Cart</p>) : (<img src={addToCartIcon} />)}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <p class="mb-0">${price}</p>
          </div>
        </div>
        <div>hello from product</div>
      </ProductWrapper>

    )
  }
}

const ProductWrapper = styled.div`
.card{
  border-color:tranparent;
  transition: all 1s linear;
}
.card-footer{
  background: transparent;
  border-color: transparent;
  transition: all 1s linear;
}
&:hover{
  .card{
    border: 2rem solid red;
    box-shadow: 2px 2px 5px 0px rgba(var(--lightGreen));
  }
}
`;