import React from 'react';
import { trashIcon } from '../../Images/trashIcon.png';

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value
  return (
    <div className="row my-2 text-center text-capitalize border-bottom">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} style={{ width: "5rem", height: "5rem" }} className="img-fluid" alt="product-img" />
      </div>
      {/* Col 1 ends */}
      <div className="col-10 mx-auto col-lg-2 pt-3">
        <span className="d-lg-none">Product: </span>
        <h5>{title}</h5>
      </div>
      {/* Col 2 ends */}
      <div className="col-10 mx-auto col-lg-2 pt-3">
        <span className="d-lg-none">Price: </span>
        ${price}
      </div>
      {/* Col 3 ends */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 pt-3">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
            <span className="btn btn-black mx-1" >{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
          </div>
        </div>
      </div>
      {/* Col 4 ends */}
      <div className="col-10 mx-auto col-lg-2 pt-3">
        <div className="cart-icon ">
          <span className="fa fa-trash" onClick={() => removeItem()}></span>
        </div>
      </div>
      {/* Col 5 ends */}
      <div className="col-10 mx-auto col-lg-2 pt-3">
        <strong>Item Total: ${total}</strong>
      </div>
      {/* Col 6 ends */}
    </div>

  )
}