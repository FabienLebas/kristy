import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Login from "./views/Login";
import Categories from "./views/Categories";
import Cart from "./views/Cart";
import ProductDetails from "./views/ProductDetails";
import ProductsList from "./views/ProductsList";

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => <Categories/>}/>
        <Route path="/login" render={() => <Login/>}/>
        <Route path="/cart" render={() => <Cart/>}/>
        <Route path="/category/:category_id" render={(routerProps) => <ProductsList/>}/>
        <Route path="/product/:product_id" render={(routerProps) => <ProductDetails />}/>
      </div>
    </Router>
    );
  }
}

export default App;
