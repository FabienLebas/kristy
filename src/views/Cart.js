import React, { Component } from 'react';
import { connect } from "react-redux";
import displayCartContent from '../modules/cart/displayCartContent';
import {removeFromCart, addToCart } from '../modules/cart/addToCart';




export default class Cart extends Component {

displayItem(element, qty){
  return (
    <div>
      <li key={ element.id }> { element.title } qty : {qty} </li>
      <button onClick ={()=> removeFromCart(element) }> - </button>
      <button onClick ={()=> addToCart(element) }> + </button>
    </div>
  )
}

  render(){
    return(
      <ul>
        {
          JSON.parse(localStorage.getItem("cart")).map((element) => this.displayItem(element.item, element.qty))
        }
      </ul>
    );
  }
}
