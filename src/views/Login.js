import React, { Component } from 'react';
import { connect } from "react-redux";
import { signOut } from "../store/user/actions";
import { getUserState } from "../store/user/selectors";


class Login extends Component {




  render(){


      return(
        <div>
        {this.props.user.id ? (

          <div className="signout btn btn-danger" onClick={this.props.signOut}>
            Sign out
          </div>
        ) : (
          <div
            className="g-signin2"
            data-onsuccess="googleConnectCallback"
            data-theme="dark"
          />
        )}



        {this.props.user.id ? (

          <div>
            <img alt={this.props.user.fullname} src={this.props.user.avatar} />
            <span>{this.props.user.fullname}</span>
          </div>
        ) : null}



        </div>
      );

  }
}


export default connect(getUserState, signOut)(Login);
