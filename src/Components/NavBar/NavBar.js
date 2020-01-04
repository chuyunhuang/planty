import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'
import './NavBar.css';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5" style={{ backgroundColor: "#DCF763" }}>
        <Link to="/">
          <img src={logo} style={{ width: "80px", backgroundColor: "#191919", borderRadius: "50%" }} />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Product
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            Shopping Cart
          </button>
        </Link>
      </nav>
    )
  }

}