import React, { Component } from 'react';
import getCategories from "../queries/getCategories";

export default class Categories extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories:"Loading categories"
    }
  }

  componentDidMount(){
    getCategories()
      .then(result => {
        this.setState({
          categories: result
        })
      })
  }

  displayRow(category){
    return(
      <tr key={category.id}>
        <td>{category.label}</td>
      </tr>
    )
  }

  render(){
    if (this.state.categories === "Loading categories"){
      return(
        <div>
          {this.state.categories}
        </div>
      );
    } else {
      return(
        <div className = "container">
          <table className = "table table-hover">
            <tbody>{this.state.categories.map(category => this.displayRow(category))}</tbody>
          </table>
        </div>
      )
    }
  }
}
