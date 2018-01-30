import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class DisplayNavBar extends Component{


  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <Link className="navbar-brand" to={"/"}>Kristy Shop</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">

            <li className="nav-item">

              <Link className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
            </li>

          </ul>
        </div>
      </nav>
    )
  }

}