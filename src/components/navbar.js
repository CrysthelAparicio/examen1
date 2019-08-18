import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">     Home</NavLink>
        <NavLink to="/login">         login</NavLink>
        <NavLink to="/cart">         Cart</NavLink>

      </div>
    );
  }
}

export default NavBar;
