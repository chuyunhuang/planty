import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'
import cartIcon from '../../Images/cartIcon.png';
import './NavBar.css';
import styled from 'styled-components';

export default class Navbar extends Component {

  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="logo" style={{ width: "80px", backgroundColor: "#191919", borderRadius: "50%" }} />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <img src={cartIcon} alt="shopping cart" style={{ marginRight: "10px" }} />
            Shopping Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }

}

const ButtonContainer = styled.button`
  background: transparent;
  border: 1px solid var(--mainDark);
  border-radius: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  &:hover{
    background: var(--mainDark);
    color: var(--mainWhite);
  }
`
const NavWrapper = styled.nav`
background: var(--mainYellow) `