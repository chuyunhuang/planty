import React, { Component } from 'react';
import { storeProducts } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: storeProducts
  }

  handleDetail = () => {
    console.log('hello from detail')
  }

  addToCart = () => {
    console.log('add to cart')
  }
  render() {
    return (
      <ProductContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }