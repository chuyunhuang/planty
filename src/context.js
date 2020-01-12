import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  }

  componentDidMount() {
    this.setProduct()
  }
  //so we don't use reference, but create a new copy of data
  setProduct = () => {
    let tempProducts = []
    storeProducts.forEach(item => {
      const singleItem = { ...item }
      tempProducts = [...tempProducts, singleItem]
    })
    this.setState(() => {
      return { products: tempProducts }
    })
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