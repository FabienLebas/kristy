import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Login from "./views/Login";
import Catalog from "./views/Catalog";
import Cart from "./views/Cart";
import Orders from "./views/Orders";
import Product from "./views/Product";

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => <Catalog/>}/>
        <Route path="/login" render={() => <Login/>}/>
        <Route path="/cart" render={() => <Cart/>}/>
        <Route path="/orders" render={() => <Orders/>}/>
        <Route path="/product/:product" render={(routerProps) => <Product />}/>
      </div>
    </Router>
    );
  }
}

export default App;
