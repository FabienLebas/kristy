import React, { Component } from 'react';
import { connect } from "react-redux";
import { productsActions } from "../store/products/actions";
import { getProductsState } from "../store/products/selectors";
import { addToCart } from '../modules/cart/addToCart';
import ReactStars from 'react-stars';




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
          <div className="row">

            <div className="col-6">
              <img className="img-thumbnail rounded" alt={product.title} src={ "https://www.decathlon.fr/media/"+product.image_path} />
            </div>
            <div className="col-6">
              <h3 className="text-center">{ product.title }</h3>
              <h4><em>Description : { product.description }</em></h4>
              <h6>Réf : { product.decathlon_id }</h6>
              <h2>{ Math.trunc(product.min_price) }€<sup>{  Math.round((product.min_price - Math.trunc(product.min_price))*100) }</sup></h2>
                <div>
                    <ReactStars count= {5} value = {product.rating} color2= {'#ffd700'} edit= {false}/>
                    <h3> {product.rating} / 5 </h3>
                </div>
              <div className="btn btn-success btn-block" onClick={() => addToCart(product)}>
                Ajouter au panier
              </div>

            </div>
          </div>
        </div>
      )
    }
  }
}

export default connect(getProductsState, productsActions)(ProductDetails);
