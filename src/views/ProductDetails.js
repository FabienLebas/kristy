import React, { Component } from 'react';
import { connect } from "react-redux";
import { productsActions } from "../store/products/actions";
import { getProductsState } from "../store/products/selectors";

class ProductDetails extends Component {

  render(){

    // recherche de l'element désiré :
    const product = this.props.products.find( element => this.props.match.params.product_id === element.id );

    if (this.props.loadingProduct){
      return(
        <div>
          Loading product
        </div>
      );
    } else {
      return(
        <div className = "container">
          { product.title }
        </div>
      )
    }
  }
}

export default connect(getProductsState, productsActions)(ProductDetails);
