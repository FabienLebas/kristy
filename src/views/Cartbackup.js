import React, { Component } from 'react';
import { connect } from "react-redux";
import displayCartContent from '../modules/cart/displayCartContent';
import {removeFromCart, addToCart } from '../modules/cart/addToCart';
import StripeCheckout from "react-stripe-checkout";
import { signOut } from "../store/user/actions";
import { getUserState } from "../store/user/selectors";

class Cart extends Component {

  prepareCartForServer(){
    return JSON.parse(localStorage.getItem("cart")).map(element => {
      return {
        product_id : element.item.id,
        quantity : element.qty
      }
    });
  }

  onToken = token => {
    fetch("/charge", {
      method: "POST",
      body: JSON.stringify({
        stripeData: token,
        products: this.prepareCartForServer()
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === "succeeded") {
          // console.log(data);
          alert("Check out successfull")
        } else {
          console.warn(data);
          alert("Check out error")
        }
      });
  };

  calculateTotal(){
    let total = 0;
    JSON.parse(localStorage.getItem("cart")).forEach(element => total = total + element.item.min_price * element.qty );
    console.log(total);
    return total;
  }

displayItem(element, qty){

  return (
    <tr scope="row" key={ element.id }>
      <td> { element.title } </td>
      <td> { element.min_price }€ </td>
      <td >
          <button type="button" className="btn btn-outline-secondary btn-sm" onClick ={()=> removeFromCart(element)}> - </button>
          <span> { qty } </span>
          <button type="button" className="btn btn-outline-secondary btn-sm" onClick ={()=> addToCart(element)}> + </button>
      </td>
      <td>{ Math.round(qty * element.min_price * 100)/100}€</td>
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
                   <th scope="col">Article</th>
                   <th scope="col">Prix unitaire</th>
                   <th scope="col">Quantité</th>
                   <th scope="col">Total</th>
                 </tr>
                </thead>
                <tbody>
                   {
                     JSON.parse(localStorage.getItem("cart")).map((element) => this.displayItem(element.item, element.qty))
                   }
                 </tbody>
                 <tfoot><tr><td colspan="2" ></td>
                 <td>
                   {
                     this.props.user.id ? (
                       <StripeCheckout
                         token={this.onToken}
                         amount={this.calculateTotal() * 100}
                         currency="EUR"
                         stripeKey={"pk_test_0p6Op2nc9ozHT1Ojdz1NuqeK"}
                         email={this.props.user.email}
                         name="Kristy-Shop"
                       >
                         <button className="btn btn-success">Valider</button>
                       </StripeCheckout>
                     ) : null
                   }
                 </td>
                 <td>{Math.round(this.calculateTotal() * 100) / 100}€</td></tr></tfoot>
          </table>
        </div>

        <div>
          {this.props.user.id ? (
            <div className="App-intro">
              <div className="signout btn btn-danger" onClick={this.props.signOut}>
                Sign out
              </div>
            </div>
          ) : (
            <div
              className="g-signin2"
              data-onsuccess="googleConnectCallback"
              data-theme="dark"
            />
          )}
        </div>

      </div>

    );
  }
}

export default connect(getUserState, signOut)(Cart);
