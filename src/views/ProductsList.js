import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { productsActions } from "../store/products/actions";
import { getProductsState } from "../store/products/selectors";

class ProductsList extends Component {

  componentDidMount(){
    this.props.getProducts(this.props.match.params.category_id);
  }

  displayRow(product){
    return(
      <tr key={product.id}>
        <td>{product.decathlon_id}</td>
        <td><Link to={`/product/${product.id}`}> {product.title} </Link></td>
      </tr>
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
          <table className = "table table-hover">
            <tbody>{this.props.products.map(product => this.displayRow(product))}</tbody>
          </table>
        </div>
      )
    }
  }
}

export default connect(getProductsState, productsActions)(ProductsList);
