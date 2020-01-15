import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: storeProducts,
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubtotal: 10,
    cartTax: 20,
    cartTotal: 30
  }

  componentDidMount() {
    this.setProduct()
  }
  //so we don't use reference values, but create a new copy of data
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

  //helper function to get the id of the selected product 
  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product
  }

  handleDetail = (id) => {
    const product = this.getItem(id)
    this.setState(() => {
      return { detailProduct: product }
    })
  }

  addToCart = (id) => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {
        products: tempProduct,
        cart: [this.state.cart, product]
      }
    }, () => { console.log(this.state) })
  }

  openModal = id => {
    const product = this.getItem(id)
    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true,
      }
    })
  }

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    })
  }

  increment = (id) => {
    console.log('this is increment method', id)
  }

  decrement = (id) => {
    console.log('this is decrement', id)
  }

  removeItem = (id) => {
    console.log('remove method', id)
  }

  clearCart = () => {
    console.log('cleared cart')
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }