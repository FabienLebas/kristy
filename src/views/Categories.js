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
      <li className = "nav-item text-left" style={{fontSize: 90 + '%'}}  key={category.id}>
        <a className = "sidebarHome" ><Link to={`/category/${category.id}`}> {category.label} </Link></a>
      </li>
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
        <div>
        <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
          mon menu
        </nav>

        <div className = "container-fluid">
          <div className ="row">
            <div className= "col" >
              <nav className = "col-sm-4 col-md-2 hidden-xs-down bg-faded sidebar">
                <ul className = "nav nav-pills flex-column">
                  {this.props.categories.map(category => this.displayRow(category))}
                </ul>
              </nav>
            </div>
            <div className= "col">
              <main classname = "col-sm-8 offset-sm-3 col-md-10 offset-md-2 pt-3" >
                <h1> TEST </h1>
              </main>
            </div>
          </div>
        </div>
        </div>
      )
    }
  }
}

export default connect(getCategoriesState, categoriesActions)(Categories);
