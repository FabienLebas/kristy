import React, { Component } from 'react';
import { connect } from "react-redux";
import displayCartContent from '../modules/cart/displayCartContent';
import {removeFromCart, addToCart } from '../modules/cart/addToCart';




export default class Cart extends Component {

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
      </div>

    );
  }
}





  // <div>
  //   <table className= "table">
  //     <thead>
  //        <tr>
  //          <th scope="col"></th>
  //          <th scope="col">Article</th>
  //          <th scope="col">Quantity</th>
  //          <th scope="col">price</th>
  //          <th scope="col">Delete</th>
  //        </tr>
  //      </thead>

  //   </table>
  // </div>
