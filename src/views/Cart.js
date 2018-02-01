import React, { Component } from 'react';
import { connect } from "react-redux";
import displayCartContent from '../modules/cart/displayCartContent';
import {removeFromCart, addToCart } from '../modules/cart/addToCart';
import StripeCheckout from "react-stripe-checkout";

export default class Cart extends Component {

  onToken = token => {
    fetch("/charge", {
      method: "POST",
      body: JSON.stringify({
        stripeData: token,
        products: [
          {id: 42, quantity: 2},
          {id: 1337, quantity: 1}
        ]
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "succeeded") {
          console.log(data);
          // dispatch a success
        } else {
          console.warn(data);
          // dispatch an error
        }
      });
  };

displayItem(element, qty){
  return (
    <tr key={ element.id }>
      <th scope="row"></th>
      <td> { element.title } </td>
      <td className = "badge badge-light"> { qty }
        <div className="btn-group-vertical">
          <button type="button" className="btn btn-outline-secondary btn-sm" onClick ={()=> addToCart(element) }> + </button>
          <button type="button" className="btn btn-outline-secondary btn-sm" onClick ={()=> removeFromCart(element) }> - </button>
        </div>
      </td>
      <td> ---- </td>
    </tr>
  )
}

  render(){
    return(
      <div className = "container">
        <div className = "order-main-container">
          <div class = "left-arrow-title">1. Récapitulatif de mon panier</div>
        </div>
        <div>
          <table className= "table">
                <thead>
                 <tr>
                   <th scope="col"></th>
                   <th scope="col">Article</th>
                   <th scope="col">Quantity</th>
                   <th scope="col">Price</th>
                   <th scope="col">Delete</th>
                 </tr>
                </thead>
                <tbody>
                   {
                     JSON.parse(localStorage.getItem("cart")).map((element) => this.displayItem(element.item, element.qty))
                   }
                 </tbody>
          </table>
        </div>

        <div className="App-intro">
          <StripeCheckout
            token={this.onToken}
            amount={999}
            currency="EUR"
            stripeKey={"pk_test_0p6Op2nc9ozHT1Ojdz1NuqeK"}
          />
        </div>
        <div className="App-intro">
          <StripeCheckout
            token={this.onToken}
            amount={999}
            currency="EUR"
            stripeKey={"pk_test_0p6Op2nc9ozHT1Ojdz1NuqeK"}
            email="toto@toto.com"
            name="My Demo of Stripe"
            description="Change me into a description"
          >
            <button className="btn btn-primary">Pay with a custom button</button>
          </StripeCheckout>
        </div>
      </div>

    );
  }
}
