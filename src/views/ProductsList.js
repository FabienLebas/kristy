import React, { Component } from 'react';
import getProducts from "../queries/getProducts";

export default class ProductsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      products:"Loading products"
    }
  }

  componentDidMount(){
    getProducts("9f8d8840-e22c-496f-b865-f5014710e234")
      .then(result => {
        this.setState({
          products: result
        })
      })
  }

  displayRow(product){
    return(
      <tr key={product.id}>
        <td>{product.decathlon_id}</td>
        <td>{product.title}</td>
      </tr>
    )
  }

  render(){
    if (this.state.products === "Loading products"){
      return(
        <div>
          {this.state.products}
        </div>
      );
    } else {
      return(
        <div className = "container">
          <table className = "table table-hover">
            <tbody>{this.state.products.map(product => this.displayRow(product))}</tbody>
          </table>
        </div>
      )
    }
  }
}
