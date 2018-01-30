import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { categoriesActions } from "../store/categories/actions";
import { getCategoriesState } from "../store/categories/selectors";

class Categories extends Component {

  componentDidMount(){
    this.props.getCategories();
  }

  displayRow(category){
    return(
      <tr key={category.id}>
        <td><Link to={`/category/${category.id}`}> {category.label} </Link></td>
      </tr>
    )
  }

  render(){
    if (this.props.loadingCategories){
      return(
        <div>
          Loading categories
        </div>
      );
    } else {
      return(
        <div className = "container">
          <table className = "table table-hover">
            <tbody>{this.props.categories.map(category => this.displayRow(category))}</tbody>
          </table>
        </div>
      )
    }
  }
}

export default connect(getCategoriesState, categoriesActions)(Categories);
