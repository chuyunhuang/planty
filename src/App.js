import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import NavBar from './Components/NavBar/NavBar';
import ProductList from './Components/ProductList/ProductList';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Modal from './Components/Modal/Modal';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={ProductDetail} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/" component={PageNotFound} />
      </Switch>
      <Modal />
    </Router>
  );
}

export default App;
