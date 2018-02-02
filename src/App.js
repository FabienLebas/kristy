import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Login from "./views/Login";
import Categories from "./views/Categories";
import Cart from "./views/Cart";
import ProductDetails from "./views/ProductDetails";
import ProductsList from "./views/ProductsList";
import DisplayNavBar from "./views/navbar";
import PaymentOK from "./views/PaymentOK";

class App extends Component {
  render() {
    return (

      <Router>
        <div>
            <DisplayNavBar />
            <Route exact path="/" component={Categories}/>
            <Route path="/login" render={() => <Login/>}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/paymentOK" component={PaymentOK}/>
            <Route path="/category/:category_id" render={(routerProps) => <ProductsList  {...routerProps}/>}/>
            <Route path="/product/:product_id" render={(routerProps) => <ProductDetails  {...routerProps}/>}/>
        </div>
      </Router>





    );
  }
}

export default App;
