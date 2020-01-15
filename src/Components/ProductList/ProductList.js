import React, { Component } from 'react';
import './ProductList.css'
import { Product } from '../Product/Product';
import { ProductConsumer } from '../../context';


export default class ProductList extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="product-list-wrapper col-10 mx-auto text-center text-title">
          <h1>Products</h1>
          <div className="row">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />
                })
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>

    )
  }
}