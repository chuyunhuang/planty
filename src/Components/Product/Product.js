import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
import { render } from 'enzyme';
import addToCartIcon from '../../Images/addToCart.png';
import '../../App.css';
import PropTypes from 'prop-types';

export class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <ProductWrapper className="col-9 mx-auto - col-md-6 col-lg-3 my-3 ">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div className="image-container" onClick={() => value.handleDetail(id)}>
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button className="cart-btn" disabled={inCart ? true : false} onClick={() => value.addToCart(id)}>
                  {inCart ? (<p className="text-capitalized mb-0" disabled>{" "}Added to Cart</p>) : (<img src={addToCartIcon} />)}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <p className="mb-0">${price}</p>
          </div>
        </div>
      </ProductWrapper>

    )
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired

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
    border: 1rem solid var(--lightGreen);
    box-shadow: 2px 2px 5px 0px var(--lightGreen);
  }
  .card-footer{
    background: rgba(247, 247, 247);
  }
}
.image-container{
  position: relative;
  overflow: hidden;
}
.card-img-top{
  transition: all 1s linear;
}
.image-container:hover .card-img-top{
  transform: scale(1.2);
}
.cart-btn{
  position: absolute;
  bottom: 0;
  right: 0;
  background: var(--lightGreen);
  border: none;
  border-radius: 0.5rem 0 0 0;
  transform: translate (100%,100%);
  transition: all 1s linear;
}
image-container:hover .cart-btn{
  transform: translate(0,0);
}
.cart-btn:hover{
  background: var(--mainWhite);
  cursor: pointer;
  transform: scale(1.2);
}

`;