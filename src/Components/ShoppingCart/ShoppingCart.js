import React, { Component } from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotal from './CartTotal';

export default class ShoppingCart extends React.Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <div className="container mt-5 mb-5">
                    <div className="row">
                      <div className="col-10 mx-auto text-center text-title">
                        <h1>Your Cart</h1>
                      </div>
                    </div>
                  </div>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </React.Fragment>
              )
            } else {
              return (<EmptyCart />)
            }
          }
          }
        </ProductConsumer>
      </section>
    )
  }
}