import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { productsActions } from "../store/products/actions";
import { getProductsState } from "../store/products/selectors";
import { addToCart } from '../modules/cart/addToCart';
import ReactStars from 'react-stars';


class ProductsList extends Component {

  componentDidMount(){
    this.props.getProducts(this.props.match.params.category_id);
  }

  displayRow(product){
    return(
      <div className="card col-md-3" key={product.id}>
        <Link to={`/product/${product.id}`}>
          <div className="price offset-9">{ Math.trunc(product.min_price) }€<sup>{  Math.round((product.min_price - Math.trunc(product.min_price))*100) }</sup></div>
          <img className="card-img-top" src={`https://www.decathlon.fr/media/${product.image_path}`} alt={product.title}/>
          <div className="card-body">
            <div className="card-title">{product.title}</div>
            <div><ReactStars count= {5} value = {product.rating} color2= {'#ffd700'} edit= {false} size = {15}/></div>
          </div>
        </Link>
          <div className="btn btn-success" onClick={() => addToCart(product)}>
            Ajouter au panier
          </div>
      </div>
    )
  }

  render(){
    if (this.props.loadingProducts){
      return(
        <div>
          Loading products
        </div>
      );
    } else {
      return(
        <div className = "container">
          <div className = "row">
            {this.props.products.map(product => this.displayRow(product))}
          </div>
        </div>
      )
    }
  }
}

export default connect(getProductsState, productsActions)(ProductsList);
