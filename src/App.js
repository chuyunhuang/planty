import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import NavBar from './Components/NavBar/NavBar';
import ProductList from './Components/ProductList/ProductList';
import Product from './Components/Product/Product';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={ProductDetail} />
        <Route path="/cart" component={ShoppingCart} />
      </Switch>
    </Router>
  );
}

export default App;
