import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
import { render } from 'enzyme';

export class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <ProductWrapper className="col-9 mx-auto - col-md-6 col-lg-3 my-3 ">
        <div className="card">
          <div className="image-container" onClick={console.log('you clicked me')}></div>
          <Link to="/details">
            <img src={img} alt="product" className="card-img-top" />
          </Link>
        </div>
        <div>hello from product</div>
      </ProductWrapper>

    )
  }
}

const ProductWrapper = styled.div`
`