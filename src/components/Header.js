import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";


class Header extends Component {
    render() {
      return (
        <img class="ui middle aligned medium image" src={ require ("../img/logoFender.jpg")} />    
        );
    }
  }
  
  export default Header;
