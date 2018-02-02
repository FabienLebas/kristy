import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PaymentOK extends Component {

  render(){


    return(
      <div className = "container">
        <div className="row">
          <p>Paiement OK, bien joué !</p>
        </div>
        <div className="row">
          <Link  className="btn btn-primary" to={"/"}>Retour page accueil</Link>
        </div>
      </div>
    )
  }

}
