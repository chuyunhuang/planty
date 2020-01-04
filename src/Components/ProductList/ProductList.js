import React, { Component } from 'react';
import { Product } from '../Product/Product';
import { storeProducts } from '../../data';
import { ProductConsumer } from '../../context';


export default class ProductList extends Component {
  state = {
    product: storeProducts
  }
  render() {
    return (
      <React.Fragment>
        <div className="product-list-wrapper">
          <h1>Products</h1>
          <div className="row">
            <ProductConsumer>
              {(data) => {
                return data.products.map(product => {
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